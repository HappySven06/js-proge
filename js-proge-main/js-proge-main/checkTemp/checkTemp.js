function getInputValue()
{
    let value = document.getElementById("Inpu").value;

    if (value < 21)
    {
        Vas = -1
    }
    else if (value > 40)
    {
        Vas = 1
    }
    else if (value != 20 && 40)
    {
        Vas = 0
    }

    let header = document.querySelector("p");
    header.innerText = "Vastus: " + Vas;
}