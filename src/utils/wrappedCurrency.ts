import { ChainId, Currency, CurrencyAmount, ETHER, Token, TokenAmount, WETH } from '@uniswap/sdk'
import { WRAPPED_NATIVE } from '../constants'

export function wrappedCurrency(currency: Currency | undefined, chainId: ChainId | undefined): Token | undefined {
  return chainId && currency === ETHER ? WRAPPED_NATIVE[chainId] : currency instanceof Token ? currency : undefined
}

export function wrappedCurrencyAmount(
  currencyAmount: CurrencyAmount | undefined,
  chainId: ChainId | undefined
): TokenAmount | undefined {
  const token = currencyAmount && chainId ? wrappedCurrency(currencyAmount.currency, chainId) : undefined
  return token && currencyAmount ? new TokenAmount(token, currencyAmount.raw) : undefined
}

export function unwrappedToken(token: Token): Currency {
  if (token.equals(WRAPPED_NATIVE[token.chainId])) return ETHER
  return token
}
