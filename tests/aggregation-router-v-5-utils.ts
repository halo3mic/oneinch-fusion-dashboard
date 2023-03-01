import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt, Bytes } from "@graphprotocol/graph-ts"
import {
  NonceIncreased,
  OrderCanceled,
  OrderFilled,
  OrderFilledRFQ,
  AggregationRouterV5OwnershipTransferred
} from "../generated/AggregationRouterV5/AggregationRouterV5"

export function createNonceIncreasedEvent(
  maker: Address,
  newNonce: BigInt
): NonceIncreased {
  let nonceIncreasedEvent = changetype<NonceIncreased>(newMockEvent())

  nonceIncreasedEvent.parameters = new Array()

  nonceIncreasedEvent.parameters.push(
    new ethereum.EventParam("maker", ethereum.Value.fromAddress(maker))
  )
  nonceIncreasedEvent.parameters.push(
    new ethereum.EventParam(
      "newNonce",
      ethereum.Value.fromUnsignedBigInt(newNonce)
    )
  )

  return nonceIncreasedEvent
}

export function createOrderCanceledEvent(
  maker: Address,
  orderHash: Bytes,
  remainingRaw: BigInt
): OrderCanceled {
  let orderCanceledEvent = changetype<OrderCanceled>(newMockEvent())

  orderCanceledEvent.parameters = new Array()

  orderCanceledEvent.parameters.push(
    new ethereum.EventParam("maker", ethereum.Value.fromAddress(maker))
  )
  orderCanceledEvent.parameters.push(
    new ethereum.EventParam(
      "orderHash",
      ethereum.Value.fromFixedBytes(orderHash)
    )
  )
  orderCanceledEvent.parameters.push(
    new ethereum.EventParam(
      "remainingRaw",
      ethereum.Value.fromUnsignedBigInt(remainingRaw)
    )
  )

  return orderCanceledEvent
}

export function createOrderFilledEvent(
  maker: Address,
  orderHash: Bytes,
  remaining: BigInt
): OrderFilled {
  let orderFilledEvent = changetype<OrderFilled>(newMockEvent())

  orderFilledEvent.parameters = new Array()

  orderFilledEvent.parameters.push(
    new ethereum.EventParam("maker", ethereum.Value.fromAddress(maker))
  )
  orderFilledEvent.parameters.push(
    new ethereum.EventParam(
      "orderHash",
      ethereum.Value.fromFixedBytes(orderHash)
    )
  )
  orderFilledEvent.parameters.push(
    new ethereum.EventParam(
      "remaining",
      ethereum.Value.fromUnsignedBigInt(remaining)
    )
  )

  return orderFilledEvent
}

export function createOrderFilledRFQEvent(
  orderHash: Bytes,
  makingAmount: BigInt
): OrderFilledRFQ {
  let orderFilledRfqEvent = changetype<OrderFilledRFQ>(newMockEvent())

  orderFilledRfqEvent.parameters = new Array()

  orderFilledRfqEvent.parameters.push(
    new ethereum.EventParam(
      "orderHash",
      ethereum.Value.fromFixedBytes(orderHash)
    )
  )
  orderFilledRfqEvent.parameters.push(
    new ethereum.EventParam(
      "makingAmount",
      ethereum.Value.fromUnsignedBigInt(makingAmount)
    )
  )

  return orderFilledRfqEvent
}

export function createAggregationRouterV5OwnershipTransferredEvent(
  previousOwner: Address,
  newOwner: Address
): AggregationRouterV5OwnershipTransferred {
  let aggregationRouterV5OwnershipTransferredEvent = changetype<
    AggregationRouterV5OwnershipTransferred
  >(newMockEvent())

  aggregationRouterV5OwnershipTransferredEvent.parameters = new Array()

  aggregationRouterV5OwnershipTransferredEvent.parameters.push(
    new ethereum.EventParam(
      "previousOwner",
      ethereum.Value.fromAddress(previousOwner)
    )
  )
  aggregationRouterV5OwnershipTransferredEvent.parameters.push(
    new ethereum.EventParam("newOwner", ethereum.Value.fromAddress(newOwner))
  )

  return aggregationRouterV5OwnershipTransferredEvent
}
