// CREATE AN ARRAY OF EMPLOYEES
let storage
let list
let formArray = [
    [12345678, 'priya', 1234, 'priya@gmail.com', 'Administrative'],
    [24682468, 'rashmi', 2468, 'rashmi@gmail.com', 'Engineering'],
    [12345678, 'priya', 1234, 'priya@gmail.com', 'Administrative'],
    [24682468, 'rashmi', 2468, 'rashmi@gmail.com', 'Engineering'],
    [12345678, 'priya', 1234, 'priya@gmail.com', 'Administrative']
]
function setStorage(formArray) {
    sessionStorage.setItem('formArray', JSON.stringify(formArray))
}
function init() {
  
    if (localStorage.getItem('formArray')) {
        formArray = JSON.parse(localStorage.getItem('formArray'))
    } else {
        formArray = [
    [12345678, 'priya', 1234, 'priya@gmail.com', 'Administrative']
    [24682468, 'rashmi', 2468, 'rashmi@gmail.com', 'Engineering']
]
    }}

// CHECK TO SEE IF STORAGE OBJECT EXISTS WHEN THE PAGE LOADS

function displayEmpForm() {
    if(formArray.length === 0) {
        storage = localStorage.getItem('form') || ''
        if (storage.length > 0) {
            formArray = storage.split('|')
        }
    }

// IF DOES, RETURN STORAGE OBJECT INTO ARRAY INSTEAD OF POPULATED ARRAY
if(formArray.length > 0) {
    formArray.sort()
    list = formArray.join('\n')
    $('empTable').value = list
    console.log('')
}
}
// GET DOM ELEMENTS
form = document.querySelector('#addForm')
let empTable = document.querySelector('#empTable')
let empCount = document.querySelector('#empCount')

// BUILD THE EMPLOYEES TABLE WHEN THE PAGE LOADS
buildGrid(formArray)

// ADD EMPLOYEE
form.addEventListener('submit', (e) => {
    // PREVENT FORM SUBMISSION
    e.preventDefault()
    // GET THE VALUES FROM THE TEXT BOXES
    let empID = document.querySelector('#id').value
    let empName = document.querySelector('#name').value
    let empExt = document.querySelector('#extension').value
    let empEmail = document.querySelector('#email').value
    let empDept = document.querySelector('#department').value

    // ADD THE NEW EMPLOYEE TO A NEW ARRAY OBJECT
    let empLine1 = empTable.tbody()
    let empLine2 = empTable.tbody()



    // PUSH THE NEW ARRAY TO THE *EXISTING* EMPLOYEES ARRAY
    formArray.push(empID)
    formArray.push(empName)
    formArray.push(empExt)
    formArray.push(empEmail)
    formArray.push(empDept)

    // BUILD THE GRID
    function addToTable() {
        if ($('formArray').value !== '') {
            form.push($('form').value)
            localStorage.setItem('form', form.join('|'))
            $('formArray').value = ''
            displayEmpForm()
        } else {
            alert('Please enter a form.')
        }
    }
        // RESET THE FORM
    document.querySelector('#addForm').reset()
    // SET FOCUS BACK TO THE ID TEXT BOX
    document.querySelector('#id').focus()
});

// DELETE EMPLOYEE
empTable.addEventListener('click', (e) => {
    // CONFIRM THE DELETE
    if(e.target.classList.contains('delete')) {
        if(confirm('Are you sure you want to delete this employee')) {

        // GET THE SELECTED ROWINDEX FOR THE TR (PARENTNODE.PARENTNODE)
        let rowIndex=e.target.parentElement.parentElement.rowIndex
        // REMOVE EMPLOYEE FROM ARRAY
        empTable.deleteRow(rowIndex)
        // BUILD THE GRID
       
    }
        
    }
});

// BUILD THE EMPLOYEES GRID
function buildGrid(formArray) {
    
    // REMOVE THE EXISTING SET OF ROWS BY REMOVING THE ENTIRE TBODY SECTION
    empTable.lastElementChild.remove()

    // REBUILD THE TBODY FROM SCRATCH
    let tbody = document.createElement('tbody')

    // LOOP THROUGH THE ARRAY OF EMPLOYEES

    // REBUILDING THE ROW STRUCTURE
    for (let employee of arrEmployees) {
        tbody.innerHTML += 
        `
        <tr>
            <td>${employee[0]}</td>
            <td>${employee[1]}</td>
            <td>${employee[2]}</td>
            <td><a href="mailto:${employee[3]}">${employee[3]}</a></td>
            <td>${employee[4]}</td>
            <td><button class="btn btn-sm btn-danger delete">X</button></td>
        </tr>
        `
    }

    // BIND THE TBODY TO THE EMPLOYEE TABLE
    empTable.appendChild(tbody)
    // UPDATE EMPLOYEE COUNT
    empCount.value = `(${arrEmployees.length})`
    // STORE THE ARRAY IN STORAGE

}