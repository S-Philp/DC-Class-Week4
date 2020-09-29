// Write a program which finds the largest element in the array.
// myNums = [1,22,3,4,5,99]

// def myMinMax() {
//     myNums = [1,22,3,4,5,99]
//     minValue = Infinity;
//     maxValue = -Infinity;
//     for (item of myNums) {
//         if (item < minValue)
//         minValue = item;
                    
//         if (item > maxValue)
//         maxValue = item;
        
// }

// console.log(maxValue)
// console.log(minValue)
// myMinMax(myNums)

let myNums = [1,22,3,4,5,99]

let maxValue = -Infinity
let minValue = Infinity

for(let index = 0; index < myNums.length; index++) {
   
    let element = myNums[index]                 
     // find maximum value
     if (element > maxValue)
     maxValue = element
}

console.log(maxValue)