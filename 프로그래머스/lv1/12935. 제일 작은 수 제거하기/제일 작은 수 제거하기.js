function solution(arr) {
    let min = Math.min(...arr)
    if (arr.length > 1) {
        return arr.filter(val => val !== min)
    }
    else return [-1]
}