const ARRAY_LENGTH=4;
const randmArray =[]; //avoid using new keyword

for(var i=0;i<ARRAY_LENGTH;i++){
  randmArray.push(Math.random());
}

document.write("Array of 4 random numbers:["+randmArray+"]");