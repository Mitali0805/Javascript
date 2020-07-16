var year = prompt("please input a year to find out the next 20 leap years");
var counter = 20;
var result=true;

function leapyear(year, counter, result) {

    while (counter > 0) {
 
        if ((year % 4 === 0) && (year % 100 !== 0)||(year % 400 === 0)) {

            result = true;
           document.write(year+"<br>");
            year++;
            counter--;
        }
        else {

        year++;

        }   

    }

}

document.write("Next 20 Leap Years :")
 leapyear(year, counter, result);
