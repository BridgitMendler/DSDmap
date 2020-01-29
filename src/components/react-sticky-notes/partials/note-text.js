import { h, nlToBr, getElementStyle, getCurrentDateTime } from './../utils';
import React, { useState, useEffect } from 'react';
function NoteText(props) {

const { data, index, prefix, callbacks } = props;

const [text, setText] = useState('')
// console.log(props)
const onSubmit=(e) =>{
    // console.log('submitted')
    e.preventDefault()
    props.onSubmit(('ggggg' + text+ `_${props.left},${props.top}`+`_${data.id}`+`_${data.color}`+`_${data.selected}`+`_${data.position.x}_${data.position.y}`))
    setText('')
  }

const onChange= (e) =>{
    // console.log(props.left)
    setText(e.target.value)
    if (props.onChange) {
      props.onChange()
    }
  }
    return h('div',{
        className:`${prefix}--text ${data.id}`,
        placeholder:"react-hooks",
        contentEditable:"true",
        // onBlur:(e)=>callbacks.updateItem(index, {
        //     id:data.id,
        //     text: e.target.innerText
        // }),
        // onFocus:(e)=>(
        // callbacks.updateItem(e, {id:data.id, selected:true, datetime: getCurrentDateTime() })),
        // dangerouslySetInnerHTML:{__html:nlToBr(data.text)},
        style: (getElementStyle('note-input'))
    }, 
            h('div', null, 
            h('form', {
                onSubmit: onSubmit,
            style: {
                display: 'flex'
            }}, 
            h('input', {
                type: "text",
                placeholder: "Type message...",
                onChange: onChange,
                value: text,
                style: {
                    color: 'white',
                    background: 'none',
                    outline: 'none',
                    border: 'none',
                    flex: 1,
                    fontSize: 16,
                    fontFamily: 'avenir next'
                    }
                })
            )
        )
    )
}
export default NoteText;


// import React, { Component, useContext, useState } from 'react'
// // import { AppContext } from '../index'



  
// // console.log(this)
//     return (
//       <div className="listyThree" 
//       // value={state.inputValue} onChange={e => changeInputValue(e.target.value)}
//         style={{
//           ...props.style,
//           ...styles.container,
//         }}
         
//       >
//         <ul style={styles.ul} id='listyTwoId'>
//           {props.notesy.slice(0).reverse().map((message, index) => (
//             <li className="listyTwo dropTarget" key={index} style={styles.li} >
//               <p className='listyText' style={styles.message}>{message.text}</p>
//             </li>
//           ))}
//         </ul>
//       </div>
//     )
//   }
//   export default MessageListTwo