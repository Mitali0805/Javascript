function flipCoin(){
    return Math.random()<0.5; // 0.5=50% nothing but 5/10
}

function getNumberOfCoins(){
var r=prompt("How many flips?");
    if(isNaN(r)){
        alert("Please type a number!");
        return getNumberOfCoins();
    }
    if(!r)r=0;
    return Math.floor(Number(r));
}

function flipCoins()
{
var f=getNumberOfCoins();
var heads=0;
var tails=0;
    for(var i=0;i<f;i++)
    {
    flipCoin()?heads++:tails++;
    }
    
    alert("heads: "+heads);
    
}

