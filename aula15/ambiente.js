var num = [5, 8, 2, 9, 3]
num.push(1)

console.log(num)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)
var mamaco = num.indexOf(1)
if (mamaco == -1) {
    console.log('O valor não foi encontrado!')
} else {
    console.log(`O valor está na posição ${mamaco}`)
}
