//função que recebe o ano e retorna o seculo

// minha solução
function solution(year) {
    const part1 = Math.floor(year / 100)
    const part2 = year % 100
    if (part2 > 0) return part1 + 1
    if (part2 === 0) return part1
}

console.log(solution(1987));

// melhor solução
const solution2 = year => Math.ceil(year / 100)

console.log(solution2(2023));
