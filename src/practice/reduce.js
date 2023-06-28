// const fruits = [ 'Banana', 'Orange', 'Apple', 'Orange', 'Pear', 'Banana']
// const occurrences = fruits.reduce((acc, currFruit) => {
//     return {...acc, [currFruit]: (acc[currFruit] || 0) + 1 }
// }, {})
// console.log(occurrences)

// const arr = ['b', 'a', 'c', 'b', 'b', 'a'];

// const count = arr.reduce((accumulator, value) => {
//   accumulator[value] = accumulator[value]+1 || 1;

//   return accumulator;
// }, {});

// console.log(count);

const arr = [2,3,2,5,7,3,8,3];

const count = {};

for(var i=0; i<arr.length; i++){
  var num = arr[i];
  count[num] = count[num] ? count[num]+1:1;
}

console.log(count);


let chars = ['A', 'B', 'A', 'C', 'B'];

let uniqueChars = chars.filter((c, index) => {
  console.log(chars.indexOf(c) === index);
    return chars.indexOf(c) === index;
});

console.log(uniqueChars);