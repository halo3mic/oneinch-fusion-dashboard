import {
  WhitelistRegistryOwnershipTransferred as WhitelistRegistryOwnershipTransferredEvent,
  Promotion as PromotionEvent,
  Registered as RegisteredEvent,
  ResolverThresholdSet as ResolverThresholdSetEvent,
  Unregistered as UnregisteredEvent,
  WhitelistLimitSet as WhitelistLimitSetEvent
} from "../generated/WhitelistRegistry/WhitelistRegistry"
import {
  WhitelistRegistryOwnershipTransferred,
  Promotion,
  Registered,
  ResolverThresholdSet,
  Unregistered,
  WhitelistLimitSet
} from "../generated/schema"

export function handleWhitelistRegistryOwnershipTransferred(
  event: WhitelistRegistryOwnershipTransferredEvent
): void {
  let entity = new WhitelistRegistryOwnershipTransferred(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handlePromotion(event: PromotionEvent): void {
  let entity = new Promotion(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.promoter = event.params.promoter
  entity.chainId = event.params.chainId
  entity.promotee = event.params.promotee

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleRegistered(event: RegisteredEvent): void {
  let entity = new Registered(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.addr = event.params.addr

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleResolverThresholdSet(
  event: ResolverThresholdSetEvent
): void {
  let entity = new ResolverThresholdSet(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.resolverThreshold = event.params.resolverThreshold

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleUnregistered(event: UnregisteredEvent): void {
  let entity = new Unregistered(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.addr = event.params.addr

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleWhitelistLimitSet(event: WhitelistLimitSetEvent): void {
  let entity = new WhitelistLimitSet(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.whitelistLimit = event.params.whitelistLimit

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
