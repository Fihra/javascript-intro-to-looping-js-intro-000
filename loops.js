function forLoop(newArray){
  var newString;
  
    for(let i = 0; i < 25; i++){
      if (i == 1){
        newString = "I am " + i + " strange loop.";
        newArray.push(newString);
        //console.log("I am " + i + " strange loop.");
      }
      else{
        newString = "I am ${i} strange loops.";
        newArray.push(newString);
        //console.log("I am ${i} strange loops.");
      }
      return newArray;

    }
}