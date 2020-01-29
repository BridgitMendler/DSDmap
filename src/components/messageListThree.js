import React, { Component, useContext, useState } from 'react'
import { AppContext } from '../index'


export function MessagesListTwo(props){
  
  const [styles, setStyles] = useState(
      styles={
    container= {
      height: '900px',
      width: '70%',
      overflowY: 'scroll',
      flex: 1,
    },
    ul= {
      listStyle: 'none',
    },
    li= {
      marginTop: 13,
      marginBottom: 13,
    },
    senderUsername= {
      fontWeight: 'bold',
    },
    message= { fontSize: 75 },
}
  )
  

    // const {state, dispatch} = useContext(AppContext);

    // const changeInputValue = (newValue) => {

    //     dispatch({ type: 'UPDATE_INPUT', data: newValue,});
    // };

    return (
      <div className="listyThree"
        style={{
          ...this.props.style,
          ...styles.container,
        }}
      >
        <ul style={styles.ul} id='listyTwoId'>
          {this.props.messages.slice(0).reverse().map((message, index) => (
            <li className="listyTwo" key={index} style={styles.li} >
              <p className='listyText' style={styles.message}>{message.text}</p>
            </li>
          ))}
        </ul>
      </div>
    )
  }
  export default MessageListTwo


  import React, { Component, useContext } from 'react'
import { AppContext } from '../index'

class MessagesListTwo extends Component {
  render() {
    const styles = {
      container: {
        height: '900px',
        width: '70%',
        overflowY: 'scroll',
        flex: 1,
      },
      ul: {
        listStyle: 'none',
      },
      li: {
        marginTop: 13,
        marginBottom: 13,
      },
      senderUsername: {
        fontWeight: 'bold',
      },
      message: { fontSize: 75 },
    }
    return (
      <div className="listyThree"
        style={{
          ...this.props.style,
          ...styles.container,
        }}
      >
        <ul style={styles.ul} id='listyTwoId'>
          {this.props.messages.slice(0).reverse().map((message, index) => (
            <li className="listyTwo" key={index} style={styles.li} >
              <p className='listyText' style={styles.message}>{message.text}</p>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

export default MessagesListTwo