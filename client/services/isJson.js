export function isJSON(str) {
    try {
        JSON.parse(str)
        return true
    } catch (e) {
        return false
    }
}