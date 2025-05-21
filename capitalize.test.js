import capitalize from './capitalize'

test('Turns dog into Dog', () => {
    expect(capitalize('dog')).toBe('Dog')
})