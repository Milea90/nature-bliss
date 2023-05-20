//This function is made from a tutorial on Youtube. Read more in README.//
function quiz_pop()
{alert("Psst! Take the quiz!");}

//This function is made from a tutorial on Youtube. Read more in README.//
function is_checked(){
    const blue_checked = document.getElementById("color-blue").checked;
    const green_checked = document.getElementById("color-green").checked;
    const red_checked = document.getElementById("color-red").checked;
   
    if(blue_checked === false && green_checked === false && red_checked === false)
    {alert("Oops... You did not select an option!");
    return false;}
     
    else {return true;}}

//This function is made from a tutorial on Youtube. Read more in README.//    
function contact_form() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const msg = document.getElementById("msg").value;

    if (name === "" || email === "" || msg === "") 
        {alert("Oops... You did not submit the required information!");
        return false;}

    else {return true;}}