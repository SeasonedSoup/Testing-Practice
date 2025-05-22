import {caesarCipher} from './caesarCipher'

test('Turn Hello shift by 1 into Ifmmp', () => {
    expect(caesarCipher('Hello', 1)).toBe('Ifmmp')
})