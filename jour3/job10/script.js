let array = [1,2,3,4,5,6,7,8,9,10]

console.log(array.map((array) => array * 2));

console.log(array.filter((number) => number%2 === 0));

const newArray = array.reduce((accumulator,currentValue) => {
    return accumulator + currentValue;
},0);

console.log(newArray)