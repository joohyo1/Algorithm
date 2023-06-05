function solution(n) {
    let answer = n;
    let count = 0;
    while (n !== 0) {
        answer = answer + (n - 2);
        n -= 2;
    }
    return answer;
}