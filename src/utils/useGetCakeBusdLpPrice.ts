import { useCurrency } from 'hooks/Tokens'
import { useTradeExactIn } from 'hooks/Trades'
import { tryParseAmount } from 'state/swap/hooks'

const useGetCakeBusdLpPrice = () => {
  const rtgAddress = '0xC75835C00C7b1B8589D2438e8b8D83472D238306'
  const wbnbAddress = '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c'
  const inputCurrency = useCurrency(rtgAddress)
  const outputCurrency = useCurrency(wbnbAddress)
  const parsedAmount = tryParseAmount('1', inputCurrency ?? undefined)
  const bestTradeExactIn = useTradeExactIn(parsedAmount, outputCurrency ?? undefined)
  const price = bestTradeExactIn?.executionPrice.toSignificant(6)
  return price ? parseFloat(price) : undefined
}

export default useGetCakeBusdLpPrice