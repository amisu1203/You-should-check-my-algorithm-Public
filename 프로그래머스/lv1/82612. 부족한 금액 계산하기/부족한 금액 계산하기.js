function solution(price, money, count) {
    var answer = 0;
    for(let i = 1; i <= count; i++) {
        money -= price * i
    }
    return answer = money < 0 ? money * -1 : 0
}