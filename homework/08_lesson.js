let table = document.querySelector('.table');
let deleteButton = document.querySelector('.table__delete-button');
let createButton = document.querySelector('.input-block__button');
let nameInput = document.querySelector('.input-block__name-input');
let phoneInput = document.querySelector('.input-block__phone-input');
let div = document.querySelector('.input-block');
let colorButtonsBlock = document.querySelector('.color-buttons-block');



createButton.addEventListener('click', ()=>{
    let span = document.body.querySelector('span')
    let regName = /^[а-яА-Я\s-]+$/g;
    let regPhone = /^[\d+]+$/g;

    if(span){
        span.remove()
    }

    if (regName.test(nameInput.value) && regPhone.test(phoneInput.value)){
        let row = document.createElement("tr");
        row.innerHTML = `<td>${nameInput.value}</td>
                         <td>${phoneInput.value}</td>
                         <td class="table__delete-container"><button class="table__delete-button"></button></td>
        `;
        table.appendChild(row);
        nameInput.value = ""
        phoneInput.value = ""
    }else{
        let span = document.createElement("span");
        span.innerHTML= '<br>Введено неверное значение'
        div.appendChild(span)

    }
})

table.addEventListener('click', (event)=>{
    if (event.target.className === "table__delete-button"){
    event.target.parentElement.parentElement.remove()
    }
})

colorButtonsBlock.addEventListener('click', (event)=>{
    if (event.target.className === "color-buttons-block__red-button"){
        table.classList.remove('table_green','table_blue' )
        table.classList.toggle('table_red')
    }
    if (event.target.className === "color-buttons-block__green-button"){
        table.classList.remove('table_red','table_blue' )
        table.classList.toggle('table_green')
    }
    if (event.target.className === "color-buttons-block__blue-button"){
        table.classList.remove('table_green','table_red')
        table.classList.toggle('table_blue')
    }
})

