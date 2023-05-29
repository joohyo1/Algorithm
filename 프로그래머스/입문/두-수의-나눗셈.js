function solution(num1, num2) {
    let answer = Math.floor(num1 / num2 * 1000);
    if (0 < num1 <= 100 && 0 < num2 <= 100) {
        return answer;
    }
}