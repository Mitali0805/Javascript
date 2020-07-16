var i,j;
var prod=1;
document.write("Tables of 1-12 <br>")
for(i=1;i<=12;i++){
    for(j=1;j<=10;j++){
        prod=i*j;
        document.write(i+"*"+j+"="+prod +"<br>");
    }
    document.write("<br>");
}