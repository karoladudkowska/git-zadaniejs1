
const paragraph = document.getElementById("tekst");
const firstButton = document.getElementById("dodaj");
const secondButton = document.getElementById("usun");

firstButton.onclick = function () {
    paragraph.textContent = "Dodawanie tekstu jest fajne";
}
secondButton.onclick = function () {
    paragraph.textContent = "";
}