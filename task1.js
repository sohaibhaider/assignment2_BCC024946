var cityName = prompt("Please enter City name", "Karachi");
if(cityName.toLowerCase()=="karachi")
{
    document.write("Welcome to '"+cityName.toUpperCase()+"' the city of lights.");
}
else
{
    document.write("You entered '"+cityName.toUpperCase()+"' as city.");
}