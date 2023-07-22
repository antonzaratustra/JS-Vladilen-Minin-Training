let colorCounter = 0
let countDown = 0

function updateColor() {
    const containerElement = document.querySelector('.container')
    const string_date = document.querySelector('.date_string')

    if (colorCounter >= 0 && colorCounter < 255 && countDown === 0) {
        // containerElement.style.backgroundColor = `rgb(${colorCounter++}, 255, 0)`    }
        containerElement.style.borderColor = `rgb(${colorCounter++}, 255, 0)`
        containerElement.style.boxShadow = `inset 0px 0px 20px rgb(${colorCounter}, 255, 0)`
        string_date.style.color = `rgb(${colorCounter}, 255, 0)`    }

     if (colorCounter === 255) {    countDown = 1    }

    if (colorCounter <= 255 && countDown === 1) {
        // containerElement.style.backgroundColor = `rgb(${colorCounter--}, 255, 0)`
        string_date.style.color = `rgb(${colorCounter--}, 255, 0)`
        containerElement.style.borderColor = `rgb(${colorCounter}, 255, 0)`
        // containerElement.style.padding = `${colorCounter}px`

    }

    if (colorCounter === 0) {    countDown = 0    }

}

 const intervalColor = setInterval(updateColor, 10)
