let pipeline = [
    [1,0,1,1,0],
    [1,0,1,0,0],
    [0,0,1,0,0],
    [1,0,1,1,1],
    [1,1,0,0,1],
  ];
  let badPipeline = [
    [1,0,1,1,0],
    [1,0,1,0,0],
    [0,0,1,0,0],
    [1,0,0,1,1],
    [1,1,0,0,1],
  ];
  let branchPipeline = [
    [0,0,1,0,0],
    [0,1,1,1,0],
    [0,1,0,1,0],
    [0,1,0,1,0],
    [0,0,0,1,0],
  ];

  // write a function that will determine if you can get from the top to the bottom.
  // you may only travel via 1's. You may go left and right, up and down.
  // return true if possible, and false if not possible.

const pipeCheck = (input) => {
    const path = []
    const goodLayer = []
    let answer
    input.forEach((layer,i) => {
        path[i] = []
        layer.forEach((val,index) => {
            if(val === 1){
                path[i].push(index)
            }
        })
    })
    //starting at the bottom
    path.reverse().forEach((layer,i,arr) => {
        goodLayer[i] = []
        layer.forEach((val,index,array) => {
            if(i !== 4){
                if(index === 0){
                    if(arr[i+1].includes(val) || arr[i+1].includes(array[index+1])){
                        goodLayer[i].push(true)
                    }else{
                        goodLayer[i].push(false)
                    }
                } else if(index !== 4){
                    if(arr[i+1].includes(val) || arr[i+1].includes(array[index+1]) || arr[i+1].includes(array[index-1])){
                        goodLayer[i].push(true)
                    }else{
                        goodLayer[i].push(false)
                    }
                }
            }
        })
    })
    const goodPipe = []
    goodLayer.forEach((layer,i) => {
        if(i !==4){
            if(layer.includes(true)){
                goodPipe[i] = true
            }else {
                goodPipe[i] = false
            }
        }
    })
            
    if(goodPipe.includes(false)){
        answer = false
    }else {
        answer = true
    }
    return answer
}

console.log(pipeCheck(branchPipeline))

//badPipeline
//branchPipeline
//pipeline