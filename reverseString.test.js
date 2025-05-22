import {reverseString} from './reverseString'

test('Turns cat into tac', () => {
    expect(reverseString('cat')).toBe('tac')
})

test('Turns hello World into dlroW, olleh', () => {
    expect(reverseString('hello, World')).toBe('dlroW ,olleh')
})

test('Turns banana with whitespaces into ananab', () => {
    expect(reverseString('    banana     ')).toBe('ananab')
})