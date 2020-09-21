function calculateBMI(weight, height) {
    let bmi = weight / (height * height);
    return bmi;
}

function convertCmToMeter(heightInCM) {
    let meter = heightInCM / 100;
    return meter;
}

function getResult(bmiNumber) {

    if (bmiNumber < 18.5) {
        return "Underweight";
    } else if (bmiNumber < 25) {
        return "Normal weight";
    } else if (bmiNumber < 30) {
        return "Overweight";
    } else {
        return "Obesity";
    }
}

function handleResultButton() {
    let chieuCao = document.getElementById("chieuCao").value;
    let canNang = document.getElementById("canNang").value;

    let bmi = calculateBMI(canNang, chieuCao);
    let ketQua = getResult(bmi);

    document.getElementById("ketQua").innerHTML = ketQua;
}

function handleResetButton() {
    document.getElementById("chieuCao").value = "";
    document.getElementById("canNang").value = "";
    document.getElementById("ketQua").innerHTML = "";
}
