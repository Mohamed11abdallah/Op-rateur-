function calculate() {
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);

    if (isNaN(num1) || isNaN(num2)) {
        alert("Veuillez entrer des nombres valides.");
        return;
    }
    var result = num1 * num2;
    document.getElementById("result").innerHTML = "Le résultat de la multiplication est : " + result;
}
