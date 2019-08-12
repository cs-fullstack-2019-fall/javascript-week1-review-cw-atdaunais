var quitKey = false;

while (quitKey === false)
{
    var userInput = prompt("Please enter 1 to count down, 2 to count up, or press 'q' to quit.");
    if (userInput === "1")
    {
        var userStart = 0;
        var userInt = parseInt(prompt("Please enter a negative number to count down to in the console."));

        while (userStart >= userInt)
        {
            console.log(userStart);
            userStart--
        }
    }
    else if (userInput === "2")
    {
        var userStart = 0;
        var userInt = parseInt(prompt("Please enter a positive number to count up to in the console."));

        while (userStart <= userInt)
        {
            console.log(userStart);
            userStart++
        }
    }
    else if (userInput === "q")
    {
        quitKey = true;
    }
}

var stopKey = false;

while (stopKey === false)
{
    var userName = prompt("Please enter your name. Or enter 'quit' to quit.");
    if (userName === "Kevin")
    {
        alert("What's up Kevin");
    }
    else if (userName === "Kenn")
    {
        alert("Hi Kenn");
    }
    else if (userName === "Autumn")
    {
        alert("Good morning Autumn");
    }
    else if (userName === "quit")
    {
        stopKey = true;
    }
    else
    {
        alert("Hello " + userName);
    }
}