// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = scrollFunction;

function scrollFunction() {
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
    const aboutMe = document.getElementById("Status");
    if (window.scrollY > aboutMe.scrollTop) {
        aboutMe.classList.add("animate");
    } else {
        aboutMe.classList.remove("animate");
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    const y = setInterval(() => {
        if (document.documentElement.scrollTop !== 0) {
            document.documentElement.scrollTop = document.documentElement.scrollTop - 10;
        } else if (document.documentElement.scrollTop === 0) {
            clearInterval(y);
        }
    }, 5); // For Chrome, Firefox, IE and Opera
    y();
}

window.onload = function() {
    console.log("DOM has loaded");
} 

/* Set the width of the side navigation to 250px */
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

// to disable right click from webpage 

 /*document.addEventListener("contextmenu", function (e) {
        e.preventDefault();
    }, false);*/