function calculate(){

var option = prompt("Select From Choices \n 1. Add \n 2. Substract \n 3. Mulitply \n 4. Divide \n 5. Exponent \n 6. Mean \n 7. Quit");

switch(option){
    case '1': 
    var a=window.prompt("Enter first number");
    var b=window.prompt("Enter second number");
    document.getElementById("o1").innerHTML=Number(a)+Number(b);
    break;

    case '2': 
    var a=window.prompt("Enter first number");
    var b=window.prompt("Enter second number");
    document.getElementById("o1").innerHTML=Number(a)-Number(b);
    break;

    case '3': 
    var a=window.prompt("Enter first number");
    var b=window.prompt("Enter second number");
    document.getElementById("o1").innerHTML=Number(a)*Number(b);
    break;

    case '4': 
    var a=window.prompt("Enter first number");
    var b=window.prompt("Enter second number");
    document.getElementById("o1").innerHTML=Number(a)/Number(b);
    break;

    case '5': 
    var a=window.prompt("Enter Base");
    var b=window.prompt("Enter Exponent");
    document.getElementById("o1").innerHTML=Math.pow(Number(a),Number(b));
    break;

    case '6': 
    var i = 0;
    var sum = 0; 
    var a=window.prompt("How many time do you want to enter no. ");
    do {
        var number = prompt("Please Enter a Number");
        if (number != "***") {
            sum += parseInt(number); 
        } else {
            break;
        }
        i++;
    }
    while (i < Number(a));
    document.getElementById("o1").innerHTML = sum / i;
    break;

    case '7':
        o =prompt("You want to Quit:\n 1:Yes \n 2:No")
        if(o ==1){
            break;
        }
        else{
            calculate();
        }

        break;

      default:alert("Please enter correct choice")  
}

}