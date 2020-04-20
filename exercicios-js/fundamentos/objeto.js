// par de chaves significa objeto
//objeto é um conjunto, coleção de pares chave-valor
const prod1 = {}
//objeto vazio, pode ter suas características atribuidas ao longo do código, criações dinâmicas
// isso é bom em JS, por ser fracamente tipada, o que não te dá muitas restrições na criação de objetos
//podemos ter um objeto dentro de outro objeto

//aqui, estamos dizendo que dentro de prod1 existe um identificador (chave) chamado nome e estamos dando um valor a ele
// o identificador deve ser único dentro do objeto, por isso o nome 'chave'
prod1.nome = 'Celular Ultra Mega'
prod1.preco = 4998.90
// para colocar uma chave com espaço (não recomendado), pode-se escrever da seguinte maneira
prod1['Desconto Legal'] = 0.40

console.log(prod1)

// outra nomenclatura para criar objetos
// chave: valor
const prod2 = {
    nome: 'Camisa Polo',
    preco: 79.90,
    obj: {                      // obj está repetindo embaixo, mas ele é único para o objeto no qual faz parte, prod2
        blabla: 1,              // assim como obj, blabla repete, mas é único para seu objeto
        obj: {
            blabla: 2
        }
    }
}

console.log(prod2)

//objeto não é o mesmo que JSON (JavaScript Object Notation),apesar de parecidos, exemplo de JSON abaixo
// JSON é um formato textual para comunicação entre sistemas, o objeto tem uma notação literal(atributo, comportamento, código)
// pode validar procurando no google por JSON validator
// dá pra transformar objeto em JSON
//notação começando com ', usa-se " para diferenciar as strings de dentro (número não precisa das aspas)
'{ "nome": "Camisa Polo", "preco": 79.90 }'
