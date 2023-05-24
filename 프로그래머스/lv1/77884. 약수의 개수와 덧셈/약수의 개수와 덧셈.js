function solution(left, right) {
    let arr = [];
    let result = 0;
    for (let i = left; i <=right; i++) {
        arr.push(i);
    }
    for (let i = 0; i <arr.length; i++) {
        const sqrt = Math.sqrt(arr[i]);
        if(sqrt % 1 === 0) {
            result -= arr[i];
        } else result += arr[i];
    }
    return result;
}