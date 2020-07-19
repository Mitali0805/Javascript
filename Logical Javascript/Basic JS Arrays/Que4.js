var str;
function longestToken(str){
   
    var strSplit = str.split(/[ab]+/);
    console.log(strSplit);
    var longestWord="";
    for(var i=0 ; i<strSplit.length ; i++){
        
        if(strSplit[i].length>longestWord.length ){
           longestWord=strSplit[i];
    }
  }

    document.write("Longest String without a & b :"+longestWord);
}

longestToken("ababcdababefgababhiab");