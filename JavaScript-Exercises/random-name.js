//  selects and print random person from array

function whosPaying(names){

    names = ["Junaid", "Ali", "Waqas", "Ahmad"]
    let index = Math.floor(Math.random() * names.length)
    let person = names[index]
    return person + " is going to buy lunch today!"

}

console.log(whosPaying())