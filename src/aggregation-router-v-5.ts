import {
  NonceIncreased as NonceIncreasedEvent,
  OrderCanceled as OrderCanceledEvent,
  OrderFilled as OrderFilledEvent,
  OrderFilledRFQ as OrderFilledRFQEvent,
  AggregationRouterV5OwnershipTransferred as AggregationRouterV5OwnershipTransferredEvent
} from "../generated/AggregationRouterV5/AggregationRouterV5"
import {
  NonceIncreased,
  OrderCanceled,
  OrderFilled,
  OrderFilledRFQ,
  AggregationRouterV5OwnershipTransferred
} from "../generated/schema"

export function handleNonceIncreased(event: NonceIncreasedEvent): void {
  let entity = new NonceIncreased(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.maker = event.params.maker
  entity.newNonce = event.params.newNonce

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleOrderCanceled(event: OrderCanceledEvent): void {
  let entity = new OrderCanceled(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.maker = event.params.maker
  entity.orderHash = event.params.orderHash
  entity.remainingRaw = event.params.remainingRaw

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleOrderFilled(event: OrderFilledEvent): void {
  let entity = new OrderFilled(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.maker = event.params.maker
  entity.orderHash = event.params.orderHash
  entity.remaining = event.params.remaining

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleOrderFilledRFQ(event: OrderFilledRFQEvent): void {
  let entity = new OrderFilledRFQ(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.orderHash = event.params.orderHash
  entity.makingAmount = event.params.makingAmount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleAggregationRouterV5OwnershipTransferred(
  event: AggregationRouterV5OwnershipTransferredEvent
): void {
  let entity = new AggregationRouterV5OwnershipTransferred(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
