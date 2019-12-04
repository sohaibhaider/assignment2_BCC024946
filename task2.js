var colorName = prompt("Please enter color of road traffic signal:", "Red");
if(colorName.toLowerCase()=="red")
{
    document.write(colorName.toUpperCase()+": Must Stop");
}
else if(colorName.toLowerCase()=="yellow")
{
    document.write(colorName.toUpperCase()+": Ready to move");
}
else if(colorName.toLowerCase() =="green")
{
    document.write(colorName.toUpperCase()+": Move now");
}
else
{
    document.write(colorName.toUpperCase()+" is unknown road traffic signal color.");
}