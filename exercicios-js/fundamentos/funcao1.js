/**
 * O algorítimo é a receita de bolo, os dados são os ingredientes
 * Função é o verbo, a ação, execução de um processo
 * Função delimita um bloco {} de sentenças de código que serão executadas quando a função é invocada
 * Recebe dados de entrada, executa de acordo com o código e retorna um resultado
 * A função (o bloco de código) pode receber um nome ou ser anônima
 * Ela pode ser chamada pelo nome quantas vezes necessário para executar o código
 * Colocar bons nomes de função é essencial
 * Pode ou não receber dados de entrada e dar retorno, todas essas situações são válidas
 */

// Função sem retorno

function imprimirSoma(a, b) {
    console.log(a + b)
}

imprimirSoma(2, 3)
imprimirSoma(2)
imprimirSoma(2, 10, 4, 5)
imprimirSoma()

/**
 * não foram definidas as variáveis 'a' e 'b' (nem com var, nem let, nem const)
 * elas são atribuidas quando a função é invocada (mas não são variáveis definidas)
 * pode ser qualquer tipo de variável (number, string, boolean, etc) por JS ser fracamente tipado
 * isso pode causar erro
 * se eu somente chamar (definir) uma variável, a outra será undefined e retornará NaN
 * ex: imprimirSoma(2)
 * isso pode ser saneado com um OU
 * se chamar mais de duas variáveis, vai considerar só as duas primeiras, pois é do que a função trata, e ignorar o resto
 * ex: imprimirSoma(2, 3, 4, 5)
 * Em JS não dá erro, em outra linguagem provavelmente daria
 * se não chamar nenhuma variável, dá NaN
 * ex: imprimirSoma()
 * tudo isso é possível e faz parte da flexibilidade do JS
 */


 //Função com retorno

function soma(a, b = 1) {
    return a + b
}

console.log(soma(2, 3))
console.log(soma(2))
console.log(soma())

/**
 * o b = 1 diz que o valor de b, por padrão é 1
 * ou seja, se ele não for passado, já usa o padrão
 * nesse caso, preciso do console.log porque ele não faz parte da função
 * preciso que ele imprima o retorno da função, diferentemente da primeira
 * que não tem retorno, mas a impressão faz parte da função
 * somente invocar soma não imprime o valor
 * chamar somente a primeira variável garante a soma com o valor padrão de b
 * porpem não chamar nenhum, dá NaN, pois a é undefined
 */

