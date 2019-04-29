//6 Kyu
// Given: an array containing hashes of names
// Return: a string formatted as a list of names separated by commas except for the last two names, 
//which should be separated by an ampersand.
// Example:
// list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ])
// // returns 'Bart, Lisa & Maggie'
// list([ {name: 'Bart'}, {name: 'Lisa'} ])
// // returns 'Bart & Lisa'
// list([ {name: 'Bart'} ])
// // returns 'Bart'
// list([])
// // returns ''

//my answer:
function list(names){
    let string = ''
    names.forEach((val,i,arr)=>{
  //     console.log("Current i: ", i, (i+1))
  //     console.log("Current arr.length: ", arr.length)
      if((arr.length-i) === 2 ){
        string += (val.name + " & ")
      }else if((i+1) === arr.length){
        string += val.name
      }else{
        string += (val.name + ", ")
      }
  //     console.log(string)
    })
    return string
  }

//_________________________________________________________________________________________________________________

//5 Kyu

// Write a function that will find all the anagrams of a word from a list. 
// You will be given two inputs a word and an array with words. 
// You should return an array of all the anagrams or an empty array if there are none.

//Examples:  
// anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']) 
//=> ['aabb', 'bbaa']

// anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']) 
//=> ['carer', 'racer']

anagrams('laser', ['lazing', 'lazy',  'lacer']) 
//=> []

//my answer:

function anagrams(word, words) {
  let anagramArray = []
  let sorted = word.split('').sort().join('')
  // console.log("Sorted word: ",sorted)
  // console.log("Words to test: ",words)
  let sortedArr = []
  words.forEach((word2,)=>{
    let sortedWords = word2.split('').sort().join('')
    sortedArr.push(sortedWords)
  })
  sortedArr.forEach((val,i)=>{
    if( sorted === val){
      // console.log(`${words[i]} is an anagram of ${word}`)
      anagramArray.push(words[i])
    }else{
      // console.log(`${words[i]} is NOT an anagram of ${word}`)
    }
  })
  return anagramArray
}

//_________________________________________________________________________________________________________________
 
//There is an array with some numbers. All numbers are equal except for one. Try to find it!

//findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
//findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
//It’s guaranteed that array contains more than 3 numbers.

//The tests contain some very huge arrays, so think about performance.

//my solution:
function findUniq(arr) {
  let sortedArr = arr.sort()
  // console.log(sortedArr)
  let testNum = 0
  sortedArr.forEach((val,i,arr)=>{
    if(val == arr[i+1] || val === arr[i-1]){
      testNum = val
    }
  })
  let testArr = sortedArr.filter(val => val!==testNum)
  return testArr[0]
}

//_________________________________________________________________________________________________________________





function orderWeight(strng) {
  let arr1 = strng.split(' ')
  let arr2 = arr1.map((val)=>{
    let test = val.split('')
    let test2 = test.map(v=>{
      let strToNum = Number(v)
      return strToNum
    })
    console.log(test2)
    let test3 = test2.reduce((total,amount)=>{
      return total+amount
    })
    console.log("test3",test3)
  })
//   console.log(arr2)
}