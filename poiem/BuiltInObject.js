var o = new Object();
console.log( typeof o + ': ', o);

o = new Object(undefined);
console.log(typeof o + ': ', o);

var obj = new Object('String');
console.log(typeof obj + ': ', obj);
console.dir();

var foo = new Boolean(true);
var foo = new Boolean(null);

