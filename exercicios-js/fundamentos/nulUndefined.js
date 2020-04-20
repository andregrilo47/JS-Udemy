/**
 * importante saber a diferença de atribuição por referência e atribuição por valores
 * supomos a criação de uma const A que recebe um objeto
 * aí crio uma const B que recebe A
 * se eu mudo algo em B, A tambem sente e vice-versa
 * isso ocorre porque objetos são atribuidos por referência 
 * ou seja, B recebeu o endereço de memória do objeto atrubuído a A
 * portanto qualquer mudança será naquele endereço de memória, que é o mesmo para os dois
 * 
 * agora supomos a criação de uma const C que recebe 3
 * e uma const D que recebe C
 * se eu altero D, C não sente e vice-versa
 * isso ocorre porque foi uma atribuição por valor
 * 3 é um valor primitivo (números, letras, boolean, etc)
 * por tanto a const D recebeu uma cópia do valor de C e não um endereço de memória
 * portanto cada um tem o seu valor específico
 */

/**
  * criar uma variável e não atribuir valor significa que ela não foi inicializada, mas existe, foi declarada
  * ela retorna um valor 'undefined'
  * agora, tentar imprimir uma variável que nem existe, não foi declarada, dá erro 
  * (is not defined, é diferente de undefined, apesar de dizer o mesmo)
*/

let valor
console.log(valor)
//console.log(valor2)

/** 
 * null significa que a variável não tem valor e nem endereço de memória
 * ainda assim, está definida, pois definimos que ela não tem valor e nem endereço
*/

valor = null
console.log(valor)

/**
 * o null é importante e faz sentido quando você tem uma variável que tem atribuição pra referência
 * ou seja, aponta para um endereço de memória
 * se você não quer que ela aponte para o endereço mais, atribui null
 * ou seja, se quiser zerar um objeto, null
 * nunca atribua undefined, deixa para que a linguagem utilize para indicar valores não definidos
 */

 /**
  * não se pode acessar algo de uma variável null ou undefined
  * tentar usar funções, ex do .toString, dá erro
  * Cannot read property 'toString' of null
  */
 //console.log(valor.toString())

 /**
  * um objeto definido e uma chave não definida dá undefined
  * se tentar acessar algo mais dentro do indefinido, dá erro
  * Cannot read property 'a' of undefined
  */
 const produto = {}
 console.log(produto.preco)
 //console.log(produto.preco.a)

 console.log(produto)

 produto.preco = 3.50
 console.log(produto)

 /** se quiser zerar um valor numérico, coloque 0
  * deixe o null para referências
*/

produto.preco = undefined // evitar atribuir undefined!
console.log(!!produto.preco)
console.log(produto.preco)

// é um objeto que tem um atributo que está indefinido, não faz com que o objeto deixe de ter o atributo
console.log(produto)
// delete produto.preco é o que tira o atributo

// sem preço, mas diferenciando de um preço 0, pra dizer que é um preço diferente no caso de uma promoção, por exemplo
produto.preco = null
console.log(!!produto.preco)
console.log(produto)
