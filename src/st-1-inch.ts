import {
  Approval as ApprovalEvent,
  DefaultFarmSet as DefaultFarmSetEvent,
  EmergencyExitSet as EmergencyExitSetEvent,
  FeeReceiverSet as FeeReceiverSetEvent,
  MaxLossRatioSet as MaxLossRatioSetEvent,
  MinLockPeriodRatioSet as MinLockPeriodRatioSetEvent,
  OwnershipTransferred as OwnershipTransferredEvent,
  PodAdded as PodAddedEvent,
  PodRemoved as PodRemovedEvent,
  Transfer as TransferEvent
} from "../generated/St1inch/St1inch"
import {
  Approval,
  DefaultFarmSet,
  EmergencyExitSet,
  FeeReceiverSet,
  MaxLossRatioSet,
  MinLockPeriodRatioSet,
  OwnershipTransferred,
  PodAdded,
  PodRemoved,
  Transfer
} from "../generated/schema"

export function handleApproval(event: ApprovalEvent): void {
  let entity = new Approval(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.owner = event.params.owner
  entity.spender = event.params.spender
  entity.value = event.params.value

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleDefaultFarmSet(event: DefaultFarmSetEvent): void {
  let entity = new DefaultFarmSet(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.defaultFarm = event.params.defaultFarm

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleEmergencyExitSet(event: EmergencyExitSetEvent): void {
  let entity = new EmergencyExitSet(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.status = event.params.status

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleFeeReceiverSet(event: FeeReceiverSetEvent): void {
  let entity = new FeeReceiverSet(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.receiver = event.params.receiver

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleMaxLossRatioSet(event: MaxLossRatioSetEvent): void {
  let entity = new MaxLossRatioSet(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.ratio = event.params.ratio

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleMinLockPeriodRatioSet(
  event: MinLockPeriodRatioSetEvent
): void {
  let entity = new MinLockPeriodRatioSet(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.ratio = event.params.ratio

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleOwnershipTransferred(
  event: OwnershipTransferredEvent
): void {
  let entity = new OwnershipTransferred(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handlePodAdded(event: PodAddedEvent): void {
  let entity = new PodAdded(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.account = event.params.account
  entity.pod = event.params.pod

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handlePodRemoved(event: PodRemovedEvent): void {
  let entity = new PodRemoved(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.account = event.params.account
  entity.pod = event.params.pod

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleTransfer(event: TransferEvent): void {
  let entity = new Transfer(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.from = event.params.from
  entity.to = event.params.to
  entity.value = event.params.value

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
