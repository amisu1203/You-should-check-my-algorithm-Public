function solution(arr) {
    let min = Math.min(...arr)
    if (arr.length > 1) {
        let answer = arr.filter(val => val !== min)
        return answer;
    }
    else return [-1]
}