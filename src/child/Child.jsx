// import React from 'react'

// export default function Child(props) {
//   return (
//     <div>
//        Child: {props.messageFromParent}
//     </div>
//   )
// }
import React from 'react'

export default function Child({add,sub,mul}) {
  
  return (
    <div>

        <input type="button" value="+" onClick={add} />
        <input type="button" value="-" onClick={sub} />
        <input type="button" value="*" onClick={mul} />
    </div>
  )
}
