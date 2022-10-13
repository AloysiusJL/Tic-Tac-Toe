let myArray = [
    "","","",
    "","","",
    "","",""
];

let players = [
    {player1: "X"},
    {player2: "O"}
];

const G0 = document.getElementById('G0')
const G1 = document.getElementById('G1')
const G2 = document.getElementById('G2')
const G3 = document.getElementById('G3')
const G4 = document.getElementById('G4')
const G5 = document.getElementById('G5')
const G6 = document.getElementById('G6')
const G7 = document.getElementById('G7')
const G8 = document.getElementById('G8')
const grid = document.querySelectorAll('.grid')

console.log(myArray);

// win condition
function checkWinner(){
    if (myArray[0] == "X" && myArray[1] == "X" && myArray[2] == "X") console.log('You win!');
    else if (myArray[3] == "X" && myArray[4] == "X" && myArray[5] == "X") console.log('You win!');
    else if (myArray[6] == "X" && myArray[7] == "X" && myArray[8] == "X") console.log('You win!');
    else if (myArray[0] == "X" && myArray[4] == "X" && myArray[8] == "X") console.log('You win!');
    else if (myArray[6] == "X" && myArray[4] == "X" && myArray[2] == "X") console.log('You win!');
    else if (myArray[0] == "X" && myArray[3] == "X" && myArray[6] == "X") console.log('You win!');
    else if (myArray[1] == "X" && myArray[4] == "X" && myArray[7] == "X") console.log('You win!');
    else if (myArray[2] == "X" && myArray[5] == "X" && myArray[8] == "X") console.log('You win!');
    else return;
}

//hover

grid.forEach(box => {
    box.addEventListener('mouseover', () => {
        box.classList.add('hover')
    })
    box.addEventListener('mouseleave', () => {
        box.classList.remove('hover')
    })
})

