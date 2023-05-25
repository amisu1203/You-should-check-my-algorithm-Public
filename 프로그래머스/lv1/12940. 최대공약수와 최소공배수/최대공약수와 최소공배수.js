function solution(n, m) {
    let G = 0;
    let L = 0;
    
    let num = n>m? n : m;
    
    // 최대공약수
    for (let i = 1; i <=num; i++) {
        if(n%i===0 && m%i === 0) {
            G = i;
        }
    }
    
    // 최소공배수
    L = n*m /G;
    return answer = [G,L];
}