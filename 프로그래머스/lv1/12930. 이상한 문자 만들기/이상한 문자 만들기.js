function solution(s) {
    let str = s.toUpperCase().split(" ");
    str =  str.map((val)=> val.split("").map((val2,idx2) => {
        return idx2%2 ? val2.toLowerCase() : val2}).join("")).join(" ")
    return str       
}