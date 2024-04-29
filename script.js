function calculate() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    var num3 = parseFloat(document.getElementById("num3").value);

    var result;
    if (!isNaN(num1) && !isNaN(num2) && !isNaN(num3)) {
        result = num1 * num2 * num3;
    } else if (!isNaN(num1) && !isNaN(num2)) {
        result = num1 * num2;
    } else if (!isNaN(num1) && !isNaN(num3)){
        result = num1 * num3;
    } else if (!isNaN(num2) && !isNaN(num3)) {
        result = num2 * num3;
    } else {
        document.getElementById("result").innerText = "Veuillez saisir au moins deux nombres valides.";
        return;
    }
    document.getElementById("result").innerText = "Le résultat de la multiplication est :" + result;
}