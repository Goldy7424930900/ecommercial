function validate()
{
    var text = document.getElementsByClassName("textbox").value;
    var password = document.getElementsByClassName("textbox").value;
    if(text == "admin" && password == "admin")
    {
        alert("login succesfully");
        window.open('index.html')
    }
    else
    {
        alert("login failed")
        

    }
}