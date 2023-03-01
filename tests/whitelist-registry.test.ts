import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { Address, BigInt } from "@graphprotocol/graph-ts"
import { WhitelistRegistryOwnershipTransferred } from "../generated/schema"
import { WhitelistRegistryOwnershipTransferred as WhitelistRegistryOwnershipTransferredEvent } from "../generated/WhitelistRegistry/WhitelistRegistry"
import { handleWhitelistRegistryOwnershipTransferred } from "../src/whitelist-registry"
import { createWhitelistRegistryOwnershipTransferredEvent } from "./whitelist-registry-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let previousOwner = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let newOwner = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let newWhitelistRegistryOwnershipTransferredEvent = createWhitelistRegistryOwnershipTransferredEvent(
      previousOwner,
      newOwner
    )
    handleWhitelistRegistryOwnershipTransferred(
      newWhitelistRegistryOwnershipTransferredEvent
    )
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("WhitelistRegistryOwnershipTransferred created and stored", () => {
    assert.entityCount("WhitelistRegistryOwnershipTransferred", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "WhitelistRegistryOwnershipTransferred",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "previousOwner",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "WhitelistRegistryOwnershipTransferred",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "newOwner",
      "0x0000000000000000000000000000000000000001"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
