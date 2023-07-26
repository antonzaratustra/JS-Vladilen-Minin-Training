//Асинхронность работает в Event Loop

//понятие Callback Hell

// function delay(callback, time = 1000) {
//     setTimeout(callback, time)
// }
//функция задержки функции

//переписываем с использованием promise

// const delay = (time = 1000) => {
//     setTimeout(() => {}, time) //это асинхронность
// }
//используем замыкания кстати

//любую асинхронность мы можем поместить в promise

// const delay = (time = 1000) => {
//     const promise = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve()
//         }, time)
//     }) //называть константу можно как угодно  
// return promise //можно выше сразу вернуть promise
// }
// //new Promise принимает аргументом функцию, в которую оборачиваем любой асинхронный код
// //функция, которая попадает в конструктор new Promise 
// //и в которую мы обернули асинхронный код
// //принимает в себя два параметра resolve и reject
// //resolve вызывается в async коде, чтобы сказать что он завершился
// // и из функции delay возвращаем константу promise

// delay(2500).then(() => {
//     console.log('Timeout')
// }) //данная функция возвращает нам promise, а у него есть методы
//например then - после завершения promise

//на promise сейчас пишется весь код, нужно поработать, разобраться     

const delay = (time = 1000) => {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve([1, 2, 3])
        }, time)
    })  
return promise 
}

delay(2500) //к примеру здесь не искусственная задержка, а запрос на сервак
    .then((data) => {
        console.log('Timeout', data)
         return data.map((x) => x ** 2)
    })
    .then(data => {
        console.log(data)
    })
    .catch(err => {
        console.log(err)
    })
    .finally(() => console.log('Finally'))

//в параметр у then попадает результат из resolve
//then может быть сколько угодно, это называется чейнинг
//если сервер ответил ошибкой нам нужно как-то сообщить что data нет,
//для этого вызываем reject('error in delay')
//чтобы отловить ошибку есть метод catch
//метод finally вызывается в любом случае


const getData = () => new Promise(resolve => resolve([1, 2, 3]))
//когда функция записана в одну строчку, то что после стрелки возвращается
getData().then(array => console.log(array))
//вызов getData возвращает промис

//Есть другой синтаксис работы с асинхронностью async await
//вместо then, catch, finally более нативный синтаксис try catch finally

// function asyncExample() {
//     try {
        
//     } catch (e) {

//     } finally {

//     }
// }

async function asyncExample() {
        try {
            await delay(3000) //дождись пока выполнится delay
            const data = await getData() //работаем с промисом без then, понимаем что это проимс и испоьзуем await и добавляем async
        } catch (err) {
            console.log(err)
        } finally {
            console.log('Finally!')
        }
    }

    //функция, которая работает с await должна быть async

asyncExample()