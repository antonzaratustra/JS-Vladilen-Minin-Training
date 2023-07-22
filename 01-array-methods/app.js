const names = ['Игорь', 'Елена', 'Владилен', 'Ксения']

// names.push('Алена') //мутирует исходный массив
// names.unshift('Алена') //мутирует исходный массив
let firstname = names.shift()//мутирует исходный массив
let firstname2 = names.pop()//мутирует исходный массив


console.log(names)
console.log(firstname)
console.log(firstname2)

console.log(names.reverse())//мутирует исходный массив

console.log(names)

const reversedNames = names.toReversed()
console.log(names)
console.log(reversedNames)

const letters = ['a', 'e', 'b', 'd', 'f', 'c']

console.log(letters.sort())

// почему функция сортировки ниже не работает?

const numbers = ['4', '2', '3', '10', '5', '9']

//sort мутирует исходный массив
//toSorted() ноывй метод, не меняет

console.log( 
    numbers.sort(function (a, b) {
        return b - a
    })
    )

    console.log( 
        letters.sort(function (a, b) {
            return b.charCodeAt() - a.charCodeAt()
        })
        )

        //splice


const names2 = ['Игорь', 'Елена', 'Владилен', 'Ксения']

console.log(names2)

console.log(names2.splice(2, 2)) //не работает с отрицательными индексами
//splice мутирует исходные массив, toSpliced() нет
console.log(names2)


const greateWoman = 'Елена'
const index = names2.indexOf(greateWoman)
console.log(index)
// возвращает -1 если нет

names2[index] = 'Елена Великая'

console.log(names2)

//метод позволяющий менять элемент по его индексу не мутируя исходный массив

console.log(names2.with(index - 1, 'Игорь Великий'))
console.log(names2)

// map заучить, постоянно используется 
//принимает анонимную функцию
//это цикл как for
//name - элемент
//внутри функции логика для работы с элементом
//обязательно нужен return из функции
// map не мутирует исходный массив, возвращает новый

const newnames2 = names2.map(function(name) {
    // return name.toLowerCase()
    // let newName = name + '!'
    // newName = newName.toUpperCase()
    return name.toUpperCase()
})

console.log(newnames2)


// аналог функционала нижнего map - метод with, меняет элемент по индексу не мутируя массив
const newnames3 = names2.map(function(name, index) {
    if (index === 1) {
        return 'Елена Великая !!!'
    }
    
    return name
    })

console.log(newnames3)

//есть ли элемент в массиве
console.log(names2.includes('Игорь'))
//аналог
console.log(names2.indexOf('Игорь') !== -1)

//массив объектов

const people = [
    {name: 'Владилен', budget: 4200},
    {name: 'Елена', budget: 15100},
    {name: 'Игорь', budget: 300},
    {name: 'Ксения', budget: 7520},
]

// найти элемент массива у которого определенный бюджет
// метод indexOf уже не сработает, он для простых значений

console.log(people.indexOf({budget: 7520}))
// не работает, даже если весь объект передадим
// потому что объекты хранятся по ссылке и сравнить объекты на равенство не получится

let findedperson

for (let person of people) {
    if (person.budget === 7520) {
        findedperson = person //ссылкка!
    }
}

console.log(findedperson)

//но так делать не обязательно, для этого есть методы




//первым параметром принимает объект массива
const findedperson2 = people.find(function(person) {
    if (person.budget === 7520)
    return true //возвращаем true
})

console.log(findedperson2)

//НО if излишен, мы можем сразу вернуть его результат

const findedperson3 = people.find(function(person) {
    return person.budget === 7520
})

console.log(findedperson3)

//тоже самое можно реализовать стрелочной функцией

const findedperson4 = people.find((person) => person.budget === 7520)

console.log(findedperson4)

//findindex

const people2 = [
    {name: 'Владилен', budget: 4200},
    {name: 'Елена', budget: 15100},
    {name: 'Игорь', budget: 300},
    {name: 'Ксения', budget: 7520},
]
const findedindex = people2.findIndex(function(person) {
    return person.budget === 7520
})

console.log(findedindex)
console.log(people2[findedindex])

console.log(people.with(findedindex, 'Не Ксения'))

//крайней часто используется метод filter

const filtered = people.filter(function(p) {
return p.budget > 5000
})
//или стрелочная
const filtered2 = people.filter((p) => p.budget > 5000)
console.log(filtered)
console.log(filtered2)
//filter не мутирует массив, вовзращает новый

//filter, map, find, findindex очень часто используются

//Задача посчитать суммарный бюджет людей > 5000

const filtered5000 = people.filter((p) => p.budget > 5000)
//forEach просто делает итерацию, не меняет массив, не возвращает нового ничего
//это цикл
//разница forEach и for of и for in и for?
let sumBudget = 0
filtered5000.forEach((p) => sumBudget += p.budget)
console.log(sumBudget)

//альтернативный вариант

 const altSumBudget = people
    .filter((p) => p.budget > 5000)
    .map((p) => p.budget)
    .reduce((acc, p) => acc + p, 0)                                                                                                                                                                                                                                
//фильтруем массив по объектам у которых поле > 5000 и извлекаем p массив бюджетов из объектов

//reduce(() => {acc, p}, 0) //первый параметр функция(аккумулятор, объект итерации), второй начальное значание (объект, массив, строчка, число)

console.log(altSumBudget)


//можно вынести функции отдельно

const byBudget = (p) => p.budget > 5000
const pickBudget = (p) => p.budget

const altSumBudget2 = people
    .filter(byBudget)
    .map(pickBudget)
    .reduce((acc, p) => acc + p, 0)  
    
    console.log(altSumBudget2)

//такой синтаксис методов называется чейнинг

// Задача перевернуть строку
//split и join

const string = 'Привет, как дела?'
console.log(string)

const array = ['a', 'b', 'c'].join(', ')
console.log(array)

const reversed = string.split('').toReversed().join('')

console.log(reversed)

//методов массивов больше
