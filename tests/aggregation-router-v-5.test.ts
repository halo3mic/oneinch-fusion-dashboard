import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { Address, BigInt, Bytes } from "@graphprotocol/graph-ts"
import { NonceIncreased } from "../generated/schema"
import { NonceIncreased as NonceIncreasedEvent } from "../generated/AggregationRouterV5/AggregationRouterV5"
import { handleNonceIncreased } from "../src/aggregation-router-v-5"
import { createNonceIncreasedEvent } from "./aggregation-router-v-5-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let maker = Address.fromString("0x0000000000000000000000000000000000000001")
    let newNonce = BigInt.fromI32(234)
    let newNonceIncreasedEvent = createNonceIncreasedEvent(maker, newNonce)
    handleNonceIncreased(newNonceIncreasedEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("NonceIncreased created and stored", () => {
    assert.entityCount("NonceIncreased", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "NonceIncreased",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "maker",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "NonceIncreased",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "newNonce",
      "234"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
