// CREATE AN ARRAY OF EMPLOYEES
let storage
let list
let formArray
formArray = [
    [12345678, 'priya', 1234, 'priya@gmail.com', 'Administrative']
    [24682468, 'rashmi', 2468, 'rashmi@gmail.com', 'Engineering']
]

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
    let empLine = empTable.tbody()


    // PUSH THE NEW ARRAY TO THE *EXISTING* EMPLOYEES ARRAY
    formArray.push(empID)
    formArray.push(empName)
    formArray.push(empExt)
    formArray.push(empEmail)
    formArray.push(empDept)

    // BUILD THE GRID
    
    


    // RESET THE FORM

    // SET FOCUS BACK TO THE ID TEXT BOX

});

// DELETE EMPLOYEE
empTable.addEventListener('click', (e) => {
    // CONFIRM THE DELETE

        // GET THE SELECTED ROWINDEX FOR THE TR (PARENTNODE.PARENTNODE)

        // REMOVE EMPLOYEE FROM ARRAY

        // BUILD THE GRID

});

// BUILD THE EMPLOYEES GRID
function buildGrid() {

}


    // REMOVE THE EXISTING SET OF ROWS BY REMOVING THE ENTIRE TBODY SECTION

    // REBUILD THE TBODY FROM SCRATCH

    // LOOP THROUGH THE ARRAY OF EMPLOYEES
    // REBUILDING THE ROW STRUCTURE

    // BIND THE TBODY TO THE EMPLOYEE TABLE

    // UPDATE EMPLOYEE COUNT

    // STORE THE ARRAY IN STORAGE

