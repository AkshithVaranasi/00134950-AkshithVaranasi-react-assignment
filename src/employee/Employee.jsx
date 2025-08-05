import React, { useState } from 'react'

export default function Employee() {
    const [employee,setEmployee]=useState([{
        "name":"Raju",
        "salary":1000
    },{
        "name":"Rajen",
        "salary":2000
    }])
  return (
    <div>
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Salary</th>
                </tr>
            </thead>
            <tbody>
              
                    {employee.map(emp=>(
                          <tr>
                        <td>{emp.name}</td>
                        <td>{emp.salary}</td>
                          </tr>
                    ))}
              
            </tbody>
        </table>
     
            </div>
   
                )          
}
