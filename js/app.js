/*The let and const keyword was introduced in ES6 (2015)
Variables declared with let and const have Block Scope
Variables declared with let and const  must be Declared before use
Variables declared with let and const cannot be Redeclared in the same scope

------------------------------------------
let and const have block scope.

let and const can not be redeclared.

let and const must be declared before use.

let and const does not bind to this.

let and const are not hoisted
*/

document.addEventListener("DOMContentLoaded", () => {
  // window.alert("Hello World!");
  // window.alert(5+5);

  document.getElementById('test').innerHTML = 'MASTERING JS COURSE AND PREP (THIS LINE IS WRITTEN IN JS;) ';
  document.getElementById('test').style.color = 'grey ';
  // document.getElementById('demo').innerHTML = 3 * 3;


  /*
  document.getElementById('btn1').addEventListener('click', function () {
    alert('btn is clicked......')
  });
  */

//   js statements
  let firstNum, lastNum, total;
  firstNum = 20;
  lastNum = 20;
  total = firstNum + lastNum;

  document.getElementById('result').addEventListener('click', function () {
    let heading = document.createElement('h6');
    heading.textContent = "FINAL RESULT IS : " + total;

    document.getElementById('res').appendChild(heading);  //consoling the result.

    this.style.display = "none";
  });

  // concatination of strings;
  /*
  let carName = 'toyota';
  // carName = 'honda';
  // string concatination.
  let firstName = 'ali';
  let lastName = 'zia';

  console.log(firstName + lastName);
  */

  /*
       When to use JavaScript const?
      Always declare a variable with const when you know that the value should not be changed.
      Use const when you declare:
      A new Array
      A new Object
      A new Function
      A new RegExp
   */

  // const pi = 3.04;
  // console.log(pi);

  /*---------------------------------
  //   const array
    const arr = ['ali' , 'usman', 'ahad '];
    // this behaviour is not allowed.  although this problem can be solved by using let...
    arr.pop(0)
    arr.push('mani')
    console.log(arr);
    //console.log(arr[0]); //to console the 0 element of array which will be usman because i remove ali using pop function.
    ----------------------------------*/

  /*-------------------------
  //   const object
    const car = {type:'honda' , model: '2021' , color: 'Red' };
    // car.color = 'Grey';    //changing color property...
    car.owner = 'ALI ZIA'
    // document.getElementById('cars').innerHTML = `'CAR DETAILS IS : ' ${car.type } ${car.color}`;
    console.log(car);
    let x = 7;
   // x++; //adding 1 to x which is 5+1 = 6;
    //x--; //subtracting 1 from x which is 6-1 = 5; because value of x has been changed with x++;
    //let val = x **2; //its like taking square root of x;
    let val = Math.pow(x, 2);   //it's like taking square root of x; this is built in function;
    console.log(val);

   ------------------------------ */
  /*----------------------

  // Operator Precedence    multiply and division have higher precedence then plus and subtract.
  let op = 100 + 5 *5;
  console.log(op);

  // Operator Precedence    now in this case brackets have higher precedence then in upper case;.
  let op2 = (25+25) *2;
  console.log(op2);
  // no effect if same precedene in this case plus and subtract have same precedence.
  let op3 = 5 + 525 -25;
  console.log(op3);
// no effect if same precedene in this case division and multiplication have same precedence.
  let op4 = 100/2*2;
  console.log(op4);
----------------------------------*/


  /*--------------------------------
  // The Addition Assignment Operator adds a value to a variable.
  //   Assignment Operator using numbers
    let val = 25;
    val += 5;  // logic here its like val = val +5;   so it means  25 = 25 +5 = 30;;;
    console.log(val);
    //   Assignment Operator using strings
    let name = 'ALI';
    name += 'ZIA';   //logic here its like name  = name + zia; so it means  ali  = ali + zia = aliziabasiclly concatination.
    console.log(name);

    //The Subtraction Assignment Operator subtracts a value from a variable.
    let num = 100;
    num -= 50;  //logic here its like val = val - 50;   so it means  100 = 100 - 50 = 50;  subt
    console.log(num);

    // The Multiplication Assignment Operator multiplies a variable.
    let num1 = 5;
    num1 *= 5;
    console.log(num1);

    // The Exponentiation Assignment Operator raises a variable to the power of the operand.
    let num2 = 7;
    num2 **= 2;
    console.log(num2);

  //   The Division Assignment Operator divides a variable.
    let num3 = 8;
    num3 /= 4;
    console.log(num3);

  //   The Remainder Assignment Operator assigns a remainder to a variable.
    let num4 = 6;
    num4 %= 5;
    console.log(num4);

  //   The <<= Operator
  // The Left Shift Assignment Operator left shifts a variable.
    let num5 = 5;
    num5 <<= 5; //left shift operator means 5 * (2^ num (5) ) which will be 5 * (32) = 160;
    console.log(num5);

    // The >>= Operator
  // The Right Shift Assignment Operator right shifts a variable (signed).
    let num6 = 50;
    num6 >>= 3;   //right shift operator means 50 / (2^ num (3) ) which will be 50 / (8) = 6;
    console.log(num6);

    // The >>>= Operator
  // The Unsigned Right Shift Assignment Operator right shifts a variable (unsigned).
    let num7 = 100;  // binary representation of 100 is = 1100100; when we right shift it by 2 it will become
    // 0011001
    num7 >>>= 2;
    console.log(num7);



    // The &= Operator
    // The Bitwise AND Assignment Operator does a bitwise AND operation on two operands and assigns the result to the the variable.
    let num8 = 50; //binary of 50 is : 110010 & binary of 3 is : 11; tu jb compare kia tu answer aya = 10
    num8 &= 3;  // sb sa phely yeh 2no number ko binary ma convert krta ha then ausy compare krta ha agr tu
    // 2no bit 1 ha tu result will be 1 other wise koi bi case ho bit 0 aye gi.
    // 10 logic kaisy yeh answer aya is ko deciamal ma convert kr ky 2;;;   1 × 2^1 + 0 × 2^0  = 2
    console.log(num8);

    // The |= Operator
    // The Bitwise OR Assignment Operator does a bitwise OR operation on two operands and assigns the result to the variable.
    let num9 = 90;  //yeh phely 90 or 5 ko binary ma convert kry ga then ausy compare kr kry result store kry ga.
    num9 |=5;  // yeh operator AND OPERATOR SA aulta kam krta ha is ma agr koi bi bit 1 ha tu wo ausy consider kry ga
    // jo ka AND operator ma both bits ka 1 hona zarori tha.. but is ma aesa ni ha.. after that yeh result deta ha;
    console.log(num9);

    // The ^= Operator
    // The Bitwise XOR Assignment Operator does a bitwise XOR operation on two operands and assigns the result to the variable.
    // Bitwise XOR Operation: The bitwise XOR (^) operation compares the corresponding bits of two numbers.
    // If the bits are different, the resulting bit is 1; otherwise, it's 0.
    let num10 = 10;
    num10 ^= 5;   //agr 2no bits different ho gi then ausy yeh 1 consider kry ga other wise 0 means same bit ho agr 1 and 1 or 0 and 0;
    console.log(num10);

  //   The &&= Operator
  // The Logical AND assignment operator is used between two values.
  // If the first value is true, the second value is assigned.
    let num11 = 45;
    // let num11 = undefined; if i undefined my variable the second value will not be assigen the output will be undefined;
    num11 &&= 5;
    console.log(num11);

  //   The ||= Operator
  // The Logical OR assignment operator is used between two values.
  // If the first value is false, the second value is assigned.
    // or age or operator ma first value undefined nahi ha tu pheli value assign ho gi variable konor wohi output ho ga;
    // let num12 = undefined;
    let num12 = 21;
    num12 ||= 74;
    console.log(num12);

  //   The ??= Operator
  // The Nullish coalescing assignment operator is used between two values.
  // If the first value is undefined or null, the second value is assigned.
  // let x; document.getElementById("demo").innerHTML = x ??= 5; EXAMPLE
  //   Agr variable ko value da di tu phely wali value assign hi output ho gi...
    let num13;
    num13 ??= 9257;
    console.log(num13);


   ALL OPERATORS ARE COVERED HERE IN THIS BLOCK;;;;;;;    */




})
