function forLoop(array){
  var newString;

    for(let i = 0; i < 25; i++){
      if (i === 1){
        newString = "I am ${i} strange loop.";
        array.push(newString);
        //console.log("I am " + i + " strange loop.");
      }
      else{
        newString = "I am ${i} strange loops${i === 0 ? '' : 's'}.";
        array.push(newString);
        //console.log("I am ${i} strange loops.");
      }
      return array;

    }
}
