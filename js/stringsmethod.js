

//JavaScript String indexOf()
// The indexOf() method returns the index (position) of the first occurrence of a string in a string,
// or it returns -1 if the string is not found.
// Both indexOf(), and lastIndexOf() return -1 if the text is not found:

// indexOf ma first jo word search krty a jye ga aus ka index show ho jye ga
// lastindexof, ka matlab ha age sentence ma 5 bar ALI aya ha tu jo last bar ALI aya ho ga aus ka index number output krdy ga wo.

let text = 'WHERE DO YOU LIVE ALI, YEAD I LIVE IN YOU HEART';
console.log(text.indexOf('YOU' ));
console.log(text.lastIndexOf('YOU' ));
// // Find the first occurrence of the word 'YOU', starting from index 10
console.log(text.indexOf('YOU' , 10 ));
// Find the last occurrence of the word 'YOU', starting the search backwards from index 35
console.log(text.lastIndexOf('YOU',  35 ));
// Did You Notice?
// The two methods, indexOf() and search(), are equal?
// They accept the same arguments (parameters), and return the same value?
// The two methods are NOT equal. These are the differences:
// The search() method cannot take a second start position argument.
// The indexOf() method cannot take powerful search values (regular expressions).

// JavaScript String search()
// The search() method searches a string for a string (or a regular expression) and returns the position of the match.
let text2 = 'lets try to search where is the search keyword';
console.log(text2.search('try'));
console.log(text2.search(/where/));


// JavaScript String match()
// The match() method returns an array containing the results of matching a string against a string (or a regular expression).

let text3 = 'lets try The search where is the search keyword';
// The regular expression /the/i searches for the first occurrence of "the" in a case-insensitive manner.
// let arr = text3.match(/the/i);
// The regular expression /the/gi searches for the substring "the" in a case-insensitive manner (i flag)
// and globally (g flag), meaning it will find all occurrences.
let arr = text3.match(/the/gi);
document.getElementById('test1').innerHTML = arr.length + ' ' +  arr;
console.log(arr.length + ' ' + arr);





