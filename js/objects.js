document.addEventListener('DOMContentLoaded', () => {

  /*

  // js objects syntax;   METHOD 1
  let emp_Data = {
    name: 'ALI UL HAQ',
    age: 25,
    salary: '50k',
    gender: 'MALE',
    height: 5.8
  }

  // console.log(emp_Data);
  console.log(emp_Data.name);

  // const personData = JSON.stringify(emp_Data);
  // document.getElementById('objectOutput').innerHTML = personData;

  // creating empty object then assigning values to that objects;     METHOD 2;
  let studentData= {};
  studentData.name = 'rutba ali';
  studentData.salary = '50k';
  studentData.age = 23;
  studentData.desigination = 'SOFTWARE DEVELOPER';

  // console.log(studentData);
  console.log(studentData.name);


//   3 METHOD;
// This line creates a new, empty object and assigns it to the variable person.
  const bus_Data = new Object();
  bus_Data.make = 2011;
  bus_Data.color = 'black';
  bus_Data.reg = 'Lahore-2011';
  bus_Data.bus_tires = ['18 inches' , '36 inches'];
  // update the value of bus_tires;
  bus_Data.bus_tires = ['56 inches' , '86 inches'];

  result = function () {
    console.log(bus_Data.bus_tires);
  };
  console.log(bus_Data.reg);
  result();

   // Modifying Object Properties
  // delete studentData["name"];

//   Accessing Object Properties
// You can access object properties using dot notation or bracket notation:
//   Dot Notation:
  console.log(emp_Data.name);
//   Bracket Notation:
  console.log(studentData["name"]);

//   Using const for Objects:
// Declare objects with const to prevent reassignment.

  const person = {
    name : 'ALI',
    age: 25,

  }
  // it doesnot allow to modify the person name due to const;
  // person = {name : 'haq'}
  // deleting the person.name object
  // delete person.name;
  console.log(person.name); //if object deleted the output will be undefined;


//   object within other object;;

  let parentObj = {
    name : 'zia ul haq',
    age : 55,
    childObj: {
      age: 25,
      name: 'ali'
    }
  }
  // to access the nested objects you have to use parentobj to acces childobj;
  console.log(parentObj.name  + "-------" + parentObj.childObj.name);

  let laptop = {
    brand: 'hp',
    model : 2021,
    ram : '8GB',
    // pakclient : function () {
    //   return (this.brand + "-" + this.model + "-" + this.ram).toUpperCase();
    // }
  }
  // document.getElementById('laptop').innerHTML = laptop.pakclient();

  // console.log(laptop.pakclient());

  // Displaying Properties in a Loop
  let text = "";
  for (let x in laptop) {
    text += laptop[x] + "";
  }
  console.log(text);

  document.getElementById('laptop2').innerHTML = text;
  // Yes, Object.values is a built-in function in JavaScript.
  // It is a method provided by the Object constructor that allows you to extract the values of an object's properties into an array.
  const myArray = Object.values(laptop);
  console.log(myArray);


  const fruits = {banana: 20, mango:10, apples: 88};
  let text2 = '';
  for (let [fruit, values] of Object.entries(fruits))
  {
    text2 = text2 + fruit + "-" + values;
    text2 += fruit + "-"  + values ;
  }
//   Object.entries(fruits): The Object.entries method returns an array of the object's own enumerable property [key, value] pairs. For the fruits object, it will return:
// [ ["Bananas", 300],  ["Oranges", 200],   ["Apples", 500]   ]
// for (let [fruit, value] of ... ): This is a for...of loop that iterates over the array returned by Object.entries.
// In each iteration, it assigns the first element of the pair to fruit and the second element to value.

  console.log(text2);
  document.getElementById('fruits').innerHTML = text2;

  // Using JSON.stringify()
  let myString = JSON.stringify(laptop);
  console.log(myString);


  // simple object created
  // let mobile = {
  //   name : 'nokia',
  //   make : 2011,
  //   varient : 3310,
  //   color : grey,
  //   lcd_Size : '1.3 Inches'
  // }

//   Object Constructor Functions
//   Property Default Values
  function mobiles(name, make, varient, color, lcd_Size , platform)
  {
    this.name = name;
    this.make= make;
    this.varient = varient;
    this.color = color;
    this.lcd_Size = lcd_Size;
    this.platform = 'ANDROID';
  }

  const newmobile = new mobiles('nokia', 2011 , 3310 , 'white' , '1.3 Inches', '' );
  const newmobile2 = new mobiles('samsung', 2025 , 's23' , 'black' , '6.5 Inches', '');
  console.log(newmobile);
  console.log(newmobile2);

  */

  // PRACTICE OBJECTS;;;;;;

  let laptops = {
    Brand: 'Dell',
    Ram : '16GB',
    Graphics : 'Nvidia',
    Price: 120000,
  };

  let res = JSON.stringify(laptops);
  console.log( 'JSON.stringify method output : ' +res);

  let arr = Object.values(laptops);
  console.log( 'ARRAY OUTPUT : ' +arr);

  console.log(laptops.Price + "  " + laptops.Ram);

  let mobile = {};
  mobile.name = 'nokia';
  mobile.country = 'pak';
  mobile.battery = '5500 mah';
  mobile.price = 25000;

  let arrayresult = Object.values(mobile);
  console.log( 'ARRAY OUTPUT : ' + arrayresult);

  console.log(mobile);

  function finalResult(math, urdu, english, oop , cp ) {
    this.math = math;
    this.urdu = urdu;
    this.english = english;
    this.oop = oop;
    this.cp = cp;
  }

  // adding new property to a function object constructor.
  finalResult.prototype.dsa = 99;

  let funRes = new finalResult(50, 12,36,32,44);
  console.log(funRes);

  // accesing new propety added later;
  console.log(funRes.dsa);
  console.log(Object.getPrototypeOf(funRes));

  function myClient(first, last, age) {
    this.firstname = first;
    this.lastname = last;
    this.age = age;
    this.fullName = function () { return this.firstname + ' ' + this.lastname };
  }

  let pakclient = new myClient('ali', 'zia', 45);
  let dubaiClient = new myClient('rutba', 'ali', 55);
  // Add a Name Method
  dubaiClient.changeName = function(name) {
    this.lastname = name;
  }
  // Change Name
  dubaiClient.changeName('usman');

  console.log(dubaiClient.lastname);

  // Create a string representation of the object's properties
  let clientInfo = `
    first name = ${pakclient.firstname}
    last name = ${pakclient.lastname}
    age = ${pakclient.age}
    fullName = ${pakclient.fullName()}
    `

  document.getElementById('myclient').innerHTML = clientInfo;

  console.log(pakclient);
  console.log(pakclient.fullName());

//   "";           // primitive string
// 0;            // primitive number
// false;        // primitive boolean
//
// {};           // object object
// [];           // array object
// /()/          // regexp object
// function(){}; // function












})
