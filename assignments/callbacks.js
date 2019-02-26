// Create a higher order function and invoke the callback function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.

const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

/* 

  //Given this problem: 
  
  function firstItem(arr, cb) {
    // firstItem passes the first item of the given array to the callback function.
  }


  // Potential Solution:

  // Higher order function using "cb" as the call back
  function firstItem(arr, cb) {
    return cb(arr[0]);
  }

  // Function invocation 
  firstItem(items, function(first) {
    console.log(first)
  });

*/


function getLength(arr, cb) {
  // getLength passes the length of the array into the callback.
  return cb(arr.length);
}
getLength(items, len => console.log(len));



function last(arr, cb) {
  // last passes the last item of the array into the callback.
  console.log(last.name);
  return cb((arr[arr.length -1]));
}
last(items, li => console.log(li));

function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
  console.log(sumNums.name);
  return cb(x+y);
}
sumNums(2,3, input => console.log(input));

function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
  console.log(multiplyNums.name);
  return cb(x * y)

}

multiplyNums(2,2, product => console.log(product));


function contains(item, list, cb) {
  return cb(list.includes(item));
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
}
console.log(contains.name);
contains('Pencil',items, x => console.log(x));

/* STRETCH PROBLEM */

const dupe = ['Pencil','Pencil', 'Notebook', 'yo-yo', 'Gum'];

function unique(value,index,arr){
  return arr.indexOf(value) === index;}

clean = dupe.filter(unique);
console.log(clean);

  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.

