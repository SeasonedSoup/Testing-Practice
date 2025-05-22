export const caesarCipher = (s, shift) => {
    let caesarString = ""
    for (let i = 0; i < s.length; i++) {
        const shiftedChar = s[i].charCodeAt(0)
        caesarString += String.fromCharCode(shiftedChar + shift)
    }
    return caesarString
}