import { store,  Address, BigInt, log, BigDecimal, ByteArray, Bytes, ethereum } from '@graphprotocol/graph-ts'
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
  Resolver, 
  Token
} from "../generated/schema"
import { SettleOrdersCall } from "../generated/Settlement/Settlement"
import { FillOrderCall } from "../generated/AggregationRouterV5Calls/AggregationRouterV5"
import { crypto } from '@graphprotocol/graph-ts'

// const TOPIC_ERC20_TRANSFER = Bytes.fromHexString("0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef")


// function cutoutBigInt(data: Uint8Array, i: number): BigInt {
//   return BigInt.fromString(cutout(data, i, 0).toString())
// }

// function cutoutAddress(data: Uint8Array, i: number): Bytes {
//   return Bytes.fromHexString(cutout(data, i, 24).toString())
// }

// function cutout(data: Uint8Array, i: number, offset: number): Uint8Array {
//   let chunkSize: number = 32
//   return data.slice((i*chunkSize-offset) as i32, (i+1)*chunkSize as i32)
// }


// function getOrderHash(): void {
//   // let orderHash = call.inputs.data
//   /**
//    * function hash(Order calldata order, bytes32 domainSeparator) internal pure returns(bytes32 result) {
//         bytes calldata interactions = order.interactions;
//         bytes32 typehash = _LIMIT_ORDER_TYPEHASH;
//         /// @solidity memory-safe-assembly
//         assembly { // solhint-disable-line no-inline-assembly
//             let ptr := mload(0x40)

//             // keccak256(abi.encode(_LIMIT_ORDER_TYPEHASH, orderWithoutInteractions, keccak256(order.interactions)));
//             calldatacopy(ptr, interactions.offset, interactions.length)
//             mstore(add(ptr, 0x140), keccak256(ptr, interactions.length))
//             calldatacopy(add(ptr, 0x20), order, 0x120)
//             mstore(ptr, typehash)
//             result := keccak256(ptr, 0x160)
//         }
//         result = ECDSA.toTypedDataHash(domainSeparator, result);
//     }
//    */
// }

// const _LIMIT_ORDER_TYPEHASH = '33';

export function handleSettleOrders(call: SettleOrdersCall): void {
  if (!call.outputValues[0].value.toBoolean())
    return
  
  let settlement = new Settlement(call.transaction.hash) // todo: only assumes one settlement per transaction which is not true for contract calls (include orderHash)
  settlement.resolver = call.from
  
  let resolver = Resolver.load(settlement.resolver)
  if (!resolver) {
    resolver = new Resolver(settlement.resolver)
    resolver.resolvedCount = BigInt.fromI32(1)
  } else {
    resolver.resolvedCount = resolver.resolvedCount.plus(BigInt.fromI32(1))
  }
  resolver.save()
  settlement.save()
  // todo: figure out how much fee taker paid (include interactive fee)
}

export function handleFillOrder(call: FillOrderCall): void {
  let settlement = Settlement.load(call.transaction.hash)
  if (!settlement)
    return
  
  settlement.actualMakingAmount = call.outputs.value0
  settlement.actualTakingAmount = call.outputs.value1
  settlement.orderHash = call.outputs.value2
  settlement.offeredMakingAmount = call.inputs.order.makingAmount
  settlement.offeredTakingAmoun = call.inputs.order.takingAmount
  settlement.makerAsset = call.inputs.order.makerAsset
  settlement.takerAsset = call.inputs.order.takerAsset
  settlement.receiver = call.inputs.order.receiver
  settlement.maker = call.inputs.order.maker
  settlement.isPrivate = call.inputs.order.allowedSender != Address.empty()
  
  settlement.save()
}

export function handleOrderFilled(event: OrderFilledEvent): void {
  let settlement = Settlement.load(event.transaction.hash)
  if (!settlement)
    return

  let transaction_ = new Transaction(event.transaction.hash)
  transaction_.block = event.block.number
  transaction_.timestamp = event.block.timestamp
  transaction_.gasPrice = event.transaction.gasPrice

  if (event.receipt != null) {
    const receipt = event.receipt as ethereum.TransactionReceipt
    transaction_.gasUsed = receipt.gasUsed as BigInt
  } 
  
  settlement.transaction = transaction_.id

  transaction_.save()
  settlement.save()
}
