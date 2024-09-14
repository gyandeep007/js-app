

const btn = document.getElementById('btn')

const clickHandler = ()=>{
   import('../assets/Components/Employee.js').then(module=>{
    const employee =  module.employee
    console.log(employee)   
})
    
}

btn.addEventListener('click',clickHandler)