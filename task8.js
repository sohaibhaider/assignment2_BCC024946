var number = parseInt(prompt("Please enter your number", 10));

if(number>0)
{
    document.write("The Number <b>'"+number+"'</b> is Positive.");
}
else if(number<0)
{
    document.write("The Number <b>'"+number+"'</b> is Negative.");
}
else
{
    document.write("The Number <b>'"+number+"'</b> is Zero.");
}