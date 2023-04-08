function solution(arr, divisor) {
    arr = arr.sort((a,b) => a<b ? -1 : 1);
    let answer = arr.filter(i=>i%divisor==0)
    !answer[0] ? answer = [-1] : answer
    return answer
}