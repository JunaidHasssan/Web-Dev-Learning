// Block scope
{
  var blockVar = "I'm a block-scoped var";
  let blockLet = "I'm a block-scoped let";
  const blockConst = "I'm a block-scoped const";

  console.log(blockVar);
  console.log(blockConst);
  console.log(blockLet);

  blockLet = "Change";

  console.log(blockLet); //let can be reassigned
}

console.log(blockVar); // var has global scope

blockVar = "Change"

console.log(blockVar); // var can be reassigned
