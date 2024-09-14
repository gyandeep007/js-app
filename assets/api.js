const EMPLOYEE_URL = 'http://192.168.31.212:6365/api/employees'
const getEmployee = (id)=>fetch(`${EMPLOYEE_URL}/${id}`)
                               .then(response=>{
                                if(response.status == 200){
                                    response.json().then(data=>console.log(data))
                                }else{
                                    return response.json().then(error=>{throw new Error(error.message)})
                                }
                               }).catch(error=>console.log(error))
getEmployee(1)      

const addEmployee = (body)=>{
    fetch(EMPLOYEE_URL,{headers:{
        "Content-Type": "application/json",
    },method:'POST',body:JSON.stringify(body)}).then(response=>response.json())
                                                  .then(data=>console.log(data))
}

const emp = {
    firstName : 'xyz',
    lastName : 'abc',
    email: 'xyzabc@gmail.com'
}

//addEmployee(emp)