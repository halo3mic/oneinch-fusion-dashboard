// import {
// 	PowerPodApproval as PowerPodApprovalEvent,
// 	PowerPodDefaultFarmSet as PowerPodDefaultFarmSetEvent,
// 	PowerPodEmergencyExitSet as PowerPodEmergencyExitSetEvent,
// 	PowerPodFeeReceiverSet as PowerPodFeeReceiverSetEvent,
// 	PowerPodMaxLossRatioSet as PowerPodMaxLossRatioSetEvent,
// 	PowerPodMinLockPeriodRatioSet as PowerPodMinLockPeriodRatioSetEvent,
// 	PowerPodOwnershipTransferred as PowerPodOwnershipTransferredEvent,
// 	PowerPodPodAdded as PowerPodPodAddedEvent,
// 	PowerPodPodRemoved as PowerPodPodRemovedEvent,
// 	PowerPodTransfer as PowerPodTransferEvent,
// } from "../generated/PowerPod/PowerPod"
// import {
// 	PodFarm,
// 	PowerPodApproval,
// 	PowerPodDefaultFarmSet,
// 	PowerPodEmergencyExitSet,
// 	PowerPodFeeReceiverSet,
// 	PowerPodMaxLossRatioSet,
// 	PowerPodMinLockPeriodRatioSet,
// 	PowerPodOwnershipTransferred,
// 	PowerPodPodAdded,
// 	PowerPodPodRemoved,
// 	PowerPodTransfer,
// } from "../generated/schema"

// export function handlePowerPodApproval(event: PowerPodApprovalEvent): void {
// 	let entity = new PowerPodApproval(event.transaction.hash.concatI32(event.logIndex.toI32()))
// 	entity.owner = event.params.owner
// 	entity.spender = event.params.spender
// 	entity.value = event.params.value

// 	entity.blockNumber = event.block.number
// 	entity.blockTimestamp = event.block.timestamp
// 	entity.transactionHash = event.transaction.hash

// 	entity.save()
// }

// // "adding" pod farm
// export function handlePowerPodDefaultFarmSet(event: PowerPodDefaultFarmSetEvent): void {
// 	const id = event.params.defaultFarm
// 	let podFarm = PodFarm.load(id)
// 	if (!podFarm) {
// 		podFarm.owner = event.transaction.from!

// 		// call pod farm contract to retrieve gift token address
// 		// (need to get ABI from that before)
// 	}

// 	podFarm.save()
// }

// export function handlePowerPodEmergencyExitSet(event: PowerPodEmergencyExitSetEvent): void {
// 	let entity = new PowerPodEmergencyExitSet(event.transaction.hash.concatI32(event.logIndex.toI32()))
// 	entity.status = event.params.status

// 	entity.blockNumber = event.block.number
// 	entity.blockTimestamp = event.block.timestamp
// 	entity.transactionHash = event.transaction.hash

// 	entity.save()
// }

// export function handlePowerPodFeeReceiverSet(event: PowerPodFeeReceiverSetEvent): void {
// 	let entity = new PowerPodFeeReceiverSet(event.transaction.hash.concatI32(event.logIndex.toI32()))
// 	entity.receiver = event.params.receiver

// 	entity.blockNumber = event.block.number
// 	entity.blockTimestamp = event.block.timestamp
// 	entity.transactionHash = event.transaction.hash

// 	entity.save()
// }

// export function handlePowerPodMaxLossRatioSet(event: PowerPodMaxLossRatioSetEvent): void {
// 	let entity = new PowerPodMaxLossRatioSet(event.transaction.hash.concatI32(event.logIndex.toI32()))
// 	entity.ratio = event.params.ratio

// 	entity.blockNumber = event.block.number
// 	entity.blockTimestamp = event.block.timestamp
// 	entity.transactionHash = event.transaction.hash

// 	entity.save()
// }

// export function handlePowerPodMinLockPeriodRatioSet(event: PowerPodMinLockPeriodRatioSetEvent): void {
// 	let entity = new PowerPodMinLockPeriodRatioSet(event.transaction.hash.concatI32(event.logIndex.toI32()))
// 	entity.ratio = event.params.ratio

// 	entity.blockNumber = event.block.number
// 	entity.blockTimestamp = event.block.timestamp
// 	entity.transactionHash = event.transaction.hash

// 	entity.save()
// }

// export function handlePowerPodOwnershipTransferred(event: PowerPodOwnershipTransferredEvent): void {
// 	let entity = new PowerPodOwnershipTransferred(event.transaction.hash.concatI32(event.logIndex.toI32()))
// 	entity.previousOwner = event.params.previousOwner
// 	entity.newOwner = event.params.newOwner

// 	entity.blockNumber = event.block.number
// 	entity.blockTimestamp = event.block.timestamp
// 	entity.transactionHash = event.transaction.hash

// 	entity.save()
// }

// export function handlePowerPodPodAdded(event: PowerPodPodAddedEvent): void {
// 	let entity = new PowerPodPodAdded(event.transaction.hash.concatI32(event.logIndex.toI32()))
// 	entity.account = event.params.account
// 	entity.pod = event.params.pod

// 	entity.blockNumber = event.block.number
// 	entity.blockTimestamp = event.block.timestamp
// 	entity.transactionHash = event.transaction.hash

// 	entity.save()
// }

// export function handlePowerPodPodRemoved(event: PowerPodPodRemovedEvent): void {
// 	let entity = new PowerPodPodRemoved(event.transaction.hash.concatI32(event.logIndex.toI32()))
// 	entity.account = event.params.account
// 	entity.pod = event.params.pod

// 	entity.blockNumber = event.block.number
// 	entity.blockTimestamp = event.block.timestamp
// 	entity.transactionHash = event.transaction.hash

// 	entity.save()
// }

// export function handlePowerPodTransfer(event: PowerPodTransferEvent): void {
// 	let entity = new PowerPodTransfer(event.transaction.hash.concatI32(event.logIndex.toI32()))
// 	entity.from = event.params.from
// 	entity.to = event.params.to
// 	entity.value = event.params.value

// 	entity.blockNumber = event.block.number
// 	entity.blockTimestamp = event.block.timestamp
// 	entity.transactionHash = event.transaction.hash

// 	entity.save()
// }