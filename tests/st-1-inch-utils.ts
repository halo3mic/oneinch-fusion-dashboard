import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
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
} from "../generated/St1inch/St1inch"

export function createApprovalEvent(
  owner: Address,
  spender: Address,
  value: BigInt
): Approval {
  let approvalEvent = changetype<Approval>(newMockEvent())

  approvalEvent.parameters = new Array()

  approvalEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  approvalEvent.parameters.push(
    new ethereum.EventParam("spender", ethereum.Value.fromAddress(spender))
  )
  approvalEvent.parameters.push(
    new ethereum.EventParam("value", ethereum.Value.fromUnsignedBigInt(value))
  )

  return approvalEvent
}

export function createDefaultFarmSetEvent(
  defaultFarm: Address
): DefaultFarmSet {
  let defaultFarmSetEvent = changetype<DefaultFarmSet>(newMockEvent())

  defaultFarmSetEvent.parameters = new Array()

  defaultFarmSetEvent.parameters.push(
    new ethereum.EventParam(
      "defaultFarm",
      ethereum.Value.fromAddress(defaultFarm)
    )
  )

  return defaultFarmSetEvent
}

export function createEmergencyExitSetEvent(status: boolean): EmergencyExitSet {
  let emergencyExitSetEvent = changetype<EmergencyExitSet>(newMockEvent())

  emergencyExitSetEvent.parameters = new Array()

  emergencyExitSetEvent.parameters.push(
    new ethereum.EventParam("status", ethereum.Value.fromBoolean(status))
  )

  return emergencyExitSetEvent
}

export function createFeeReceiverSetEvent(receiver: Address): FeeReceiverSet {
  let feeReceiverSetEvent = changetype<FeeReceiverSet>(newMockEvent())

  feeReceiverSetEvent.parameters = new Array()

  feeReceiverSetEvent.parameters.push(
    new ethereum.EventParam("receiver", ethereum.Value.fromAddress(receiver))
  )

  return feeReceiverSetEvent
}

export function createMaxLossRatioSetEvent(ratio: BigInt): MaxLossRatioSet {
  let maxLossRatioSetEvent = changetype<MaxLossRatioSet>(newMockEvent())

  maxLossRatioSetEvent.parameters = new Array()

  maxLossRatioSetEvent.parameters.push(
    new ethereum.EventParam("ratio", ethereum.Value.fromUnsignedBigInt(ratio))
  )

  return maxLossRatioSetEvent
}

export function createMinLockPeriodRatioSetEvent(
  ratio: BigInt
): MinLockPeriodRatioSet {
  let minLockPeriodRatioSetEvent = changetype<MinLockPeriodRatioSet>(
    newMockEvent()
  )

  minLockPeriodRatioSetEvent.parameters = new Array()

  minLockPeriodRatioSetEvent.parameters.push(
    new ethereum.EventParam("ratio", ethereum.Value.fromUnsignedBigInt(ratio))
  )

  return minLockPeriodRatioSetEvent
}

export function createOwnershipTransferredEvent(
  previousOwner: Address,
  newOwner: Address
): OwnershipTransferred {
  let ownershipTransferredEvent = changetype<OwnershipTransferred>(
    newMockEvent()
  )

  ownershipTransferredEvent.parameters = new Array()

  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam(
      "previousOwner",
      ethereum.Value.fromAddress(previousOwner)
    )
  )
  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam("newOwner", ethereum.Value.fromAddress(newOwner))
  )

  return ownershipTransferredEvent
}

export function createPodAddedEvent(account: Address, pod: Address): PodAdded {
  let podAddedEvent = changetype<PodAdded>(newMockEvent())

  podAddedEvent.parameters = new Array()

  podAddedEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )
  podAddedEvent.parameters.push(
    new ethereum.EventParam("pod", ethereum.Value.fromAddress(pod))
  )

  return podAddedEvent
}

export function createPodRemovedEvent(
  account: Address,
  pod: Address
): PodRemoved {
  let podRemovedEvent = changetype<PodRemoved>(newMockEvent())

  podRemovedEvent.parameters = new Array()

  podRemovedEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )
  podRemovedEvent.parameters.push(
    new ethereum.EventParam("pod", ethereum.Value.fromAddress(pod))
  )

  return podRemovedEvent
}

export function createTransferEvent(
  from: Address,
  to: Address,
  value: BigInt
): Transfer {
  let transferEvent = changetype<Transfer>(newMockEvent())

  transferEvent.parameters = new Array()

  transferEvent.parameters.push(
    new ethereum.EventParam("from", ethereum.Value.fromAddress(from))
  )
  transferEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )
  transferEvent.parameters.push(
    new ethereum.EventParam("value", ethereum.Value.fromUnsignedBigInt(value))
  )

  return transferEvent
}
