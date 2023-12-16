a = Number(prompt("Enter a number: "));
b = Number(prompt("Enter another number: "));
c = Number(prompt("Enter a third number: "));

if (a > b && b > c)
{
    alert("Descending order");
}
else if (a < b && b < c)
{
    alert("Ascending order");
}
else
{
    alert("Neither ascending nor descending order");
}