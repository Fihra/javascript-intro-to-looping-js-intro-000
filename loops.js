function forLoop(array){
  var newString;

    for(let i = 0; i < 25; i++){
      if (i === 1){
        //console.log(`"I am ${i} strange loop."`);
        //array.push(i);
        array[i] = "I am ${i} strange loop.";
        //console.log("I am " + i + " strange loop.");
      }
      else{
        //console.log(`"I am ${i} strange loop${i === 0 ? '' : 's'}."`);
      //  array.push(i);
        array[i] = "I am ${i} strange loop${i === 0 ? '' : 's'}.";
        //console.log("I am ${i} strange loops.");
      }
      return array;

    }
}

function whileLoop(n){
    while (n > 0){
      console.log(n);
      n--;
    }
}
