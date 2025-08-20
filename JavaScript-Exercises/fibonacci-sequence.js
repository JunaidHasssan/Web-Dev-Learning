function fibonacciGenerator (n) {

    if(n === 1){

        return[0]

    }

    else if(n === 2){

        return[0, 1]

    }

    else{

        let fibonacci = [0, 1]

        for(i = 2; i < n; i++){

            fibonacci.push(fibonacci[fibonacci.length - 2] + fibonacci[fibonacci.length - 1])

        }

        return fibonacci

    }

}

console.log(fibonacciGenerator(6));
