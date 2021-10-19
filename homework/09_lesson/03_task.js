// 3. Реализовать страницу с таблицей. Таблица должна содержать инфрмацию, полученную по API https://swapi.dev/api/people/
//     (массив объектов в свойстве "results"). А именно росте, весе и поле персонажей (поля "name", "height", "mass" и "gender" соответственно).
// *Опционально: предусмотреть возможность сортировки таблицы
// *Опционально: предусмотреть возможность перехода к следующей странице (ссылка содержится в объекте API в свойстве "next")
// и предыдущей странице (ссылка содержится в объекте API в свойстве "previous")

async function makeTable(){
    let response = await fetch("https://swapi.dev/api/people/")
    let json = await response.json()
   // console.log(json.results)

    let table = document.createElement('table')

    json.results.forEach(elem => {
        let tableRow = document.createElement('tr')
        tableRow.innerHTML = `<td>${elem.name}</td>
                                <td>${elem.height}</td>
                                <td>${elem.gender}</td>`
         table.appendChild(tableRow)
         console.log(table)


    })
    document.body.appendChild(table)
}

makeTable()
