// Code your solutions in this file
const Cards = ["Guadalupe", "Ollie", "Aki"];

function writeCards(Cards, event) {
    let messages = [];
    for (let i = 0; i < Cards.length; i++) {
        messages.push(`Thank you, ${Cards[i]}, for the wonderful surprise gift!`)
    }
    return messages
}
function countDown() {
    for (let countdown = 10; countdown > -1; countdown --) {
        console.log(countdown);
    }
}