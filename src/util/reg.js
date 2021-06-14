export function checkTel(phoneNum) {
    return /^1[3456789]\d{9}$/.test(phoneNum)
}