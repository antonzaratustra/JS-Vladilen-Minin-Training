const num = 42
const float = 42.42
const pow = 10e3
const big = 1_000_000_000

console.log(Number('42'))

console.dir(Number)

// testObject = {
//     name: 'John',
//     age: 30,
//     method: (a) => {a},
//     method2: function (b) {return b},
// }

// console.dir(testObject)

console.log(Number.MAX_SAFE_INTEGER)
console.log(Math)
console.log(Math.pow(2, 53) - 1)
console.log(Number.MIN_SAFE_INTEGER)

console.log(Number.MAX_VALUE)

console.log(Number.POSITIVE_INFINITY)
console.log(Number.NEGATIVE_INFINITY)

console.log(Number.isFinite(Infinity))

console.log(23 / undefined)

const weird = 23 / undefined

Number.NaN

const stringNaN = 'NaN?'

console.log(isNaN(weird)) //true
console.log(Number.isNaN(weird)) //true

console.log(isNaN(stringNaN)) //true
console.log(Number.isNaN(stringNaN)) //false
//Number.isNaN ищет четко NaN
//isNaN приводит типы 

const strInt = '42'
const strFloat = '42.42'

//парсинг чисел
console.log(Number(strInt))
console.log(Number(strFloat))
console.log (parseInt(strInt))
console.log (parseFloat(strFloat))
console.log(Number.parseInt(strInt))
console.log (Number.parseFloat(strFloat))
console.log(+strInt, +strFloat)

console.log(0.1 + 0.2) //неточные вычисления
console.log(+(0.1 + 0.2).toFixed(1))
console.log(parseFloat((0.1 + 0.2).toFixed(1)))


let counter = 0

function updateTime() {
    const dateString = document.querySelector('.date_string')
    dateString.innerHTML = counter++
}

// const interval = setInterval(updateTime, 5)

console.log(BigInt(Number.MAX_SAFE_INTEGER) + 9182664n)
//bigint только целочисленный

console.log(parseInt(10n) - 4)
console.log(10n - BigInt(4))
console.log(5n / 2n) //целочисленный результат 2

console.log(Math.PI)

console.log(Math.sqrt(4))
console.log(Math.pow(2, 2))
console.log(Math.abs(-3))
console.log(Math.max(2, 5, 199))
console.log(Math.min(2, 5, 199))

//округление

const myNum = 4.9
console.log(Math.floor(myNum))
console.log(Math.ceil(myNum))
console.log(Math.round(myNum))
console.log(Math.trunc(myNum))

//random разобраться во floor
console.log(Math.random())

function getRandomNumber(min, max) {
    return Math.trunc(Math.random() * (max - min + 1) + min)   
}
 
console.log(getRandomNumber(13, 25))

















