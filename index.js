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

//Another way of defining an Object//

const myObject = {
    keyname: {
        'keyname 2.1': 'hello there (*/ω＼*)'
    },
    keyname2: 3
}

//SO IF I WANT TO ACCESS THE OBJECT'S -> OBJECT I WOULD...//

console.log(myObject.keyname['keyname 2.1'])
                                //   ^---------------If spaces exist keep it under quotes!
        ///OR///
console.log(myObject['keyname']['keyname 2.1'])
                //      ^---------------------------------------Remember to keep the object-data-name or key-name under quotes!!! 


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


///Arrays///

 // <Sub Part>  "push" //

let myFriends = []      // <----An array declaration

function addMyFriends(friend){
    myFriends.push(friend)              //      <-----push function for an array [pushes the new element to the END of the array]
    console.log(myFriends)
}

addMyFriends('Shawn')
addMyFriends('Chad')

 // <Sub Part>  "unshift" //


 function addMyFriendsU(friend){
    myFriends.unshift(friend)              //      <-----unshift function for an array [pushes the new element to the BIGINNING of the array]
    console.log(myFriends)
}

addMyFriendsU('Shawn')
addMyFriendsU('Chad')

console.log(myFriends.length)

console.log(myFriends.pop())
//                      ^
//                      |_________This function of pop() removes the last element in the array and RETURNS IT hence returning "Chad" 



console.log(myFriends)

//ALSO YOU CAN USE THE INDEX VALUE OF EACH ELEMENT TO ADDRESS THE RESPECTIVE ELEMENT LIKE: myFriends[3] == "Chad"//

/// For loop ///

let botFriends = []
f = 'Friend'

function addFriends(){
    for(i=0;i<10;i++){
        friend = f + i
        botFriends.push(friend)
    }
}

addFriends()
console.log(botFriends)

//Equality operators //
let even_num = []

//equality operators are like:

for(i=0;i<10;i++){
    if(i%2 === 0){
        even_num.push(i)
    }
    else if(i%2 !== 0){
        continue
    }
}
console.log(even_num)


///Pass by Referencing the objects///

function mutate(obj) {           // Objects passed in a function is passed by reference so if we EDIT THIS!.. it will CHANGE THE OBJECT//
    obj.age++   //     <-------------------------------------------------------------------------------_\
}

mutate(person)
console.log(person)

 // TLDR: OBJECTS ARE PASSED BY REFERENCE //

function button(){
    heading = document.querySelector('h1')              //  <-- In this function button()  
                                                        // the object function querySelector('h1')
                                                        // will select [FIRST] the heading with <h1> tag and pass
                                                        // pass the respective reference to the heading 
                                                        // in the variable 'heading'//


    heading.style.color = 'red'                         //  <-- Using the referenced variable the style.color PROPERTY is set the color 'RED'// 
}

function button2(){
    alldiv = document.querySelectorAll('.change');         //  <-- The querySelector() function selects [ALL] elements instead of just first element//
//     ^
//     \____________________________________________The function querySelectorAll() returns a [ NodeList ] which is just like an Array...
//                                            ...thus we can access each element belonging to this class like an array using the variable alldiv 
//                                                                                                                                          \
    for(let i=0;i<alldiv.length;i++){                                               //                                                      \
                                                                                    //                                                      \
        const div = alldiv[i];             //       <----------------------------------------------------------------------------------------
        
        div.style.background = 'yellow'
    }

    console.log('Button 1!');

}

const ul = document.querySelector('ul')
const li = ul.querySelectorAll('li')
//              ^
//ALSO!! u can't use this: ul.getElementById('li'), as every element is not granted this function//
console.log(li)