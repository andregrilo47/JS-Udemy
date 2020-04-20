const nome = 'Rebeca'
const concatenacao = 'Olá ' + nome + '!'

/**
 * Começando com crase, cria-se um tempalte string
 * Você pode chamar quanquer variável com $ e {}
 * Ele faz a interpolação (interpreta a var/const como string e adiciona no texto
 * Identifica espaços e quebras de linha
 * */
const template = `
    Olá
    ${nome}!`

console.log(concatenacao, template)

/**
 * Ele tenta interpretar tudo o que está entre as chaves
 */
console.log(`1 + 1 = ${1 + 1}`)

/**
 * Dentro do template string pode-se chamar funções também
 */
const up = texto => texto.toUpperCase()
console.log(`Ei... ${up('cuidado')}!`)
