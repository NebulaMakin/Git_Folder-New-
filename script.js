
const incrementbtn = document.querySelector('#increment')
const decrementbtn = document.querySelector('#decrement')
let counter = 0

function incrementCounter(){
    const counterEl = document.getElementById('counter')
    counter++
    counterEl.innerText = counter
}

function decrementCounter(){
    const counterEl = document.getElementById('counter')
    counter--
    counterEl.innerText = counter
}

incrementbtn.addEventListener('click', incrementCounter)


decrementbtn.addEventListener('click', decrementCounter)
