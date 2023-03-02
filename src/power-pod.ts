import { Address, BigInt } from "@graphprotocol/graph-ts"

import { Transfer as TransferEvent, Delegated as DelegatedEvent } from "../generated/PowerPod/PowerPod"
import { DelegationInfo } from "../generated/schema"

export function handlePowerPodDelegated(event: DelegatedEvent): void {
	const id = event.params.delegatee
	// checking for tokens being burnt
	if (id.toHexString() == "0x0000000000000000000000000000000000000000") return

	let delegation = DelegationInfo.load(id)
	if (!delegation) {
		delegation = new DelegationInfo(id)

		delegation.holder = event.params.delegatee
	}
	delegation.amount = new BigInt(0)

	delegation.save()
}

export function handlePowerPodTransfer(event: TransferEvent): void {
	const id = event.params.to
	let delegation = DelegationInfo.load(id)
	if (!delegation) return

	delegation.amount = delegation.amount.plus(event.params.value)

	delegation.save()
}
