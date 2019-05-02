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

//my solution:
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

//my solution:

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
//6 kyu
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
//5 kyu
//ticTacToe
//0 = empty
//1 = X
//2 = O

//take in an array of three arrays, return -1 if game is not finished, 1 if X wins, 2 if O wins or 0 if cat's game
//my solution:
function ticTacToe(array){
  let winner
  //test for horizontal matches
  array.forEach(val => {
      if(val[0] === val[1] && val[1] === val[2]){
          if (val[0] !== 0){
              console.log('horizontal winner',val[0])
              winner = val[0]
          }
      }
  })
  //test for vertical matches
  const rowOne = array[0]
  const rowTwo = array[1]
  const rowThree = array[2]
  if(rowOne[0] === rowTwo[0] && rowTwo[0] === rowThree[0]){
      if(rowOne[0] !== 0){
          console.log('vertical winner',rowOne[0])
          winner = rowOne[0]
      }
  }
  if(rowOne[1] === rowTwo[1] && rowTwo[1] === rowThree[1]){
      if(rowOne[1] !== 0){
          console.log('vertical winner',rowOne[1])
          winner = rowOne[1]
      }
  }
  if(rowOne[2] === rowTwo[2] && rowTwo[2] === rowThree[2]){
      if(rowOne[2] !== 0){
          console.log('vertical winner',rowOne[2])
          winner = rowOne[2]
      }
  }
  //test for diagonal matches
  if(rowOne[0] === rowTwo[1] && rowTwo[1] === rowThree[2]){
      if(rowOne[0] !== 0 ){
          console.log('diagonal winner', rowOne[0])
          winner = rowOne[0]
      }
  }
  if(rowOne[2] === rowTwo[1] && rowTwo[1] === rowThree[0]){
      if(rowOne[2] !== 0 ){
          console.log('diagonal winner', rowOne[2])
          winner = rowOne[2]
      }
  }
  if(winner){
      return winner
  } else if(rowOne.includes(0) || rowTwo.includes(0) || rowThree.includes(0)){
      //check for unfinished game 0s on board
      console.log('unfinished game')
      return -1
  } else {
      // cats game
      console.log('cats game')
      return 0
  }
}

//tests
const newGame = [
  [0,0,0],
  [0,0,0],
  [0,0,0]
]
const unfinishedGame = [
  [0,0,1],
  [2,1,0],
  [0,2,0]
]
const xWinsGame = [
  [0,0,1],
  [2,1,0],
  [1,2,0]
]
const oWinsGame = [
  [0,2,1],
  [2,2,1],
  [1,2,0]
]
const catsGame = [
  [1,2,1],
  [2,2,1],
  [1,1,2]
]

const testGame = [
  [1,2,1],
  [1,2,1],
  [2,1,2]
]

console.log('ticTacToe',ticTacToe(catsGame))

//_________________________________________________________________________________________________________________
// 5kyu 
//Write a function called that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.
// Examples
// "()"              =>  true
// ")(()))"          =>  false
// "("               =>  false
// "(())((()())())"  =>  true

function validParentheses(parens){
  //declaring variables to hold the number of open and closed parantheses
  let close = 0
  let open = 0
  //splitting the string into an array
  let inputArray = parens.split('')
  console.log(inputArray)
  //ruling out any inputs with incorrect opening or closing parentheses at the beginning and end of the string
  if(inputArray[0] === ')'){
    return false
  } else if(inputArray[inputArray.length-1] === '('){
    return false
  }else{
    //looping over the array to increment the variables created earlier
    inputArray.forEach(input => {
      if(input === ')'){
        close = close + 1
      }else if (input === '('){
        open = open + 1
      }
    })
    //if the open and close variables are equal, we have correct syntax. Otherwise we do not. 
    if(open === close){
      return true
    } else {
      return false
    }
  }
}

//