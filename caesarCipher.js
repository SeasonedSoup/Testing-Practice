export const caesarCipher = (s, shift) => {
    let caesarString = ""

    for (let i = 0; i < s.length; i++) {
        const shiftedChar = s[i].charCodeAt(0)
        if (shiftedChar >= 65 && shiftedChar <= 90) {
            upperCaseBound();
        } else if (shiftedChar >= 97 && shiftedChar <= 122) {
            lowerCaseBound();
        } else {
            caesarString += String.fromCharCode(shiftedChar)
        }

        function upperCaseBound() {
            caesarString += String.fromCharCode((shiftedChar - 65 + shift) % 26 + 65)
        }
        function lowerCaseBound() {
            caesarString += String.fromCharCode((shiftedChar - 97 + shift) % 26 + 97)
        } 
    }
    return caesarString
}

