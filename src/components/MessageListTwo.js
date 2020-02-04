import React, { Component, useEffect, useContext, useState, useRef } from 'react'
import pic from './system.png';
import ReactDOM from 'react-dom'
import { observeSix, newScrollLog} from "./Game";

export function MessageListTwo(props){

  const styles={
    container: {
      height: '700px',
      width: '100%',
      overflowY: 'scroll',
    },
    ul: {
      listStyle: 'none',
    },
    li: {
      marginTop: 13,
      marginBottom: 13,
      transition: 'all 1s',
      backgroundColor: 'grey'
    },
    senderUsername: {
      font: 'avenir next',
      fontWeight: 'medium',
    },
    message: { fontWeight: 'medium', font:'avenir next', fontSize: 40 },

    li2: {
      scrollBehavior: 'smooth',
      marginTop: 13,
      marginBottom: 13,
      border: '10px solid blue',
      transition: 'all 1s',
      borderRadius: 40,
    },
    senderUsername2: {
      font: 'avenir next',
      fontWeight: 'medium',
    },
    message2: { fontWeight: 'medium', font:'avenir next', fontSize: 40 },
    

    button: {
      border: '1px solid grey',
      borderRadius: 70,
      width: 55,
      height: 55,
      margin: 10,
      flex: 'right',
      textAlign: 'center',
      display: 'block',
    },
}

    const windowFocus = (val) => {
      var theOne = (document.getElementsByClassName('selectionssss'))
      if (typeof theOne[0] !== 'undefined'){
        if (theOne[0].className === val.classNameParent) {
          return styles.li2
        }
        else { 
          return styles.li}
    }
      else{
return styles.li
}
}
const onSubmit =(e)=> {
var loca =e.target.parentElement.parentElement
var locaa = e.target.parentElement.parentElement.parentElement.parentElement
  e.preventDefault()
  if (typeof loca !== 'undefined'){
  if (typeof locaa !== 'undefined'){
  props.onSubmit(('fffff' + e.target.parentElement.parentElement.children[1].innerText + '_listyTwo dropTarget selectionssss'+ '_listyText noselect'+ `_${Math.round((new Date()).getTime() / 1000)}`+ `_${(loca.offsetTop-300)}`))
    locaa.scrollTo({behavior: "smooth",
    top:loca.offsetTop-300})}
    newScrollLog(loca.offsetTop-300)
  }
    }

// console.log(props.messages)
var result
var resultTwo = []
const messageClean = () => {
  var newArray = props.messages
  for (i = 0; i< newArray.length; i++) {
    var newText = newArray[i].text.split(/[_]+/);
    newArray[i]['classNameParent'] = newText[1] 
    newArray[i]['className'] = newText[2]
    newArray[i]['print']= newText[0]
    newArray[i]['time']= newText[3]
    newArray[i]['scrollPos'] = newText[4]
  }
  var messageList = []
  var messageNoID = []
  var indexes = []
  var i

  result = Object.values(newArray.reduce((c, v) => {
    let k = v.print;
    c[k] = c[k] || [];
    c[k].push(v);
    return c;
  }, {}))
  var j
  for (j = 0; j< result.length; j++) {
    var h
    for (h = 0; h< result[j].length; h++)
    var soloTime = result
    soloTime[j].splice((0),(soloTime[j].length-1))
    resultTwo.push(soloTime[j][0])
  }
  var k
  for (k = 0; k < newArray.length; k++) {
    var l
    for (l = 0; l < newArray.length; l++) {
  if (newArray[k].classNameParent === newArray[l].classNameParent && newArray[k].time < newArray[l].time || typeof newArray[k].time === 'undefined')
  {
    newArray[k].classNameParent = 'listyTwo dropTarget'
  }
}
  }
}
messageClean()

if (props.currentUser.id === 'B')
{

    return (
      <div className="listyThree" 
      // value={state.inputValue} onChange={e => changeInputValue(e.target.value)}
        style={{
          ...props.style,
          ...styles.container,
        }}
         
      >
        <ul style={styles.ul} id='listyTwoId'>
          {resultTwo.slice(0).reverse().map((message, index) => (
            <li className={message.classNameParent} key={index} style={windowFocus(message)}>
              <h1 style={styles.button}
            className="title"
            onClick={onSubmit}
          ><img className='pictureThree noselect' src={pic}></img></h1>
              <p className='listyText noselect' style={styles.message}>{message.print}</p>
            </li>
          ))}
        </ul>
      </div>
    )
    
          }

          else {

var locaa = document.getElementsByClassName('listyThree')
// console.log(resultTwo)
const weMove =()=> {
  var i
  for (i = 0; i < resultTwo.length; i++){
    // console.log(resultTwo[i].scrollPos)
  

  var theOne = (document.getElementsByClassName('selectionssss'))
  if (typeof theOne[0] !== 'undefined'){
    if (typeof resultTwo[i].scrollPos !== 'undefined')
    if (resultTwo[i].classNameParent === theOne[0].className){
  // console.log(resultTwo[i])
    if (typeof locaa !== 'undefined'){
      if (typeof locaa[0] !== 'undefined'){
        var locaaa = locaa[0]
      locaaa.scrollTo({behavior: "smooth",
      top:resultTwo[i].scrollPos})}
    }}
      }}}
      weMove()

            return (
              <div className="listyThree" 
              // value={state.inputValue} onChange={e => changeInputValue(e.target.value)}
                style={{
                  ...props.style,
                  ...styles.container,
                }}
                 
              >
                <ul style={styles.ul} id='listyTwoId'>
                  {resultTwo.slice(0).reverse().map((message, index) => (
                    <li className={message.classNameParent} key={index} style={windowFocus(message)}>
                      <p className='listyText noselect' style={styles.message}>{message.print}</p>
                    </li>
                  ))}
                </ul>
              </div>
            )
          }
  }
  export default MessageListTwo