function solution(n) {
    let n3 = (n.toString(3)+"").split("").reverse().join("")
    return parseInt(n3, 3)
    
}