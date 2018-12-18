// Fill in the regular expressions

//Criteria
/*
1.car and cat

2.pop and prop

3.ferret, ferry, and ferrari

4.Any word ending in ious

5.A whitespace character followed by a period, comma, colon, or semicolon

6.A word longer than six letters

7.A word without the letter e (or E)
*/

verify(/car|cat/,
    ["my car", "bad cats"],
    ["camper", "high art"]);

verify(/pop|prop/,
    ["pop culture", "mad props"],
    ["plop", "prrrop"]);

verify(/ferr(et|y|ari)/,
    ["ferret", "ferry", "ferrari"],
    ["ferrum", "transfer A"]);

verify(/ious\b/,
    ["how delicious", "spacious room"],
    ["ruinous", "consciousness"]);

verify(/\s[.,:;]/,
    ["bad punctuation ;"],
    ["escape the period"]);

verify(/\w{7,}/,
    ["hottentottententen"],
    ["no", "hotten totten tenten"]);

verify(/\b[^\se]+\b/i,
    ["red platypus", "wobbling nest"],
    ["earth bed", "learning ape", "BEET"]);


function verify(regexp, yes, no) {
    // Ignore unfinished exercises
    if (regexp.source == "...") {return};

    for (let str of yes){
        (!regexp.test(str)) ? console.log(`Failure to match '${str}'`): console.log("success, found match" ,regexp.exec(str));    
    }
    for (let str of no){ 
        (regexp.test(str)) ? console.log(`Unexpected match for '${str}'Not suppose to find anything here`, regexp.exec(str)): null;
    }
}