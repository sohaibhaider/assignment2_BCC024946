var number1 = Number(prompt("Please enter 1st number", 20));
var number2 = Number(prompt("Please enter 2nd number", 10));
var operator = prompt("Operation to perform between "+number1+" and "+number2, "+ OR - OR * OR / OR %");

if(operator=="+")
{
    document.write(number1+number2);
}
else if(operator=="-")
{
    document.write(number1-number2);
}
else if(operator=="*")
{
    document.write(number1*number2);
}
else if(operator=="/")
{
    document.write(number1/number2);
}
else if(operator=="%")
{
    document.write(number1%number2);
}

/*else if(operator=="%")
{
    document.write(100*number1/number2);
}*/