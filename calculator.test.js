import {calculator} from "./calculator"
const calc = calculator();

test('Add 5 + 6 = 11', () => {
    expect(calc.add(5, 6)).toBe(11)
})

test('Subtract 1 - 9 = -8', () => {
    expect(calc.subtract(1, 9)).toBe(-8)
})

test('Multiply 10 * 100 = 1000', () => {
    expect(calc.multiply(10, 100)).toBe(1000)
})

test('Divide 5 / 0 = Nan', () => {
    expect(calc.divide(5, 10)).toBe(0.5)
})