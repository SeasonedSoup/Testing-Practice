export const capitalize = (string) => {
    const cleanedString = string.trim()
    return cleanedString.slice(0, 1).toUpperCase() + cleanedString.slice(1)
}

