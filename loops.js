function forLoop(array){
    for(let i = 0; i < 25; i++){
      if (i === 1){
        array.push("I am ${i} strange loop.");
        //array[i] = "I am ${i} strange loop.";
      }
      else{
        //newString = `"I am ${i} strange loop${i === 0 ? '' : 's'}."`);
       //array.push(newString);
        //array[i].push("I am ${i} strange loops.");
        //array[i] = "I am ${i} strange loops.";
        array.push(`"I am ${i} strange loop${i === 0 ? '' : 's'}."`);
      }
      return array;
    }
}

function whileLoop(n){
    while (n > 0){
      console.log(--n);
    }
    return 'done';
}

var i = 0;
function incrementVariable() {
  i = i + 1;
  return i;
}

function doWhileLoop(num){
  do{
      console.log("I run once regardless.")
  }while(incrementVariable() <= num);
}
