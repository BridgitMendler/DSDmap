import React, { Component, useContext, useState } from 'react'
import pic from './system.png';
import ReactDOM from 'react-dom'
// import { AppContext } from '../index'


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
      backgroundColor: 'grey'
    },
    senderUsername: {
      font: 'avenir next',
      fontWeight: 'medium',
    },
    message: { fontWeight: 'medium', font:'avenir next', fontSize: 40 },

    li2: {
      marginTop: 13,
      marginBottom: 13,
      border: '10px solid blue',
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
      // float: 'right'
    },
}

  
// const {state, dispatch} = useContext(AppContext);

// const changeInputValue = (newValue) => {

//     dispatch({ type: 'UPDATE_INPUT', data: newValue,});
// };

    // const {state, dispatch} = useContext(AppContext);

    // const changeInputValue = (newValue) => {

    //     dispatch({ type: 'UPDATE_INPUT', data: newValue,});
    // };

   const handleClick =(event) =>{
     var toChange =[]
      const target = event.target.className;
      const child = event.target
      const layer = child.parentElement
      const layerTwo = layer.parentElement
      const source = ReactDOM.findDOMNode(this)
      var ourSelect = event.target.parentElement.parentElement
      event.target.parentElement.parentElement.attributes.class.value = 'listyTwo dropTarget selectionssss'
      // console.log(event.target.parentElement.parentElement.attributes.class.value);
      // console.log(event.target.parentElement.parentElement.children[1].innerText)
      // console.log(event.target.parentElement.parentElement.parentElement);
      var ssss = (document.getElementsByClassName('selectionssss'))
      var i
      for (i=0; i < ssss.length; i++){
        if (ssss[i] !== ourSelect) {
          toChange.push(ssss[i])


        }
      }
      // console.log(toChange)
      if (toChange.length > 0){
      toChange[0].attributes.class.value = 'listyTwo dropTarget'
      // console.log(toChange[0].attributes.class.value)
    }
      // if (target == 'rs-notes--header--button rs-notes--header--button__title') {
      //   // this.toggleSidenav(child)
  
      // } 
    }


  const onSubmit =(e)=> {
    e.preventDefault()
    props.onSubmit(('fffff' + e.target.parentElement.parentElement.children[1].innerText + '_listyTwo dropTarget selectionssss'+ '_listyText noselect'+ `_${Math.round((new Date()).getTime() / 1000)}`))
    
  }

// console.log(window.event)
    const windowFocus = (val) => {
      // console.log(this.props.data.selected, this.props.data.id)
      var theOne = (document.getElementsByClassName('selectionssss'))
      if (typeof theOne[0] !== 'undefined'){
        if (theOne[0].innerText === val.print) {
          return styles.li2
        }
        else { return styles.li}
    }
      else{
return styles.li}
}
// windowFocus('lksagl')
//     const handleClick=() =>{
//       // let event = e as Event;
// console.log('clicking')
//     }

    const onDragEnter=(e) =>{
      // console.log(e)
          }

         const onDragOver = (event) => {
           console.log(event)
            // event.preventDefault();
        }
  
// console.log(this)
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
    // newArray[i]['deleted']= (isDeleted())
    // console.log(newArray)
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
  // console.log(result)
  var j
  for (j = 0; j< result.length; j++) {
    var h
    for (h = 0; h< result[j].length; h++)
    // var times = (result[j][h]['time'])
    var soloTime = result
    // console.log(soloTime)
    soloTime[j].splice((0),(soloTime[j].length-1))
    // var bigTime = Math.max(times)
    resultTwo.push(soloTime[j][0])
    // console.log(soloTime[j])
  }
  // console.log(result)
  var k
  for (k = 0; k < newArray.length; k++) {
    var l
    for (l = 0; l < newArray.length; l++) {
  if (newArray[k].classNameParent === newArray[l].classNameParent && newArray[k].time < newArray[l].time || typeof newArray[k].time === 'undefined')
  {
    newArray[k].classNameParent = 'listyTwo dropTarget'
    // console.log(newArray[k].classNameParent, newArray[l].classNameParent)
    // toRemove.push(k)
  }
}
  // console.log(newArray2)
  }
// console.log(resultTwo)
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
            <li className={message.classNameParent} key={index} style={windowFocus(message)} >
              <h1 style={styles.button}
            className="title"
            onClick={onSubmit, handleClick}
          ><img className='pictureThree noselect' src={pic}></img></h1>
              <p className='listyText noselect' style={styles.message}>{message.print}</p>
            </li>
          ))}
        </ul>
      </div>
    )
          }
          else {
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
                    <li className={message.classNameParent} key={index} style={windowFocus(message)} >
                      <p className='listyText noselect' style={styles.message}>{message.print}</p>
                    </li>
                  ))}
                </ul>
              </div>
            )
          }
  }
  export default MessageListTwo