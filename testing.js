//ticTacToe
//0 = empty
//1 = X
//2 = O

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

// console.log({newGame}, {unfinishedGame}, {xWinsGame}, {oWinsGame}, {catsGame})


//take in an array of three arrays, return -1 if game is not finished, 1 if X wins, 2 if O wins or 0 if cat's game

function winCheck(array){
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



const testGame = [
    [1,2,1],
    [1,2,1],
    [2,1,2]
]

console.log('winCheck',winCheck(testGame))
