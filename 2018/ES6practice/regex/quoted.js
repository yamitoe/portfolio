//Replace all ' with "" but keep ones for things such as aren't

let text = "'I'm the cook,' he said, 'it's my job.'";
// Change this call.
console.log(text.replace(/'(.+?\W)'/g, '"$1"')); 
//oh I forgot this is just one regex repeated and not one with a pipe
//Reason why its not $1 and $2

/*A better solution is 
/(^|\W)'|'(\W|$)/g, '$1"$2'
Since it accomendates for if they forgot to place down a special character (comma etc)*/

// → "I'm the cook," he said, "it's my job."