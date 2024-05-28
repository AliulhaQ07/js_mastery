// Here is a list of some common HTML events:
// onchange	An HTML element has been changed
// onclick	The user clicks an HTML element
// onmouseover	The user moves the mouse over an HTML element
// onmouseout	The user moves the mouse away from an HTML element
// onkeydown	The user pushes a keyboard key
// onload	The browser has finished loading the page


function displayDate() {
  document.getElementById("sample2").innerText = Date();
}


document.addEventListener("DOMContentLoaded", () => {


//   TEMPLATES STRING;
  let name = 'MY NAME IS DHINCHAK POOJA';
  console.log(name.length);

  // error occurs;
  // let text = "we are so-called "viking" from the north.";
  // solution;
  let text = "we are so-called \"viking\" from the north.";
  console.log(text);
  let text2 = `The quick brown fox
    jumps over
    the lazy dog`;

  document.getElementById('sample3').innerText = text2;

  let age = new String('13 years old');
  console.log(age);
  console.log(typeof (age));

  console.log(age == text);
  console.log(age === text);

  let num1 = 33;
  let num2 = 33;

  console.log(num1 == num2);


  // -----------------------------------------------------------------------
  // Basic String Methods
  // Javascript strings are primitive and immutable: All string methods produces a new string without altering the original string.
  // String length
  // String charAt()
  // String charCodeAt()
  // String at()
  // String [ ]
  // String slice()
  // String substring()
  // String substr()
  // See Also:
  // String Search Methods
  // String Templates
  // String toUpperCase()
  // String toLowerCase()
  // String concat()
  // String trim()
  // String trimStart()
  // String trimEnd()
  // String padStart()
  // String padEnd()
  // String repeat()
  // String replace()
  // String replaceAll()
  // String split()

  // JavaScript String Length
  let name2 = 'ALI UL HAQ ZIA';
  // JavaScript String charAt()
  // The charAt() method returns the character at a specified index (position) in a string;
  console.log(name2.charAt(0));
  // JavaScript String charCodeAt()
  // The charCodeAt() method returns the code of the character at a specified index in a string:
  // The method returns a UTF-16 code (an integer between 0 and 65535).
  console.log(name2.charCodeAt(0));
  // JavaScript String at()
  // ES2022 introduced the string method at():
  console.log(name2.at(2));
  // Property Access [ ]
  console.log(name2[0]);

  console.log(name2.length);
  // -------------------------------------------
  // Extracting String Parts
  // There are 3 methods for extracting a part of a string:
  // slice(start, end)
  // substring(start, end)
  // substr(start, length)

  let name3 = 'ADRESS MANI SHAHZAIB';
//   avaScript String slice()
// slice() extracts a part of a string and returns the extracted part in a new string.
// The method takes 2 parameters: start position, and end position (end not included).
  console.log(name3.slice(6, 11));
  // If you omit the second parameter, the method will slice out the rest of the string:
  console.log(name3.slice(6));
  // If a parameter is negative, the position is counted from the end of the string:
  console.log(name3.slice(-6));

  console.log('NAME 3 END HERE! ' + name3);

//   JavaScript String substring()
// substring() is similar to slice().
// The difference is that start and end values less than 0 are treated as 0 in substring().
  let name4 = 'ALI RUTBA USMAN';
  console.log(name4.substring(0, 8));
  console.log(name4.substring(8));
  console.log(name4);

//   Converting to Upper and Lower Case
// A string is converted to upper case with toUpperCase():
// A string is converted to lower case with toLowerCase():

  let name5 = 'AlI rutba UsMan';
  console.log(name5.toLowerCase());
  console.log(name5.toUpperCase());

//   JavaScript String trim()
// The trim() method removes whitespace from both sides of a string:
  let client = '    usman     mani          adress         shahzaid           ';
  let trimmedClient = client.trim();
  let trimmedClient2 = client.trimStart();
  let trimmedClient3 = client.trimEnd();

  console.log(client.length);
  console.log(trimmedClient.length);
  console.log(trimmedClient2.length);
  console.log(trimmedClient3.length);

//   JavaScript String padStart()
// The padStart() method pads a string from the start.
// It pads a string with another string (multiple times) until it reaches a given length.
// basically yeh string ka start ma number add krti ha ap ki marzi ka or kitny krny ha wo bi ap pta sakty.
// first num is before num kitni bar ana chaiye and second parameter is kia  ana chaiye.
  let num3 = '88';
  let padded = num3.padStart(7, 'x');
  console.log(padded);

  let num4 = 23;
  let con = num4.toString();
  console.log(con.padStart(2, 5));


  // JavaScript String repeat()
  // The repeat() method returns a string with a number of copies of a string.
  // The repeat() method returns a new string.
  // The repeat() method does not change the original string.
  let name6 = 'shokat hayat';
  console.log(name6.repeat(2));

//   Replacing String Content
// The replace() method replaces a specified value with another value in a string:

  let text3 = 'Java is very good lang';
  let rep = text3.replace('JAVA IS NOT GOOD');
  console.log(rep);

  // JavaScript String split()
  // A string can be converted to an array with the split() method:
  let fru = 'apple, banana, mango';
  let arr = fru.split(',', 1);
  let arr2 = fru.split();
  console.log(fru);
  console.log(arr);
  console.log(arr2);


})




// Replacing String Content
// The replace() method replaces a specified value with another value in a string:
// HOW THIS WORKS, BASICALLY REPLACE USE KRNY KA LIE FIRST PARAMETER MA SEARCH KRNI HOTI H VALUE AND SECOND PARAMETER MA REPLAVE VALUE DALNI HOTI H.
// To replace case insensitive, use a regular expression with an /i flag (insensitive):
// text.replace(/MICROSOFT/i,"W3Schools");
// To replace all matches, use a regular expression with a /g flag (global match):
// text.replace(/Microsoft/g,"W3Schools");
function myFunction() {
  let text = document.getElementById('sample4').innerHTML;
  // IT WILL ONLY WORK IF THE SEARCH VALUE IS PRESENT IN OUR P TAG.
  document.getElementById('sample4').innerHTML = text.replace('PRODUCTIVE', 'RABCHIK LANGUAGE.');
}

function myfunc() {
  let text = document.getElementById('sample5').innerHTML;

  document.getElementById('sample5').innerHTML = text.replaceAll('cats', 'dogs');

  console.log(text);

}


