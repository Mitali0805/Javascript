function createTable(){
    x=window.prompt("Enter no of rows",1);
    y=window.prompt("Enter no of columns",1);

    for(var r=0;r<parseInt(x,10);r++)
    {
        var r1=document.getElementById("table1").insertRow(r);
        
        for(var c=0;c<parseInt(y,10);c++)
        {
            var c1=r1.insertCell(c);
            c1.innerHTML="Row-"+r+"Column-"+c;
        }

    }
}