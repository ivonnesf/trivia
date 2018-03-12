


$(document).ready(function () {

var userChoise;
var question= 0;
var timer;
var intervalId;
var loseCount= 0;
var winCount= 0;
var count = 0;

var triviaQuestion = [{
question: "Who is the author of The Hobbit and the Lord of the Rings trilogy?",
choices: ["J. R. R. Tolkien", "James Patterson", "Stephen King", "JacDan Brown" ],
validAnswer: 0,
color: "#44318D",
}, {
question:"In the Harry Potter series, what is the name of Harry's pet owl?",
choices: ["Hedwogny", "Ron", "Hedwig", "Right Hand"],
validAnswer: 2,
color: "#E98074",

}, {
question:"What is the name of the American animated sci-fi sitcom about the misadventures of a mad scientist and his grandson?",
choices: ["Family Guy", "Forrest Gump", "Simpsons", "Rick and Morty"],
validAnswer: 3,
color: "#A4B3B6",

}, {
question:"Bruce Willis played a convict turned time traveler in what 1995 movie?",
choices: ["12 Monkeys", "Die Hard", "The 6th Element", "End of The World"],
validAnswer: 0,
color: "#D83F87",
},{

question:"In our solar system which two planets rotate clockwise?",
choices: ["Venus and Mars", "Earth and Mars", "Venus & Uranus", "None"],
validAnswer: 2,
color: "#2A1B3D",
},{

question:"What is the name given to an ancient analog computer that was discovered by divers off a Greek island in 1900?",
choices: ["Bemus computer", "Adonis mechanism", "Antikythera mechanism", "You are crazy. Computers did not exist in the 1900's"],
validAnswer: 2,
color: "#44318D",
},{

question:"What Harvard dropout co-founded Microsoft?",
choices: ["Me?", "Bill Gates", "Kill Bill", "Bill Gatos"],
validAnswer: 1,
color: "#E98074",
},{

question:"What was the name of the first electronic general-purpose computer?",
choices: ["Mac", "MANICA", "Windows", "ENIAC"],
validAnswer: 3,
color: "#A4B3B6",
},{


question: "'Torchwood' is an anagram and spin-off of what popular British sci-fi series?",
choices: ["Doctor Who", "Stargate", "Blood Drive", "Lex" ],
validAnswer: 0,
color: "#44318D",
}, {
question:"1,024 Gigabytes is equal to one what?",
choices: ["Petabyte", "Megabyte", "20.3 Bytes", "Terabyte"],
validAnswer: 3,
color: "#E98074",

}, {
question:"What is it called when a star, possibly cause by a gravitational collapse, suddenly increases greatly in brightness?",
choices: ["Stardust", "Nova", "Black Hole", "Supernova"],
validAnswer: 3,
color: "#A4B3B6",

}

];


function startGam() {
    timer = 30;
    intervalId = setInterval(decrement, 1000);
    $(".imagen").html('</br><img src="assets/images/happy-01.png" >')
    $("#timer").html( timer );
    $('#options').text("");
    $("#warning").text("");
    $("#title").text("Hey! Are you a geek?");
    $("#question").text(triviaQuestion[count].question);
    

    question++


    var allChoices = triviaQuestion[count].choices;
    var number = count + 1;
    $('#number').text(number);
    
        for (let i = 0; i < allChoices.length; i++) {
            
            var paragraphSection = $('<li class="list-group-item option"> ');
            paragraphSection.text(allChoices[i]);
            paragraphSection.attr('data-id', i);
            $('#options').append(paragraphSection);
            $("body").css("background-color", triviaQuestion[count].color);
            $("#timer").css("color", triviaQuestion[count].color);
            $(".wrappercontainer").css("color", triviaQuestion[count].color);
            $(".questiondiv").css("border-left", triviaQuestion[count].color);
            $("#playagain").css("border-color", triviaQuestion[count].color);
            $("#playagain").css("color", triviaQuestion[count].color);
            $(".option:hover").css("background-color", triviaQuestion[count].color);
            

        }
} 

    
function decrement() {

    timer --;
    $("#timer").html( timer );

    if (timer===0){
        loseCount++
        
        clearText();
        $('#warning').text("Time is Up!");
        setTimeout(nextQuestion, 1000);
    }
}

function stopGame(){

    //$("#warning").html("Correct Answers: " + winCount + "</br>" + "Wrong Answers: " + loseCount);
    
    if (winCount > loseCount) {
        $("#warning").text("Yayy! You are a geek!!");
        $("#timer").text(":)");
  

    }
    if (winCount < loseCount) {
        $("#warning").text("Nope. You are not a geek!!");
        $("#timer").text(":(");
        $(".imagen").html('</br><img src="assets/images/sad-01.png" >')
    }
    if (winCount === loseCount) {
        $("#warning").text("I guess you are half a geek!");
        $("#timer").text(";)");
    }

    clearInterval(intervalId);
    $("#warning").append('</br><button id="playagain" type="button" class="btn btn-outline-warning"> Try Again </button>')
    $("#playagain").click(function(){
        count=0;
        startGam();
    });

}

function clearText(){
    clearInterval(intervalId);
    $("#timer").html("");
    $("#question").text("");
    $("#number").text("");
    $("#options").text("");
   
}

function nextQuestion() {
    if (count < (triviaQuestion.length)-1) {
    count++
    timer = 10;

    startGam(); 

    } else {
        stopGame();
        };

}
        
startGam();

$('#options').on('click', 'li', function(e){
    userChoise = $(this).data("id");
    triviaQuestion[0].validAnswer;

    if(userChoise != triviaQuestion[count].validAnswer) {
        loseCount++
        clearText();
        $('#warning').text("Wrong Answer!");
        $("#timer").text("✘");
        $(".imagen").html('</br><img src="assets/images/sad-01.png" >')
        setTimeout(nextQuestion, 1000);
        

    } else  if(userChoise === triviaQuestion[count].validAnswer) {
        winCount++
        
        clearText();
        $('#warning').text("You got it!!!");
        $(".imagen").html('</br><img src="assets/images/happy-01.png" >')
        $("#timer").text("✔");
        setTimeout(nextQuestion, 1000);
    }
});


});