function solution(n) {
   let arr = (n+"").split("").reverse()
    return arr.map(i => parseInt(i))
}