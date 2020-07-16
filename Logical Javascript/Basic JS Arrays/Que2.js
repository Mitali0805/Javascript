const ARRAY_LENGTH1=100;
const randmArray1 =[]; //avoid using new keyword

for(var i=0;i<ARRAY_LENGTH1;i++){
  randmArray1.push(Math.random());
}

document.write("<br>Array of 100 random numbers:["+randmArray1+"]");