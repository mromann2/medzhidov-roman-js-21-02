// 3. Реализовать страницу с таблицей. Таблица должна содержать инфрмацию, полученную по API https://swapi.dev/api/people/
//     (массив объектов в свойстве "results"). А именно росте, весе и поле персонажей (поля "name", "height", "mass" и "gender" соответственно).
// *Опционально: предусмотреть возможность сортировки таблицы
// *Опционально: предусмотреть возможность перехода к следующей странице (ссылка содержится в объекте API в свойстве "next")
// и предыдущей странице (ссылка содержится в объекте API в свойстве "previous")

async function makeTable(){
    let response = await fetch("https://swapi.dev/api/people/")
    let json = await response.json()

    let sortButton = document.createElement('button')
    let nextButton = document.createElement('button')
    let preButton = document.createElement('button')
    let table = document.createElement('table')

    type ApiAnswer = {
        name: string,
        height: number,
        gender: string,
    }


    json.results.forEach((elem: ApiAnswer) => {
        let tableRow = document.createElement('tr')
        tableRow.innerHTML = `<td class = "name">${elem.name}</td>
                                <td>${elem.height}</td>
                                <td>${elem.gender}</td>`
        table.appendChild(tableRow)
    })
    document.body.appendChild(table)

    sortButton.textContent = 'Сортировать по имени'
    preButton.textContent = 'Предыдущее'
    preButton.classList.add("preButton")
    nextButton.textContent = 'Следующее';
    document.body.appendChild(sortButton)
    document.body.appendChild(preButton)
    document.body.appendChild(nextButton)

    sortButton.addEventListener('click', () =>{
        let sortedTable = document.createElement('table')
        let table = document.querySelector('table')
        json.results.sort((elem: ApiAnswer, nextElem: ApiAnswer) => elem.name > nextElem.name ? 1 : -1).forEach((elem: ApiAnswer) => {
            let tableRow = document.createElement('tr')
            tableRow.innerHTML = `<td class = "name">${elem.name}</td>
                                <td>${elem.height}</td>
                                <td>${elem.gender}</td>`
            sortedTable.appendChild(tableRow)
        })
        document.body.replaceChild(sortedTable, table)
    })



    nextButton.addEventListener('click', async function (){
        let nextTable = document.createElement('table')
        if(json.next){
            let nextResponse = await fetch(json.next)
            let table2 = document.querySelector('table')
            json = await nextResponse.json()

            json.results.forEach((elem: ApiAnswer) => {
                let tableRow = document.createElement('tr')
                tableRow.innerHTML = `<td class = "name">${elem.name}</td>
                                <td>${elem.height}</td>
                                <td>${elem.gender}</td>`
                nextTable.appendChild(tableRow)
            })
            document.body.replaceChild(nextTable, table2)
            preButton.disabled = false
        }else nextButton.disabled = true

    } )

    preButton.addEventListener('click', async function (){
        let preTable = document.createElement('table')
        if(json.previous){
            let preResponse = await fetch(json.previous)
            let table2 = document.querySelector('table')
            json = await preResponse.json()

            json.results.forEach((elem: ApiAnswer)=> {
                let tableRow = document.createElement('tr')
                tableRow.innerHTML = `<td class = "name">${elem.name}</td>
                                <td>${elem.height}</td>
                                <td>${elem.gender}</td>`
                preTable.appendChild(tableRow)
            })
            document.body.replaceChild(preTable, table2)
            nextButton.disabled = false
        }else preButton.disabled = true

    } )

}

makeTable()

