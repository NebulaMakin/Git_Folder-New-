
const incrementbtn = document.querySelector('#increment')               // This creates the instance of the Increment button  -> #1//
const decrementbtn = document.querySelector('#decrement')
let counter = 0

const ulElement = document.getElementById('list-items')

function incrementCounter(){
    const counterEl = document.getElementById('counter')                //#2 The counterEl references the element with id = counter
    counter++                                                           // editing the counter variable according to the function
    counterEl.innerText = counter                                       // using the instance of the counter element edit it's value to be of counter//
                                                                        // ex:- counter=0  -->  counter++  --> counter=1 and assigns the value to counter element

    //create an element//
    const li = document.createElement('li')

    //append that element//
    ulElement.appendChild(li)
}

function decrementCounter(){
    const counterEl = document.getElementById('counter')
    counter--
    counterEl.innerText = counter
}

incrementbtn.addEventListener('click', incrementCounter)                //#1 The same instance is used to call the incrementCounter() function  ->#2//


decrementbtn.addEventListener('click', decrementCounter)                
