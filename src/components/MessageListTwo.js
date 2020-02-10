import React, { Component, useEffect, useContext, useState, useRef } from 'react'
import pic from './system.png';
import pic2 from './lightpin.png'
import ReactDOM from 'react-dom'
// import { observeFive} from "../Game";

export function MessageListTwo(props){

  const styles={
    container: {
      height: (window.screen.height*.65),
      width: '100%',
      overflowY: 'scroll',
      backgroundColor:'rgba(0, 0, 0, 0.03)'
    },
    ul: {
      listStyle: 'none',
    },
    li: {
      // marginTop: 13,
      // marginBottom: 13,
      transition: 'all 1s',
      opacity: '0.2',
      backgroundColor: 'rgba(0, 0, 0, 0.03)'
    },
    senderUsername: {
      font: 'avenir next',
      fontWeight: 'medium',
    },
    message: { fontWeight: 'medium', font:'avenir next', fontSize: 40 },

    li2: {
      scrollBehavior: 'smooth',
      // marginTop: 13,
      // marginBottom: 13,
      border: '5px #ECCC8E',
      transition: 'all 1s',
      // borderRadius: 40,
      backgroundColor:'white',
      boxShadow: '4px 4px 10px rgba(0, 0, 0, 0.3)'
    },
    senderUsername2: {
      font: 'avenir next',
      fontWeight: 'medium',
    },
    message2: { fontWeight: 'medium', font:'avenir next', fontSize: 40 },
    

    button: {
      // border: '1px solid grey',
      // borderRadius: 70,
      width: 55,
      height: 55,
      margin: 10,
      flex: 'right',
      textAlign: 'center',
      display: 'block',
      float: 'left'
    },
}

const [ didMount, setDidMount ] = useState(false)


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
console.log(loca)
var locaa = e.target.parentElement.parentElement.parentElement.parentElement
  e.preventDefault()
  if (typeof loca !== 'undefined'){
  if (typeof locaa !== 'undefined'){
  props.onSubmit(('fffff' + e.target.parentElement.parentElement.children[1].innerText + '_listyTwo dropTarget selectionssss'+ '_listyText noselect'+ `_${Math.round((new Date()).getTime() / 1000)}`+`_${loca.offsetTop}`))
    locaa.scrollTo({ behavior: 'smooth',
    top:loca.offsetTop-300})}
    // setCurrentList([...currentList, loca.offsetTop]);
  }
    }

    

// console.log(currentList)
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
    newArray[i]['currentList'] =newText[4]
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
// console.log(currentList)
// var theOne2


const weMove =()=> {
  var theOne
  // console.log(resultTwo)
  var i
  for (i = 0; i<resultTwo.length; i++){
    if (resultTwo[i].classNameParent === 'listyTwo dropTarget selectionssss'){
      theOne = resultTwo[i]
    }
  }
  // var theOne = (document.getElementsByClassName('selectionssss'))
  var locaa = document.getElementsByClassName('listyThree')
  // theOne2 = theOne
  if (typeof theOne !== 'undefined'){
    console.log('the one not undefined')
    // if (theOne[0].offsetTop !== currentList[currentList.length-1]){
    // console.log(theOne[0].offsetTop)
    if (typeof locaa !== 'undefined'){
      if (typeof locaa[0] !== 'undefined'){
        console.log(theOne.currentList)
        var locaaa = locaa[0]
        // console.log(locaaa)
      locaaa.scrollTo({behavior: 'smooth',
      top:theOne.currentList-300})}
    }}
    // else{ console.log('undefined the one')}
    }
  // }

  useEffect(() => {
    // console.log(window.event)
    if (didMount) {
      if (props.currentUser.id !== 'B'){
        // console.log('it is me!')
        weMove()
      // doStuff()
    } else setDidMount(true)
  }})


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
          ><img className='pictureThree noselect' src={pic2}></img></h1>
              <p className='listyText noselect' style={styles.message}>{message.print}</p>
            </li>
          ))}
        </ul>
      </div>
    )
    
          }

          else {

// var locaa = document.getElementsByClassName('listyThree')
// console.log(resultTwo)

      weMove()
      console.log(resultTwo)

            return (
              <div className="listyThree" 
              // value={state.inputValue} onChange={e => changeInputValue(e.target.value)}
                style={{
                  ...props.style,
                  ...styles.container,
                }}
                 
              > 
                <ul style={styles.ul} id='listyTwoId' onChange={weMove()}>
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