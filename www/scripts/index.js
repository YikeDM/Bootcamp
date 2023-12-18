
function isPrime(num)
{
    if (num < 0)
    {
        return false;
    }
    
    for (let i = 2; i < num; i++)
    {
        if (num % i === 0)
        {
            return false;
        }
    }

    return true;
}

function prime()
{

    let a = Number(prompt("Enter a number: "));
    
    switch(isPrime(a))
    {
        case true:
            alert("The number is prime.");
            break;
        case false:
            alert("The number is not prime.");
            break;
        default:
            alert("Invalid input.");
            break;
    }

}