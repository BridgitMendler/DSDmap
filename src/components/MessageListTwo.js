import React, { Component, useContext, useState } from 'react'
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
    },
    senderUsername: {
      font: 'avenir next',
      fontWeight: 'medium',
    },
    message: { fontWeight: 'medium', font:'avenir next', fontSize: 75 },
}
  
// const {state, dispatch} = useContext(AppContext);

// const changeInputValue = (newValue) => {

//     dispatch({ type: 'UPDATE_INPUT', data: newValue,});
// };

    // const {state, dispatch} = useContext(AppContext);

    // const changeInputValue = (newValue) => {

    //     dispatch({ type: 'UPDATE_INPUT', data: newValue,});
    // };

    const onDrop=(e) =>{
      // let event = e as Event;
console.log(e)
    }

    const onDragEnter=(e) =>{
      console.log(e)
          }

         const onDragOver = (event) => {
           console.log(event)
            // event.preventDefault();
        }
  
// console.log(this)
    return (
      <div className="listyThree" 
      // value={state.inputValue} onChange={e => changeInputValue(e.target.value)}
        style={{
          ...props.style,
          ...styles.container,
        }}
         
      >
        <ul style={styles.ul} id='listyTwoId'>
          {props.messages.slice(0).reverse().map((message, index) => (
            <li className="listyTwo dropTarget" key={index} style={styles.li} >
              <p className='listyText' style={styles.message}>{message.text}</p>
            </li>
          ))}
        </ul>
      </div>
    )
  }
  export default MessageListTwo