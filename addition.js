function calculate(){
  

  let num1 = parseFloat(document.getElementById('num1').value);
  let num2 = parseFloat(document.getElementById('num2').value);
  let num3 = parseFloat(document.getElementById('num3').value);

  let result;
    if (!isNaN(num1) && !isNaN(num2) && !isNaN(num3)) {
        result = num1 + num2 + num3;
    } else if (!isNaN(num1) && !isNaN(num2)) {
        result = num1 + num2;
    } else if (!isNaN(num1) && !isNaN(num3)){
        result = num1 + num3;
    } else if (!isNaN(num2) && !isNaN(num3)) {
        result = num2 + num3;
    } else {
        document.getElementById("result").innerText = "Veuillez saisir au moins deux nombres valides.";
        return;
    }
    document.getElementById("result").innerText = "Le résultat de la multiplication est :" + result;
}
