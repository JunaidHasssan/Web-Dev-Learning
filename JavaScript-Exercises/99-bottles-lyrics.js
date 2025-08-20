count = 99

while (count > 0) {

    console.log((bottles(count)) + " of beer on the wall, " + (bottles(count)) + " of beer." + 
"Take one down and pass it around, " + (count - 1 > 0 ? (count - 1) + " bottles" : "no more bottles") + " of beer on the wall.");

count--
    
}

//  Ternary operation to check if bottle is one the print singular, otherwise print plural
//  It is called in while loop

function bottles(n) {

    return n > 1 ? count + " bottles" : count + " bottle"
    
}

//  It prints the last line of the song

console.log("No more bottles of beer on the wall, no more bottles of beer." + 
"Go to the store and buy some more, 99 bottles of beer on the wall.");