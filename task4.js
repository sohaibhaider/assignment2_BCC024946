var subject1 = Number(prompt("Please enter marks obtained in Subject 1:", 50));
var subject2 = Number(prompt("Please enter marks obtained in Subject 2:", 50));
var subject3 = Number(prompt("Please enter marks obtained in Subject 3:", 50));
var total = Number(prompt("Please enter total marks:", 300));
var obtained = subject1+subject2+subject3;
var percentage = (100*obtained/total).toFixed(2);
var grade, remarks;

if(percentage>=80)
{
    grade="A-one";
    remarks="Excellent";
}
else if(percentage>=70)
{
    grade="A";
    remarks="Good";
}
else if(percentage>=60)
{
    grade="B";
    remarks="You need to improve";
}
else if(percentage<60)
{
    grade="Fail";
    remarks="Sorry";
}

document.write("<h1>Marks Sheet</h1><br/><h2>Total marks : "+total+"<br/>Marks obtained : "+obtained+"<br/>Percentage : "+percentage+"%<br/>Grade : "+grade+"<br/>Remarks : "+remarks);