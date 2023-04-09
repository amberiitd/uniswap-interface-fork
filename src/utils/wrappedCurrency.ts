import { ChainId, Currency, CurrencyAmount, Token, TokenAmount } from '@uniswap/sdk'
import { NATIVE_TOKENS, WRAPPED_NATIVE } from '../constants'

export function wrappedCurrency(currency: Currency | undefined, chainId: ChainId | undefined): Token | undefined {
  return chainId && currency === NATIVE_TOKENS[chainId] ? WRAPPED_NATIVE[chainId] : currency instanceof Token ? currency : undefined
}

export function wrappedCurrencyAmount(
  currencyAmount: CurrencyAmount | undefined,
  chainId: ChainId | undefined
): TokenAmount | undefined {
  const token = currencyAmount && chainId ? wrappedCurrency(currencyAmount.currency, chainId) : undefined
  return token && currencyAmount ? new TokenAmount(token, currencyAmount.raw) : undefined
}

export function unwrappedToken(token: Token, chainId: ChainId): Currency {
  if (token.equals(WRAPPED_NATIVE[token.chainId])) return NATIVE_TOKENS[chainId]
  return token
}
