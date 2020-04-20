let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

/**Na lógia, uma exclamação significa negação
 * Duas exclamações se anulam, gerando afirmação
 * 1 é verdadeiro
 * exclamações forçam a conversão pra verdadeiro ou falso
 */
isAtivo = 1
console.log(!!isAtivo)
console.log(!isAtivo)
console.log(!true)

console.log('os verdadeiros...')
console.log(!!3) // qualquer nº inteiro, menos zero
console.log(!!-1) // qualquer nº inteiro, menos zero
console.log(!!' ') // espaço vazio ou strings
console.log(!![]) // array
console.log(!!{}) // objeto literal
console.log(!!Infinity) // tipo Infinito (divisão por zero)
// resultado da atribuição, não é se a atribuição deu certo, é o que é seu resultado
console.log(!!(isAtivo = true))

console.log('os falsos...')
console.log(!!0) // zero
console.log(!!'') // string vazia (sem espaço)
console.log(!!null) //nulo
console.log(!!NaN) // Not a Number
console.log(!!undefined) // indefinido
console.log(!!(isAtivo = false)) // atrinuição para falso

// || significa OU, se um é verdadeiro, tudo é verdadeiro
console.log('pra finalizar...')
console.log(!!('' || null || 0 || 'epa'))
console.log(('' || null || 0 || 'epa')) //se retirar o operador !!, retorna o primeiro valor verdadeiro

/**
 * Utilização prática do || com verdadeiro ou falso
 * Determinar um valor padrão para uma variável
 * Por exemplo, preenchimento do nome
 * Se não estiver preenchido, retorna como desconhecido
 */
let nome = ''
console.log(nome || 'Desconhecido')

nome = 'Lucas'
console.log(nome || 'Desconhecido')
