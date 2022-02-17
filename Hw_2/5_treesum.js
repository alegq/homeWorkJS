"use strict"
let arrt = [5, 7,
            [4, [2], 8, [1,4],2],
            [9, []],
            1, 8
         ]


function treesum(arr) {
 let  sum = 0
        for(let i = 0; i < arr.length; i++){
            if(Array.isArray(arr[i])){
                sum += treesum(arr[i])
            }else {
                sum += arr[i]
            }
        }
  return  sum
}

console.log(treesum(arrt))
