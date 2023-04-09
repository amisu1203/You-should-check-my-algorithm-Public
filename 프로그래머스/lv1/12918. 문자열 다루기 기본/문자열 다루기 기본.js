function solution(s) {
  if (s.length == 4 || s.length == 6) {
    return [...s].every((val) => {
      return !(isNaN(val/1)) 
    });
  }
return false
}