/*
Certain ES statements must be terminated with semicolons.
    However, ASI will automatically insert the semicolons based on a set of 3 rules

1. When the parser encounters an 'offending token' that isn't part of the grammar, 
    a. If there is a LineTerminator right before the offending token, ASI will put a semicolon right
    before the LineTerminator
    b. If the offending token is a }, a semicolong will be placed in front of the curly brace

2. When the end of input stream is encountered, a semicolon is automatically placed. 

3. If an allowed token that is the first token of a restricted production is encountered, and the 
    restricted token is separated by at least one lineterminator, then a semicolon is automatically 
    inserted before the restricted token.
    Restricted productions include continue, break, return, and throw.
    Rule 3 can cause extra semicolon insertion, especially if you use aligned brace style.

Jonathan Mills uses semicolons in conjuction with ESLint, to prevent potential issues, especially
those outlined on line 41, where an unexpected semicolon will be added by ASI.
*/

let a = 12
let b = 13 // The rule will trigger at the 'l' of let on this line, and place a semicolon at the end
           //of the previous line from 1.a

let c = b + a

if (c) { console.log(c) } // A semicolon will be placed after the closing parenthesis, from 1.b

['menu', 'items', 'listed']
    .forEach( (elem) => {
        console.log(elem) // A semicolon will be placed after the closing parenthesis, from 1.b
    })


let condition = true
let returnObject = () => 
{
    if (condition) 
    {
        return // Since there is a newline after this return statement, rule 3 will insert a
        {      // semicolon here, and make the return value unreachable.
            hi: 'hello' // This will never be executed.
        }
    }
}

console.log(a+b) // A semicolon will be placed at the end of this line from 2
