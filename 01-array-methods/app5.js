now = new Date() 

console.log(now)

const start = new Date(0) // начало отсчета 1 января 1970 + GMT Сдвиг
//прринимает количество миллисекунд, которые прошли с 1 января 1970

console.log(start)

const experiment = new Date(1000 * 60 * 60 * 24)
//1000 ms * 60 s = min
//* 60 min = hour
//* 24 hours = 1 day

console.log(experiment)

const date = new Date(2011, 10, 11, 23, 11)
//очень редко используется на практике, можно не запоминать
//обычно в продакшн проектах работают с библиотеками, которые упрощают взаимодействие с датами
console.log(date)
console.log(now.getFullYear())
console.log(now.getMonth()) //индекс, месяцы с нуля нумеруются
console.log(now.getDate())
console.log(now.getHours())
console.log(now.getMinutes())
console.log(now.getSeconds())
console.log(now.getMilliseconds())




//логичнее в setInterval получать дату, а потом не в интервале ее рисовать?

function writeFull() {
    const dateString = document.querySelector('.date_string')
    dateString.textContent = new Date()
}

function writeDate() {
    const dateString = document.querySelector('.date_string')
    dateString.textContent = new Date().toLocaleDateString()
}

function writeTime() {
    const dateString = document.querySelector('.date_string')
    dateString.textContent = new Date().toLocaleTimeString()
}

// let writeFullInterval = setInterval(writeFull, 1000) 
// let writeDateInterval = setInterval(writeDate, 1000) 
// let writeTimeInterval = setInterval(writeTime, 1000) 

const fullButton = document.querySelector('.full')
const dateButton = document.querySelector('.date')
const timeButton = document.querySelector('.time')

const dateString = document.querySelector('.date_string')

// const clearIntervals = () => {
//     clearInterval(writeDateInterval)
//     clearInterval(writeTimeInterval)
//     clearInterval(writeFullInterval)
// }

// fullButton.onclick = () => {
//     clearIntervals()
//     writeFullInterval = setInterval(writeFull, 1000) 

// } //с function не получилось написать почему то

// dateButton.onclick = () => {
//     clearIntervals()
//     writeDateInterval = setInterval(writeDate, 1000)
// }

// timeButton.onclick = () => {
//     clearIntervals()
//     writeTimeInterval = setInterval(writeTime, 1000) 

// }

//set

// now.setFullYear(0)
console.log(now)

console.log(now.toDateString())
console.log(now.toTimeString())
console.log(now.toLocaleDateString())
console.log(now.toLocaleTimeString())


//чем textContent отличается от innerHTML?

//Сравнить то что я написал в выше с более оптимальным вариантом внизу

let mode = 'time'



function update () {
    dateString.textContent = format(mode)
}

update()

// setInterval(() => {
//     update()
// }, 1000)

//так как update не принимает параметров можем укоротить
setInterval(update, 1000)

//Pure Function чистые функции

function format(formatMode) {
    const now = new Date()

    switch (formatMode) {
        case 'full': 
            return now.toLocaleDateString() + ' ' + now.toLocaleTimeString()
        case 'date': 
            return now.toLocaleDateString()
        case 'time': 
            return now.toLocaleTimeString()
        default: 
            return now.toLocaleTimeString()
    }
}

// fullButton.onclick = () => {
//     //чтобы не было задержки в секунду обновляем, сразу после смены режима, не перед
//     mode = 'full'
//     update()
// }

// dateButton.onclick = () => {
//     mode = 'date'
//     update()
// }

// timeButton.onclick = () => {
//     mode = 'time'
//     update()
// }

//переключение режима идеально описать через замыкание

// function update () {
//     dateString.textContent = format(mode)
// }

function bindMode(name) {
    return function() {
        mode = name
        update()
    }
}

console.log(bindMode('full'))

fullButton.onclick = bindMode('full')

dateButton.onclick = bindMode('date')

timeButton.onclick = bindMode('timel')