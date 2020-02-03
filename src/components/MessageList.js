
import React, { useState, useEffect, useRef } from 'react'
import { randomColor } from './randomColor';

const MessagesList = (props) => {
  const messagesEndRef = useRef(null)

  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView({ behavior: "smooth" })
    // console.log(messagesEndRef)
  }
  const [bgColor, setBgColor]=  useState([
          '#ECCC8E',
          '#5B7961',
          '#B87F75',
          '#65766E',
          '#646464',
          '#DEBD95'
        ])
  const [selectedColor, setSelectedColor] = useState ('')
  const [selectedColorTwo, setSelectedColorTwo]= useState('')
  const [styles] = useState({
    container: {
      height: '200px',
      // width: '350px',
      overflowY: 'scroll',
      flex: 1,
    },
    ul: {
      listStyle: 'none',
    },
    li: {
      marginTop: 8,
      marginBottom: 13,
    },
    senderUsername: {
      fontSize: 10 
    },
    message: { fontSize: 15 },

    div: {
      borderRadius: '150%',
      width: 31,
      height: 31,
      marginTop: 3,
      // marginRight: -7,
    },
  })

  
  

 useEffect(()=> {

  scrollToBottom()
 const _getRandomColor =() =>{

    var item = bgColor[Math.floor(Math.random()*bgColor.length)];
    setSelectedColor(item)
  }
 const _getRandomColorTwo=()=>{

    var item = bgColor[Math.floor(Math.random()*bgColor.length)];
    setSelectedColorTwo(item)
  }
  

    // var i
    // for (i=0; i<this.props.messages.length; i++) {
    //   if (i>0){
    //     if (this.props.messages[i].senderId === this.props.messages[i-1].senderId) {
    //       console.log('hi')
    //   }
    //   else {
    //     // this._getRandomColor()
    //     console.log('h')
    //   }
    //     }
    // }
    _getRandomColor()
    _getRandomColorTwo()


  },[])

    return (
      <div 
      style={{...props.style,
          ...styles.container,
        }}>
        <ul style={styles.ul}>
          {props.messages.map((message, index) => (
            <li key={index}  style={styles.li} >
              <div>
                <span style={styles.senderUsername}>{message.senderId}</span>
              </div>
              <p className="listy" style={styles.message}>{'   ' + message.text}</p>
            </li>
          ))}
                <div ref={messagesEndRef} />
        </ul>

      </div>
    )
  
}

export default MessagesList
