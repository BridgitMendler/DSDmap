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
    fetch('http://localhost:3001/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username }),
    })
      .then(response => {
        setCurrentUsername(username);
        setCurrentScreen('ChatScreen');
      })

  };

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
