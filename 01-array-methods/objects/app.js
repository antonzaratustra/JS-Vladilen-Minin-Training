const person = {
    name: 'Vladilen',
    isYoutuber: undefined,
    age: 29,
    languages: ['ru', 'en'],
    address: {
        city: 'Saint-Petersburg',
        street: 'Nevsky',
    },
    'complex key': 'complex',
    ['s' + `s${1+2}` + new Date().getFullYear()]: 'computed value',
    
    greet() {
        console.log('Hello')
    },
    arrow: () => {
        console.log('Hello again')
    },
    //есть разница, так как у стрелочных функций нет контекста
    info() {
        console.log(`name: ${this.name}`)
    },
}

console.log(typeof person)
console.log(typeof null)

console.log(person)
person.greet()
person.arrow()

person.info()

const newperson = person

newperson.info()

//в стрелочной функции this это window (в браузере, не в node.js)
//стрелочная функция не создает свой контекст и не перенимает
//контекст внешнего объекта в контексте которого определены

console.log(person['address'])
console.log(person.address)
console.log(person['add'+'ress'])
const addressKey = 'address'
console.log(person[addressKey])

person.age++
person.languages.push('de')
console.log(person.languages)

// person.age = undefined //так делать не надо
delete person.age

//деструктуризация
// const name = person.name
// const languages = person.languages

// console.log(name, languages)


// const {} = person
// справа - из какого объекта хотим сделать деструктуризацию
// слева перечисляем ключи

const {name, languages} = person
// ключи объекта стали переменными
// названия переменных должны совпадать с ключами
console.log(name, languages)

// если уже есть переменная

const isYoutuber = false

const {isYoutuber: newIsYoutuber = 'TEST'} = person
//положи в другую константу, если undefined то TEST
console.log(newIsYoutuber)

for (let key in person) {
    if (person.hasOwnProperty(key)) {
    console.log(key)
    console.log(person[key])
}
}

//при использовании for in есть вероятность ошибки
//из-за прототипного наследования
// нужна проверка if (obj.hasOwnProperty(key))

//есть современный метод позволяюзий получить ключи без проверок и for in

const keys = Object.keys(person)
keys.forEach(key => {
    console.log(person[key])
})

//еще короче

Object.keys(person).forEach(key => {
    console.log(person[key])
})

 //еще раз о this и контексте


 const logger = {
    keys() {
        console.log('Object keys:', Object.keys(this))
    },

    keysAndValues() {
        Object.keys(this).forEach(key => {
            console.log('key:', key)
            console.log('value:', this[key])
        })
    },
 }

 logger.keys()
 logger.keysAndValues()

 //в идеале использовать этот объект и его функционал чтобы дебажить другие объекты
 //а не самого себя
 //как вывести значения person? Самое простое принимать параметр
 //по типу logger.keys(person)
 //есть другой способ. у функций есть функции
 //bind, принимает контекст, контекст это любой объект
 logger.keys.bind({a: 1})
 //ничего не происходит потому что bind возвращает функцию, но не вызывает ее

 const bound = logger.keys.bind({a: 1, b: 2})
 //похоже на замыкание, только с контекстом
 //this в bound всегда будет равен объекту {a: 1}

 bound()

const bound2 = logger.keys.bind(person)
bound2()

//чаще вы увидите другую запись
logger.keys.bind(person)()

//по аналогии есть call, он байндит контекст и сразу вызывает функцию

logger.keys.call(person)
//точно также делает apply
logger.keys.apply(person)
//в случае с call, если метод который мы вызываем имеет параметры, мы перечисляем
//их через запятую  logger.keys.call(person, false, mode)
//в случае apply функция принимает только 2 параметра и второй всегда массив
//logger.keys.apply(person, [false, mode])

//в случае с bind
//logger.keys.bind(person, false, mode)()
//или logger.keys.bind(person)(false, mode)
//или bound(false, mode)

//классы. Классы позволяют нам создавать объекты
//с большой буквы

class Human {
    static isHumanStatic = true
    isHuman = true
}

class Person {

}

const newPerson = new Person()

console.log(newPerson) // объект класс Person

//когда мы создаем newPerson у Person вызывается метод constructor
// мы можем его описать

//абстракция
class Person2 extends Human {
    constructor(name, age) {
        super() //вызывает родительский конструтор
        this.name = name ?? 'undefined name' //оператор проверки на undefined ?? 
        this.age = age ?? 0
    }
// почему в классе запятая не нужна?
    sayHello() {
        console.log('Hello from', this.name)
    }
}

//конкретная реализация
const newPerson2 = new Person2()

console.log(newPerson2)

const newPerson3 = new Person2('Anton', 31)

console.log(newPerson3)

newPerson3.sayHello()

console.log(newPerson3.isHuman)

console.log(newPerson3.isHumanStatic)
//static поля не проецируются на экземпляры класса
//но можем получить у класса и наследованных классов
console.log(Human.isHumanStatic)
console.log(Person.isHumanStatic)// почему undefined?




