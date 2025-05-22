import {capitalize} from './capitalize'

test('Turns dog into Dog', () => {
    expect(capitalize('dog')).toBe('Dog')
})

test ('Turns apple bottom jeans', () => {
    expect(capitalize(' apple bottom jeans    ')).toBe('Apple bottom jeans')
})