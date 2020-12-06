let name = document.getElementById("name");
let surname = document.getElementById("surname");
let phone = document.getElementById("phone");
let button = document.querySelector("button");

button.onclick = function () {
    name.textContent = fname.value;
    surname.textContent = lname.value;
    phone.textContent = ltelefon.value;
}

