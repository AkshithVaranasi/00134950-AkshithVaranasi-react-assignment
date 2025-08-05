// import React from 'react'
// import Child from '../child/Child'
// import { useState } from 'react';

// export default function Parent() {
//     const [progName,setProgName] = useState('reactjs programming');
//     return (
//         <div>
//             This is parent <br /><br /><br />
//             <Child messageFromParent={progName}></Child>
//         </div>
//     )
// }
import React, { useState } from 'react'
import Child from '../child/Child'

export default function Parent() {
    const [firstValue,setFirstValue]=useState()
    const [secondValue,setSecondValue]=useState()
    const [total,setTotal]=useState()
    const firstnumber=(e)=>{
        setFirstValue(e.target.value)
    }
    const secondnumber=(e)=>{
        setSecondValue(e.target.value)
    }
    const addition=()=>{
        setTotal(Number(firstValue)+Number(secondValue))
    }
    const subtraction=()=>{
        setTotal(Number(firstValue)-Number(secondValue))
    }
    const multiply=()=>{
        setTotal(Number(firstValue)*Number(secondValue))
    }
  return (
    <div>
        <input type="number" onChange={firstnumber} />
        <br>
        </br>
        <input type="number" onChange={secondnumber} />
       <p> Total:{total} </p>
        <Child add={addition} sub={subtraction} mul={multiply}></Child>
    </div>
  )
}
