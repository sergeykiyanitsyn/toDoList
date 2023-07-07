const formHight = document.querySelector("#hightCheck");
const formLow =   document.querySelector("#lowCheck");

const hightInput = document.querySelectorAll(".writeTask")[0];
const lowInput =   document.querySelectorAll(".writeTask")[1];


const hightTask = document.querySelector(".hightTasks");
const lowTask =   document.querySelector(".lowTasks");

const newDiv = document.querySelectorAll(".tasks")[0]; // Задача для копирования


const btnDel = document.querySelector(".del");
let del = document.querySelectorAll(".del");
let cb = document.querySelectorAll(".checkbox");

let count = 0; 

//Считает кол-во отправок (замена бесконечному циклу) - Сердце отправки 
function submitForm() {
    formHight.addEventListener("submit", sendForm1); // Отправка 1-й формы
    formLow.addEventListener("submit", sendForm2); // Отправка 2-й формы
    count++;
    
    let del = document.querySelectorAll(".del");
         // Эту нужно, чтобы подсчитывать удаления (при добавлении формы)
    for (i = 0; i < del.length; i++){
        del[i].addEventListener("click", listItemHandler); // Отправка 1-й формы
    }


    let cb = document.querySelectorAll(".checkbox");
    // Отдельная функция для подсчетов checkbox + смены цвета 
    for (j = 0; j < cb.length; j++) {

        cb[j].addEventListener('click', (event) => {
            if (event.target.checked) {
                event.target.parentElement.style.backgroundColor = "grey";
              } else {
                event.target.parentElement.style.backgroundColor = "#f1f5f8";
              }
            });    
          }


    // Это ограничивает кол-во кликов по форме (без этого не работает)
    if (count < 1000) {
        setTimeout(submitForm, 1000);
    }

}

submitForm();


function sendForm1(event) {
    addNewTask1();
    event.preventDefault() // Предовращает отправку формы!!!

 };

function sendForm2(event) {
    addNewTask2();
    event.preventDefault() // Предовращает отправку формы!!!

};


function addNewTask1() {

    const message = hightInput.value ;
    let clon = newDiv.cloneNode(true);
    clon.innerHTML = '<input class = "checkbox" type = "checkbox">' + '<p class = "textTaks" >' + message + '</p>' + '<button class = "del" > ㅤ </button>';  // Устанавливаем текстовый контент 
    hightTask.appendChild(clon);        // Добавить div в конец 
}


function addNewTask2() {

    const message = lowInput.value ;
    let clon = newDiv.cloneNode(true);
    clon.innerHTML = '<input class = "checkbox" type = "checkbox">' + '<p class = "textTaks" >' + message + '</p>' + '<button class = "del" > ㅤ </button>';  // Устанавливаем текстовый контент 
    lowTask.appendChild(clon);        // Добавить div в конец 
}




//Функция слушатель
function listItemHandler(event) {
    //alert('Вы выбрали элемент: ' + event.target.innerText);
    delite (event.target)
  }

  //Функция удаления результатов
  function delite (element) {
    element.parentNode.remove();
  }
