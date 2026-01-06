function* generatorFun() {
  yield (a = 10);
  yield (b = 20);
  yield (c = 30);
  console.log("Hello this is generator function");
}

let generateValue = generatorFun();
console.log(generateValue.next().value);
console.log(generateValue.next().value);
console.log(generateValue.next().value);
generateValue.next();
