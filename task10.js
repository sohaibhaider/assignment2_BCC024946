var secret = "abc123";
var password = prompt("Please enter your Password:");
var message;

if(password=="")
{
    message="Please enter your password";
}
else if(password==secret)
{
    message="Correct! The password you entered matches the original password";
}
else if(password!=secret)
{
    message="Incorrect password";
}

document.write(message);
console.log(message);