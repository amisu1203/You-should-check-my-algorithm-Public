function solution(n)
{   let answer = 0 
    return String(n).split("").reduce((acc,val) => {
        acc = Number(acc)
        val = Number(val)
        return acc + val
    } ,0)
}   