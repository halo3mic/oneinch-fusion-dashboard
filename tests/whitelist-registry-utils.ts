import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  WhitelistRegistryOwnershipTransferred,
  Promotion,
  Registered,
  ResolverThresholdSet,
  Unregistered,
  WhitelistLimitSet
} from "../generated/WhitelistRegistry/WhitelistRegistry"

export function createWhitelistRegistryOwnershipTransferredEvent(
  previousOwner: Address,
  newOwner: Address
): WhitelistRegistryOwnershipTransferred {
  let whitelistRegistryOwnershipTransferredEvent = changetype<
    WhitelistRegistryOwnershipTransferred
  >(newMockEvent())

  whitelistRegistryOwnershipTransferredEvent.parameters = new Array()

  whitelistRegistryOwnershipTransferredEvent.parameters.push(
    new ethereum.EventParam(
      "previousOwner",
      ethereum.Value.fromAddress(previousOwner)
    )
  )
  whitelistRegistryOwnershipTransferredEvent.parameters.push(
    new ethereum.EventParam("newOwner", ethereum.Value.fromAddress(newOwner))
  )

  return whitelistRegistryOwnershipTransferredEvent
}

export function createPromotionEvent(
  promoter: Address,
  chainId: BigInt,
  promotee: Address
): Promotion {
  let promotionEvent = changetype<Promotion>(newMockEvent())

  promotionEvent.parameters = new Array()

  promotionEvent.parameters.push(
    new ethereum.EventParam("promoter", ethereum.Value.fromAddress(promoter))
  )
  promotionEvent.parameters.push(
    new ethereum.EventParam(
      "chainId",
      ethereum.Value.fromUnsignedBigInt(chainId)
    )
  )
  promotionEvent.parameters.push(
    new ethereum.EventParam("promotee", ethereum.Value.fromAddress(promotee))
  )

  return promotionEvent
}

export function createRegisteredEvent(addr: Address): Registered {
  let registeredEvent = changetype<Registered>(newMockEvent())

  registeredEvent.parameters = new Array()

  registeredEvent.parameters.push(
    new ethereum.EventParam("addr", ethereum.Value.fromAddress(addr))
  )

  return registeredEvent
}

export function createResolverThresholdSetEvent(
  resolverThreshold: BigInt
): ResolverThresholdSet {
  let resolverThresholdSetEvent = changetype<ResolverThresholdSet>(
    newMockEvent()
  )

  resolverThresholdSetEvent.parameters = new Array()

  resolverThresholdSetEvent.parameters.push(
    new ethereum.EventParam(
      "resolverThreshold",
      ethereum.Value.fromUnsignedBigInt(resolverThreshold)
    )
  )

  return resolverThresholdSetEvent
}

export function createUnregisteredEvent(addr: Address): Unregistered {
  let unregisteredEvent = changetype<Unregistered>(newMockEvent())

  unregisteredEvent.parameters = new Array()

  unregisteredEvent.parameters.push(
    new ethereum.EventParam("addr", ethereum.Value.fromAddress(addr))
  )

  return unregisteredEvent
}

export function createWhitelistLimitSetEvent(
  whitelistLimit: BigInt
): WhitelistLimitSet {
  let whitelistLimitSetEvent = changetype<WhitelistLimitSet>(newMockEvent())

  whitelistLimitSetEvent.parameters = new Array()

  whitelistLimitSetEvent.parameters.push(
    new ethereum.EventParam(
      "whitelistLimit",
      ethereum.Value.fromUnsignedBigInt(whitelistLimit)
    )
  )

  return whitelistLimitSetEvent
}
