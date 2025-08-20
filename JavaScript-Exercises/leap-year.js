//  Checks if a function is a leap year or not
//  Check if year is divisible by 4 
//  If yes then check if it is divisible by 100 otherwise print Leap Year.
//  If yes check if it is divisible by 400
//  If yes then print Leap Year

function isYear(year) {

    if (year % 4 === 0) {
        
        if (year % 100 === 0) {

            if (year % 400 === 0){
                return ("Leap year.")
            }

            else {
                return("Not leap year.")
            }
            
        }

        else{

            return("Leap year.")

        }
        
    }

    else{

        return ("Not leap year.")
        
    } 

}

console.log(isYear(2100));