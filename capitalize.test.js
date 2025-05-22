import {capitalize} from './capitalize'

test('Turns dog into Dog', () => {
    expect(capitalize('dog')).toBe('Dog')
})

test('Turns apple with whitespaces into Apple', () => {
    expect(capitalize('     apple    ')).toBe('Apple')
})

test('Turns 1thing into 1thing' , () => {
    expect(capitalize('1thing')).toBe('1thing')
})