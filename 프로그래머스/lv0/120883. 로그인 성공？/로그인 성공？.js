function solution(id_pw, db) {
    var answer = '';
    for (let i = 0; i < db.length; i++) {
        if(db[i][0] === id_pw[0]) {
            // 아이디와 비밀번호가 모두 같을 경우
            if(db[i][1] === id_pw[1]) {
                answer = 'login'
                return answer;
            }
            // 비밀번호가 다를 경우
            else answer = 'wrong pw';
            return answer;
        }
        else answer = 'fail';
    }
    return answer;
}