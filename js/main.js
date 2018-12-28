
// toggle the menu when in mobile state
function dropdownMenu(){
    let hambgMenu = document.getElementById("dropdownClick");
    if (hambgMenu.className === "topnav"){
        hambgMenu.className += " responsive";
    }else{
        hambgMenu.className = "topnav";
    }
}