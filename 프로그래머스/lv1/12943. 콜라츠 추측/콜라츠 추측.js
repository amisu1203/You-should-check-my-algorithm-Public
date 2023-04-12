function solution(num) {
    var answer = 0;
    let count = 0;
    while(num > 1 && count < 500) {
        num = num%2 ? (num*3)+1 : parseInt(num/2)
        count++;
    }
    return count < 500 ? count : -1
    
}