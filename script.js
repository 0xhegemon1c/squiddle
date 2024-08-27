function showTalks() {
    var talksContent = document.getElementById("talksContent");
    if (talksContent.style.display === "none" || talksContent.style.display === "") {
        talksContent.style.display = "block";
    } else {
        talksContent.style.display = "none";
    }
}

document.addEventListener("DOMContentLoaded", function () {
    var pet = new eSheep();
    pet.Start();
});

function showTalks() {
    var talksContent = document.getElementById("talksContent");
    if (talksContent.style.display === "none" || talksContent.style.display === "") {
        talksContent.style.display = "block";
    } else {
        talksContent.style.display = "none";
    }
}
