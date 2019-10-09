// sum

function sum(...arguments) {
   
    let sum = arguments.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    console.log(sum)

}

sum(1,2);
sum(1,2,3,4,5,6,7,8,9);
sum(1)