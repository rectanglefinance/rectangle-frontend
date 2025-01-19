import tokens from './tokens'
import { FarmConfig } from './types'

const farms: FarmConfig[] = [
  {
    pid: 0,
    lpSymbol: 'RTG',
    lpAddresses: {
      56: '0xC75835C00C7b1B8589D2438e8b8D83472D238306',
      97: '',
    },
    token: tokens.foam,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 1,
    lpSymbol: 'RTG-BNB LP',
    lpAddresses: {
      56: '0x142735b1C9C9509DFBfBdDeC5d4b0eC8D48De9fE',
      97: '',
    },
    token: tokens.rtg,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 2,
    lpSymbol: 'RTG-BUSD LP',
    lpAddresses: {
      56: '0xd8D201CeBC25c39AD3E05536F94ECc3B6Bc8cAcc',
      97: '',
    },
    token: tokens.rtg,
    quoteToken: tokens.busd,
  },
  {
    pid: 3,
    lpSymbol: 'RTG-USDT LP',
    lpAddresses: {
      56: '0x2fE1BF515bB5b37F33275DA92c6bE04c5865cdd5',
      97: '',
    },
    token: tokens.rtg,
    quoteToken: tokens.usdt,
  },
  {
    pid: 4,
    lpSymbol: 'BUSD-BNB LP',
    lpAddresses: {
      56: '0x1b96b92314c44b159149f7e0303511fb2fc4774f',
      97: ''
    },
    token: tokens.busd,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 5,
    lpSymbol: 'USDC-BUSD LP',
    lpAddresses: {
      56: '0x680dd100e4b394bda26a59dd5c119a391e747d18',
      97: ''
    },
    token: tokens.usdc,
    quoteToken: tokens.busd,
  },
  {
    pid: 6,
    lpSymbol: 'CAKE-BNB LP',
    lpAddresses: {
      56: '0xa527a61703d82139f8a06bc30097cc9caa2df5a6',
      97: ''
    },
    token: tokens.cake,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 8,
    lpSymbol: 'RTG-ADA LP',
    lpAddresses: {
      56: '0xfFeb22c6143B982699E2dcBafBb0EAC51d0F408E',
      97: ''
    },
    token: tokens.rtg,
    quoteToken: tokens.ada,
  },
  {
    pid: 9,
    lpSymbol: 'RTG-DOT LP',
    lpAddresses: {
      56: '0xe3905652c879d9df7319b5756350dd2bb5e052e9',
      97: ''
    },
    token: tokens.rtg,
    quoteToken: tokens.dot,
  },
  {
    pid: 10,
    lpSymbol: 'USDT-BUSD LP',
    lpAddresses: {
      56: '0xc15fa3e22c912a276550f3e5fe3b0deb87b55acd',
      97: ''
    },
    token: tokens.usdt,
    quoteToken: tokens.busd,
  },
  {
    pid: 11,
    lpSymbol: 'DOT-ETH LP',
    lpAddresses: {
      56: '0x84cd882a0abaf8ad69b85fef0a8d5a36f5c0ecc1',
      97: ''
    },
    token: tokens.dot,
    quoteToken: tokens.eth,
  },


]

export default farms
