### Inspiration

The primary motivation driving our project was to delve into the technical intricacies of Uniswap V2 and leverage its decentralized exchange capabilities. Uniswap V2, doesn't supports the EVMOS so we thought of building on EVMOS testnet with automated market-making (AMM) mechanism. Our goal was to understand the underlying algorithms and smart contract architecture of Uniswap V2 in order to contribute to the DeFi ecosystem by building EVSwap on the EVMOS network.
By creating EVSwap, we aimed to explore the inner workings of liquidity provision, token swaps, and price discovery in the context of AMM protocols. Furthermore, we aimed to enhance our understanding of blockchain integration, gas optimization, and the security considerations associated with DeFi applications.


### What it does

EVSwap is a decentralized exchange protocol that allows users to trade ERC-20 tokens directly from their wallets. It utilizes an automated market-making (AMM) mechanism to provide liquidity and enable peer-to-peer token swaps. Users can contribute liquidity to various trading pairs, and the protocol determines token prices based on the ratio of reserves in the liquidity pools.
It is deployed on the EVMOS testnet and basically provides 2 functionalities : 
1. Swap - The user can get their tokens exchanged for a desired token. The price of the token is determined based on the reserves on the liquidity pool.
2. Pool - Here the user need to supply 2 tokens in equal quantity into the pool which enhances liquidity and gives the user EVSD tokens which are the LP tokens. The user can then trades this LP token later on other DeFi exchange on higher prices or can burn the token to get their locked funds back.

### How we built it

To build EVSwap we have deployed the Factory and the Router contracts with custom modifications on the EVMOS testnet. The frontend is built on typescript with custom ERC tokens RGBT and NAZT tokens for testing purpose. It is a full-fledged DEX which can be used for swaps or earning fixed APY on EVMOS.

### Future scope

Looking ahead, Some possibilities include enhancing the user interface and user experience to make the platform more intuitive and accessible. Going forward we are in plans of integrating additional features such as limit orders, lending/borrowing functionalities, or yield farming mechanisms to attract a wider range of users, especially enhancing EVMOS. Moreover, considering the evolving DeFi landscape, we may want to adapt our EVSwap to support other blockchain networks or explore interoperability with other decentralized exchanges to foster liquidity across multiple platforms, by leveraging EVMOS extensions.

### EVMOS testnets Contracts - 
1. nazToken - https://testnet.escan.live/address/0x0e9df147be69efa819d5d3c6859b3b4d34a7cba0
2. rgbToken - https://testnet.escan.live/address/0x3352bdcbdc445abc5bebbbec44745968fc038aec
3. Wrapped TEVMOS (WTEVMOS) - https://testnet.escan.live/address/0x456ad4e64b4eb52b0d0aeb6d85538794a3462192
4. UniswapV2Fatory - https://testnet.escan.live/address/0xf440030817f7ab86c916a146e281b71c72b01d66
5. Multicall - https://testnet.escan.live/address/0xd768ad6f274b0547301b1f4b83c6af4fab462bd4
6. UniswapV2Router - https://testnet.escan.live/address/0x4a7e9465c9bcb022bcb75e533b369f2d8408b5a3

Demo Link - https://evswap-695ee.web.app/
Video Link - https://youtu.be/TiqQfO9M2uI
