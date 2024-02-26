
const incrementbtn = document.querySelector('#increment')               // This creates the instance of the Increment button  -> #1//
const decrementbtn = document.querySelector('#decrement')
let counter = 0

function incrementCounter(){
    const counterEl = document.getElementById('counter')                //#2 The counterEl references the element with id = counter
    counter++                                                           // editing the counter variable according to the function
    counterEl.innerText = counter                                       // using the instance of the counter element edit it's value to be of counter//
                                                                        // ex:- counter=0  -->  counter++  --> counter=1 and assigns the value to counter element
}

function decrementCounter(){
    const counterEl = document.getElementById('counter')
    counter--
    counterEl.innerText = counter
}

incrementbtn.addEventListener('click', incrementCounter)                //#1 The same instance is used to call the incrementCounter() function  ->#2//


decrementbtn.addEventListener('click', decrementCounter)                
