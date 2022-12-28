//iniciar um comentário/texto dentro do terminal, ou capturar do terminal 
console.log("Olá Mundo")
//atribuindo condição a string, sempre atribuir entre acentos, com as aspas não funcionam 
//aspas simples e aspas duplas só servem para a separação dos componentes
console.log(`5+5 = ${5+5}`)
//iniciar uma tela de pop-up informando uma mensagem
//alert('Olá Mundo!')
//Estamos declarando uma variavel
//Let e var são iguais
//Const será atribuido o valor e esse valor será permanecido, qualquer coisa o valor não podera ser atualizado  
var clima = 'Quente'
clima = 'Frio'
//Retribuindo outro valor
console.log(clima)
//Como fazer para descobrir o tipo da variavel dentro JS
//usando o typeof <var>
var red = "red" 
console.log(typeof clima)
//output:string
//let e const são funcionais apenas no seu escopo
//var é global e também local
//a manipulação e inteligÊncia artificial de simular o x que está la em baixo para o campo de cima se chama elevitar ou hoisting
//sempre devemos passar a variavel antes até mesmo por parte de função e depois declarar ela..
console.log('> existe x antes do bloco? ', x)
{
    var x = 0
}
//console.log('> existe x depois do bloco') 
// ---
// ---

// add variavel
var name 
// add nome a variavel
name = "Mike"
// descobrir tipo da variavel
console.log(typeof name)

let age, isHuman

age = 18
isHuman = true
//juntando sos valores
console.log(name, age, isHuman)
//concatenando os valores
console.log('O ' + name + ' tem '+ age + ' anos.')

// object 
const person = {
    name: 'John',
    age: 30,
    weight: 88.6,
    isAdmin: true
}

console.log(person.age)
console.log(person.isAdmin)
console.log(person.weight)

console.log(`${person.name} tem ${person.age} anos.`)

const animals = [
    'Lion',
    'Monkey',
    'Cat'
]

// para achar
console.log(animals.length)

// lista p acesso
console.log(animals[0])
console.log(animals[1])
console.log(animals[2])

const produtos = [
    'vidro',
    'vaso',
    {
        name: 'Cat',
        age: 3
    }
]

// acessar valr no array
console.log(produtos[2].name)