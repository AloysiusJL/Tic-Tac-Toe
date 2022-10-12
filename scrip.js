let myArray = [
    "","","",
    "","","",
    "","",""
];

let players = [
    {player1: "X"},
    {player2: "O"}
];

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
