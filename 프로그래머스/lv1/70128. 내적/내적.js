function solution(a, b) {
    var answer = 0;
    a.map((val, idx) => {
        return val*b[idx]
    }).map((val, idx) => answer +=val)
    return answer
}