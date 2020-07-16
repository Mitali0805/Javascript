function max(){
    var n1,n2,n3;
     n1 = Number(document.getElementById("num1").value);
     n2 = Number(document.getElementById("num2").value);
     n3 = Number( document.getElementById("num3").value);

    if(n1 > n2 && n1 > n3){
        document.getElementById("span1").innerHTML= n1 + "is maximum";
        //document.write(n1);
    }
    else if(n2 > n1 && n2 > n3){
        document.getElementById("span1").innerHTML= n2 + "is maximum";
    }
    else if(n3 > n1 && n3 > n2){
        document.getElementById("span1").innerHTML= n3 + "is maximum";
    }
}