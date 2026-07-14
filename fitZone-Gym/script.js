// ===============================
// BMI Calculator
// ===============================

function calculateBMI() {

    let weight = document.getElementById("weight").value;
    let height = document.getElementById("height").value;

    if (weight === "" || height === "") {

        document.getElementById("result").innerHTML =
        "Please enter Weight and Height.";

        return;
    }

    height = height / 100;

    let bmi = weight / (height * height);

    bmi = bmi.toFixed(1);

    let status = "";

    if (bmi < 18.5) {
        status = "Underweight";
    }
    else if (bmi >= 18.5 && bmi < 25) {
        status = "Normal Weight";
    }
    else if (bmi >= 25 && bmi < 30) {
        status = "Overweight";
    }
    else {
        status = "Obese";
    }

    document.getElementById("result").innerHTML =
    "Your BMI is <b>" + bmi + "</b><br>Status: <b>" + status + "</b>";

}

// ===============================
// Contact Form
// ===============================

function contactSuccess() {

    document.getElementById("contactMsg").style.display = "block";

    setTimeout(function () {

        document.getElementById("contactMsg").style.display = "none";

    }, 3000);

}
// ===============================
// Back To Top Button
// ===============================

let topBtn = document.getElementById("topBtn");

window.onscroll = function () {

    if (document.body.scrollTop > 300 ||
        document.documentElement.scrollTop > 300) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";

    }

};

function topFunction() {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

}