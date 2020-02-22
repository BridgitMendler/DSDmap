import React, { useState, useEffect } from 'react'
import UsernameForm from './components/UsernameForm'
import ChatScreen from './ChatScreen'
// import Accordion from './accordion'
import Map from './components/Map'
import WhosOnlineList from './components/WhosOnlineList'
import SplitPane from "react-split-pane";
import ReactDOM from 'react-dom';
import ChatSticky from "./components/stickie-chat";
import pic from './components/system.png';
import { observe } from './components/Game'
import HTML5Backend from 'react-dnd-html5-backend'
import { useDrop, DndProvider} from 'react-dnd'



// const ChessboardTutorialApp = () => {

//   // the observe function will return an unsubscribe callback
//   useEffect(() => observe(newPos => setKnightPos(newPos)))
//   return (
//     <div>
//       <div style={containerStyle}>
//         <Board knightPosition={knightPos} />
//       </div>
//     </div>
//   )
// }
// export default ChessboardTutorialApp


export const Cheese = () => {
      const [knightPos, setKnightPos] = useState([400, 300])
      const [currentUsername, setCurrentUsername] = useState('');
      const [currentScreen, setCurrentScreen] = useState('WhatIsYourUsernameScreen');

  // useEffect(() => observe(newPos => (setKnightPos(newPos))))

  const onUsernameSubmitted = (username) => {
    fetch('http://dsdmap.media.mit.edu:3001/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username }),
    })
      .then(response => { 

        var usernameTwo =[]
        var newText = username.split(/[_,]+/)
        
        usernameTwo['username'] = newText[0] 
        usernameTwo['status'] = newText[3]
        usernameTwo['consent']= newText[2]
        usernameTwo['password'] = newText[1]
        // console.log(usernameTwo)
        if (usernameTwo['password'] === 'Blah' && usernameTwo['consent'] === 'I consent' && usernameTwo['username'] !== ''||usernameTwo['password'] === 'Blah' && usernameTwo['consent'] === '' && usernameTwo['username'] !== ''){
          // console.log(usernameTwo['password'])
        setCurrentUsername(username);
        setCurrentScreen('ChatScreen');
      }
    })

  };

  // const findDupsArr = () => {
  //   var newArray = this.state.currentRoom.users
  //   var newArray2 = []
  //   var i
  //   for (i = 0; i< this.props.currentRoom.users.length; i++) {
  //     var newText = newArray[i].text.split(/[_,]+/);

  //     newArray[i]['username'] = newText[3] 
  //     newArray[i]['status'] = newText[1]
  //     newArray[i]['consent']= newText[2]
  //     newArray[i]['password'] = newText[5]
  //   }
  // }

    if (currentScreen === 'WhatIsYourUsernameScreen') {
      return <UsernameForm onSubmit={onUsernameSubmitted} />
    }
    if (currentScreen === 'ChatScreen') {


      return (<DndProvider backend={HTML5Backend}>

    <ChatScreen currentUsername={currentUsername} knightPos={knightPos}/>
              
      <div className="App">

      </div>

      </DndProvider>)
    }
  }


export default Cheese;

