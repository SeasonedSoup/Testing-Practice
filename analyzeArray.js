export const analyzeArray = (arr = []) => {
    const getAverage = () => {
        let average;
        let sum = 0;

        for (let i in arr) {
            sum += arr[i];
        }
        average = sum / arr.length;
        return average;
    }

    const avg = getAverage();

    const min = arr.reduce((prev,curr) => {
        prev = prev < curr ? prev : curr
        return prev
    }, Infinity)

    const max = arr.reduce((prev, curr) => {
        prev = prev < curr ? curr : prev
        return prev
    }, -Infinity)
    
    const len = arr.map(() => 1).reduce((a, b) => a + b, 0)
    
    return {
        "average": avg,
        "minimum": min,
        "maximum": max,
        "length" : len
    }
}