//This function is made from a tutorial on Youtube. Read more in README.//
function game_pop()
{alert("Psst! Play the game!");}

//This function is made from a tutorial on Youtube. Read more in README.//
function is_checked(){
    const yes_checked = document.getElementById("yes").checked;
    const no_checked = document.getElementById("no").checked;

    if(yes_checked === true)
    return <a href="question-answer-yes.html"></a>
    
    if(no_checked === true)
    return <a href="question-answer-no.html"></a>
   
    if(yes_checked === false && no_checked === false)
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

let container = document.querySelector(".wheel");
let btn = document.getElementById("spin");
let number = Math.ceil(Math.random() * 1000);
btn.onclick = function () {
    container.style.transform = "rotate(" + number + "deg)";
    number += Math.ceil(Math.random() * 1000);
};