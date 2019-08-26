"use strict";

require("core-js/modules/es.array.flat");

require("core-js/modules/es.array.unscopables.flat");

require("core-js/modules/web.dom-collections.iterator");

let a = [1,1,[1,2]];
console.log(a.flat());