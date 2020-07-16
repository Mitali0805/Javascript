function parity(){
    var num = document.getElementById("n1").value;
    if (num % 2 == 0) {
        document.getElementById("span1").innerHTML = num + " is an Even number";
    } else {
        document.getElementById("span1").innerHTML = num + " is a Odd number";
    }
}