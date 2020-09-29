let word = "mom"

reversedWord = ""

for(let index = word.length -1; index >= 0; index--) {
    reversedWord = reversedWord + word[index]
}
if(word == reversedWord)
    console.log("Palindrone")
else
console.log("NOT a Palindrone")
