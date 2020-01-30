import { h, nlToBr, getElementStyle, getCurrentDateTime } from './../utils';
import React, { useState, useEffect } from 'react';
function NoteText(props) {

const { data, index, prefix, callbacks } = props;

var myItemsTwo = props.notesy
const [text, setText] = useState('')
// console.log(window.event)
if (typeof window.event !== 'undefined'){
    if (window.event.type === 'click') {
        if (window.event.target.innerText=== 'delete_outlined') {
            var myVariable = window.event.path[1].parentNode.parentNode.classList[2]
            for (var i = 0; i<myItemsTwo.length; i++){
                if (Object.values(myItemsTwo[i]).indexOf(myVariable) > -1) {
                    if (myItemsTwo[i]['id'] !== 'undefined') {
                        props.onSubmit(('ggggg' + text+ `_${props.left},${props.top}`+`_${data.id}`+`_${data.color}`+`_${data.selected}`+`_${data.position.x}_${data.position.y}`+ `_yes`))
                }
                // else 
            }}
        }
    }
}
const onSubmit=(e) =>{
    // console.log('submitted')
    e.preventDefault()
    props.onSubmit(('ggggg' + text+ `_${props.left},${props.top}`+`_${data.id}`+`_${data.color}`+`_${data.selected}`+`_${data.position.x}_${data.position.y}`))
    setText(text)
  }
  const setText2 = () =>{
    var i
    for (i=0; i < props.notesy.length; i++){
        if (props.notesy[i].id ===data.id){
            // console.log(props.notesy[i].print)
            return props.notesy[i].print
        }
    }
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
                // onSubmit: onSubmit,
            style: {
                display: 'flex'
            }}, 
            h('input', {
                className: 'forNotes',
                type: "text",
                placeholder: setText2(),
                onChange: onChange,
                value: text,
                style: {
                    color: 'white',
                    background: 'none',
                    outline: 'none',
                    border: 'none',
                    flex: 1,
                    fontSize: 16,
                    fontFamily: 'avenir next',
                    overflowY: 'scroll'
                    }
                })
            )
        ),h("button", {onClick: onSubmit, className: 'noteSend', style: {color: 'grey', outline: 'yellow'}}, "share")
        
    )
}
export default NoteText;

// React.createElement("button", null, "Click me");


// React.createElement("form", {
//     onSubmit: myFunction()
//   }, "Enter name: ", React.createElement("input", {
//     type: "text",
//     name: "fname"
//   }), h("input", {
//     type: "submit",
//     value: "Submit"
//   }));


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