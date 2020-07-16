var n = 17,i;
var sum=0;
for(i=0;i<=n;i++){
    if(i%3==0 || i%5==0){
        sum=sum+i;
    }
}

document.write("sum of numbers divisible by 3 or 5 between 1 to 17 ="+" "+sum+"<br>");