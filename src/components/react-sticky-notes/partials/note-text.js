import { h, nlToBr, getElementStyle, getCurrentDateTime } from './../utils';
import React, { useState, useEffect } from 'react';
function NoteText(props) {
// console.log(props.currentUser.id)
const { data, index, prefix, callbacks } = props;
const x = 50
const y = -10
const [text, setText] = useState('')
const [opac, setOpac] = useState(0)
var theOne = (document.getElementsByClassName('selectionssss'))
var allThem = (document.getElementsByClassName('listyTwo'))
var scrollValOne = document.getElementsByClassName('listyThree')[0]
var self = document.getElementsByClassName(`${props.prefix}--full-note-${data.od}`)
var theOneOffset
var scrollVal
var noteNameLabel
if (typeof self[0] !== 'undefined'){
    if (typeof self[0].children[2] !== 'undefined'){
        if (typeof self[0].children[2].children[2] !== 'undefined'){
            if (typeof self[0].children[2].children[2].children[0] !== 'undefined'){
                noteNameLabel = (self[0].children[2].children[2].children[0].innerText)
            }
        }
    }
}
var theOneHeight
var theOneText
var theCardText
if (typeof theOne[0] !== 'undefined') {

    theOneOffset = theOne[0].offsetTop
    theOneHeight = theOne[0].offsetHeight
    // theOneText = theOne[0].childNodes[1].offsetHeight
    theCardText = theOne[0].innerText
}

if (typeof scrollValOne !== 'undefined'){
scrollVal = scrollValOne.scrollTop;}
var allList = []
for (var i = 0; i< allThem.length; i++){
    // console.log(allThem[i].offsetTop)
    allList.push(allThem[i].offsetTop)
}
var closestCard
// console.log(allList)
if (allList.length > 0){

closestCard = allList.reduce(function(prev, curr) {
    return (Math.abs(curr - (scrollVal+200)) < Math.abs(prev - (scrollVal+200)) ? curr : prev);
  });
}
// console.log(closestCard)
var myCard
for (var i = 0; i< allThem.length; i++){
    if (closestCard === allThem[i].offsetTop){
        myCard = allThem[i].innerText
    }}
//     console.log(scrollVal)
// console.log(myCard)
const onSubmit=(e) =>{
    // console.log(e)
    e.preventDefault()
    // onSubmit(('ggggg' + ` `+ `_${getRandom()},${getRandom()}`+`_${getUUID()}`+`_${getColor(e)}`+`_${true}`+`_${getRandom()}_${getRandom()}`+`_${theCardText}`+ `_${scrollVal}`)))
    props.onSubmit(('ggggg' + text+ `_${data.x}_${data.y}`+`_${data.od}`+`_${data.color}`+`_${data.selected}`+`_${data.x}_${data.y}`+`_${myCard}`+ `_${0}`+`_${noteNameLabel}`+`_edited by ${props.currentUser.id}`))
    setText(text)
  }
  const setText2 = () =>{
    var i
    for (i=0; i < props.notesy.length; i++){
        if (props.notesy[i].od ===data.od){
            // console.log(props.notesy[i].print)
            return props.data.print
        }
        else {
            // console.log('else')
            // console.log(props.notesy[i])
            // console.log(data)
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
    props.onSubmit(('ggggg' + text+ `_${data.x}_${data.y}`+`_${data.od}`+`_${data.color}`+`_${data.selected}`+`_${data.x}_${data.y}`+`_${myCard}`+ `_${0}`+`_${noteNameLabel}`+`_edited by ${props.currentUser.id}`))
    //   console.log(e)
      setOpac(0)
  }

  const handleClick = (e) => {
// console.log(e)
setOpac(1)
  }
    return h('div',{
        className:`${prefix}--text ${data.od}`,
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
            h('div', {className: `innerTextNote ${data.od}`}, 
            h('form', {
                className: `innerTextNote ${data.od}` ,
                // onSubmit: onSubmit,
            style: {
                // display: 'flex'
            }}, 
            h('textarea', {
                className: `forNotes ${data.od} innerTextNote`,
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
                }),
                h('h3', {
                    type: 'text',
                    className: 'innerEditNote',
                    value:data.edit,
                    style: {
                        color: '#515151',
                        background: 'none',
                        outline: 'none',
                        border: 'none',
                        flex: 1,
                        fontSize: 10,
                        fontFamily: 'avenir next',
                        overflowY: 'scroll',
                        wordWrap: 'break-word',
                        // overflow: 'hidden',
                        whiteSpace: 'initial',
                        textOverflow: 'ellipsis',
                        resize: 'none'
                        }
                }, `${data.edit}`)
            ),

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
