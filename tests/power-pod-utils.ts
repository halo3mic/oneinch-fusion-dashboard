import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  PowerPodApproval,
  PowerPodDefaultFarmSet,
  PowerPodEmergencyExitSet,
  PowerPodFeeReceiverSet,
  PowerPodMaxLossRatioSet,
  PowerPodMinLockPeriodRatioSet,
  PowerPodOwnershipTransferred,
  PowerPodPodAdded,
  PowerPodPodRemoved,
  PowerPodTransfer
} from "../generated/PowerPod/PowerPod"

export function createPowerPodApprovalEvent(
  owner: Address,
  spender: Address,
  value: BigInt
): PowerPodApproval {
  let powerPodApprovalEvent = changetype<PowerPodApproval>(newMockEvent())

  powerPodApprovalEvent.parameters = new Array()

  powerPodApprovalEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  powerPodApprovalEvent.parameters.push(
    new ethereum.EventParam("spender", ethereum.Value.fromAddress(spender))
  )
  powerPodApprovalEvent.parameters.push(
    new ethereum.EventParam("value", ethereum.Value.fromUnsignedBigInt(value))
  )

  return powerPodApprovalEvent
}

export function createPowerPodDefaultFarmSetEvent(
  defaultFarm: Address
): PowerPodDefaultFarmSet {
  let powerPodDefaultFarmSetEvent = changetype<PowerPodDefaultFarmSet>(
    newMockEvent()
  )

  powerPodDefaultFarmSetEvent.parameters = new Array()

  powerPodDefaultFarmSetEvent.parameters.push(
    new ethereum.EventParam(
      "defaultFarm",
      ethereum.Value.fromAddress(defaultFarm)
    )
  )

  return powerPodDefaultFarmSetEvent
}

export function createPowerPodEmergencyExitSetEvent(
  status: boolean
): PowerPodEmergencyExitSet {
  let powerPodEmergencyExitSetEvent = changetype<PowerPodEmergencyExitSet>(
    newMockEvent()
  )

  powerPodEmergencyExitSetEvent.parameters = new Array()

  powerPodEmergencyExitSetEvent.parameters.push(
    new ethereum.EventParam("status", ethereum.Value.fromBoolean(status))
  )

  return powerPodEmergencyExitSetEvent
}

export function createPowerPodFeeReceiverSetEvent(
  receiver: Address
): PowerPodFeeReceiverSet {
  let powerPodFeeReceiverSetEvent = changetype<PowerPodFeeReceiverSet>(
    newMockEvent()
  )

  powerPodFeeReceiverSetEvent.parameters = new Array()

  powerPodFeeReceiverSetEvent.parameters.push(
    new ethereum.EventParam("receiver", ethereum.Value.fromAddress(receiver))
  )

  return powerPodFeeReceiverSetEvent
}

export function createPowerPodMaxLossRatioSetEvent(
  ratio: BigInt
): PowerPodMaxLossRatioSet {
  let powerPodMaxLossRatioSetEvent = changetype<PowerPodMaxLossRatioSet>(
    newMockEvent()
  )

  powerPodMaxLossRatioSetEvent.parameters = new Array()

  powerPodMaxLossRatioSetEvent.parameters.push(
    new ethereum.EventParam("ratio", ethereum.Value.fromUnsignedBigInt(ratio))
  )

  return powerPodMaxLossRatioSetEvent
}

export function createPowerPodMinLockPeriodRatioSetEvent(
  ratio: BigInt
): PowerPodMinLockPeriodRatioSet {
  let powerPodMinLockPeriodRatioSetEvent = changetype<
    PowerPodMinLockPeriodRatioSet
  >(newMockEvent())

  powerPodMinLockPeriodRatioSetEvent.parameters = new Array()

  powerPodMinLockPeriodRatioSetEvent.parameters.push(
    new ethereum.EventParam("ratio", ethereum.Value.fromUnsignedBigInt(ratio))
  )

  return powerPodMinLockPeriodRatioSetEvent
}

export function createPowerPodOwnershipTransferredEvent(
  previousOwner: Address,
  newOwner: Address
): PowerPodOwnershipTransferred {
  let powerPodOwnershipTransferredEvent = changetype<
    PowerPodOwnershipTransferred
  >(newMockEvent())

  powerPodOwnershipTransferredEvent.parameters = new Array()

  powerPodOwnershipTransferredEvent.parameters.push(
    new ethereum.EventParam(
      "previousOwner",
      ethereum.Value.fromAddress(previousOwner)
    )
  )
  powerPodOwnershipTransferredEvent.parameters.push(
    new ethereum.EventParam("newOwner", ethereum.Value.fromAddress(newOwner))
  )

  return powerPodOwnershipTransferredEvent
}

export function createPowerPodPodAddedEvent(
  account: Address,
  pod: Address
): PowerPodPodAdded {
  let powerPodPodAddedEvent = changetype<PowerPodPodAdded>(newMockEvent())

  powerPodPodAddedEvent.parameters = new Array()

  powerPodPodAddedEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )
  powerPodPodAddedEvent.parameters.push(
    new ethereum.EventParam("pod", ethereum.Value.fromAddress(pod))
  )

  return powerPodPodAddedEvent
}

export function createPowerPodPodRemovedEvent(
  account: Address,
  pod: Address
): PowerPodPodRemoved {
  let powerPodPodRemovedEvent = changetype<PowerPodPodRemoved>(newMockEvent())

  powerPodPodRemovedEvent.parameters = new Array()

  powerPodPodRemovedEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )
  powerPodPodRemovedEvent.parameters.push(
    new ethereum.EventParam("pod", ethereum.Value.fromAddress(pod))
  )

  return powerPodPodRemovedEvent
}

export function createPowerPodTransferEvent(
  from: Address,
  to: Address,
  value: BigInt
): PowerPodTransfer {
  let powerPodTransferEvent = changetype<PowerPodTransfer>(newMockEvent())

  powerPodTransferEvent.parameters = new Array()

  powerPodTransferEvent.parameters.push(
    new ethereum.EventParam("from", ethereum.Value.fromAddress(from))
  )
  powerPodTransferEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )
  powerPodTransferEvent.parameters.push(
    new ethereum.EventParam("value", ethereum.Value.fromUnsignedBigInt(value))
  )

  return powerPodTransferEvent
}
