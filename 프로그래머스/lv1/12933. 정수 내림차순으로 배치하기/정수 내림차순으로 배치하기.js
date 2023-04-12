function solution(n) {
    let num = (n+"").split("").sort((a,b) => b-a ).join("")
    return parseInt(num)
}