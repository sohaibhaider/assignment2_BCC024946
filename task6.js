var number = parseInt(prompt("Please enter your number", 10));

if(number%2)    //Will return 0 which is equals to false in bolean
{
    document.write(number+": is an Odd Number.");
}
else
{
    document.write(number+": is an Even Number.");
}

/*if(number%2==0)
{
    document.write(number+": is an Even Number.");
}
else
{
    document.write(number+": is an Odd Number.");
}*/