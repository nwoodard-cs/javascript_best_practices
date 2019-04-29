/* 
   The following lines work correctly because Javascript hoists declarations to the top of the scope
   Variables are created when their scope is instantiated. In other words, they don't get 'moved to
   the top (as is commonly said), instead they are initialized to undefined when their scope is
   entered.
   This does not work with let/const 
*/
console.log(myVariable)
var myVariable = 10

