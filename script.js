function showTalks() {
    var talksContent = document.getElementById("talksContent");
    if (talksContent.style.display === "none" || talksContent.style.display === "") {
        talksContent.style.display = "block";
    } else {
        talksContent.style.display = "none";
    }
}
