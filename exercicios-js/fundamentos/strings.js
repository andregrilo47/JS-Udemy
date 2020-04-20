const escola = "Cod3r"

console.log(escola.charAt(4)) // Começa a contar do 0
console.log(escola.charAt(5)) // Se o valor passa do nº de caracteres, não retorna erro, só vazio
console.log(escola.charCodeAt(3)) // Retorna o valor na tabela unicode
console.log(escola.indexOf('3')) // Retorna a posição do texto na string

/**
 * Retorna parte do texto
 * de um índice especificado até o fim
 * ou de uma delimitação dos índices
 */
console.log(escola.substring(1))
console.log(escola.substring(0, 3))

console.log('Escola '.concat(escola).concat('!')) // Concatenar, igual no Excel
console.log('Escola ' + escola +'!') // + soma em número, concatena em string
console.log(escola.replace(3, 'e')) // Troca o texto pelo especificado
console.log(escola.replace(/\d/, 'e')) // Troca o primeiro número (d --> digit) por e (Regex)
console.log(escola.replace(/\w/, 'e')) // Troca o primeiro caractere (w --> word) por e (Regex)
console.log(escola.replace(/\w/g, 'e')) // Troca todos os caracteres (g --> global) por e (Regex)

/**
 * Transformar uma string em array (grupo)
 * Identificar o separador e separar
 */
console.log('Ana,Maria,Pedro'.split(','))
console.log('Ana,Maria,Pedro'.split(/,/)) // Regex (não colocar ponto, pois faz outra coisa na Regex)
