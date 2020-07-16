var n = prompt("Enter any number");

if(!isNaN(n)){

    var x = (n*(parseInt(n)+1))/2;
   // alert(n);

    document.write("sum of numbers 1 to "+n+ " "+"="+ x + "<br>");
}