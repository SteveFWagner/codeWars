// //4kyu
// //You have to create a function that takes a positive integer number and returns the next bigger number formed by the same digits:

// function nextBigger(num){
//     const numArray = num.toString().split('').map(num => {
//         return Number(num)
//     })
//     console.log(numArray)
//     //check for single digit
//     if(numArray.length === 1){
//         console.log('length is one')
//         return -1
//     }else{
//     //check for repeating numbers like 111
//         let repeatCheck = true
//         let prevNum = numArray[0]
//         numArray.forEach(num => {
//             if(num === prevNum){
//                 prevNum = num
//                 // console.log('hit')
//             }else {
//                 repeatCheck = false
//                 // console.log('hit2')
//             }
//         })
//         // console.log({prevNum})
//         // console.log({repeatCheck})
//         if(repeatCheck === true){
//             return -1
//         }else{
//             //check for next biggest number if possible
//             const revArray = numArray.reverse()
//             let lowestDiff = num*num
//             let answer
//             revArray.forEach((number,i,arr)=>{
//                 const revArrayCopy = [...revArray]
//                 let testNum = number
//                 let nextNum = arr[i+1]
//                 if((i+1) !== arr.length){
//                     revArrayCopy[i] = nextNum
//                     revArrayCopy[i+1] = testNum
//                     console.log({revArrayCopy})
//                     let newNum = Number(revArrayCopy.reverse().join(''))
//                     console.log(newNum)
//                     let diff = newNum - num
//                     console.log({diff})
//                     if(diff < lowestDiff && diff > 0){
//                         lowestDiff = diff
//                         answer = newNum
//                         console.log({lowestDiff})
//                     }
//                 }
//             })
//             console.log({answer})
//             if(answer){
//                 return answer
//             }else{
//                 return -1
//             }
//         }
//     }

//   }

//   nextBigger(123)

