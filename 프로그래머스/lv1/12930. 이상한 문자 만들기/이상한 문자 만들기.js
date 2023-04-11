function solution(s) {
    let str = s.toUpperCase().split(" ");
    let answer = str.map(i => {
        let word = i.split("").map((val, idx) => {
            return idx%2 ? val = val.toLowerCase() : val
        })
        return word.join("")
    })
    return answer.join(" ")

}