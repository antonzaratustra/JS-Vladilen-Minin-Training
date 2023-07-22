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

const delay = (time = 1000) => {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve()
        }, time)
    }) //называть константу можно как угодно  
return promise //можно выше сразу вернуть promise
}
//new Promise принимает аргументом функцию, в которую оборачиваем любой асинхронный код
//функция, которая попадает в конструктор new Promise 
//и в которую мы обернули асинхронный код
//принимает в себя два параметра resolve и reject
//resolve вызывается в async коде, чтобы сказать что он завершился
// и из функции delay возвращаем константу promise

delay(2500).then(() => {
    console.log('Timeout')
}) //данная функция возвращает нам promise, а у него есть методы
//например then - после завершения promise

//на promise сейчас пишется весь код, нужно поработать, разобраться 