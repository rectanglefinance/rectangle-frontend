import { ChainId } from '@pancakeswap-libs/sdk'
import MULTICALL_ABI from './abi.json'

const MULTICALL_NETWORKS: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: '0xD8169Db317F404FD815B7C6cC3B04dD1dc787b9D', // TODO
  [ChainId.BSCTESTNET]: '0x633573741Fdf982300e972a5cC88FdF694860230'
}

export { MULTICALL_ABI, MULTICALL_NETWORKS }
