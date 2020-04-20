/** O JS tem tipagem dinâmica
 * Uma var ou const pode ser de qualquer tipo, dependendo da atribuição que recebe
 * isso é bom pela flexibilidade, porém ruim para identificar bugs
 */

let qualquer = 'Legal'
console.log(qualquer)
console.log(typeof qualquer)

qualquer = 3.1516
console.log(qualquer)
console.log(typeof qualquer)

// Evitar nomes genéricos e siglas7
let valor = ''
let numero = 1
let pqp = false // Produto Químico Perigoso... kkk