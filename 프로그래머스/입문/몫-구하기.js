function solution(num1, num2) {
    let answer = num1 / num2;
    if (0 < num1 <= 100 && 0 < num2 <= 100) {
        return Math.floor(answer);
    }
}
