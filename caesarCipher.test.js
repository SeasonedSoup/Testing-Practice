import {caesarCipher} from './caesarCipher'

test('Turn Hello shifted by 1 into Ifmmp', () => {
    expect(caesarCipher('Hello', 1)).toBe('Ifmmp')
})

test('Turn I ate a HoTDog shifted by 5 into N fyj f MtYItl', () => {
    expect(caesarCipher('I ate a HoTDog', 5)).toBe('N fyj f MtYItl')
})

test('Turn &8394921 why shifted by 26 into &8394921 why', () => {
    expect(caesarCipher('&8394921 why', 26)).toBe('&8394921 why')
})