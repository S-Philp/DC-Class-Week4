let names = ["John", "Mary", "Alex", "Steve", "Mary", "John"]
let namesNodups = []

function removeDups(names) {
    let namesNodups = []

    for(let index = 0; index < names.length; index++) {
        if(namesNodups.indexOf(names[index]) == -1) {
            namesNodups.push(names[index])
        }
    }
    return namesNodups
}

console.log(removeDups(names))
