  // window.alert("Hello World!");
document.addEventListener("DOMContentLoaded", function(event) {

  /* function with 2 parameters;
  function mysum(num1, num2){
    return num1 + num2;
  }
  let result = mysum(25, 25);
  document.getElementById("functions").innerHTML = result;
  */

  function tocel (faren){
    return (5/9) * (faren - 32);

  }
  // As you see from the examples above, toCelsius refers to the function object, and toCelsius() refers to the function result.
  let value = tocel(77);
  // let value2 = tocel;
  document.getElementById("temp").innerHTML = value;


  function cars()
  {
    let carName = 'honda';
    let model = 2024;
    let outputs = 'This car is : ' + carName + ", " + 'model is ' + model;
    document.getElementById("cars").innerHTML = outputs;
  }
  cars();

  // document.getElementById("fields").addEventListener("click" , function () {
  //
  //   // creating input field function;
  //
  //   let input = document.createElement("input");
  //   input.setAttribute("type", "text");
  //   input.setAttribute("placeholder", "Enter MCQS :");
  //   let container = document.getElementById("inputfields");
  //   container.appendChild(input);
  //
  //
  // });

  document.getElementById("fields").addEventListener("click", function () {
            addInputField("");
        });

//   ---------------------------------------
  // Function to create a new input field and optionally set its value
  //       function addInputField(value) {
  //           let input = document.createElement("input");
  //           input.setAttribute("type", "text");
  //           input.setAttribute("placeholder", "Enter MCQS :");
  //           input.value = value;
  //
  //           let container = document.getElementById("inputfields");
  //           container.appendChild(input);
  //
  //           // Save the input fields whenever a new one is added
  //           saveInputFields();
  //       }
  //
  //       // Save the input fields to localStorage
  //       function saveInputFields() {
  //           let inputs = document.querySelectorAll("#inputfields input");
  //           let values = [];
  //           inputs.forEach(input => {
  //               values.push(input.value);
  //           });
  //           localStorage.setItem("inputFields", JSON.stringify(values));
  //       }
  //
  //       // Load the input fields from localStorage
  //       function loadInputFields() {
  //           let savedValues = JSON.parse(localStorage.getItem("inputFields"));
  //           if (savedValues) {
  //               savedValues.forEach(value => {
  //                   addInputField(value);
  //               });
  //           }
  //       }
  //
  //       // Load the input fields when the page is loaded
  //       window.onload = loadInputFields;









})


  // -----------
// Function to save the input value to localStorage
// function saveInput() {
//     var inputField = document.getElementById('inputField');
//     localStorage.setItem('inputValue', inputField.value);
//     alert('Input saved!');
// }
//
// // Function to load the input value from localStorage and display it
// function loadInput() {
//     var savedValue = localStorage.getItem('inputValue');
//     if (savedValue !== null) {
//         document.getElementById('displayHeader').textContent = savedValue;
//         document.getElementById('displayParagraph').textContent = savedValue;
//         alert('Input loaded and displayed!');
//     } else {
//         alert('No saved input found.');
//     }
// }
//
// // Load the input value from localStorage and display it when the page is loaded
// window.onload = function() {
//     loadInput();
// }

