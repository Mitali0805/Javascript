var num=prompt("Enter number of times str should return");
var str=prompt("Enter a string");

document.write("String concatination : ");
function padChars(num,str){

    for(var i=1;i<=num;i++){
        document.write(str);
    }

}
padChars(num,str);
document.write("<hr>");