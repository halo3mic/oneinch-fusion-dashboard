import { store,  Address, BigInt, log, BigDecimal, ByteArray, Bytes } from '@graphprotocol/graph-ts'
import {
  // NonceIncreased as NonceIncreasedEvent,
  OrderCanceled as OrderCanceledEvent,
  OrderFilled as OrderFilledEvent,
  OrderFilledRFQ as OrderFilledRFQEvent,
} from "../generated/AggregationRouterV5/AggregationRouterV5"
import {
  OrderCanceled,
  OrderFilled,
  Settlement,
  Transaction,
} from "../generated/schema"
import { SettleOrdersCall } from "../generated/Settlement/Settlement"
import { FillOrderCall } from "../generated/AggregationRouterV5Calls/AggregationRouterV5"

const TOPIC_ERC20_TRANSFER = Bytes.fromHexString("0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef")


function cutoutBigInt(data: Uint8Array, i: number): BigInt {
  return BigInt.fromString(cutout(data, i, 0).toString())
}

function cutoutAddress(data: Uint8Array, i: number): Bytes {
  return Bytes.fromHexString(cutout(data, i, 24).toString())
}

function cutout(data: Uint8Array, i: number, offset: number): Uint8Array {
  let chunkSize: number = 32
  return data.slice((i*chunkSize-offset) as i32, (i+1)*chunkSize as i32)
}

export function handleSettleOrders(call: SettleOrdersCall): void {
  let input = call.inputs.data.slice(2)
  // todo: this can only be the case when tx.to == Settlement contract and the method is fillOrder
  let allowedSender = cutoutAddress(input, 12)
  let settlementId = call.transaction.hash.concatI32(event.logIndex.toI32()) // todo: consider using orderHash here
  let settlement = new Settlement(settlementId)
  settlement.executor = cutoutAddress(input, 6)
  settlement.makerAsset = cutoutAddress(input, 8)
  settlement.takerAsset = cutoutAddress(input, 9)
  settlement.maker = cutoutAddress(input, 10)
  settlement.receiver = cutoutAddress(input, 11)
  settlement.isPrivate = allowedSender != Address.empty()
  settlement.makingAmount = cutoutBigInt(input, 13)
  settlement.takingAmountMin = cutoutBigInt(input, 14)
  settlement.resolver = call.from
  // todo: get a fee
  // todo: figure out if it is interactive and if so what is the fee
}

export function handleFillOrder(call: FillOrderCall): void {
  // todo: only consider if there is a settlement in the same tx already present 
  // todo: decode the call.inputs.data and get the orderHash
  // todo: get realAmountOut from return data
  // call.inputs.order.
  // call.inputs.order.
  // let input = call.inputs.data.slice(2)
}

export function handleOrderFilled(event: OrderFilledEvent): void {
  // todo: would be better to use transaction indexer for this! (check if success)
  // todo: get transaction data
  // find the settlement and update its values (orderHash, makingAmountActual, takingAmountActual)
  settlement.orderHash = event.params.orderHash
  settlement.makingAmountActual = settlement.makingAmount.minus(event.params.remaining)
  // todo: consider tracking repeated fills and cancelations
  let input = event.transaction.input.slice(2)
  // todo: this can only be the case when tx.to == Settlement contract and the method is fillOrder
  let allowedSender = cutoutAddress(input, 12)
  let settlement = new Settlement(event.params.orderHash)
  settlement.id = event.transaction.hash.concatI32(event.logIndex.toI32()) // todo: consider using orderHash here
  settlement.orderHash = event.params.orderHash
  settlement.executor = cutoutAddress(input, 6)
  settlement.makerAsset = cutoutAddress(input, 8)
  settlement.takerAsset = cutoutAddress(input, 9)
  settlement.maker = cutoutAddress(input, 10)
  settlement.receiver = cutoutAddress(input, 11)
  settlement.isPrivate = allowedSender != Address.empty()
  settlement.makingAmount = cutoutBigInt(input, 13)
  settlement.takingAmountMin = cutoutBigInt(input, 14)
  settlement.makingAmountActual = settlement.makingAmount.minus(event.params.remaining)
  settlement.resolver = event.transaction.from
  settlement.interactiveFee = BigInt.zero()
  // todo: add the normal fee

  let tx = Transaction.load(event.transaction.hash)
  if (tx != null) {
    tx = new Transaction(event.transaction.hash);
  }
  tx.block = event.block.number
  tx.timestamp = event.block.timestamp
  tx.gasPrice = event.transaction.gasPrice
  tx.gasUsed = event.receipt.gasUsed
  tx.save()


  for (let log of event.receipt.logs) {
    if (
      log.address == settlement.takerAsset &&
      log.topics[0] == TOPIC_ERC20_TRANSFER &&
      log.topics[1] == event.transaction.to && // todo: if a contract can be a resolver then this condition can be invalid! 
      log.topics[2] == event.params.maker
    ) {
      settlement.takingAmountActual = BigInt.fromUnsignedBytes(log.data)
    }
  }

  settlement.save()
}
