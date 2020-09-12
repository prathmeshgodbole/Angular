console.log(document) // DOM


let col_name = ['Name', 'Prize', 'Qty', 'Total']

let row_name = ['Prathmesh', 'Parag', 'Vaibhav', 'Siddiq']

let Prize = ['10000', '9000', '8000', '7000']

// let Qty = ['5', '4', '3', '2']

let table = document.getElementById('table')

// Add Columns
for (let i = 0; i < col_name.length; i++) {
    let td = document.createElement('td')
    td.style.border = '1px solid black'
    td.textContent = col_name[i]
    table.appendChild(td)
}

// Add Names rows
for (let i = 0; i < row_name.length; i++) {
    let tr = document.createElement('tr')
    tr.textContent = row_name[i]
    table.appendChild(tr)
}

for (let i = 0; i < Prize.length; i++) {
    let prize_tr = document.createElement('tr')
    prize_tr.textContent = Prize[i]
    table.appendChild(prize_tr)
}


//
//homework day 1 - table with dynamic rows, columns name , price, qty and total