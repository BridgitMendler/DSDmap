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






// class PanelHorizontal extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       visible: true,
//       width: '0px'
//     }
//   }

//   render() {
//     const classesNames = ['panelHorizontal'];
// if (this.state.visible === true) {
//   return (
//     <div className='slideOut'>
//       <h1
//         className="title"
//         onClick={()=>this.setState({visible: this.state.visible=false, width: this.state.width='400px'})}
//       ><img className='pictureTwo' src={pic}></img></h1>
      
//       <div className={classesNames.join(' ')}>
//           <svg width={`${this.state.width}`} height="700">
//                <Map /> 
//                </svg> 
//       </div>
//     </div>
//   )
// } else {
//   return (
//     <div className='right' className='slideIn'>
//       <h1
//         className="title"
//         onClick={()=>this.setState({visible: this.state.visible=true, width: this.state.width='0px'})}
//       ><img className='pictureTwo' src={pic}></img></h1>
      
//       <div className={classesNames.join(' ')}>
//           <svg width={`${this.state.width}`} height="700">
//                <Map /> 
//                </svg> 
//       </div>
//     </div>
//   )
// }
//   };
// }












// class PanelHorizontal extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       visible: true,
//       width: '0px'
//     }
//   }

// //   h("span", null, hidden ? h("a", {
// //     onClick: () => setHidden(false)
// //   }, " no lines") : h("a", {
// //     onClick: () => setHidden(true)
// //   }, " show lines"),
// //     props.items.map( data => hidden ? h( LineTo, { borderColor:'wheat',borderStyle: 'dashed', borderWidth: 1, from:`rs-notes--note-${data.id}`, to:`rs-notes--full-note-${data.id}`, toAnchor: 'top right', key: `note-${data.id}`,...props, data } ): null )
// // ),)
  
//   render() {
//     const classesNames = ['panelHorizontal'];
//     // if (this.state.visible){
//     //   classesNames.push('slideIn');
//     // } else {
//     //   classesNames.push('slideOut');
//     // }
// if (this.state.visible === true) {
//   return (
//     <div className='right'>
//       <h1
//         className="title"
//         onClick={()=>this.setState({visible: this.state.visible=false, width: this.state.width='400px'})}
//       ><img className='pictureTwo' src={pic}></img></h1>
      
//       <div className={classesNames.join(' ')}>
//           <svg width={`${this.state.width}`} height="700">
//                <Map /> 
//                </svg> 
//       </div>
//     </div>
//   )
// } else {
//   return (
//     <div className='right'>
//       <h1
//         className="title"
//         onClick={()=>this.setState({visible: this.state.visible=true, width: this.state.width='0px'})}
//       ><img className='pictureTwo' src={pic}></img></h1>
      
//       <div className={classesNames.join(' ')}>
//           <svg width={`${this.state.width}`} height="700">
//                <Map /> 
//                </svg> 
//       </div>
//     </div>
//   )
// }
//   };
// }












// class Accordion extends React.Component {
//   constructor(props) {
//     super(props);
//   }

//   render() {
//     return (
//       <PanelHorizontal />
//     )
//   }
// }


class Cheese extends React.Component {
  constructor() {
    super()
    this.state = {
      currentUsername: '',
      currentScreen: 'WhatIsYourUsernameScreen',
    }
    this.onUsernameSubmitted = this.onUsernameSubmitted.bind(this)
  }

  onUsernameSubmitted(username) {
    fetch('http://localhost:3001/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username }),
    })
      .then(response => {
        this.setState({
          currentUsername: username,
          currentScreen: 'ChatScreen',
        })
      })
      .catch(error => console.error('error', error))
  }
  render() {
    const styles = {

    }
    if (this.state.currentScreen === 'WhatIsYourUsernameScreen') {
      return <UsernameForm onSubmit={this.onUsernameSubmitted} />
    }
    if (this.state.currentScreen === 'ChatScreen') {
      // return <SplitPane split="vertical" minSize={450} defaultSize={550}>
      // <ChatScreen currentUsername={this.state.currentUsername} />
      // <div className="App">
      //   <svg width="600" height="2300"> 
      //     <Map width={600} height={1300}/> 
      //   </svg> 
      // </div>
      // <div className="App">
      //   <svg width="600" height="2300"> 
      //     <Map width={600} height={1300}/> 
      //     console.log('hi')
      //   </svg> 
      // </div>

      return <div>
      {/* <div style={styles.container}>
      <aside style={styles.whosOnlineListContainer}>
      <WhosOnlineList
        currentUser={this.state.currentUser}
        users={this.state.currentRoom.users}
      />
    </aside> */}
    {/* <Accordion /> */}
    <ChatScreen currentUsername={this.state.currentUsername} />
              
      <div className="App">

      </div>

    </div>
    }
  }
}

export default Cheese
