function solution(n)
{   let answer = 0 
    return String(n).split("").reduce((acc,val) => acc + parseInt(val),0)
}   