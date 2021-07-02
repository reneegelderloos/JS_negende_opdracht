/*

In this exercise we're going to write a single function in three styles.

The function we're going to create will do the following.

take two numbers
each number will be squared (multiplied with itself)
the squared numbers will be added together
this sum will be squared again
the resulting value is returned
Write this function in all three styles and give the functions and their arguments good names. They cannot have exactly the same name. There are multiple ways to do this.

function declaration
function expression
arrow function
After you're done, check that all three functions give the same result if you give them the same arguments.
*/

const squaredNumbers = function (nr1, nr2) {
    const sum = nr1 + nr2;
    const sumsquare = Math.pow(sum);
    return sumsquare;
}

console.log(squaredNumbers(2, 4));