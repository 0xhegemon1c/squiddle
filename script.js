document.addEventListener("DOMContentLoaded", function () {
    if (window.innerWidth > 768) {
        var pet = new eSheep();
        pet.Start();
    }
});

function showTalks() {
    var talksContent = document.getElementById("talksContent");
    if (talksContent.style.display === "none" || talksContent.style.display === "") {
        talksContent.style.display = "block";
    } else {
        talksContent.style.display = "none";
    }
}

 window.addEventListener("load", (event) => {
            new cursoreffects.textFlag({ text: "who are you?..", color: ["#87f266"] });
        });
