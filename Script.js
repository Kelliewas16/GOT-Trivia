var variableQuestion= 
[
    "What are the Words of House Lannister?",
    "Which House words are 'As High as Honor?'",
    "Where do men go when they take the black?",
    "Which is not a name of one of the Direwolves?",
    "Which is not one of the Seven?",
    "What is the ancestrial home of House Baratheon?",
    "Which of the Seven kingdoms did not fall to conquest to the Targaryens?", 
    "What color bird representents a change in the seasons?",
    "Which is a name for a bastard of the Reach?",
    "Who speaks the words 'Tell them winter has come for house Frey'"

]

var variableAnswerOne = ["A Lannister always pays his debts", "House Tully","Casterly Rock", "Greywind","The Crone", "Dragonstone", "The North", "Black", "Snow", "Jon Snow",]
var variableAnswerTwo = ["Hear me Roar","House Stark", "Dragonstone", "ShaggyDog", "The Stranger", "King's Landing", "The Vale", "Brown", "Rivers", "Catlynn Stark",]
var variableAnswerThree = ["Our knives our sharp", "House Baratheon", "The Wall", "Nymeria", "The Imp", "Storm's End","The Reach", "Tawny", "Flowers","Ned Stark",]
var variableAnswerFour = ["Ours is the Fury", "House Aryn", "Dorne", "Widow's Wail", "The Mother", "Storm's End", 
"The Twins", "Dorne", "White", "Storms", "Arya Stark",]




var CorrectAnswer = [2,4,3,4,3,3,4,4,3,1];
var whatNumberAreWeOn = 0; 

loadQuestion()

document.getElementById("HTMLanswer1").addEventListener("click", answerOneClicked)
document.getElementById("HTMLanswer2").addEventListener("click", answerTwoClicked)
document.getElementById("HTMLanswer3").addEventListener("click", answerThreeClicked)
document.getElementById("HTMLanswer4").addEventListener("click", answerFourClicked)

function changeNumber(){
whatNumberAreWeOn = whatNumberAreWeOn +1 
if(whatNumberAreWeOn === 10){
    whatNumberAreWeOn = 0
    endgame()
}

}

function endgame(){
    alert("Game Over Man, Game Over")
}

function loadQuestion(){
    document.getElementById("HTMLquestion").innerText=variableQuestion[whatNumberAreWeOn]
    document.getElementById("HTMLanswer1"). innerText = variableAnswerOne[whatNumberAreWeOn]
    document.getElementById("HTMLanswer2"). innerText = variableAnswerTwo[whatNumberAreWeOn]
    document.getElementById("HTMLanswer3"). innerText = variableAnswerThree[whatNumberAreWeOn]
    document.getElementById("HTMLanswer4"). innerText = variableAnswerFour[whatNumberAreWeOn]
}


function answerOneClicked(){
    console.log("Answer One Clicked")

    if(CorrectAnswer[whatNumberAreWeOn] === 1){
        alert("Correct")
    }  else{
        alert("Wrong")

    }
    changeNumber()
    loadQuestion()
}
    function answerTwoClicked(){
        console.log("Answer Two Clicked")
        if(CorrectAnswer[whatNumberAreWeOn] === 2){
            alert("correct")
    }  else{
        alert("Wrong")
    }
    changeNumber()
    loadQuestion()
}
function answerThreeClicked() {
    console.log("Answer Three Clicked")
    if (CorrectAnswer[whatNumberAreWeOn] === 3){
        alert("correct")
        
    }  else{
        alert("Wrong")
    }
    changeNumber()
    loadQuestion()
}
function answerFourClicked(){
    console.log("Answer Four Clicked")
    if(CorrectAnswer[whatNumberAreWeOn] === 4){
        alert("correct")

    }   else{
        alert("Wrong")
    }
    changeNumber()
    loadQuestion()
}