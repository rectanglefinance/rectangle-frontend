import { parseCallKey, toCallKey } from './actions'

describe('actions', () => {
  describe('#parseCallKey', () => {
    it('does not throw for invalid address', () => {
      expect(parseCallKey('0x-0x')).toEqual({ address: '0x', callData: '0x' })
    })
    it('does not throw for invalid calldata', () => {
      expect(parseCallKey('0xC75835C00C7b1B8589D2438e8b8D83472D238306-abc')).toEqual({
        address: '0xC75835C00C7b1B8589D2438e8b8D83472D238306',
        callData: 'abc'
      })
    })
    it('throws for invalid format', () => {
      expect(() => parseCallKey('abc')).toThrow('Invalid call key: abc')
    })
    it('throws for uppercase calldata', () => {
      expect(parseCallKey('0xC75835C00C7b1B8589D2438e8b8D83472D238306-0xabcD')).toEqual({
        address: '0xC75835C00C7b1B8589D2438e8b8D83472D238306',
        callData: '0xabcD'
      })
    })
    it('parses pieces into address', () => {
      expect(parseCallKey('0xC75835C00C7b1B8589D2438e8b8D83472D238306-0xabcd')).toEqual({
        address: '0xC75835C00C7b1B8589D2438e8b8D83472D238306',
        callData: '0xabcd'
      })
    })
  })

  describe('#toCallKey', () => {
    it('throws for invalid address', () => {
      expect(() => toCallKey({ callData: '0x', address: '0x' })).toThrow('Invalid address: 0x')
    })
    it('throws for invalid calldata', () => {
      expect(() =>
        toCallKey({
          address: '0xC75835C00C7b1B8589D2438e8b8D83472D238306',
          callData: 'abc'
        })
      ).toThrow('Invalid hex: abc')
    })
    it('throws for uppercase hex', () => {
      expect(() =>
        toCallKey({
          address: '0xC75835C00C7b1B8589D2438e8b8D83472D238306',
          callData: '0xabcD'
        })
      ).toThrow('Invalid hex: 0xabcD')
    })
    it('concatenates address to data', () => {
      expect(toCallKey({ address: '0xC75835C00C7b1B8589D2438e8b8D83472D238306', callData: '0xabcd' })).toEqual(
        '0xC75835C00C7b1B8589D2438e8b8D83472D238306-0xabcd'
      )
    })
  })
})
