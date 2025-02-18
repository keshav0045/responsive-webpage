const toggleButton = document.getElementById("toggle-menu");
const menu = document.getElementById("menu");

toggleButton.addEventListener("click", () => {
    menu.style.display = menu.style.display === "none" ? "block" : "none";
});


function adjustPageWidth() {
    const screenWidth = window.innerWidth;
    const body = document.body;

    if (screenWidth > 992 && screenWidth <= 1600) {
        body.style.transform = "scale(0.9)";
        body.style.transformOrigin = "0 0";
    } else if (screenWidth > 700 && screenWidth <= 767) {
        body.style.transform = "scale(0.8)";
        body.style.transformOrigin = "0 0";
    } else if (screenWidth > 600 && screenWidth <= 700) {
        body.style.transform = "scale(0.75)";
        body.style.transformOrigin = "0 0";
    } else if (screenWidth <= 600) {
        body.style.transform = "scale(0.5)";
        body.style.transformOrigin = "0 0";
    } else {
        body.style.transform = "scale(1)";
        body.style.transformOrigin = "0 0";
    }
}

window.addEventListener("load", adjustPageWidth);
window.addEventListener("resize", adjustPageWidth);
