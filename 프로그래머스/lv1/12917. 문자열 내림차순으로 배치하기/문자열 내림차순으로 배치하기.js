function solution(s) {
    var answer = '';
    let arr = s.split("");
    let charCodeArr = [];
    for(let i = 0; i < arr.length; i++) {
        charCodeArr.push((arr[i].charCodeAt(0)));
    }
    charCodeArr.sort((a,b)=>b-a);
    answer = String.fromCharCode(...charCodeArr);
    return answer;
}