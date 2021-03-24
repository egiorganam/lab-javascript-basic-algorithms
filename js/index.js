// Iteration 1: Names and Input
const hacker1 = 'Eliher'
console.log(`The driver's name is ${hacker1}`)

const hacker2 = 'Alejandro'
console.log(`The navogator's name is ${hacker2}`)

// Iteration 2: Conditionals
if(hacker1.length > hacker2.length){
    console.log(`The driver has the longest name, it has XX characters.`)
}else if(hacker1.length < hacker2.length){
    console.log(`It seems that the navigator has the longest name, it has XX characters.`)
}else{
    console.log(`Wow, you both have equally long names, XX characters!`)
}

// Iteration 3: Loops
// 3.1
let separated = ''

for(i = 0; i < hacker1.length; i++){
    separated = separated + hacker1[i].toUpperCase() + ' '
}

// 3.2
let reverseName = ''

for (i = hacker2.length - 1; i > -1; i--){
  reverseName += hacker2[i]
}

// 3.3
function alphabeticalOrder(hacker1, hacker2) {
    if(hacker1 === hacker2){
        return 'What?! You both have the same name?'
    }else if(hacker1 < hacker2){
        return "The driver's name goes first."
    }else{
        return 'Yo, the navigator goes first definitely.'
    }
}

// Bonus 1
// 1.1
let paragraphe = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`

function howManyWords(paragraphe) {
    return paragraphe.split(' ').length
}

// 1.2
function finder(paragraphe){
    let listOfWords = paragraphe.split(' ')
    let count = []
    for(i = 0; i < listOfWords.length; i++){
      if(listOfWords[i].includes("et")){
        count.push(listOfWords[i])
      }
    }
    return count.length
}