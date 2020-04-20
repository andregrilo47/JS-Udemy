var a = 3
let b = 4

/**
 * var permite que a variável seja redeclarada, o let não
 * usar let
 */
var a = 30
b = 40

console.log(a, b)

a = 300
b = 400

console.log(a, b)
/**
 * const declara uma constante, nenhum outro valor pode ser atribuido à constante
 * dá erro
 */

 const c = 5
console.log(c)
 /**
  * quanto mais const, mais você protege o algorítimo
  * porque impede que coisas que não devem ser alteradas acabem sendo
  * se precisar alterar, muda pra let
  */