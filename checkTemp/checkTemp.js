function getInputValue()
{
    let value = document.getElementById("Inpu").value;

    if (value <= 20)
    {
        Vas = -1
    }
    else if (value <= 40)
    {
        Vas = 0
    }
    else if (value <= 60)
    {
        Vas = 1
    }

    let header = document.querySelector("p");
    header.innerText = "Vastus: " + Vas;
}