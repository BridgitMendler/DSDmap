import { h, nlToBr, getElementStyle, getCurrentDateTime } from './../utils';
import React, { useState, useEffect } from 'react';
function NoteText(props) {

const { data, index, prefix, callbacks } = props;
const x = 50
const y = -10
const [text, setText] = useState('')
const [opac, setOpac] = useState(0)
// console.log(text)
const onSubmit=(e) =>{
    // console.log(e)
    e.preventDefault()
    props.onSubmit(('ggggg' + text+ `_${data.position.x},${data.position.y}`+`_${data.id}`+`_${data.color}`+`_${data.selected}`+`_${data.position.x}_${data.position.y}`))
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

  const handleBlur = (e) => {
    //   console.log(e)
      setOpac(0)
  }

  const handleClick = (e) => {
// console.log(e)
setOpac(1)
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
        style: {
            height: '100%'
        }
    }, 
            h('div', {className: `innerTextNote ${data.id}`}, 
            h('form', {
                className: `innerTextNote ${data.id}` ,
                // onSubmit: onSubmit,
            style: {
                // display: 'flex'
            }}, 
            h('textarea', {
                className: `forNotes ${data.id} innerTextNote`,
                type: "text",
                placeholder: setText2(),
                onChange: onChange,
                onBlur: handleBlur,
                onClick: handleClick,
                value: text,
                style: {
                    color: '#515151',
                    background: 'none',
                    outline: 'none',
                    border: 'none',
                    flex: 1,
                    fontSize: 14,
                    fontFamily: 'avenir next',
                    overflowY: 'scroll',
                    wordWrap: 'break-word',
                    // overflow: 'hidden',
                    whiteSpace: 'initial',
                    textOverflow: 'ellipsis',
                    resize: 'none'
                    }
                })
            )
        )
        ,h("button", {onClick: onSubmit, type: 'button', className: 'noteSend', style: {backgroundColor: '#CACFDA', /* Green */
            border: 'none',
            color: 'white',
            borderRadius: 2,
            paddingLeft: 3,
            paddingRight: 3,
            textAlign: 'center',
            fontWeight: 'bold',
            fontFamily: 'avenir next',
            boxShadow: '1px 1px 2px rgba(0, 0, 0, 0.13)',
            background: '-moz-linear-gradient(top,  #CACFDA 1%, 9AA5B9 100%)',
            background: '-webkit-gradient(linear, left top, left bottom, color-stop(1%,#CACFDA), color-stop(100%,9AA5B9))',
            background: '-webkit-linear-gradient(top,  #CACFDA 1%,9AA5B9 100%)',
            background: '-o-linear-gradient(top,  #CACFDA 1%,9AA5B9 100%)',
            background: '-ms-linear-gradient(top,  #CACFDA 1%,9AA5B9 100%)',
            background: 'linear-gradient(to bottom,  #CACFDA 1%,9AA5B9100%)',
            transform: `translate(${x}px, ${y}px)`,
            opacity: opac,
            fontSize: 16}}, "share")
        
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
