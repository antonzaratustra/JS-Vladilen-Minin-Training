//строки

const firstName = 'Vladilen \n29'
const age = '29'

function getAge () {
    return age
}


const output = `any ${age} is ${getAge() > 18 ? 'can drive' : 'can\'t drive'} string`


console.log(output)

console.log(firstName.length)
console.log(firstName.toUpperCase()) // не мутирует строку
console.log(firstName)
console.log(firstName.toLowerCase())

console.log(firstName.charAt(2)) //символ по индексу

console.log(firstName.indexOf('2')) //-1 если не найдено

console.log(firstName.startsWith('Vla'))
console.log(firstName.endsWith('29'))

console.log(firstName.repeat(3))

const password = '      my pass       '

console.log(password.trim())

console.log(password.trimEnd())
console.log(password.trimStart())



