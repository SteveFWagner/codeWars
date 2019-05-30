function findOdd(array) {
    let counterArray = []
    const sortedArr = array.sort((a,b)=>a-b)
    console.log(sortedArr)
    let counter = 0
    sortedArr.forEach((num,i,arr) => {
        if(num === arr[i+1]){
            // console.log('hit', num)
            counter = counter + 1
            // console.log('counter',counter)
        } else {
            // console.log('hit2', num)
            counter = counter + 1
            // console.log('counter2',counter)
            let numObj = {}
            numObj[num] = counter
            counterArray.push(numObj)
            counter = 0
        }
    })
    // console.log(counterArray)
    let answer
    counterArray.forEach(numObj => {
        // console.log(numObj)
        if(numObj[Object.keys(numObj)[0]] % 2 === 1){
            answer = Object.keys(numObj)[0]
        }
    })
    // console.log(answer)
    return answer
}


// const testArray = [20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5]
// const testArray = [1,1,2,-2,5,2,4,4,-1,-2,5]
// const testArray = [1,1,1,1,1,1,10,1,1,1,1]
//findOdd(testArray)