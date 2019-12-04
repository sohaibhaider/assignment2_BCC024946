var time = parseInt(prompt("Please enter time:", "HHMM"));
var greetings;

if(time%100>59 || time<0 || time>2359) //added this condition so minutes will not exceed '59'
{
    greetings="You Entered Incorrect Time/Format";
}
else if(time>=0000 && time<1200)
{
    greetings="Good Morning";
}
else if(time>=1200 && time<1700)
{
    greetings="Good Afternoon";
}
else if(time>=1700 && time<2100)
{
    greetings="Good Evening";
}
else if(time>=2100 && time<=2359)
{
    greetings="Good Night";
}

document.write(greetings);
console.log(greetings);