var a = 4;
if (++a === 5)
{
    alert("given condition for variable a is true");
}
document.write("Script <b>'a'</b> will display alert message since '++a' adds '1' to 'a' and then checks its data type and value so 'int = int' and '1 + 4 = 5' both condition is true.<br></br>");

var b = 82;
if (b++ === 83)
{
    alert("given condition for variable b is true");
}
document.write("Script <b>'b'</b> will not display alert message since 'b++' adds '1' to 'b' after it checks its data type and value so 'int = int' but '82 != 83' condition is false.<br></br>");

var c = 12;
if(c++ === 13)
{
    alert("condition 1 is true");
}
if(c === 13)
{
    alert("condition 2 is true");
}
if(++c < 14)
{
    alert("condition 3 is true");
}
if(c === 14)
{
    alert("condition 4 is true");
}
document.write("Script <b>'c'</b> will display 2 alert messages for condition 2 and 4 (All conditions will be checked as no use of 'else if OR else') since:<br>Condition '1' adds '1' in 'c' after checking the condition '12 = 13' (False), 'c' is now 13.<br>Condition '2' is true since 'c = 13'.<br>In condition '3', '1' is added to 'c' prior to checking condition which becomes '14 < 13' (False).<br>Condition 4 checks if 'c = 14' which is true as '14 = 14'.<br>In all conditions data type was same.<br></br>");

var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost)
{
    alert("The cost equals");
}
document.write("Script <b>'d'</b> will display alert message since 'totalCost = materialCost + laborCost' and data type is also same.<br></br>");

if (true)
{
    alert("True");
}
if(false)
{
    alert("False");
}
document.write("Script <b>'e'</b> will display 1 alert message since only first condition's bolean value is true.<br></br>");

if("car" < "cat")
{
    alert("car is smaller than cat");
}
document.write("Script <b>'f'</b> will display alert message since JavaScript uses Unicode-Dictionary for String comparision first 2 characters of strings are same 'ca = ca' but 'r < t' (True).<br></br>");