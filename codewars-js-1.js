'use strict';

//! code wars sum of cubes

// const fn = (n) => {
//   let res = 0
//   for (let i = 1; i <= n; i++) {
//     res = res + i ** 3
//   }
//   return res
// }

// console.log(fn(3))

// let arr = [
//   [7, 9, 8, 6, 2],
//   [6, 3, 5, 4, 3],
//   [5, 8, 7, 4, 5],
// ]

// let arrTwo = [
//   [11, 12, 14, 54],
//   [67, 89, 90, 56],
//   [7, 9, 4, 3],
//   [9, 8, 6, 7],
// ]

// let res = 0
// let arrSort = arr.map((el) => {
//   return el.sort((a, b) => a - b)
//   //   res += el[0]
//   //   console.log(res)
// })

// let str1 = '123'
// let arrr = [1, 2, 3, 4]
// console.log(arrr.length)
// arrr.length = 2
// console.log(arrr)

// res = arrSort.reduce((acc, el, arr) => {
//   return (acc += el[0])
// }, 0)

// console.log(res)

// let res = 0
// const fn = (arr) =>
//   arr
//     .map((el) => el.sort((a, b) => a - b))
//     .reduce((acc, el, arr) => {
//       return (acc += el[0])
//     }, 0)

// console.log(fn(arrTwo))

// ! Trimming a string

//!    counter elements of Array
// let arr = [0, 1, 2, 2, 3]
// let res = {}
// const fn = (el) => {
//   let arr = [0, 1, 2, 2, 2, 2, 2, 3]
//   let counter = 0
//   for (let i = 0; i <= arr.length; i++) {
//     if (arr[i] === el) {
//       ++counter
//     }
//   }
//   return counter
// }

// console.log(fn(1))

//! toWeirdCase( "String" );//=> returns "StRiNg"

// let str = 'Weird string case'

// // console.log(str.split(' '))
// let arrStr = str.split(' ')
// // console.log(arrStr.length)
// let resThree
// if (arrStr.length > 1) {
//   let res = arrStr.map((el, i) => {
//     return el.split('')
//   })
//   let resTwo = []
//   for (let i = 0; i < res.length; i++) {
//     let array = []
//     res[i].map((el, ind) => {
//       if (ind % 2 === 0) {
//         array.push(el.toUpperCase())
//       } else {
//         array.push(el)
//       }
//     })
//     resTwo.push(array)
//   }

//   console.log(resTwo.map((el) => el.join('')).join(' '))
// }

// !

// let res = []

// res = str.split('').map((el, i) => {
//   if (i % 2 === 0) {
//     return el.toLocaleUpperCase()
//   }

//   if (el[i] === ' ') {
//     console.log(el[i])
//   }

//   return el
// })

// console.log(res)

// console.log(res.join(''))

// function toWeirdCase(str) {
//   // console.log(str.split(' '))
//   let arrStr = str.split(' ')
//   // console.log(arrStr.length)
//   let resThree

//   let res = arrStr.map((el, i) => {
//     return el.split('')
//   })
//   let resTwo = []
//   for (let i = 0; i < res.length; i++) {
//     let array = []
//     res[i].map((el, ind) => {
//       if (ind % 2 === 0) {
//         array.push(el.toUpperCase())
//       } else {
//         array.push(el)
//       }
//     })
//     resTwo.push(array)
//   }

//   return resTwo.map((el) => el.join('')).join(' ')
// }

// console.log(toWeirdCase('This'))

// [-1, 1, 2, 3, -3, 4, -5]
// let arr = [-1, 1, 2, 3, -3, 4, -5]

// let res = arr.reduce((acc, el) => {
//   if (el > 0) {
//     acc.push(el)
//   }
//   return acc
// }, [])

// console.log(res)

// const twoSum = (nums, target) => {
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       if (nums[i] + nums[j] === target) {
//         return [i, j]
//       }
//     }
//   }
// }

// !Convert Hash To An Array
// Convert Hash To An Array

// const obj = { name: 'Jeremy', age: 24, role: 'Software Engineer' }

// let objValues = Object.values(obj)
// let objKeys = Object.keys(obj)
// console.log(objKeys.sort())

// let res = []

// for (let i = 0; i < objKeys.length; i++) {
//   let arr = []
//   if (typeof objValues[i] === 'number') {
//     arr.push(`${objKeys[i]}`) && arr.push(objValues[i])
//   } else {
//     arr.push(`${objKeys[i]} `, `${objValues[i]}`)
//   }

//   res.push(arr)
// }

// console.log(res.sort())

// !add LENGTH

// "apple ban" --> ["apple 5", "ban 3"]
// "you will win" -->["you 3", "will 4", "win 3"]

// let str = 'you will win'
// let strArr = str.split(' ')
// console.log(strArr)
// let wordLength = []
// let res = []
// for (let i = 0; i < strArr.length; i++) {
//   wordLength.push(strArr[i].length)
//   res.push(`${strArr[i]}  ${strArr[i].length}`)
// }

// console.log(res)

// !
// let arr = [34, 15, 88, 2]
// let arrTwo = [34, -345, -1, 100]

// console.log(arr.sort((a, b) => a - b)[0])
// console.log(arrTwo.sort((a, b) => a - b)[0])

// !Filter out the geese
// let getArr = ['Mallard', 'Hook Bill', 'African', 'Crested', 'Pilgrim', 'Toulouse', 'Blue Swedish']

// let geeseArr = ['African', 'Roman Tufted', 'Toulouse', 'Pilgrim', 'Steinbacher']

// console.log(getArr.includes('African'))

// const fn = (arr1, arr2) => {
//   return getArr.filter((el, i, arr) => !geeseArr.includes(el))
// }

// console.log(getArr)
// console.log(fn(getArr, geeseArr))

// !

// const hello = {
//   name: 'Vadim',
//   age: 24,
//   sayHi: function () {
//     console.log(`Hello, my name is ${this.name}`)
//   },
// }

// hello.sayHi()

// !8 kyu Sum of positive

// [1,-4,7,12] => 1 + 7 + 12 = 20

// let arr = []
// let res = arr.reduce((acc, item, ind, arr) => {
//   item > 0 ? (acc += item) : null

//   return acc
// }, 0)

// console.log(res)

//! 8 kyu Square(n) Sum

// [1, 2, 2] ---> 9
// let arr = [1, 2, 2]

// let res = arr.reduce((acc, item) => {
//   acc += item ** 2
//   return acc
// }, 0)

// console.log(res)

//! Counting sheep...

// let arr = [true, true, true, false, true, true, true, true, true, false, true, false, true, false, false, true, true, true, true, true, false, false, true, true]
// console.log(arr[3] === false)

// let res = arr.reduce((acc, el) => {
//   if (el === true) {
//     acc.push(el)
//     return acc
//   }
//   return acc
// }, [])

// console.log(res.length)

//!Convert number to reversed array of digits

//35231 => [1,3,2,5,3]

// let a = 35231
// let str = String(a)
// console.log(str.split('').sort())

// const fn = (a) => {
//   let str = String(a)
//   return str.split('').reverse().map(Number)
// }

// console.log(fn(35231))

// ! A Needle in the Haystack

// let arr = ['hay', 'junk', 'hay', 'hay', 'moreJunk', 'needle', 'randomJunk']
// console.log(arr.indexOf('hay'))

// let res = arr.reduce((acc, el, i) => {
//   el === 'needle' ? (acc = i) : null
//   return acc
// }, 0)

// console.log(res)

// ! Count of positives / sum of negatives

//[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]

// let arr = [1, 88, -44, -68, 99, -83, -9, -50, -91, 87, 39, 30, 82, 87, -54, -88, -47, 98, 73, 67, -6, -55, 81, -13, -66, -34, -52, 85, 50, 65, 31, 82, -82, 23, 91, -60, 12, 88, -57, 70, 18, 94, -53, -73, -44, -43, -32, -22, -76, 88, -4, 79, 65, -24, 43, 20, 90]
// let arrFilt = arr.filter((el) => el !== 0)
// console.log(arrFilt)

// let resArr = []

// // if (el === 0) {
// //   return acc
// // }
// let resPos = arr.reduce((acc, el, ind) => {
//   if (el > 0) {
//     return (acc = acc + 1)
//   }
//   return acc
// }, 0)

// let resNeg = arr.reduce((acc, el, ind) => {
//   if (el < 0) {
//     return (acc += el)
//   }
//   return acc
// }, 0)

// console.log(resNeg)

// resArr.push(resPos)
// resArr.push(resNeg)

// console.log(resArr)

// !
// camelize("background-color") == 'backgroundColor';
// camelize("list-style-image") == 'listStyleImage';
// camelize("-webkit-transition") == 'WebkitTransition';

// let str = '-webkit-transition'
// let str = 'list-style-image'
// // let str = 'background-color'

// let arrStr = str.split('')
// // console.log(arrStr)
// // console.log(arrStr[3].toLocaleUpperCase())

// for (let i = 0; i < arrStr.length; i++) {
//   if (arrStr[i] === '-') {
//     arrStr.splice(i, 1)
//     arrStr.splice(i, 1, arrStr[i].toLocaleUpperCase())
//   }
// }

// console.log(arrStr.join(''))

//!

// let arr = [5, 3, 8, 1]

// const filterRange = (arr, a, b) => {
//   // let res = []
//   let res = arr.filter((el, i) => el >= a && el <= b)
//   return res
// }

// console.log(filterRange(arr, 1, 4))
// console.log(arr)

//!

// let arrA = [5, 3, 8, 1]

// const filterRangeInPlace = (arr, a, b) => {
//   return arr.reduce((acc, el, ind) => {
//     if (el <= b && el >= a) {
//       acc.push(el)
//     }
//     return acc
//   }, [])
// }

// console.log(filterRangeInPlace(arrA, 1, 4))
// console.log(arrA)

// ! SET REDUCER 8KUY

// let arr = [2, 4, 9, 2, 1, 1, 1, 1]
// let arr = [2, 9, 4, 3, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1]
// let arr = [0, 4, 6, 8, 8, 8, 5, 5, 7]

// let res = []
// let counter = 0

// // if (arr[i] === arr[i + 1] || arr[i] === arr[i - 1]) {
// //   counter += 1
// // }
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] !== arr[i + 1] && arr[i] !== arr[i - 1]) {
//     res.push(1)
//   }
//   // if (arr[i] === arr[i + 1] || arr[i] === arr[i - 1]) {
//   //   counter++
//   //   arr.splice(i, i + 1, counter)
//   // }
//   if (arr[i] === arr[i + 1]) {
//     counter++
//     console.log(counter)
//     if (arr[i + 1] !== arr[i + 2]) {
//       res.push(counter + 1)
//       counter = 0
//     }
//   }
// }
// // res.push(counter)
// // res.push(counter)
// // console.log(counter)

// console.log(res)

// const setReducer = (arr) => {
//   let res = []
//   let counter = 0

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] !== arr[i + 1] && arr[i] !== arr[i - 1]) {
//       res.push(1)
//     }
//     if (arr[i] === arr[i + 1]) {
//       counter++
//       if (arr[i + 1] !== arr[i + 2]) {
//         res.push(counter + 1)
//         counter = 0
//       }
//     }
//   }
//   console.log(res)

//   return res.length === 1 ? res[0] : res.length !== 1 ? setReducer(res) : res
// }

// console.log(setReducer([2, 4, 4, 6, 2, 1, 1, 5, 6, 7, 8, 8, 8, 8, 9, 0, 1, 1, 5, 4, 4]))

// !  Largest Elements 7kyu

// let arr = [7, 6, 5, 4, 3, 2, 1]

// let arrSotr = arr.sort((a, b) => b - a)
// console.log(arrSotr)

// ! zipWith( Math.pow, [10,10,10,10], [0,1,2,3] )      =>  [1,10,100,1000]

// const zipWith = (fn, arr1, arr2) => {
//   let arg = [...arguments]
//   console.log(typeof arg[0])

//   let res = []
//   console.log(String(fn) === '(a, b) => a + b')

//   if (fn === Math.pow) {
//     for (let i = 0; i < arr1.length; i++) {
//       res.push(arr1[i] ** arr2[i])
//     }
//     return res
//   }
//   if (fn === Math.max) {
//     for (let i = 0; i < arr1.length; i++) {
//       arr1[i] > arr2[i] ? res.push(arr1[i]) : res.push(arr2[i])
//     }
//     return res
//   }
// }

// console.log(zipWith((a, b) => a + b, [0, 2, 2, 3], [0, 1, 2, 3]))

//!

// function name(fn, arr1, arr2) {
//   console.log(arguments[2])

//   if (
//     String(fn) ===
//       `function (a, b) {
//         return a + b
//       }` ||
//     String(fn) === '(a, b) => a + b'
//   ) {
//     for (let i = 0; i < arr1.length; i++) {
//       res.push(arr1[i] + arr2[i])
//     }
//     return res
//   }
// }

// console.log(name(((a + b) => a + b), arr1, arr2))
//! COMBINE OBJECTS
// const objA = { a: 10, b: 20, c: 30 }
// const objB = { a: 3, c: 6, d: 3 }
// const objC = { a: 5, d: 11, e: 8 }
// const objD = { c: 3 }

// const combine = (objA, objB) => {
//   let res = {}
//   let objOneKeys = Object.keys(objA)
//   let objTwoKeys = Object.keys(objB)
//   console.log(objOneKeys, objTwoKeys)
//   let identificateKeys = objOneKeys.filter((el) => !objTwoKeys.includes(el))
//   console.log(identificateKeys)
//   res[identificateKeys] = objA[identificateKeys]
//   console.log(res)
// }

// console.log(combine(objA, objB))

//!
// console.log('hello world!')

// 1, 1, 2, 3,5,8,13,21

// const fn = (n) => {
//   console.log(n)

//   if (n === 1 || n === 2) return 1

//   return fn(n - 1) + fn(n - 2)
// }

// console.log(fn(6))

//5_3

//? 8KUY CHUNKS
/* const arr = [1, 2, 3, 4]

function eachCons(array, n) {
  let res = []

  for (let i = 0; i <= array.length - n; i++) {
    console.log(arr[i])

    let chunk = []
    for (let j = i; j < i + n; j++) {
      console.log('arr[j]' + arr[j])

      chunk.push(array[j])
    }
    res.push(chunk)
  }

  return res
}

console.log(eachCons([1, 2, 3, 4], 3)) */

//? 7 KYU How many are smaller than me? ++++

// const arr = [5, 4, 3, 2, 1]  ---

// * Input [5, 4, 3, 2, 1] => Output [4, 3, 2, 1, 0]
// * Input [1, 2, 0] => Output [1, 1, 0]

// const arr = [1, 2, 0]

// function smaller(arr) {
//   let res = []
//   let counter = 0
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[i] > arr[j]) counter++
//     }
//     res.push(counter)
//     counter = 0
//   }

//   return res
// }

// const arr = [1,2,3,4,5,6]
// console.log(arr);

//1,2,3,4,5,6
//      7,7,7,7,7,7
//[[1,2,3,4,5,6], [7,7,7,7,7,7]], 3

// const arr = [[1,2,3,4,5,6], [7,7,7,7,7,7]]
// let res = []
// for (let i = 0; i < arr.length; i++){
//
//         for (let j = 0; j < arr[i].length - 3; j++){
//                 res.push(arr[i][j])
//         }
//
// }
//
// console.log(res);

//248+208

// let n1 = 1236
// let n2 = 30977

// let n1 = 49999
// let n2 = 49999
//
// // let str1 =
// // let str2 =
// let arr1 = n1.toString().split('')
// let arr2 = n2.toString().split('')
// let res = []
// if (arr1.length < arr2.length) {
//         for (let i = 0; i < arr2.length - arr1.length; i++){
//                 arr1.unshift('0')
//         }
// } else {
//         for (let i = 0; i < arr1.length - arr2.length; i++){
//                 arr2.unshift('0')
//         }
// }
//
// for (let i = 0; i < arr1.length; i++) {
//         res.push(+arr1[i] + +arr2[i])
// }
// console.log(arr1, arr2, res.join(''));

//minMinMax([-1, 4, 5, -23, 24]); //[-23, -22, 24]
// minMinMax([1, 3, -3, -2, 8, -1]); //[-3, 0, 8]
// minMinMax([2, -4, 8, -5, 9, 7]); //[-5, -3,9]

// const fn = arr => {
//     const arrSort = arr.sort((a,b) => a -b)
//     let min =  Math.min(...arr)
//     let max = Math.max(...arr)
//     let minimumAbsent = 0;
//         for (let i = min; i < max; i++){
//                 if (!arrSort.includes(i)) return [min, i, max]
//         }
//
// }
//
// console.log(fn([-1, 4, 5, -23, 24]))

//KATA Kuy 6  Complete with bad Algoritmics

// const arr = [24, 25, 34, 40, 38, 26, 33, 29, 50, 31, 33, 56, 35, 36, 53, 49, 57, 27, 37, 40, 48, 44, 32, 35, 45, 52, 43, 47, 26, 51, 55, 28, 41, 42, 46, 51, 25, 30, 44, 54]
//
// let arrMax = Math.max(...arr)
// let arrMin = Math.min(...arr)
//
// // console.log(arrMax, arrMin);
// let res = []
// const ret = []
// for (let i = arrMin; i < arrMax; i++) {
//     res.push(i)
// }
//
// console.log(res);
//
// const findElem = res.filter(el => !arr.includes(el))[0]
// console.log(findElem);
// const arrDuplicatesSort = arr.reduce((acc, el, item) => {
//     acc[el] = (acc[el] || 0) + 1
//     return acc
// }, {})
// console.log(arrDuplicatesSort);
//
// const appDuplicatesResult = []
// for (let key in arrDuplicatesSort) {
//     if (arrDuplicatesSort[key] === 2) {
//         appDuplicatesResult.push(Number(key))
//
//     }
// }
// console.log(appDuplicatesResult);
//
// ret.push(findElem)
// ret.push(appDuplicatesResult)
// // https://www.codewars.com/kata/5a5cdb07fd56cbdd3c00005b/train/javascript
// console.log(ret);

// Kata

// const lastDigit = function (str1, str2) {
//     let res = String(Number(str1 ** str2) / 1e10000).split('')
//     let resTwo = Number(res[res.length - 1])
//     console.log(res, resTwo);
// }
//
// console.log(lastDigit("10","10000000000"));

/*console.log();

const countBits = function (n) {
  let int = n.toString(2).split("");
  let res = int.reduce((acc, el) => {
    if (el === "1") {
      acc += 1;
    }
    return acc;
  }, 0);
  console.log(res);
};

console.log(countBits(7));

const arr = [1, 2, 3, 4];
console.log(arr);*/

// ! TIMES KATA Kuy 6
/*const fn = (angle) => {
  const time = Math.floor(angle * 2);
  const hours = Math.floor(time / 60);
  const minutes = time - hours * 60;
  const hoursRes = hours === 0 ? 12 : hours < 10 ? `0${hours}` : hours;
  const minutesRes = minutes < 10 ? `0${minutes}` : minutes;
  return `${hoursRes}:${minutesRes}`;
};

console.log(fn(303.8162007416806));*/

//! KATA 6kuy Lottery tikets

/*assert.strictEqual(bingo([['ABC', 65], ['HGR', 74], ['BYHT', 74]], 2), 'Loser!');
  assert.strictEqual(bingo([['ABC', 65], ['HGR', 74], ['BYHT', 74]], 1), 'Winner!');
  assert.strictEqual(bingo([['HGTYRE', 74], ['BE', 66], ['JKTY', 74]], 3), 'Loser!'); */

/*const arr = [['ABC', 65], ['HGR', 74], ['BYHT', 74],]

// console.log(arr[1][0].charCodeAt(2));

function bingo(arr, win) {
  let res = arr.reduce((acc, el, ind) => {
    for (let i = 0; i < el[0].length; i++) {
      if (el[0].charCodeAt(i) === el[1]) {
        acc += 1
      }
      // if (acc >= 1) continue;
    }
    console.log(acc)
    return acc
  }, 0)
  return res >= win ? 'Winner!' : 'Loser!'
}

console.log(bingo([['TOAQLC', 65], ['FCND', 74], ['LIB', 84], ['VIDIZTSA', 73], ['CR', 87]], 3))*/

// ! 6Kuy KATA array + 1
// zaputalsya
/*const arr = [4, 3, 2, 5]

// console.log(arr.join(''));

function upArray(arr) {
  let resTwo = []
  let res = []

  if (arr[0] === 0) {

    res = (Number(arr.join('')) + 1)
    console.log(res);
    resTwo = String(res).split('')
    resTwo.unshift('0')

    return resTwo.map(el => Number(el))

  }
  res = (Number(arr.join('')) + 1)
  console.log(res);
  resTwo = String(res).split('')
  console.log(resTwo);
  return String(res).split('').map(el => Number(el))
}

console.log(upArray([0,8]));*/

//! RGB KATA 5KUy
/*
let a = '2'
console.log(a.toString(16));
// console.log(a.charCodeAt(1));
let acc = 0
for (let i = 0; i < a.length; i++) {
  Number()
  acc += a.charCodeAt(i)
}
console.log(acc);*/

//! BINGO Kata 6Kuy

/*function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //???????????????? ?? ?????????????? ????????????????????
}

function getCard() {
  let res = []
  for (let i = 0; i < 5; i++) {
    let r=`B${getRandomIntInclusive(1,15)}`
    if (!res.includes(r)){
      res.push(r)
    } else {
      i--
    }
  }

  for (let i = 5; i < 10; i++) {
    let r=`I${getRandomIntInclusive(16,30)}`
    if (!res.includes(r)){
      res.push(r)
    } else {
      i--
    }
  }

  for (let i = 10; i < 12; i++) {
    let r=`N${getRandomIntInclusive(31,45)}`
    if (!res.includes(r)){
      res.push(r)
    } else {
      i--
    }
  }

  // res.push('FREE SPACE')

  for (let i = 14; i < 16; i++) {
    let r=`N${getRandomIntInclusive(31,45)}`
    if (!res.includes(r)){
      res.push(r)
    } else {
      i--
    }

  }

  for (let i = 15; i < 20; i++) {
    let r=`G${getRandomIntInclusive(46,60)}`
    if (!res.includes(r)){
      res.push(r)
    } else {
      i--
    }
  }

  for (let i = 20; i < 25; i++) {
    let r=`O${getRandomIntInclusive(61,75)}`
    if (!res.includes(r)){
      res.push(r)
    } else {
      i--
    }
  }

  return res
}

console.log(getCard());*/

// KATA 8Kuy
/*function findAverage(array) {
  if (array.length === 0) {
    return 0
  }
  let res = array.reduce((acc,el) => {
    acc += el
    return acc / 2
  }, 0)
  return Math.round(res);
}

console.log(findAverage([6,93,82]));*/

//! Kata 7 kuy

/*
'Jack Ryan'                   => 'Jack Ryan'
'Lois Mary Lane'              => 'Lois M. Lane'
'Dimitri'                     => 'Dimitri'
'Alice Betty Catherine Davis' => 'Alice B. C. Davis'
*/
/*function initializeNames(name){
  let res = name.split(' ')
  console.log(res)
  console.log(res.length);

  if (res.length === 1 || res.length === 2) return name
  if (res.length > 2){
    // console.log('ku')
    for (let i = 1; i <= res.length - 2; i++){
      res.splice(i,1, `${res[i][0]}.`)
    }
    return res.join(' ')
  }

}

console.log(initializeNames('Jack Ryan Black Stack'));*/

//! KATA 7 Kuy

/* function arraySum(arr) {
  let acc = 0
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'number') {
      acc += arr[i]
    } else if (typeof arr[i] === 'object') {
      acc += arraySum(arr[i])
    }
  }
  return acc
}

console.log(arraySum([1, 2, 3, 'hello'])) */

//! 6KUy KATA ARRAY
/*
[7, 1]  =>  [1, 7]
[5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
[9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]
*/

//! 6Kuy KATA  ?????????????????????? ????????????????????
/* function sortArray(array) {
  for (let first = 0; first < array.length; first++) {
    for (let second = first; second < array.length; second++) {
      if (array[first] % 2 !== 0 && array[second] % 2 !== 0 && array[first] > array[second]) {
        let temp = array[first]
        array[first] = array[second]
        array[second] = temp
      }
    }
  }
  return array
}

console.log(sortArray([33, 47, 23, -48, -27, -20, 19, -47, 42, 21])) */

/* let arr = [33, 47, 23, -48, -27, -20, 19, -47, 42, 21]

for (let first = 0; first < arr.length; first++) {
  for (let second = first; second < arr.length; second++) {
    if (arr[first] > arr[second]) {
      let temp = arr[first]
      arr[first] = arr[second]
      arr[second] = temp
    }
  }
}

console.log(arr) */
/*
const arr = [2, 3, 1, 8, 7, 9, 11, 10]

for (let first = 0; first < arr.length; first++) {
  for (let second = first; second < arr.length; second++) {
    if (arr[first] > arr[second]) {
      let temp = arr[first]
      arr[first] = arr[second]
      arr[second] = temp
    }
  }
}

console.log(arr)
*/

//!
/*
const arr = [1, 0]
function explode(x) {
   let res = []
   if (x.every(el => typeof el !== 'number')) {
      return 'Void!'
   }
   if (typeof x[0] === 'number' && typeof x[1] === 'number') {
      for (let i = 0; i < x[0] + x[1]; i++) {
         res.push(x)
      }
   }
   if (typeof x[0] === 'number' && typeof x[1] !== 'number') {
      for (let i = 0; i < x[0]; i++) {
         res.push(x)
      }
   }
   if (typeof x[1] === 'number' && typeof x[0] !== 'number') {
      for (let i = 0; i < x[1]; i++) {
         res.push(x)
      }
   }
   return res
}
console.log(explode(arr));
*/

//! 6Kuy KATA Create Four Letter Birding Codes from Bird Names
// https://www.codewars.com/kata/5a580064e6be38fd34000147/train/javascript
// ["Black-Capped Chickadee", "Common Tern"] ---> ["BCCH", "COTE"]
/*
const arr = ['Birdname']

function birdCode(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]) {
    }
  }
}

console.log(birdCode())

const arr = [1, 2, 3, 4, 5, 6]
*/

//! 6Kuy KATA
/*
const arr1 = [1, 2, 2, 3, 4], arr2 = [2, 1, 2, 4, 3], arr3 = [1, 2, 3, 4], arr4 = [1, 2, 3, "4"]

function arraysSimilar(arr1, arr2) {
   if (arr1.length === arr2.length) {
      return arr1.every(el => arr2.includes(el))
   }
   if (arr1.length > arr2.length) {

      return arr2.every(el => arr1.includes(el))
   }
}

console.log(arraysSimilar([2, 1, 2, 4, 3], [1, 1, 2]));
*/

/*
const obj = {
  name: 'Vadim',
  age: 23,
  city: 'Vitebsk',
  status: 'Merried',
  getName() {
    console.log(this.name)
  },
  setName(value) {
    this.name = value
  },
}

obj.getName()
obj.setName('Oleg')
obj.getName()
*/
/*
function User(name, age) {
  this.name = name;
  this.age = age;
}
const obj = {
  name: "Vadim",
  age: 25,
  hometown: {
    country: "Belarus",
    city: "Vitebsk",
  },
  status: "merried",
  hobby: "sport,fishing,IT",
};
let user = new User("Vadim", 25);
console.log(obj);
const arr = [
  [1, 2, 3],
  [1, 2, 3],
  [1, 2, 3],
  [1, 2, 3],
  [1, 2, 3],
  [1, 2, 3],
  [1, 2, 3],
  [1, 2, 3],
];
console.log(arr);
*/

/* const arr = [
  [2, 3],
  [7, 2],
  [9, 20],
];

const searchArray = (arrayToSearch, query) => {
  console.log(arrayToSearch, query);
  let arrTwo = arrayToSearch.map((el) => el.join(""));
  if (!Array.isArray(query)) {
    return "throw Error";
  }
  if (query.length > 2) {
    return "throw Error";
  }
  for (let i = 0; i < arrayToSearch.length; i++) {
    if (arrayToSearch[i].length > 2) {
      return "throw Error";
    }
  }
  let findEl = query.join("");
  for (let i = 0; i < arrTwo.length; i++) {
    if (arrTwo[i] === findEl) {
      return i;
    }
  }
  return -1;
};

console.log(
  searchArray(
    [
      [2, 3],
      [7, 2],
      [9, 20],
      [1, 2],
      [7, 2],
      [45, 4],
      [7, 87],
      [4, 5],
      [2, 7],
      [6, 32],
    ],
    7
  )
);

console.log();

const array = []; */

//* 6 kyu Which filetypes are you using the most?
//* https://www.codewars.com/kata/5c7254fcaccda64d01907710/train/javascript

/*function solve(files) {
    const arr = [];

    const count = {};
    for (let k = 0; k < files.length; k++) {
        let find = [];

        for (let i = files[k].length - 1; i > 0; i--) {
            find.unshift(files[k][i]);
            if (files[k][i] === '.') {
                break;
            }
        }
        let format = find.join('');
        count[format] = count[format] ? (count[format] += 1) : 1;
        console.log(format);
    }
    const res = [];
    let mount = Math.max(...Object.values(count));
    for (let key in count) {
        if (count[key] === mount) {
            res.push(key);
        }
    }

    return res.sort();
}

const files = [
    'Lakey - Better days.mp3',
    'Wheathan - Superlove.wav',
    'groovy jam.als',
    '#4 final mixdown.als',
    'album cover.ps',
    'good nights.mp3',
];

console.log(solve());*/

//! Kata
// https://www.codewars.com/kata/5f631ed489e0e101a70c70a0/train/javascript
// ???????????????? //?????????? ????????????????????
/*const tourney = array => {
    if (res.length === 1)
    const res = [];

    for (let i = 0; i < array.length; i++) {
        if (array[i] > array[i + 1]) {
            res.push(array[i]);
            i++;
        } else {
            res.push(array[i + 1]);
            i++;
        }
    }
    return res; // your code here...
};

const input = [9, 5, 4, 7, 6, 3, 8, 2];

/!*for (let i = 0; i < input.length; i++) {
    if (input[i] > input[i + 1]) {
        res.push(input[i]);
        i++;
    } else {
        res.push(input[i + 1]);
        i++;
    }
}*!/

console.log(tourney(input));*/

/*
function high(str) {
    const alphabet = {
        a: 1,
        b: 2,
        c: 3,
        d: 4,
        e: 5,
        f: 6,
        g: 7,
        h: 8,
        i: 9,
        j: 10,
        k: 11,
        l: 12,
        m: 13,
        n: 14,
        o: 15,
        p: 16,
        q: 17,
        r: 18,
        s: 19,
        t: 20,
        u: 21,
        v: 22,
        w: 23,
        x: 24,
        y: 25,
        z: 26,
    };

    const elementcount = {};
    str = str.split(' ');
    str.map(el => {
        let count = 0;
        for (let i = 0; i < el.length; i++) {
            count += alphabet[el[i]];
        }
        elementcount[el] = count;
    });
    let preRes = Math.max(...Object.values(elementcount));
    console.log(preRes);
    console.log(elementcount);
    for (let key in elementcount) {
        if (elementcount[key] === preRes) return key;
    }
    // return str;
}

console.log(high('man i need a taxi up to ubud'));
*/

//6 kyu
// Mexican Wave
// https://www.codewars.com/kata/58f5c63f1e26ecda7e000029/train/javascript
// ????????????????
// wave("hello") => ["Hello", "hEllo", "heLlo", "helLo", "hellO"]

/*function wave(str) {
    str = str.split('');
    const res = [];
    let count = str.reduce((acc, el) => {
        if (el !== ' ') {
            acc++;
        }
        return acc;
    }, 0);
    console.log(count);
    for (let i = 0; i < count; i++) {
        const newStr = Array.from(str);
        res.push(newStr);
    }
    console.log(res.length);
    label: for (let i = 0; i < res.length; i++) {
        if (res[i][i] === ' ') {
            i++;
        } else {
            res[i].splice(i, 1, res[i][i].toUpperCase());
        }
    }
    return res.map(el => el.join(''));
}

console.log(wave('two words'));*/

/*function wave(str) {
    let waveArr = [];
    for (let i = 0; i < str.length; i++) {
        let letter = str[i];
        if (letter === ' ') {
            continue;
        } else {
            waveArr.push(str.slice(0, i) + letter.toUpperCase() + str.slice(i + 1));
        }
    }
    return waveArr;
}

console.log(wave('hello'));*/

/*
function wave(str) {
    let waveArr = [];
    for (let i = 0; i < str.length; i++) {
        let copy = str.split('');
        if (copy[i] !== ' ') {
            copy[i] = copy[i].toUpperCase();
            waveArr.push(copy.join(''));
        }
    }
    return waveArr;
}

console.log(wave(' gap '));
*/

//! 6 kuy https://www.codewars.com/kata/534d2f5b5371ecf8d2000a08/train/javascript
/* const multiplicationTable = function (size) {
    const table = [];
    for (let row = 1; row <= size; row++) {
        const line = [];
        for (let col = 1; col <= size; col++) {
            line.push(row * col);
        }
        table.push(line);
    }
    return table;
};

console.log(multiplicationTable(3)); */

/*function multiPly(size) {
    const table = [];
    for (let row = 1; row <= size; row++) {
        const line = [];
        for (let col = 1; col <= size; col++) {
            line.push(row * col);
        }
        table.push(line);
    }
    return table;
}

console.log(multiPly(3));*/

// https://www.codewars.com/kata/isograms 7kuy

/* function isIsogram(str) {
    str = str.toLowerCase();
    const countOfEl = {};
    for (let i = 0; i < str.length; i++) {
        countOfEl[str[i]] = countOfEl[str[i]] ? (countOfEl[str[i]] += 1) : 1;
    }
    for (let key in countOfEl) {
        if (countOfEl[key] > 1) {
            return false;
        }
    }

    return true;
}

console.log(isIsogram('Dermatoglyphics')); */

//  312 --> "333122"
/* function explode(str) {
    const res = [];
    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < str[i]; j++) {
            res.push(str[i]);
        }
    }
    return res.join('');
}

console.log(explode('312')); */

// TODO https://www.codewars.com/kata/5574835e3e404a0bed00001b/train/javascript

/* function getParticipants(h) {
    const res = Math.ceil((Math.sqrt(1 + 8 * h) + 1) / 2);
    return res;
}

console.log(getParticipants(7)); */

//TODO fibb

/*const fn = n => {
    if (n === 0 || n === 1) {
        return n;
    } else {
        return fn(n - 1) + fn(n - 2);
    }
};*/

// console.log(fn(5));

/*function fib(n) {
    let a = 0;
    let b = 1;
    for (let i = 3; i <= n; i++) {
        let c = a + b;
        a = b;
        b = c;
    }
    return b;
}

console.log(fib(7));*/

// TODO 7 kyu https://www.codewars.com/kata/head-tail-init-and-last
/*
const arr = [1, 2, 3, 4, 5];

const head = arr => {
    return arr[0];
};

const tail = arr => {
    const res = [];
    for (let i = 1; i < arr.length; i++) {
        res.push(arr[i]);
    }
    return res;
};

const init = arr => {
    const res = [];
    for (let i = 0; i < arr.length - 1; i++) {
        res.push(arr[i]);
    }
    return res;
};

const last = arr => {
    return arr[arr.length - 1];
};

console.log(head(arr));
console.log(tail(arr));
console.log(init(arr));
console.log(last(arr));
*/

//TODO 6 kyu https://www.codewars.com/kata/array-deep-count
/*let count = 0;
function deepCount(arr) {
    for (let i = 0; i < arr.length; i++) {
        count++;
        if (Array.isArray(arr[i])) {
            deepCount(arr[i]);
        }
    }
    return count;
}

console.log(deepCount([[[[[[[[[]]]]]]]]]));*/

/*function deepCount(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        count++;
        if (Array.isArray(arr[i])) {
            count += deepCount(arr[i]);
        }
    }
    return count;
}

console.log(deepCount([[[[[[[[[]]]]]]]]]));*/

//TODO  6 kyu https://www.codewars.com/kata/length-of-missing-array

/*const arr = [[1, 2], [4, 5, 1, 1], [1], [5, 6, 7, 8, 9]];

function getLengthOfMissingArray(arrayOfArrays) {
    if (arrayOfArrays.length === 0) {
        return 0;
    }
    const res = arrayOfArrays.sort((a, b) => a.length - b.length);
    console.log(arrayOfArrays);
    for (let i = 0; i < res.length; i++) {
        if (res[i].length === 0) {
            return 0;
        }
        if (res[i + 1].length !== res[i].length + 1) {
            return res[i + 1].length - 1;
        }
    }
}

console.log(getLengthOfMissingArray([[1, 2, 2], null]));*/

// TODO 6 kyu https://www.codewars.com/kata/pair-of-gloves

/*function numberOfPairs(gloves) {
    let count = 0,
        objOfEls = {};
    for (let i = 0; i < gloves.length; i++) {
        objOfEls[gloves[i]] = objOfEls[gloves[i]] ? (objOfEls[gloves[i]] += 1) : 1;
    }
    for (let key in objOfEls) {
        if (objOfEls[key] >= 2) {
            count += Math.floor(objOfEls[key] / 2);
        }
    }
    return count;
}

console.log(
    numberOfPairs([
        'Red',
        'Blue',
        'Navy',
        'Aqua',
        'Fuchsia',
        'Lime',
        'Silver',
        'Aqua',
        'Yellow',
        'Lime',
        'Silver',
        'Aqua',
        'White',
        'Blue',
        'Red',
        'Maroon',
        'Yellow',
        'Green',
        'Blue',
        'Lime',
        'Aqua',
        'White',
        'Green',
        'Yellow',
        'Purple',
        'Purple',
        'Green',
        'Navy',
        'Silver',
        'White',
        'Green',
        'Yellow',
        'Silver',
        'Lime',
        'Navy',
        'Lime',
        'Silver',
        'Teal',
        'Navy',
        'Silver',
        'Aqua',
        'Green',
        'Purple',
        'Purple',
        'Olive',
        'Lime',
        'Red',
        'Lime',
        'Maroon',
        'White',
    ])
);*/

// TODO 6 kyu https://www.codewars.com/kata/sorting-by-bits

/*function sortByBit(arr) {
    let res = [];
    const countOfBits = el => {
        let count = 0;
        el = el.toString(2);
        for (let i = 0; i < el.length; i++) {
            if (el[i] === '1') {
                count++;
            }
        }
        return count;
    };
    console.log(countOfBits(15));

    return arr.sort((a, b) => (countOfBits(a) === countOfBits(b) ? a - b : countOfBits(a) - countOfBits(b)));
}

console.log(sortByBit([7, 6, 15, 8]));*/

// TODO 6 kyu https://www.codewars.com/kata/lets-recycle

/*const input = [
    { type: 'rotten apples', material: 'organic' },
    { type: 'out of date yogurt', material: 'organic', secondMaterial: 'plastic' },
    { type: 'wine bottle', material: 'glass', secondMaterial: 'paper' },
    { type: 'amazon box', material: 'paper' },
    { type: 'beer bottle', material: 'glass', secondMaterial: 'paper' },
];

function recycle(array) {
    const paper = [],
        glass = [],
        organic = [],
        plastic = [];

    for (let i = 0; i < array.length; i++) {
        if (array[i].material === 'paper' || array[i].secondMaterial === 'paper') paper.push(array[i].type);

        if (array[i].material === 'glass' || array[i].secondMaterial === 'glass') glass.push(array[i].type);

        if (array[i].material === 'organic' || array[i].secondMaterial === 'organic') organic.push(array[i].type);

        if (array[i].material === 'plastic' || array[i].secondMaterial === 'plastic') plastic.push(array[i].type);
    }

    return [paper, glass, organic, plastic];
}

console.log(recycle(input));*/

// TODO 7 kyu https://www.codewars.com/kata/javascript-mathematician

/*function calculate(...args) {
    // console.log(args);
    let count = 0;
    for (let i = 0; i < args.length; i++) {
        count += args[i];
    }
    // console.log(count);
    return function (...title) {
        let countTwo = 0;
        for (let i = 0; i < title.length; i++) {
            countTwo += title[i];
        }
        // console.log(countTwo);
        return count + countTwo;
    };
}*/

/*
function calculate(...args1) {
    return function (...args2) {
        return [...args1, ...args2].reduce((acc, el) => acc + el);
    };
}

console.log(calculate(1)(1)); // should return 2
console.log(calculate(1, 1)(1)); // should return 3
console.log(calculate(1, 1)(1, -1)); // should return 2
console.log(calculate(2, 4)(3, 7, 1)); // should return 17
*/

/*function createFunctions(n) {
    const callbacks = [];

    for (let i = 0; i < n; i++) {
        callbacks.push(function () {
            return i;
        });
    }

    return callbacks;
}
let callbacks = createFunctions(5);
console.log(callbacks[0]()); // must return 0
console.log(callbacks[3]()); // must return 3*/

// TODO 6 kyu https://www.codewars.com/kata/can-you-keep-a-secret

/*function createSecretHolder(secret) {
    return {
        getSecret() {
            return secret;
        },
        setSecret(v) {
            secret = v;
        },
    };
}

const obj = createSecretHolder(5);

console.log(obj);
console.log(obj.getSecret());
console.log(obj.setSecret(2));
console.log(obj.getSecret());*/

// ?????????????? ???????? ?????????? MAP
/*Array.prototype.mapTwo = function (fn, nThis) {
    //?????????????? ?????????? ???????????? ?? ?????????????? ?????????? ???? ??????????????, ?? ???????????????? ?????????? ???????????? ??????????
    let newArr = this.slice();
    this.forEach((el, ind, arr) => (newArr[ind] = fn.apply(nThis, [el, ind, arr])));

    return newArr;
};

let one_to_nine = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let res = one_to_nine.mapTwo(el => el * 2);
console.log(res);*/

//?????????????? ???????? ?????????? BIND
// let name = 'Vadim';
// const person = {
//     name: 'Vadim',
// };
//
// function info(phone, email) {
//     console.log(`??????: ${this.name}, ??????: ${phone}, ??????: ${email}`);
// }
// Demo
// info.bind(person)('+375295163483', 'mat23vadim@mail.ru');
// info.bind(person, '+375295163483')('mat23vadim@mail.ru');
// info.bind(person, '+375295163483', 'mat23vadim@mail.ru')();

// function bind(fn, context, ...rest) {
//     return function (...args) {
//         const uniq = Date.now().toString();
//         context[uniq] = fn;
//         const result = context[uniq](...rest.concat(...args));
//
//         delete context[uniq];
//         return result;
//     };
// }

// bind(info, person)('+375295163483', 'mat23vadim@mail.ru');
// bind(info, person, '+375295163483')('mat23vadim@mail.ru');
// bind(info, person, '+375295163483', 'mat23vadim@mail.ru')();

//TODO 7 kyu https://www.codewars.com/kata/my-language-skills

/*function myLanguages(results) {
    const res = [];
    for (let key in results) {
        if (results[key] >= 60) {
            res.push(key);
        }
    }
    return res.sort((a, b) => results[b] - results[a]);
}

console.log(myLanguages({ Hindi: 60, Dutch: 93, Greek: 71 }));*/

// 6 kyu https://www.codewars.com/kata/run-length-encoding

/*const runLengthEncoding = function (str) {
    const res = [];
    let counter = 1;
    for (let i = 0; i < str.length; i++) {
        // ?????????????? ???? ?????? ??????, ???????? ???????????????????? ????????????????
        if (str[i] === str[i + 1]) {
            counter++;
            // ?????? ???????????? ???????????????? ???????????????????? ??????????????????????, ?????????? ?????????????? ?? ??????????????
        } else {
            res.push([counter, str[i]]);
            counter = 1;
        }
    }

    return res;
};

console.log(runLengthEncoding('aaaaab'));*/
/*let object = {
    user: {
        name: {
            first: 'John',
            last: 'Snow',
        },
    },
};
function find(object, path) {
    return object['user.name'];
}
let path = 'user.name.first';
console.log(find(object, path));*/

// TOWER'S Kata
// ! My solution
/* function towerBuilder(nFloors) {
    let res = [];
    for (let i = 0; i < nFloors; i++) {
        const count = [];
        for (let j = 0; j < i * 2 + 1; j++) {
            count.push('*');
        }
        res.push(count.join(''));
    }
    res = res.reverse();
    res = res.map(el => el.split(' '));
    for (let i = 0; i < res.length - 1; i++) {
        let end = (res[i].length - res[i + 1].length) / 2 + i;
        console.log(end);
        for (let k = 0; k <= end; k++) {
            res[i + 1].push(' ');
        }
        for (let j = 0; j <= end; j++) {
            res[i + 1].unshift(' ');
        }

        // console.log(res[i].split(""));
    }

    return res.reverse().map(el => el.join(''));
    // return res;
}

console.log(towerBuilder(6)); */

//* help solution
/* function towerBuilder(nFloors) {
    let space,
        star,
        tower = [];
    for (let i = 1; i <= nFloors; i++) {
        space = ' '.repeat(nFloors - i);
        star = '*'.repeat(2 * i - 1);
        tower.push(`${space}${star}${space}`);
    }

    return tower;
}

console.log(towerBuilder(10)); */

// *
/* const arr = ['live', 'arp', 'strong'];

function inArray(array1, array2) {
    const res = [];
    for (let i = 0; i < array1.length; i++) {
        let current = array1[i];
        for (let j = 0; j < array2.length; j++) {
            if (array2[j].indexOf(current) !== -1) {
                res.push(current);
            }
        }
    }
    return Array.from(new Set(res)).sort();
}

console.log(inArray(['tarp', 'mice', 'bull'], ['lively', 'alive', 'harp', 'sharp', 'armstrong'])); */

// TODO https://www.codewars.com/kata/53697be005f803751e0015aa/train/javascript 6Kuy The Vowel Code

/* function encode(string) {
    const obj = {
        a: 1,
        e: 2,
        i: 3,
        o: 4,
        u: 5,
    };
    const res = [];
    for (let i = 0; i < string.length; i++) {
        if (obj[string[i]]) {
            res.push(obj[string[i]]);
        } else {
            res.push(string[i]);
        }
    }

    return res.join('');
}

function decode(string) {
    const obj = {
        a: 1,
        e: 2,
        i: 3,
        o: 4,
        u: 5,
    };
    const res = [];
    let stringTwo = string.split('');
    for (let key in obj) {
        if (stringTwo.includes(String(obj[key]))) {
            stringTwo.splice(stringTwo.indexOf(String(obj[key])), 1, key);
        }
    }

    return stringTwo.join('');
}
console.log(encode('hello'));
console.log(decode('h2ll4')); */

// TODO https://www.codewars.com/kata/5420fc9bb5b2c7fd57000004/train/javascript Highest Rank Number in an Array 6Kuy

/* function highestRank(arr) {
    const obj = {};
    const res = [];
    for (let i = 0; i < arr.length; i++) {
        obj[arr[i]] = obj[arr[i]] ? (obj[arr[i]] += 1) : 1;
    }
    console.log(obj);
    let max = Math.max(...Object.values(obj));
    console.log(max);

    for (let key in obj) {
        if (obj[key] === max) {
            res.push(key);
        }
    }
    console.log(obj);
    return Math.max(...res);
}

console.log(highestRank([12, 10, 8, 12, 7, 6, 4, 10, 12, 10])); */

// TODO https://www.codewars.com/kata/58d76854024c72c3e20000de/train/javascript Reverse every other word in the string 6 kyu

// function reverse(str) {
//     let work = str.trim().split(' ');
//     // console.log(work[1].split('').reverse().join(''));
//     for (let i = 1; i < work.length; i += 2) {
//         work.splice(i, 1, work[i].split('').reverse().join(''));
//     }

//     return work.join(' ');
// }

// console.log(reverse('Reverse this string, please!'));

// TODO https://www.codewars.com/kata/58223370aef9fc03fd000071/train/javascript  Dashatize it 6 kuy
// ! BROKEN
// function dashatize(num) {
//     let work = String(num).split('');
//     const res = [];
//     for (let i = 0; i < work.length; i++) {
//         // if (work[i] === '-') {
//         //     continue;
//         // }
//         if (i === 0 && work[i] % 2 !== 0) {
//             res.push(work[i], '-');
//             continue;
//         }
//         if (i === work.length - 1 && work[i] % 2 !== 0) {
//             res.push('-', work[i]);
//             continue;
//         }
//         if (work[i] % 2 !== 0 && work[i - 1] !== '-') {
//             // work.splice(i - 1, 3, '-', work[i], '-');
//             res.push(work[i], '-');
//         }
//     }
//     return res.join('');
// }

// console.log(dashatize(274));
