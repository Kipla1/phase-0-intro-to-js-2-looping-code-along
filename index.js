// Code your solutions in this file
// const names = ["Guadalupe", "Ollie", "Aki"]
// const event = `surprise`
// function writeCards(names, event){
//     for (let i = 0; i < names.length ; i++){
//         console.log(`Thank you ${names[i]} for the wonderful ${event} gift!`)
//     }
//     return names;
// }


const names = ["Guadalupe", "Ollie", "Aki"]
const event = `surprise`
function writeCards(names, event){
    let thankYouCards = []
    for (let i = 0; i < names.length ; i++){
        thankYouCards.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`)
    }
    return thankYouCards
}
writeCards(["Guadalupe", "Ollie", "Aki"], 'surprise')


function countDown(number){
    while (number >= 0){
        console.log(number)
        number--
    }
}   