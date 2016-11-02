/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/* Copyleft 2015*/

/* Wanneer de gebruiker op de button menu klikt dan toggled het menu zichtbaar*/

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}


// Sluit de dropdown wanneer de gebruiker buiten het menu klikt.

window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')){
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++){
            var openDropdown = dropdowns[i];
            if (openDropdown.classlist.contains('show')){
                openDropdown.classList.remove('show');
            }
        }
    }
}

// click voor kleurverandering fa fa

function myDemo() {
    document.getElementById("demo").style.color = "white";
}

function myBeroemd() {
    document.getElementById("beroemd").style.color = "white";
}

function myFreudiaans() {
    document.getElementById("freudiaans").style.color = "white";
}

function myStoned() {
    document.getElementById("stoned").style.color = "white";
}
