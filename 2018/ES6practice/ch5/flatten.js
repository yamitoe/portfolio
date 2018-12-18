let arrays = [[1, 2, 3], [4, 5], [6]];
//if written out
let current = [];
for(let value of arrays){
    current = current.concat(value);
}
console.log(current);

//just higher functions
console.log(arrays.reduce((x,y)=> x.concat(y)));
//-------------------------------
function loop(num, test, update, body){ 
    for(let x = num; test(x); x = update(x)){
        body(x);
    }
}
//-----------------------------
//side note predicate functions return true or false
function every(array, predicate) {
    for(let value of array){
        if(!predicate(value)){
            return false;
        }
    }
    return true;
  }

function every1(arr, predicate){
    //'.some' checks if at any point this returns true
   if(!arr.some((value)=>{
        //therefore if it cant find a false then it worked
        return predicate(value) == false; 
    })){
        return true;
    }
    else{
        return false;
    }
}
//rewriting above
function every2(arr, predicate){
    //short form auto returns so no need for return statement
return !arr.some(element =>!predicate(element));
}


/*console.log(every([1, 3, 5], n => n < 10));
// → true
console.log(every([2, 4, 16], n => n < 10));
// → false
console.log(every([], n => n < 10));*/
// → true
//----
console.log(every1([1, 3, 5], n => n < 10));
// → true
console.log(every1([2, 4, 16], n => n < 10));
// → false
console.log(every1([], n => n < 10));
// → true
//---
console.log(every2([1, 3, 5], n => n < 10));
// → true
console.log(every2([2, 4, 16], n => n < 10));
// → false
console.log(every2([], n => n < 10));
// → true

//---------------------
function dominantDirection(text) {
    //groups em and counts em by group //for of loops any collection
    let scriptsNamed = countBy(text,getChar =>{
        //get the char at this index return code number //find what script its from
        let whatscript =  characterScript(getChar.codePointAt(0));
        //if I can get the direction return it else if none give 'none'
        return whatscript ? whatscript.direction : "none"; 
    }).filter(({name}) => name != "none");

    //I want to loop scriptsNamed for all .count propeties
    //countBy returns an arrary
    let highest = 0;
    let whatdirection = "";
    for(let index of scriptsNamed){
        if(highest == 0 || highest < index.count){
            highest = index.count;
            whatdirection = index.name;
        }
      
    }
    return whatdirection;
}


console.log(dominantDirection("Hello!"));
// → ltr
console.log(dominantDirection("Hey, مساء الخير"));
// → rtl



   