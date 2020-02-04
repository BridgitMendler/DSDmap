
import React, { useState, useEffect, useRef } from 'react'
import { randomColor } from './randomColor';
import ReactTooltip from 'react-tooltip'

const MessagesList = (props) => {
  const messagesEndRef = useRef(null)

  const whichUser = (id) => {
    if (id.senderId === props.currentUsername) {
      // console.log(id)
      return styles.li2
    }
    // console.log(id)
    // console.log(props.currentUsername)
    return styles.li
  }

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
      height: '600px',
      // width: '350px',
      overflowY: 'scroll',
      backgroundColor: 'rgba(0, 0, 0, 0.03)',
      flex: 1,
    },
    ul: {
      listStyle: 'none',
    },

    //     li: {
//       width: 245,
//       marginTop: 8,
//       marginBottom: 13,
//       marginRight: 30


//     },

// .listy {
//   border: 1px solid grey;
//   padding: 10px;
//   border-radius: 25px;
//   display:flex;
//   font-family: 'avenir next';
//   box-shadow: '4px 4px 10px rgba(0, 0, 0, 0.4)'
//   /* float: right */
// }

    li: {
      marginTop: 8,
      marginBottom: 13,
      marginRight: 30,

      // boxShadow: '4px 4px 10px rgba(0, 0, 0, 0.4)'
    },
    li2: {
      // width: 245,
      marginTop: 8,
      marginBottom: 13,
      marginLeft: 60,
      textAlign: 'right',

    },
      
    senderUsername: {
      fontSize: 10 
    },
    message: { fontSize: 15,
      borderRadius: 25,
      fontFamily: 'avenir next',
            boxShadow: '2px 2px 6px rgba(0, 0, 0, 0.3)',
            backgroundColor: 'white'
    },

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
  if (typeof props.users !== 'undefined') {
// console.log(props.users)
  }

  // if (user.id === this.props.currentUser.id) {
  //   return (
  //     <WhosOnlineListItem key={index} presenceState="online">
  //       {user.name} {index}
  //     </WhosOnlineListItem>
  //   )
  // }
  // return (
  //   <WhosOnlineListItem key={index} presenceState={user.presence.state}>
  //     {user.name} {index}
  //   </WhosOnlineListItem>
  // )
  // const name = props.children[2].toString()
  // const fullname = props.children[0]
// console.log(props.messages)
    return (
      <div 
      style={{...props.style,
          ...styles.container,
        }}>
        <ul style={styles.ul}>
          {props.messages.map((message, index) => {
              if (message.senderId === props.currentUsername) {
                return(
                <li key={index}  style={whichUser(message)} >
                  <p className="listy" style={styles.message}>{'   ' + message.text}</p>
            </li>
                  )
            }
           return (
            <li key={index}  style={whichUser(message)}>
<span className='noselect' style={styles.senderUsername}>{message.senderId}</span>
              <p className="listy" style={styles.message}>{'   ' + message.text}</p>

            </li>
           )})}
                <div ref={messagesEndRef} />
        </ul>

      </div>
    )
  
}

export default MessagesList



// import React, { useState, useEffect, useRef } from 'react'
// import { randomColor } from './randomColor';

// const MessagesList = (props) => {
//   const messagesEndRef = useRef(null)

//   const scrollToBottom = () => {
//     messagesEndRef.current.scrollIntoView({ behavior: "smooth" })
//     // console.log(messagesEndRef)
//   }

//   const whichUser = (id) => {
//     if (id.senderId === props.currentUsername) {
//       console.log(id)
//       return styles.li2
//     }
//     console.log(id)
//     console.log(props.currentUsername)
//     return styles.li
//   }
//   const [bgColor, setBgColor]=  useState([
//           '#ECCC8E',
//           '#5B7961',
//           '#B87F75',
//           '#65766E',
//           '#646464',
//           '#DEBD95'
//         ])
//   const [selectedColor, setSelectedColor] = useState ('')
//   const [selectedColorTwo, setSelectedColorTwo]= useState('')
//   const [styles] = useState({
//     container: {
//       height: 600,
//       // width: '350px',
//       overflowY: 'scroll',
//       flex: 1,
//     },
//     ul: {
//       listStyle: 'none',
//     },
//     li: {
//       width: 245,
//       marginTop: 8,
//       marginBottom: 13,
//       marginRight: 30


//     },
//     li2: {
//       width: 245,
//       marginTop: 8,
//       marginBottom: 13,
//       marginLeft: 60

//     },
//     senderUsername: {
//       fontSize: 10 
//     },
//     message: { fontSize: 15,
//             textAlign: 'right'
//      },

//     div: {
//       borderRadius: '150%',
//       width: 31,
//       height: 31,
//       marginTop: 3,
//       // marginRight: -7,
//     },
//   })

  
  

//  useEffect(()=> {

//   scrollToBottom()
//  const _getRandomColor =() =>{

//     var item = bgColor[Math.floor(Math.random()*bgColor.length)];
//     setSelectedColor(item)
//   }
//  const _getRandomColorTwo=()=>{

//     var item = bgColor[Math.floor(Math.random()*bgColor.length)];
//     setSelectedColorTwo(item)
//   }
  

//     // var i
//     // for (i=0; i<this.props.messages.length; i++) {
//     //   if (i>0){
//     //     if (this.props.messages[i].senderId === this.props.messages[i-1].senderId) {
//     //       console.log('hi')
//     //   }
//     //   else {
//     //     // this._getRandomColor()
//     //     console.log('h')
//     //   }
//     //     }
//     // }
//     _getRandomColor()
//     _getRandomColorTwo()


//   },[])

//     return (
//       <div 
//       style={{...props.style,
//           ...styles.container,
//         }}>
//         <ul style={styles.ul}>
//           {props.messages.map((message, index) => (
//             <li key={index}  style={whichUser(message)} >
//               <div>
//                 <span className='noselect' style={styles.senderUsername}>{message.senderId}</span>
//               </div>
//               <p className="listy noselect" style={styles.message}>{'   ' + message.text}</p>
//             </li>
//           ))}
//                 <div ref={messagesEndRef} />
//         </ul>

//       </div>
//     )
  
// }

// export default MessagesList
