import { Currency, Token, ChainId, NATIVE_TOKENS } from '@uniswap/sdk'

export function currencyId(currency: Currency, chainId: ChainId): string {
  if (currency.symbol === NATIVE_TOKENS[chainId as ChainId].symbol) return NATIVE_TOKENS[chainId as ChainId].symbol as string
  if (currency instanceof Token) return currency.address
  throw new Error('invalid currency')
}
