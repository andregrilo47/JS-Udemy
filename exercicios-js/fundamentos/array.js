/**
 * Array é um vetor unidirecional que agrupa variáveis
 * As variáveis podem ser acessadas por índices, começando do 0 (indexado)
 * É heterogêneo (tipagem fraca, não recomendado misturar)
 * E flexível, dinâmico (tamanho variado, cresce e diminui)
 * Se dá por colchetes [] e elementos separados por vírgula
 */

const valores = [7.7, 8.9, 6.3, 9.2]

// acessando valores do array pelo índice
console.log(valores[0], valores[3])

// se acessar um índice inexistente, não dá erro, retorna undefined
console.log(valores[4], valores[50])

//pode adicionar elementos em certos índices
valores[4] = 10

console.log(valores)

//se adicionar a itens distantes, ele identifica que existem vazios
//valores[10] = 10
//console.log(valores)

//quantos elementos tem no array
console.log(valores.length)

//adicionar valores no array, pode ser objeto, texto, boolena, qualquer coisa
// não é uma boa prática misturar tipos de variáveis
valores.push({id: 3}, false, null, 'teste')
console.log(valores)

//retirar o último valor do array
console.log(valores.pop())
console.log(valores)

//retirar valor de índice específico (deixa vazio)
// delete funciona em objetos
delete valores[0]
console.log(valores)

//array é um object
console.log(typeof valores)
