//My first javascript log//


console.log('Hello');

//Always use let (var has isues)//
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