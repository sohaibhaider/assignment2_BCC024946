var string = prompt("Please enter an Alphabet", "a");
var status = false;

if(string.toLowerCase()=='a' || string.toLowerCase()=='e' || string.toLowerCase()=='i' || string.toLowerCase()=='o' || string.toLowerCase()=='u')
{
    status=true;
}

document.write(status);
console.log(status);