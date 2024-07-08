// Conseguir los elementos del HTML.
let password = document.getElementById("password");
let power = document.getElementById("power-point");

// Función para establecer el poder de la contraseña a medida que se escribe.
password.oninput = function () {
    let point = 0;
    let value = password.value;
    let widthPower = ["1%", "25%", "50%", "75%", "100%"];
    let colorPower = ["#D73F40", "#DC6551", "#F2B84F", "#BDE952", "#3ba62f"];

    if (value.length >= 6) {
        let arrayTest = [/[0-9]/, /[a-z]/, /[A-Z]/, /[^0-9a-zA-Z]/];
        arrayTest.forEach((item) => {
            if (item.test(value)) {
                point += 1;
            }
        });
    }

    power.style.width = widthPower[point];
    power.style.backgroundColor = colorPower[point];
};