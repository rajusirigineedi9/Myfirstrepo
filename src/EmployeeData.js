import React ,{useState,useEffect} from 'react'

function EmployeeData() {

    const [state,setState]=useState([])

useEffect(()=>
{
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res=>res.json())
    .then(result=> {
        setState(result);
    })
        
})
    return (
        <div>
            <h1></h1>
            
            {state.map(emp=>(<li key={emp.id}>{emp.title}</li>))}
            
        </div>
    )
}

export default EmployeeData
