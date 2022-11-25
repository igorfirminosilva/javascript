/*
let num = [5, 8, 9, 3, 6]

num.push(9)
num.sort()

console.log(num)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)
*/

/*

let valores = [8,7,4,1,9]

valores.sort()



for(let pos = 0 ; pos < valores.length ; pos++ ){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}
*/

/*
let numeros = [1,2,3,4,5,6,7,8,9]

for(let num = 0 ; num < numeros.length ; num++){
    console.log(`A posição ${num} tem o valor ${numeros[num]}`)
}
*/

let valores = [1,2,3,4,5,6,7,8,9]

for ( let pos in valores){
    console.log(`A posição ${pos} tem os valores ${valores[pos]}`)
}

