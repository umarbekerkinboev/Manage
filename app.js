// HEADER
const Hamburger = document.querySelector(".hamburger-menu");
MobileNavbar = document.querySelector(".mobile-navbar");

Hamburger.addEventListener("click", () => {
    MobileNavbar.classList.toggle("active");
    Hamburger.classList.toggle("open");
});
// EMAIL
function validateEmail() {
    var emailInput = document.getElementById("email-input");
    var email = emailInput.value;
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert("Please enter a valid email address.");
        emailInput.focus();
        return false;
    }
    return true;
}















// const SingleDot = document.querySelectorAll(".single-dot");
// People = document.querySelectorAll(".careers-main-part-1");
// FirstPerson = document.querySelector(".careers-main-part");

// People.forEach( => {
//     SingleDot.addEventListener("click", () => {
//         People.classList.toggle("show");
//         FirstPerson.classList.toggle("none");
//     });
// });
