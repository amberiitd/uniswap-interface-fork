import { CurrencyAmount, JSBI, ChainId, NATIVE_TOKENS } from '@uniswap/sdk'
import { MIN_ETH } from '../constants'

/**
 * Given some token amount, return the max that can be spent of it
 * @param currencyAmount to return max of
 */
export function maxAmountSpend(chainId: ChainId, currencyAmount?: CurrencyAmount): CurrencyAmount | undefined {
  if (!currencyAmount) return
  if (currencyAmount.currency === NATIVE_TOKENS[chainId]) {
    if (JSBI.greaterThan(currencyAmount.raw, MIN_ETH)) {
      return CurrencyAmount.native(JSBI.subtract(currencyAmount.raw, MIN_ETH), chainId)
    } else {
      return CurrencyAmount.native(JSBI.BigInt(0), chainId)
    }
  }
  return currencyAmount
}
