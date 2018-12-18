class MultiplicatorUnitFailure extends Error {}

function primitiveMultiply(a, b) {
  if (Math.random() < 0.2) {
    return a * b;
  } else {
    throw new MultiplicatorUnitFailure("Klunk");
  }
}

function reliableMultiply(a, b) {
  // Keep trying till it succeeds
  for(;;){
        try{
            let x = primitiveMultiply(a,b);
            return x;
        }
        catch(e){
            if(e instanceof MultiplicatorUnitFailure){
                console.log("Try again");
            }
            else{
                throw e; //not an exception
            }
        }
     
    }
  }
 

console.log(reliableMultiply(8, 8));
// → 64