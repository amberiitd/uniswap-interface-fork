import { AbstractConnector } from '@web3-react/abstract-connector'
import { ChainId, JSBI, Percent, Token, WRAPPED_NATIVE } from '@uniswap/sdk'
import { TokenInfo, TokenList } from '@uniswap/token-lists/dist/types'
import { VersionUpgrade } from '@uniswap/token-lists'

import { fortmatic, injected, portis, walletconnect, walletlink } from '../connectors'

export const ROUTER_ADDRESS = '0xcf2bD0a007Dc5727a1A919cfEf9E37bD6C38cA8b'

// a list of tokens by chain
type ChainTokenList = {
  readonly [chainId in ChainId]: Token[]
}

const UNI_V2 = new Token(ChainId.MUMBAI, '0x22fDDde296579FddAeaD280c4Ad4Df2D3B84093f', 18, 'UNI', 'Uniswap')
const WMATIC = new Token(ChainId.MUMBAI, '0x9c3C9283D3e44854697Cd22D3Faa240Cfb032889', 18, 'WMATIC', 'Wrapped MATIC')
const NAZT = new Token(ChainId.MUMBAI, '0xf6998DC58bB5C47fd8c47304dD0C3F60b6CCF7f7', 18, 'NAZT', 'NAZT swap')
const RGBT = new Token(ChainId.MUMBAI, '0x311846D8cE707d3e510b9d355BE51561C79cA6Ba', 18, 'RGBT', 'RGBT swap')

export const DAI = new Token(ChainId.MAINNET, '0x6B175474E89094C44Da98b954EedeAC495271d0F', 18, 'DAI', 'Dai Stablecoin')
export const USDC = new Token(ChainId.MAINNET, '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48', 6, 'USDC', 'USD//C')
export const USDT = new Token(ChainId.MAINNET, '0xdAC17F958D2ee523a2206206994597C13D831ec7', 6, 'USDT', 'Tether USD')
export const COMP = new Token(ChainId.MAINNET, '0xc00e94Cb662C3520282E6f5717214004A7f26888', 18, 'COMP', 'Compound')
export const MKR = new Token(ChainId.MAINNET, '0x9f8F72aA9304c8B593d555F12eF6589cC3A579A2', 18, 'MKR', 'Maker')
export const AMPL = new Token(ChainId.MAINNET, '0xD46bA6D942050d489DBd938a2C909A5d5039A161', 9, 'AMPL', 'Ampleforth')

const WRAPPED_TOKEN_ONLY: ChainTokenList = {
  [ChainId.MAINNET]: [WRAPPED_NATIVE[ChainId.MAINNET]],
  [ChainId.ROPSTEN]: [WRAPPED_NATIVE[ChainId.ROPSTEN]],
  [ChainId.RINKEBY]: [WRAPPED_NATIVE[ChainId.RINKEBY]],
  [ChainId.GÖRLI]: [WRAPPED_NATIVE[ChainId.GÖRLI]],
  [ChainId.KOVAN]: [WRAPPED_NATIVE[ChainId.KOVAN]],
  [ChainId.MUMBAI]: [WMATIC]
}

export const CUSTOM_TOKENS: ChainTokenList = {
    [ChainId.MAINNET]: [],
    [ChainId.ROPSTEN]: [],
    [ChainId.RINKEBY]: [],
    [ChainId.GÖRLI]: [],
    [ChainId.KOVAN]: [],
    [ChainId.MUMBAI]: [NAZT, RGBT]
}

export const ALL_TOKENS: { [chainId in ChainId]: TokenInfo[] } = {
  [ChainId.MAINNET]: [
    {
      chainId: ChainId.MAINNET,
      address: WRAPPED_NATIVE[ChainId.MAINNET].address,
      name: WRAPPED_NATIVE[ChainId.MAINNET].name || '',
      symbol: WRAPPED_NATIVE[ChainId.MAINNET].symbol || '',
      decimals: WRAPPED_NATIVE[ChainId.MAINNET].decimals
    }
  ],
  [ChainId.ROPSTEN]: [
    {
      chainId: ChainId.ROPSTEN,
      address: WRAPPED_NATIVE[ChainId.ROPSTEN].address,
      name: WRAPPED_NATIVE[ChainId.ROPSTEN].name || '',
      symbol: WRAPPED_NATIVE[ChainId.ROPSTEN].symbol || '',
      decimals: WRAPPED_NATIVE[ChainId.ROPSTEN].decimals
    }
  ],
  [ChainId.RINKEBY]: [
    {
      chainId: ChainId.RINKEBY,
      address: WRAPPED_NATIVE[ChainId.RINKEBY].address,
      name: WRAPPED_NATIVE[ChainId.RINKEBY].name || '',
      symbol: WRAPPED_NATIVE[ChainId.RINKEBY].symbol || '',
      decimals: WRAPPED_NATIVE[ChainId.RINKEBY].decimals
    }
  ],
  [ChainId.GÖRLI]: [
    {
      chainId: ChainId.GÖRLI,
      address: WRAPPED_NATIVE[ChainId.GÖRLI].address,
      name: WRAPPED_NATIVE[ChainId.GÖRLI].name || '',
      symbol: WRAPPED_NATIVE[ChainId.GÖRLI].symbol || '',
      decimals: WRAPPED_NATIVE[ChainId.GÖRLI].decimals
    }
  ],
  [ChainId.KOVAN]: [
    {
      chainId: ChainId.KOVAN,
      address: WRAPPED_NATIVE[ChainId.KOVAN].address,
      name: WRAPPED_NATIVE[ChainId.KOVAN].name || '',
      symbol: WRAPPED_NATIVE[ChainId.KOVAN].symbol || '',
      decimals: WRAPPED_NATIVE[ChainId.KOVAN].decimals
    }
  ],
  [ChainId.MUMBAI]: [
    {
      chainId: WMATIC.chainId,
      address: WMATIC.address,
      name: WMATIC.name || '',
      symbol: WMATIC.symbol || '',
      decimals: WMATIC.decimals
    },
    {
      chainId: NAZT.chainId,
      address: NAZT.address,
      name: NAZT.name || '',
      symbol: NAZT.symbol || '',
      decimals: NAZT.decimals
    },
    {
        chainId: RGBT.chainId,
        address: RGBT.address,
        name: RGBT.name || '',
        symbol: RGBT.symbol || '',
        decimals: RGBT.decimals
      },
    {
        chainId: UNI_V2.chainId,
        address: UNI_V2.address,
        name: UNI_V2.name || '',
        symbol: UNI_V2.symbol || '',
        decimals: UNI_V2.decimals
      }
  ]
}

const initTime = new Date().toISOString()
export const TOKEN_LIST_BY_CHAIN_ID: { [key: number]: TokenList } = {
  1: {
    name: 'ETHER',
    timestamp: initTime,
    version: { major: VersionUpgrade.MAJOR, minor: VersionUpgrade.MINOR, patch: VersionUpgrade.PATCH },
    tokens: ALL_TOKENS[1]
  },
  3: {
    name: 'ETHER',
    timestamp: initTime,
    version: { major: VersionUpgrade.MAJOR, minor: VersionUpgrade.MINOR, patch: VersionUpgrade.PATCH },
    tokens: ALL_TOKENS[3]
  },
  4: {
    name: 'ETHER',
    timestamp: initTime,
    version: { major: VersionUpgrade.MAJOR, minor: VersionUpgrade.MINOR, patch: VersionUpgrade.PATCH },
    tokens: ALL_TOKENS[4]
  },
  5: {
    name: 'ETHER',
    timestamp: initTime,
    version: { major: VersionUpgrade.MAJOR, minor: VersionUpgrade.MINOR, patch: VersionUpgrade.PATCH },
    tokens: ALL_TOKENS[5]
  },
  42: {
    name: 'ETHER',
    timestamp: initTime,
    version: { major: VersionUpgrade.MAJOR, minor: VersionUpgrade.MINOR, patch: VersionUpgrade.PATCH },
    tokens: ALL_TOKENS[42]
  },
  80001: {
    name: 'ETHER',
    timestamp: initTime,
    version: { major: VersionUpgrade.MAJOR, minor: VersionUpgrade.MINOR, patch: VersionUpgrade.PATCH },
    tokens: ALL_TOKENS[80001]
  }
}

// used to construct intermediary pairs for trading
export const BASES_TO_CHECK_TRADES_AGAINST: ChainTokenList = {
  ...WRAPPED_TOKEN_ONLY,
  [ChainId.MAINNET]: [...WRAPPED_TOKEN_ONLY[ChainId.MAINNET], DAI, USDC, USDT, COMP, MKR]
}

/**
 * Some tokens can only be swapped via certain pairs, so we override the list of bases that are considered for these
 * tokens.
 */
export const CUSTOM_BASES: { [chainId in ChainId]?: { [tokenAddress: string]: Token[] } } = {
  [ChainId.MAINNET]: {
    [AMPL.address]: [DAI, WRAPPED_NATIVE[ChainId.MAINNET]]
  }
}

// used for display in the default list when adding liquidity
export const SUGGESTED_BASES: ChainTokenList = {
  ...WRAPPED_TOKEN_ONLY,
  [ChainId.MAINNET]: [...WRAPPED_TOKEN_ONLY[ChainId.MAINNET], DAI, USDC, USDT]
}

// used to construct the list of all pairs we consider by default in the frontend
export const BASES_TO_TRACK_LIQUIDITY_FOR: ChainTokenList = {
  ...WRAPPED_TOKEN_ONLY,
  [ChainId.MAINNET]: [...WRAPPED_TOKEN_ONLY[ChainId.MAINNET], DAI, USDC, USDT],
  [ChainId.MUMBAI]: [...WRAPPED_TOKEN_ONLY[ChainId.MUMBAI], NAZT, RGBT]
}

export const PINNED_PAIRS: { readonly [chainId in ChainId]?: [Token, Token][] } = {
  [ChainId.MAINNET]: [
    [
      new Token(ChainId.MAINNET, '0x5d3a536E4D6DbD6114cc1Ead35777bAB948E3643', 8, 'cDAI', 'Compound Dai'),
      new Token(ChainId.MAINNET, '0x39AA39c021dfbaE8faC545936693aC917d5E7563', 8, 'cUSDC', 'Compound USD Coin')
    ],
    [USDC, USDT],
    [DAI, USDT]
  ]
}

export interface WalletInfo {
  connector?: AbstractConnector
  name: string
  iconName: string
  description: string
  href: string | null
  color: string
  primary?: true
  mobile?: true
  mobileOnly?: true
}

export const SUPPORTED_WALLETS: { [key: string]: WalletInfo } = {
  INJECTED: {
    connector: injected,
    name: 'Injected',
    iconName: 'arrow-right.svg',
    description: 'Injected web3 provider.',
    href: null,
    color: '#010101',
    primary: true
  },
  METAMASK: {
    connector: injected,
    name: 'MetaMask',
    iconName: 'metamask.png',
    description: 'Easy-to-use browser extension.',
    href: null,
    color: '#E8831D'
  },
  WALLET_CONNECT: {
    connector: walletconnect,
    name: 'WalletConnect',
    iconName: 'walletConnectIcon.svg',
    description: 'Connect to Trust Wallet, Rainbow Wallet and more...',
    href: null,
    color: '#4196FC',
    mobile: true
  },
  WALLET_LINK: {
    connector: walletlink,
    name: 'Coinbase Wallet',
    iconName: 'coinbaseWalletIcon.svg',
    description: 'Use Coinbase Wallet app on mobile device',
    href: null,
    color: '#315CF5'
  },
  COINBASE_LINK: {
    name: 'Open in Coinbase Wallet',
    iconName: 'coinbaseWalletIcon.svg',
    description: 'Open in Coinbase Wallet app.',
    href: 'https://go.cb-w.com/mtUDhEZPy1',
    color: '#315CF5',
    mobile: true,
    mobileOnly: true
  },
  FORTMATIC: {
    connector: fortmatic,
    name: 'Fortmatic',
    iconName: 'fortmaticIcon.png',
    description: 'Login using Fortmatic hosted wallet',
    href: null,
    color: '#6748FF',
    mobile: true
  },
  Portis: {
    connector: portis,
    name: 'Portis',
    iconName: 'portisIcon.png',
    description: 'Login using Portis hosted wallet',
    href: null,
    color: '#4A6C9B',
    mobile: true
  }
}

export const NetworkContextName = 'NETWORK'

// default allowed slippage, in bips
export const INITIAL_ALLOWED_SLIPPAGE = 50
// 20 minutes, denominated in seconds
export const DEFAULT_DEADLINE_FROM_NOW = 60 * 20

// one basis point
export const ONE_BIPS = new Percent(JSBI.BigInt(1), JSBI.BigInt(10000))
export const BIPS_BASE = JSBI.BigInt(10000)
// used for warning states
export const ALLOWED_PRICE_IMPACT_LOW: Percent = new Percent(JSBI.BigInt(100), BIPS_BASE) // 1%
export const ALLOWED_PRICE_IMPACT_MEDIUM: Percent = new Percent(JSBI.BigInt(300), BIPS_BASE) // 3%
export const ALLOWED_PRICE_IMPACT_HIGH: Percent = new Percent(JSBI.BigInt(500), BIPS_BASE) // 5%
// if the price slippage exceeds this number, force the user to type 'confirm' to execute
export const PRICE_IMPACT_WITHOUT_FEE_CONFIRM_MIN: Percent = new Percent(JSBI.BigInt(1000), BIPS_BASE) // 10%
// for non expert mode disable swaps above this
export const BLOCKED_PRICE_IMPACT_NON_EXPERT: Percent = new Percent(JSBI.BigInt(1500), BIPS_BASE) // 15%

// used to ensure the user doesn't send so much ETH so they end up with <.01
export const MIN_ETH: JSBI = JSBI.exponentiate(JSBI.BigInt(10), JSBI.BigInt(16)) // .01 ETH
export const BETTER_TRADE_LINK_THRESHOLD = new Percent(JSBI.BigInt(75), JSBI.BigInt(10000))

// the Uniswap Default token list lives here
export const DEFAULT_TOKEN_LIST_URL = 'https://unpkg.com/@uniswap/default-token-list@latest'
