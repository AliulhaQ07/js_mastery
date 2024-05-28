
document.addEventListener('DOMContentLoaded', () => {

  document.getElementById('addFeild').addEventListener('click', (e) => {
    let question = document.createElement('input');
    question.setAttribute('type', 'text');
    question.setAttribute('placeholder', 'Write Questions ');

    let container = document.getElementById('inputFeilds');
    container.style.marginBottom = '10px';
    container.appendChild(question);

   question.addEventListener('change', () => {
        localStorage.setItem('question', question.value);
    });

  });

  // let val = container.value;
  //   console.log(val);

  // localStorage.setItem('question', JSON.stringify(question));




});



