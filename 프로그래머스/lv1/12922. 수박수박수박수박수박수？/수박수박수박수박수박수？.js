function solution(n) {
    var answer = '';
    let word = '수박'
    for (let i = 1; i <= n; i++) {
        answer += i%2 ? word[0] : word[1]
    }
    return answer;
}