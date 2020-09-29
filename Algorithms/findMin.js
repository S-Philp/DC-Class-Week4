let myNumsB = [1,22,3,4,5,99]

let maxValueB = -Infinity
let minValueB = Infinity

for(let index = 0; index < myNumsB.length; index++) {
   
    let element = myNumsB[index]
    // find minimum value
     if (element < minValueB)
     minValueB = element

}

console.log(minValueB)