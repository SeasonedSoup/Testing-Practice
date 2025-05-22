import {analyzeArray} from "./analyzeArray";

test('Check [1,5,7,9,10]',() => {
    expect(analyzeArray([1, 5, 7, 9, 10])).toEqual({
        average: 6.4,
        minimum: 1,
        maximum: 10,
        length : 5
    });
})