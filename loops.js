function forLoop(array){
  var newString;

    for(let i = 0; i < 25; i++){
      if (i === 1){
        console.log(`"I am ${i} strange loop."`);
        array.push(i);
        //console.log("I am " + i + " strange loop.");
      }
      else{
        console.log(`"I am ${i} strange loop${i === 0 ? '' : 's'}."`);
        array.push(i);
        //console.log("I am ${i} strange loops.");
      }
      return array;

    }
}
