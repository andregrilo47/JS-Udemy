// Retorna Infinito como valor, não gera erro
console.log(7 / 0) 

/**
 * JS tenta converter o texto em número e retorna o resultado (usar ponto, não vírgula)
 * Só se não há sentido operar com a string (usar + pra concatenar, por exemplo)
 * Usar /, * ou - fará a operação aritmética
 */
console.log('10' / 2) 

// Retrona NaN, not a number, pois não consegue fazer a operação
console.log('Show!' * 2) 

/**
 * Retorna 0.7999...
 * Essa imprecisão ocorre naturalmente, por uma especificação do JS
 * (IEEE, a amioria das linguagens segue)
 * Sempre em operações de ponto flutuante (decimais)
 * Senão seria muito lento
 */
console.log(0.1 + 0.7)

/**Não pode ter esse tipo de função depois de um número literal
 * Só entre parenteses ou declarado
 *console.log(10.toString())
*/
console.log((10.3456).toFixed(2))

/**
 * usar + de string com número concatena
 * string tem preferência
 */
console.log('3' + 2)
console.log(3 + '2')
