import { Currency, ETHER, Token, ChainId } from '@uniswap/sdk'
import { NATIVE_TOKENS } from '../constants'

export function currencyId(currency: Currency, chainId: ChainId): string {
  if (currency.symbol === NATIVE_TOKENS[chainId as ChainId].symbol) return NATIVE_TOKENS[chainId as ChainId].symbol || 'ETH'
  if (currency instanceof Token) return currency.address
  throw new Error('invalid currency')
}
