//My first javascript log//


console.log('Hello');

//Always use let (var has iSsues)//
/*Data Types ->
    Primitives 
        number
            integer 
            floating
        string
        character
        boolean
        undefined
        null

    Reference Types
        Object
        Arrays
        Functions
*/

//Java is a static language so we can change a type of variable at run-time//

//BTW if a variable has a value 'undefined' its type is also 'undefined'//

let a = undefined;

//Objects//

let person = {name:'Josh',age:23};
console.log(person);
console.log(person.name);
console.log(person.age);

//2 ways to use a property of a variable//

//One - Dot Notation//
person.name='Maya';

//Two//
//Bracket Notation//

person['name'] = 'Stephen'; 

//VERY IMPORTANT IN CASE IF WE DONT KNOW THE PROPERTY SELECTED//

let selection = 'name';
person[selection] = 'Stephen';

//fUNCTIONS//
////let MyAge = 100                                     <-----------------------------------------
///let sum =200                                                                                  \
///let totalCount = 5                                                                            \
///                                                                                              \
///function AddtoMyAge(incrementby, multiplyby){                                                 \
    ///MyAge = (MyAge + incrementby)*multiplyby     <- Bad practice as it modifies the variable 'MyAge'

///}///

const MyAge = 100     //unmutable i guess//
let sum =200
let totalCount = 5
function AddtoMyAge(incrementby, multiplyby){
    return (MyAge + incrementby)*multiplyby
}

console.log(AddtoMyAge(5,2))

// if-else statements//

function GetLicense(age){
    if(age>18){
        return true
    }
    else{
        return false

    }
}

console.log(GetLicense(28))
console.log(GetLicense(12))

function performMath(number1, operation, number2){
    if(operation=='+'){
        return (number1 + number2) 
    }
    else if(operation == '*'){
        return (number1*number2)
    }
}

console.log(performMath(7,'+',8))
console.log(performMath(7,'*',8))
