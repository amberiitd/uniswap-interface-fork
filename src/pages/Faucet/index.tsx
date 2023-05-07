import React, { FC, useState } from 'react'
import AppBody from '../AppBody'
import SegmentedControl from '../../components/SegmentedControl'
import { ChainId } from '@uniswap/sdk'
import { useActiveWeb3React } from '../../hooks'
import { NETWORK_LABELS } from '../../components/Header'
import { CUSTOM_TOKENS } from '../../constants'
import { Contract } from '@ethersproject/contracts'
import { getProviderOrSigner } from '../../utils'
import { SwapPoolTabs } from '../../components/NavigationTabs'

const ABI = require('../../constants/abis/faucet.json')
const contractAddress = '0x9901B33DbB10034bD94aa71Cc706EDE0a9aC4193'

const Faucet: FC = () => {
  const [selectedChainId, setSelectedChainId] = useState<number>(ChainId.MUMBAI)
  const { account, chainId, library } = useActiveWeb3React()
  const [tokenAddress, setTokenAddress] = useState<string>(CUSTOM_TOKENS[chainId][0]?.address)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  return (
    <AppBody>
      <SwapPoolTabs active={'faucet'} />
      <div className="d-flex">
        <div>
          <h2 className="">Get Test Tokens</h2>
          <p>This faucet transfers TestToken on Matic testnets and parent chain. Confirm details before submitting.</p>
        </div>
        <img src={`${process.env.PUBLIC_URL}/images/faucet_header.svg`} width={'200px'} />
      </div>
      <div className="mt-1">
        <h4 className="py-2">Network</h4>
        <SegmentedControl
          segments={[{ label: NETWORK_LABELS[chainId], value: chainId }]}
          selected={selectedChainId}
          onChange={value => setSelectedChainId(value)}
          disabled
        />
      </div>

      <div className="mt-1">
        <h4 className="py-2">Select Token</h4>
        <select className="form-select" onChange={e => setTokenAddress(e.target.value)} value={tokenAddress}>
          {CUSTOM_TOKENS[chainId].map(token => (
            <option value={token.address}>{token.symbol}</option>
          ))}
        </select>
      </div>
      <div className="mt-1">
        <h4 className="py-2">Wallet Address</h4>
        <input
          className="form-control"
          disabled
          value={account}
          onChange={e => {}}
          placeholder="0xxxxxxxxxxxxxxxxxxxxxxxxxxx"
        />
      </div>
      <button
        className="form-control btn btn-primary py-2 my-3"
        onClick={() => {
          if (tokenAddress) {
            setError('')
            setLoading(true)
            const token = CUSTOM_TOKENS[chainId].find(token => token.address === tokenAddress)
            const contract = new Contract(contractAddress, ABI, getProviderOrSigner(library, account) as any)
            contract.functions
              .allowedToWithdraw(account)
              .then(([flag]) => {
                if (!flag) throw Error('Token already requested. Try after 30 mins.')
                contract.functions
                  .requestTokens(tokenAddress)
                  .then(() => {
                    setLoading(false)
                    window.ethereum.request({
                      method: 'wallet_watchAsset',
                      params: {
                        type: 'ERC20', // Initially only supports ERC20, but eventually more!
                        options: {
                          address: tokenAddress, // The address that the token is at.
                          symbol: token?.symbol, // A ticker symbol or shorthand, up to 5 chars.
                          decimals: token.decimals // The number of decimals in the token
                        }
                      }
                    })
                  })
                  .catch(error => {
                    setLoading(false)
                    setError(error.message)
                  })
              })
              .catch(error => {
                setLoading(false)
                setError(error.message)
              })
          } else {
            setError('Invalid Input')
          }
        }}
        disabled={loading}
      >
        {loading ? 'Loading...' : 'Submit'}
      </button>
      {error && <div className="text-danger py-1">{error}</div>}
    </AppBody>
  )
}

export default Faucet
