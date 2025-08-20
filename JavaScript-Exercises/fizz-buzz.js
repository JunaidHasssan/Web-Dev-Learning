const arr = []
count = 1


function fizzBuzz(){

    // if divisible by 3 and 5 completely, return FizzBuzz

    if (count % 3 === 0 && count % 5 === 0){

        arr.push("FizzBuzz")
    }

    // if divisible by 3 completely, return Fizz

    else if (count % 3 === 0){

        arr.push("Fizz")
    }

    // if divisible by 5 completely, return Buzz

    else if (count % 5 === 0){
        arr.push("Buzz")
    }

    //  otherwise return number

    else{
        arr.push(count)
    }

    //  increment number
    
    count++


    console.log(arr)
}

fizzBuzz()
fizzBuzz()
fizzBuzz()
fizzBuzz()
fizzBuzz()
fizzBuzz()
fizzBuzz()
fizzBuzz()
fizzBuzz()
fizzBuzz()
fizzBuzz()
fizzBuzz()
fizzBuzz()
fizzBuzz()
fizzBuzz()
fizzBuzz()
fizzBuzz()
fizzBuzz()
fizzBuzz()
fizzBuzz()
fizzBuzz()
fizzBuzz()
fizzBuzz()
fizzBuzz()
fizzBuzz()
fizzBuzz()
fizzBuzz()