// function declaration - через ключевое слово function можем сначала вызвать, потом объявить
// function expression можем вызвать функцию только после объявления функции

function greet () {
    console.log(`Hello ${name}`)
}

const greet2 = function (name) {
    console.log(`Hello ${name}`)
}





//принимает функцию и ms
// setTimeout()
//если передать функцию с () она вызовется сразу без таймаута
//чаще используется анонимная функция
setTimeout(function() {
console.log('Timeout')
}, 1500)

setTimeout(() => console.log('Timeout'), 1500)

//в анонимную функцию timeout мы можем поместить вызов функции с параметром
setTimeout(function() {
    greet('Anton') // эта функция вызовется только когда вызовется внешняя функция
    }, 1500)


let counter = 0

const interval = setInterval(function() {
    if (counter === 5) {
       clearInterval(interval)
        } else {
      ++counter
      greet('Anton') // эта функция вызовется только когда вызовется внешняя функция
    }

}, 1500)

//Arrow functions



function greetings (name) {
    console.log(`Hello ${name}`)
}

//стрелочная функция это function expression всегда?

const arrow = (name) => {
    console.log(`Arrow hello ${name}`)
}
 
arrow('Anton')

const arrow2 = (name) => console.log(`Arrow2 hello ${name}`)

arrow2('Anton')


function pow(num, exp) {
    return Math.pow(num, exp)
}

const arrowPow = (num, exp) => {return Math.pow(num, exp)} //в одну строчку можно return не писать и фигурные скобки не писать
//то что после => возвращается автоматически
const arrowPow2 = (num, exp) => Math.pow(num, exp)

console.log( arrowPow2(2, 3) )

//Default parameters

const sum = (a = 40, b = a / 2) => a + b

console.log(sum(2, 2))
console.log(sum())

//бесконечные параметры Rest

function sumAll(...numbers) {
    let counter = 0
    for (let number of numbers) {
        counter += number
    }
    return counter
}

console.log(sumAll(1, 2, 3, 4, 5, 6))

const arrowSumAll = (...numbers) => {
    let counter = 0
    for (let number of numbers) {
        counter += number
    }
    return counter
}

console.log(arrowSumAll(1, 2, 3, 4, 5, 6))

//можно использовать метод массива reduce
const arrowSumAll2 = (...numbers) => {
    return numbers.reduce((acc, cur) => acc += cur, 0)
}
    
console.log(arrowSumAll2(1, 2, 3, 4, 5, 6, 7))


//closures (замыкания) функция, в которой есть другая функция

//например мы хотим создавать человека с одним именем, но разными фамилиями
function createPerson(name) {
    return function(lastname) {
        console.log(name + ' ' + lastname)
    }
}
//внутренняя функция работает с параметром внешней функции

//создаем метод
const addLastName = createPerson('Vladilen')
//addLastName возвращает нам внутреннюю функцию

addLastName('Minin')
addLastName('Zaratustra')