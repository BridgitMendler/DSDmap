import React, { Component, useEffect, useContext, useState, useRef } from 'react'
import pic from './system.png';
import ReactDOM from 'react-dom'
import { observeSix, newScrollLog} from "./Game";
// import { AppContext } from '../index'


export function MessageListTwo(props){
  // const [isLoading, setIsLoading] = useState(true);

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
      // float: 'right'
    },
}

// const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop)
// const useMountEffect = (fun) => useEffect(fun, [])
// var loca = document.getElementsByClassName('selectionssss')
// var locaa = document.getElementsByClassName('listyThree')
// if (typeof loca !== 'undefined'){
//   if (typeof loca[0] !== 'undefined'){
// console.log(loca[0].offsetTop)

// if (typeof locaa !== 'undefined'){
//   if (typeof locaa[0] !== 'undefined'){
// locaa[0].scrollTo(0,loca[0].offsetTop)}}
// }}
// useEffect(() => {
//   if (resultsRef.current) {
//   locaa.scrollTo({
//     behavior: "smooth",
//     top: resultsRef.current.offsetTop
//   });
// }
// }, [isLoading]);

// const {state, dispatch} = useContext(AppContext);

// const changeInputValue = (newValue) => {

//     dispatch({ type: 'UPDATE_INPUT', data: newValue,});
// };

    // const {state, dispatch} = useContext(AppContext);

    // const changeInputValue = (newValue) => {

    //     dispatch({ type: 'UPDATE_INPUT', data: newValue,});
    // };

   const handleClick =(event) =>{
    //  console.log('walaaa')
     var toChange =[]
      const target = event.target.className;
      const child = event.target
      const layer = child.parentElement
      const layerTwo = layer.parentElement
      const source = ReactDOM.findDOMNode(this)
      var ourSelect = event.target.parentElement.parentElement
      event.target.parentElement.parentElement.attributes.class.value = 'listyTwo dropTarget selectionssss'
      var ssss = (document.getElementsByClassName('selectionssss'))
      var i
      for (i=0; i < ssss.length; i++){
        if (ssss[i] !== ourSelect) {
          toChange.push(ssss[i])
        }
      }
      if (toChange.length > 0){
      toChange[0].attributes.class.value = 'listyTwo dropTarget'

    }
    }






  const whichUser = (id) => {
    if (id.senderId === props.currentUsername) {
      return styles.li2
    }
    return styles.li
  }

    const windowFocus = (val) => {
      // console.log(val)
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


const windowTime = (val) => {
  // console.log(val)
  var theOne = (document.getElementsByClassName('selectionssss'))

  if (typeof theOne[0] !== 'undefined'){
    if (theOne[0].className === val.classNameParent) {
      return myRef
    }
    else { 
      return blah}
}
  else{
return blah
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
  // console.log(newArray)
  }
// console.log(resultTwo)
}
messageClean()

const myRef = useRef(null)
const blah = useRef(null)

// scrollToRef(myRef) // Scroll on mount
  // useEffect(() => {
  // var loca = document.getElementsByClassName('selectionssss')
  // var locaa = document.getElementsByClassName('listyThree')
  //       if (typeof loca !== 'undefined'){
  //         if (typeof loca[0] !== 'undefined'){
  //         console.log(loca)
  //         console.log(locaa)
  //         if (typeof locaa !== 'undefined'){
  //           if (typeof locaa[0] !== 'undefined'){
  //         locaa[0].scrollTo({behavior: "smooth",
  //         top:loca[0].offsetTop-300})
  //       }
  //       }
  //     }
  //   }})
const onSubmit =(e)=> {
  // console.log(myRef)
  // scrollToRef(myRef)
  // console.log('submitting!')
//     var loca = document.getElementsByClassName('selectionssss')
// var locaa = document.getElementsByClassName('listyThree')
var loca =e.target.parentElement.parentElement
var locaa = e.target.parentElement.parentElement.parentElement.parentElement
  e.preventDefault()
  props.onSubmit(('fffff' + e.target.parentElement.parentElement.children[1].innerText + '_listyTwo dropTarget selectionssss'+ '_listyText noselect'+ `_${Math.round((new Date()).getTime() / 1000)}`))
  if (typeof loca !== 'undefined'){
    console.log(loca)
    console.log(locaa)
    if (typeof locaa !== 'undefined'){
    locaa.scrollTo({behavior: "smooth",
    top:loca.offsetTop-300})}
    newScrollLog(loca.offsetTop-300)
  }
    }
if (props.currentUser.id === 'B')
{

  const setScrollPos = (pos) => {
    // console.log(pos)
    
  }
  observeSix(newPos => {setScrollPos(newPos)})


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

const setScrollPos = (pos) => {
  if (typeof locaa !== 'undefined'){
    if (typeof locaa[0] !== 'undefined')
    locaa[0].scrollTo({behavior: "smooth",
    top:pos})}
}


observeSix(newPos => {setScrollPos(newPos)})


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