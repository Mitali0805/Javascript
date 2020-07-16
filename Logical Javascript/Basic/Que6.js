
var randm,rollDice,i;
var count=0;

/*rollDice=prompt("How many times do you want to roll the dice?")

    for(i=1;i<=rollDice;i++){
        randm = Math.floor(Math.random() *6)+1; 

        if(randm==6){
           document.write(rollDice+"times you have to roll a dice to get 6")
        
        }
    }
    */

    function numRollsToGetSix(){
        for(rollDice=1;rollDice<=20;rollDice++)
        {
            randm = Math.floor(Math.random() *6)+1; 

            if(randm==6){
            document.write(rollDice +" "+"times you have to roll a dice to get 6 <br>");
        }
            
    }

}