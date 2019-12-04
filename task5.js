var secretNumber = 5;
var number = parseInt(prompt("Guess the secret number", "1-10"));

if(secretNumber===number)
{
    document.write("Bingo! Correct answer");
}
else if(secretNumber===number+1)
{
    document.write("Close enough to the correct answer");
}
else
{
    document.write("You guessed it wrong");
}

/*if(number===secretNumber)
{
    document.write("Bingo! Correct answer");
}
else if(number===secretNumber-1)
{
    document.write("Close enough to the correct answer");
}
else
{
    document.write("You guessed it wrong");
}*/