function is_checked()
{
    const blue_checked = document.getElementById("color-blue").checked;
    const green_checked = document.getElementById("color-green").checked;
    const red_checked = document.getElementById("color-red").checked;

    if(blue_checked === false && green_checked === false && red_checked === false)
    {alert("Oops... You did not select an option!");
     return false;}
     
     else {return true;} 
}