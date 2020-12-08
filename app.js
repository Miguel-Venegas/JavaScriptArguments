function greet(firstName, lastName, language){
    console.log(firstName);
    console.log(lastName);
    console.log(language);
    // when used with console.log, the special keyword arguments outputs the list of all the values passed in the parameters. Notice that they are in an italicized array
    console.log(arguments);
    console.log('-----------');
}
// what is unusual about JS is that you can call a function without passing parameters

greet(); // expected output: undefined, undefined, undefined

// JavaScript functions assigns the values to parameters from left to right. So in this case, the value 'Miguel' was assigned to the variable firstName, which is the farthest to the left in the greet function

greet('Miguel'); // expected output: 'Miguel', undefined, undefined

greet('Miguel', 'Venegas');

greet('Miguel', 'Venegas', 'English & Spanish');

// using the same function above (though change its name to greeting), you can use the keyword 'arguments' to do some interesting things with functions like in the example below. For instance, you can make sure that the function greeting does not output 'undefined' values if no arguments were passed.

function greeting(firstName, lastName, language){

    if(arguments.length === 0){
        console.log('No arguments were passed!')
        console.log('------------');
        return;
    }

    console.log(firstName);
    console.log(lastName);
    console.log(language);
    console.log(arguments);
    console.log('-----------');
}

// now when you run the greet function without any arguments, you will only see the if-statement's message

greeting();
