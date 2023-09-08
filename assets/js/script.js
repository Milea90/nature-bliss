//This function is made from a tutorial on Youtube. Read more in README.//
function game_pop() { alert("Psst! Play the game!"); }

//This function is made from a tutorial on Youtube. Read more in README.//    
function contact_form() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const msg = document.getElementById("msg").value;

    if (name === "" || email === "" || msg === "") {
        alert("Oops... You did not submit the required information!");
        return false;
    }

    else { return true; }
}

let container = document.querySelector(".wheel");
let btn = document.getElementById("spin");
let number = Math.ceil(Math.random() * 1000);
btn.onclick = function () {
    container.style.transform = "rotate(" + number + "deg)";
    number += Math.ceil(Math.random() * 1000);
};

