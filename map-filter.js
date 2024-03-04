//MAPPING//

const arr = [1,2,3,4,5]

const newMappedArray = arr.map(double)                  //  <-- The map() FUNCTION in (arr) ARRAY maps the element's of (arr) ARRAY 
                                                        //    ..to another ARRAY (newMappedArray) according to the function inside 
                                                        //    ..the map() function itself.  //
                                                        //  arr             :   [1 , 2 , 3 , 4 , 5 ]      <---MAPPING!!
                                                        //  newMappedArray  :   [2 , 4 , 6 , 8 , 10]      <--- According to the double() function


const BinaryMapping = arr.map(binary)


function binary(element){
    return element.toString(2)                          //  <-- The toString() function in JavaScript takes an optional radix parameter that 
                                                        //    ..specifies the base of the numeral system to use when converting a number to a string.
}

function double(element){
    return element*2
}

console.log(newMappedArray)

console.log(BinaryMapping)                              //  OUTPUT: [1,10,11,100,101]

//You can also write the function inside the map() function itself.

const TripleMapping = arr.map(triple = (element) => element*3)

console.log(TripleMapping)

//FILTERING//

const FilteredArray = arr.filter((element) => element>=3)

console.log(FilteredArray)

//FIND//

const findArray = arr.find((element) => element === 4)

console.log(findArray)

//FOREACH//

arr.forEach(element =>{
    console.log(element)
})

//REDUCE//

 // .reduce is a function that acts like for loop for the array it is refering to,
 // we do not need to explicitly programme it to traverse the whole array
const sumOfArray = arr.reduce((acc,curr) => {
    acc = acc + curr
    return acc
 },1)
// ^-- You can also plug in the initial value of 'acc' as the second argument for .reduce() function//

//...you can preety much guess at this point that 'acc' acts like 'sum' and 'curr' as arr[i]
console.log(sumOfArray)


//TEMPLATE LITERALS//

const me = `It's a meee...

a MARIOOOO!!`
//This doesn't breaks --^//

//const me = 'It's a meee...
//
//a MARIOOO!!'           <---- But this does!

const human = {
    name: 'Am-Tu-Yung',
    age: 18,
    gender: false
}
const police = `Hi my name is ` +human.name+ `and i am ` +human.age+ ` years old`
const police2 = `Hi my name is ${human.name} and i am ${human.age} years old`

//Both the same thing but ${<variable>} is just too easy//
console.log(police)
console.log(police2)

if(human.age < 18 && !human.gender){
    console.log("NOO!! You Too Young!!")
}
else{
    console.log("😁👍 GO FOR IT!!")
}