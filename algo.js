//!
//! Linear search
/*

const array = [1, 4, 5, 8, 5, 1, 2, 7, 5, 2, 11];
function linearSearch(array, item) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === item) {
      return i;
    }
  }
  return null;
}
console.log(linearSearch(array, 2));
*/

//Binary search
/*

const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
let count = 0;

function binarySearch(array, item) {
  let start = 0;
  let end = array.length;
  let middle;
  let found = false;
  let position = -1;
  while (found === false && start <= end) {
    count += 1;
    middle = Math.floor((start + end) / 2);
    // console.log(middle);
    if (array[middle] === item) {
      found = true;
      position = middle;
      return position;
    }
    if (item < array[middle]) {
      end = middle - 1;
    } else {
      start = middle + 1;
    }
  }
  return position;
}

console.log(binarySearch(array, 17));
console.log(count);
*/
//SelectionSort
/*
const array = [0, 3, 2, 5, 6, 8, 1, 9, 4, 2, 1, 2, 9, 6, 4, 1, 7, -1, -5, 23, 6, 2, 35, 6, 3, 32]
let count = 0

function selectionSort(array) {
  for (let i = 0; i < array.length; i++) {
    let indexMin = i
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[indexMin]) {
        indexMin = j
      }
      count += 1
    }
    let temp = array[i]
    array[i] = array[indexMin]
    array[indexMin] = temp
  }
  return array
}

console.log(selectionSort(array))
console.log(("count = ", count))
*/
