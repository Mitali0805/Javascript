var n = prompt("Please enter a number", "Any Number 1-9"),prod=1;
var choose = prompt("Please enter a number 1 for factorial 2 for sum", "1-2");
if(!isNaN(n)){
if(choose == 1){
     for(i=n;i>1;i--){  //factorial

        prod=prod*i;
     }
     alert(prod);
 }

else if(choose == 2){
        var x = ((parseInt(n)+1) *n) /2;  //add
          
            alert(x);
          
  }

}