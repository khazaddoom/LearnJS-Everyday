// sum

// function sum(...arguments) {
   
//     let sum = arguments.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
//     console.log(sum)

// }

// sum(1,2);
// sum(1,2,3,4,5,6,7,8,9);
// sum(1)


// challenge 2

// var a = 5,
//     b = 10, c;

//     if (b>a) {
        
//         let c = 2;
//         c = a + b + c;
        
//         console.log(c);

//     }

//     console.log(c);


// function splitAtX(input) {

//     let arr = input.split('X');
//     if(arr[0].length > arr[1].length) return arr[0];
//     else return arr[1];
// }


// console.log(splitAtX('HelsdsadXworlloasdad'));

// (function () {
//     let a = b = 5;
// })();

// console.log(b)

// let john = {
//     name: 'John',
//     yearOfBirth: 1986,
//     calculateAge: function() {
//         return this
//     }
// }

// let terry = {
//     name: 'Terry',
//     yearOfBirth: 1990,
//     calculateAge: () => {
//         return this
//     }
// }

var jane = {
    name: "Jane",
    
    logHello: function (friends) {
        friends.forEach( function(friend) {
            console.log(this.name + " says hello to " + friend)
        });
    }
}

jane.logHello(['John', 'Tina'])
