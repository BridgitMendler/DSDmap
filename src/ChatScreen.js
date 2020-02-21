import React, { Component } from 'react'
import Chatkit from '@pusher/chatkit-client'
import MessageList from './components/MessageList'
import MessageListTwo from './components/MessageListTwo'
import SendMessageForm from './components/SendMessageForm'
import MessageTwo from './components/messageTwo'
import TypingIndicator from './components/TypingIndicator'
import WhosOnlineList from './components/WhosOnlineList'
import ReactStickyNotes from './components/react-sticky-notes';
import { Map }from './components/Map'
import pic from './components/system.png';
import pic2 from './components/linePic.png'
import pic3 from './components/linePic.png'
import NoteTwo from './components/react-sticky-notes/partials/noteTwo';
import ReactDOM from 'react-dom'
import NavBar from './components/react-sticky-notes/navbar';
import { h, getElementStyle } from './components/react-sticky-notes/utils';
import { EventEmitter } from './components/react-sticky-notes/utils/events.js'
import { genericTypeAnnotation } from 'babel-types'
import ReactJoyride, { EVENTS } from "react-joyride";
import PropTypes from "prop-types";
import drop from './components/drop2.gif'
import pic4 from './components/mendler2.png'
import group from './components/group.gif'
import show from './components/line.gif'



class ChatScreen extends Component {
  constructor(props) {
    super(props)
    this.myRef = React.createRef();
    this.handleClick = this.handleClick.bind(this);
    this.handleLineClick = this.handleLineClick.bind(this);
    this.handleMapClick = this.handleMapClick.bind(this);
    this.state = {
      currentUser: {},
      currentRoom: {},
      messages: [],
      postings: [],
      delNote: [],
      bubblePosList: [],
      notesy: [],
      allMes: [],
      usersWhoAreTyping: [],
      scrollScreen: 0,
      scrollVals: [],
      mapName: 'slideNone',
      visible: false,
      feedback: 'chatContainer',
      sidePanel: 'chatContainerTwo',
      knightPos: this.props.knightPos,
      convoBoxSize: null,
      hidden: false,
      oldestM: 0,
      run: true,
      steps: [
        {
          content: (
            <div className='welcome4'>
            Welcome to the design session! We are excited to have you!
            <br />
            <img src={pic4} className='mendler' alt="loading..." />
            <div className='welcome4'> My name is Jess and I will be your facilitator! As a reminder, we are here to test out how visual 
              elements used in offline design workshops can translate to a virtual space. During this workshop, you will 
              use virtual stickie notes to share your ideas and build upon the ideas of others. You can move the stickies 
              around and group them as you wish.</div>
              <br /> 
              <div className='welcome4'>In this workshop, you are in a hypothetical scenario where you have been tasked to redesign a formal process. 
                Soon you will see what that process is. If you have any questions or concerns, feel free to message me in the chat panel</div> 
          </div>
          ),
          placement: "center",
          locale: { skip: "skip" },
          target: "body"
        },
        {
          content: (
            <div className='welcome4'>Now we will begin the tour of our dashboard!</div>),
        // content: "",
        placement: "center",
        styles: {
          options: {
            width: 400
          }
        },
        locale: { skip: "skip" },
        target: "body"
      },
        {
          content: (
            <div className='welcome4'>This is a list of all of the participants in your group. You can chat with everyone in the chat box below anytime you have a question</div>),
          // content: "This is a list of all of the participants in your group. You can chat with everyone in the chat box below anytime you have a question",
          placement: "top",
          styles: {
            options: {
              width: 400
            }
          },
          target: ".theUsers",
          // title: "Our projects"
        },
        {
          // title: "Our Mission",
          content: (
            <div className='welcome4'>
              Click on this button to start a new stickie. When you are finished writing, don't forget to press share! Then move your note to concepts that you think are related.
              <br />
              <img src={group} alt="loading..." />
            </div>
          ),
          target: ".rs-notes--navbar",
          placement: "top"
        },
        {
          // title: "Our Fail Test",
          content: (
            <div className='welcome4'>
              Click on the show map button to see the process map we are working on. Drag the tab in the corner of the note to the map when you find a spot in the process map that is related
              <img src={drop} className='gifgif' alt="loading..." />
            </div>
                      ),
          styles: {
            options: {
              width: 900
            }
          },
          target: ".title",
          placement: "top"
        },
        {
          // title: "Our Fail Test",
          content: (
            <div className='welcome4'>
              If you want to see all of the connections made to the map so far, click show line
              <img src={show} className='gifgif' alt="loading..." />
            </div>
                      ),
          target: ".title2",
          placement: "top"
        },
        {
          content: (
            <div>
              <h1 className='welcome' >Here is your task</h1>
              <h2 className='welcome2'>Redesign the university application process</h2>
              <h3 className='welcome3'>Universities are in need of a new way of selecting students. They have decided to reach out to people across the country to gather ideas on what could be done better. You have all been brought together to share your unique 
                perspectives. </h3>
                <br />
                <h3 className='welcome3'>For reference, a map of the existing university application process is 
                available to you. Please review this map and then add your answers to the given prompts. Talk to your fellow participants and build upon each others ideas</h3>
                <br />
                <h3 className='welcome3'>In 30 minutes you will be given your second set of questions to complete</h3>
            </div>
                      ),
          // title: "Our Fail Test",
          // content: "now let's get started, designers!",
          target: "body",
          placement: "center"
        }
      ]
    }
    this.sendMessage = this.sendMessage.bind(this)
    this.sendMessage = this.sendMessage.bind(this)
    this.sendTypingEvent = this.sendTypingEvent.bind(this)
    this.handleScroll = this.handleScroll.bind(this)

    
  }
  

  handleClick(event) {
    const target = event.target.className;
    const child = event.target
    const layer = child.parentElement
    const layerTwo = layer.parentElement
    const source = ReactDOM.findDOMNode(this).getElementsByClassName('listyThree')[0];
    // console.log(source);
    if (target == 'rs-notes--header--button rs-notes--header--button__title') {
      // this.toggleSidenav(child)

    } 
  }

handleMapClick(event) {
 const visible = this.state.visible
 const mapName = this.state.mapName
 const feedback = this.state.feedback
 const sidePanel = this.state.sidePanel
 const convoBoxSize = this.state.convoBoxSize
  if (visible === true) {
    // console.log(this.state.feedback)

    this.setState({
      visible: this.state.visible = false,
      mapName: this.state.mapName = 'slideOut',
      feedback: this.state.feedback = 'chatContainer',
      sidePanel: this.state.sidePanel = 'chatContainerTwo',
      convoBoxSize: this.state.convoBoxSize = ReactDOM.findDOMNode(this).getElementsByClassName('listyThree')[0].offsetWidth
    });
    // console.log(convoBoxSize)

  } else if (visible === false) {
    // console.log(this.state.feedback)
    this.setState({
      visible: this.state.visible = true,
      mapName: this.state.mapName = 'slideIn',
      feedback: this.state.feedback = 'chatContainerClosed',
      sidePanel: this.state.sidePanel = 'chatContainerTwoClosed',
      convoBoxSize: this.state.convoBoxSize = ReactDOM.findDOMNode(this).getElementsByClassName('listyThree')[0].offsetWidth
    });
    // console.log(document.getElementsByClassName('chatContainerTwo'))

  }
}

handleLineClick(event) {
  const hidden = this.state.hidden
  // console.log(event)
  // console.log(this.state.hidden)
   if (hidden === true) {
     this.setState({
       hidden: this.state.hidden = false,
     });
 
   } else if (hidden === false) {
     this.setState({
       hidden: this.state.hidden = true,
     });
   }
 }


  handleScroll(event) {
    // console.log(this.state.knightPos)
    const source = ReactDOM.findDOMNode(this).getElementsByClassName('join')[0];
    const sourceTwo = ReactDOM.findDOMNode(this).getElementsByClassName('listyThree')[0];
    const sourceThree = ReactDOM.findDOMNode(this).getElementsByClassName('listyTwo');
// console.log(sourceThree)
    let scrollTop = sourceTwo.scrollTop,
      itemTranslate = scrollTop;
            // let scrollTop = sourceTwo.scrollTop,
            //     itemTranslate = Math.min(0, scrollTop/3 - 60);
    var joined = this.state.scrollVals.concat(scrollTop);
this.setState({ scrollVals: joined })
      this.setState({
        scrollScreen: scrollTop
      });
      // console.log(event.target.name)
      // console.log(this.state.scrollScreen)
      // console.log(this.state.scrollVals)
    }
  // console.log(scrollTop)
    // source.style = {
    //   color: "grey"
    // }
		//   transform: itemTranslate
		// });
    

  sendTypingEvent() {
    this.state.currentUser
      .isTypingIn({ roomId: this.state.currentRoom.id })
      .catch(error => console.error('error', error))
  }

  sendMessage(text) {
    this.state.currentUser.sendMessage({ 
      text,
      roomId: this.state.currentRoom.id,
    })
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
    const chatManager = new Chatkit.ChatManager({
      instanceLocator: 'v1:us1:d273e0b5-92c2-4e8e-9ad3-ed684d17f602',
      userId: this.props.currentUsername,
      tokenProvider: new Chatkit.TokenProvider({
        url: 'http://dsdmap.media.mit.edu:3001/authenticate',
      }),
    })

var oldestM = 300000000
// BOOL setfetch to false 
    chatManager
      .connect()
      .then(currentUser => {
        this.setState({ currentUser })
        return currentUser.subscribeToRoom({
          roomId: 'dc0d6cab-ad4b-4252-950b-729c80f40871',
          hooks: {
            onMessage: message => {
              if (message.id < oldestM){
                oldestM = message.id
              }
              // console.log(this.state.allMes)
              // console.log(oldestM)
              String.prototype.removeCharAt = function (i) {
                var tmp = this.split(''); // convert to an array
                tmp.splice(i, 5); // remove 1 element from the array (adjusting for non-zero-indexed counts)
                return tmp.join('');
                // console.log(tmp)
              }

              if (/^fffff/.test(message.text)) {
                message.text=(message.text.removeCharAt(0))
                this.setState({
                  postings: [...this.state.postings, message],
                  allMes:[...this.state.allMes, message]
                })
                }
              else if (/^ggggg/.test(message.text)){
                message.text=(message.text.removeCharAt(0))
                this.setState({
                  notesy: [...this.state.notesy, message],
                  allMes:[...this.state.allMes, message]
                })
              }
              else if (/^hhhhh/.test(message.text)){
                message.text=(message.text.removeCharAt(0))
                this.setState({
                  delNote: [...this.state.delNote, message],
                  allMes:[...this.state.allMes, message]
                })
              }
              else if (/^jljljl/.test(message.text)){
              message.text=(message.text.removeCharAt(0))
              this.setState({
              bubblePosList: [...this.state.bubblePosList, message],
              allMes:[...this.state.allMes, message]
            })
              }
              else {
                this.setState({
                messages: [...this.state.messages, message],
                allMes:[...this.state.allMes, message]
              })
              //console.log('pulling from chatkit ' +this.state.allMes)
            }
          },
            onUserStartedTyping: user => {
              this.setState({
                usersWhoAreTyping: [...this.state.usersWhoAreTyping, user.name],
              })
            },
            onUserStoppedTyping: user => {
              this.setState({
                usersWhoAreTyping: this.state.usersWhoAreTyping.filter(
                  username => username !== user.name
                ),
              })
            },
            onPresenceChange: () => this.forceUpdate(),
            onUserJoined: () => this.forceUpdate(),
          },
          messageLimit: 100,
        })
      })
      .then(currentRoom => {
        this.setState({ currentRoom })
      })
.then(fetchy => {
  // console.log(fetchy)
      for (let i = 0, p = Promise.resolve(); i < 10; i++) {
        // console.log(i)
        p = p
      .then(currentUser =>{  
        // console.log('returning')
       return this.state.currentUser.fetchMessages({
        roomId:'dc0d6cab-ad4b-4252-950b-729c80f40871',
        initialId: oldestM,
        direction: 'older',
        limit:100, 
       })
        .then(message => { 
          // if(message.length >= 100){
            // console.log('message!')
            if (typeof message[0] !== 'undefined'){
            if (message[0].id < oldestM){
              console.log('yes')
              oldestM = message[0].id
            // }
            // console.log(oldestM)
            String.prototype.removeCharAt = function (i) {
              var tmp = this.split(''); // convert to an array
              tmp.splice(i, 5); // remove 1 element from the array (adjusting for non-zero-indexed counts)
              return tmp.join('');
              // console.log(tmp)
            }
            for (var i =0; i<message.length; i++){
            if (/^fffff/.test(message[i].text)) {
              message[i].text=(message[i].text.removeCharAt(0))
              this.setState({
                postings: [...this.state.postings, message[i]],
                allMes:[...this.state.allMes, message[i]]
              })
              }
            else if (/^ggggg/.test(message[i].text)){
              message[i].text=(message[i].text.removeCharAt(0))
              this.setState({
                notesy: [...this.state.notesy, message[i]],
                allMes:[...this.state.allMes, message[i]]
              })
            }
            else if (/^hhhhh/.test(message[i].text)){
              message[i].text=(message[i].text.removeCharAt(0))
              this.setState({
                delNote: [...this.state.delNote, message[i]],
                allMes:[...this.state.allMes, message[i]]
              })
            }
            else if (/^jljljl/.test(message[i].text)){
              // console.log(m)
              message.text=(message.text.removeCharAt(0))
              this.setState({
              bubblePosList: [...this.state.bubblePosList, message],
              allMes:[...this.state.allMes, message]
            })
            }
            else {this.setState({
              messages: [...this.state.messages, message[i]],
              allMes:[...this.state.allMes, message[i]]
            })
          }}}}}, reason => {console.error(reason)})
      .catch(error => console.error('error', error))

      if (this.state.allMes.length === 100){
        const oldestMessageIdReceived = Math.min(...this.state.allMes.map(m => m.id))
        oldestM = oldestMessageIdReceived
        }
        console.log(chatManager)

  }
  )}})
}

theChange=()=>{
  const varry =document.getElementById("react-joyride-step-2")
const varry2 =document.getElementById("react-joyride-step-3")
const varry3 =document.getElementById("react-joyride-step-4")
const varry4 =document.getElementById("react-joyride-step-5")
// console.log(varry)
// console.log(varry2)
if (typeof varry !== 'undefined' && varry !== null){
  varry.childNodes[0].childNodes[0].childNodes[1].childNodes[0].childNodes[0].setAttribute("style", "background-color:transparent;")
  // console.log(varry.childNodes[0].childNodes[0].childNodes[1].childNodes[0].childNodes[0])
} 
else if (typeof varry2 !== 'undefined' && varry2 !== null) {
  varry2.childNodes[0].childNodes[0].childNodes[1].childNodes[0].childNodes[0].setAttribute("style", "background-color:transparent;")
  // console.log(varry2.childNodes[0].childNodes[0].childNodes[1].childNodes[0].childNodes[0])
}
else if  (typeof varry3 !== 'undefined' && varry3 !== null){
  varry3.childNodes[0].childNodes[0].childNodes[1].childNodes[0].childNodes[0].setAttribute("style", "background-color:transparent;")
  // console.log(varry3.childNodes[0].childNodes[0].childNodes[1].childNodes[0].childNodes[0])
}
else if (typeof varry4 !== 'undefined' && varry4 !== null){  
  varry4.childNodes[0].childNodes[0].childNodes[1].childNodes[0].childNodes[0].setAttribute("style", "background-color:transparent;")

  // console.log(varry4.childNodes[0].childNodes[0].childNodes[1].childNodes[0].childNodes[0])
}
}
  
static propTypes = {
  joyride: PropTypes.shape({
    callback: PropTypes.func
  })
};

static defaultProps = {
  joyride: {}
};

// handleClickAddSteps = ({ target }) => {
//   const { steps } = this.state;

//   target.style.display = "none";
//   if (steps.length >= 5) return;

//   const newSteps = [
//     {
//       content: (
//         <div>
//           <h3>Or event a SVG icon</h3>
//           <svg
//             width="50px"
//             height="50px"
//             viewBox="0 0 96 96"
//             version="1.1"
//             xmlns="http://www.w3.org/2000/svg"
//             preserveAspectRatio="xMidYMid"
//           >
//             <g>
//               <path
//                 d="M83.2922435,72.3864207 C69.5357835,69.2103145 56.7313553,66.4262214 62.9315626,54.7138297 C81.812194,19.0646376 67.93573,0 48.0030634,0 C27.6743835,0 14.1459311,19.796662 33.0745641,54.7138297 C39.4627778,66.4942237 26.1743334,69.2783168 12.7138832,72.3864207 C0.421472164,75.2265157 -0.0385432192,81.3307198 0.0014581185,92.0030767 L0.0174586536,96.0032105 L95.9806678,96.0032105 L95.9966684,92.1270809 C96.04467,81.3747213 95.628656,75.2385161 83.2922435,72.3864207 Z"
//                 fill="#000000"
//               />
//             </g>
//           </svg>
//         </div>
//       ),
//       placement: "left",
//       target: ".demo__about h2"
//     }
//   ];

//   this.setState({ steps: steps.concat(newSteps) });
// };

// handleClickStart = e => {
//   e.preventDefault();

//   this.setState({
//     run: true
//   });
// };

handleJoyrideCallback = data => {
  const { joyride } = this.props;
  const { type } = data;

  if (type === EVENTS.TOUR_END && this.state.run) {
    // Need to set our running state to false, so we can restart if we click start again.
    this.setState({ run: false });
  }

  if (typeof joyride.callback === "function") {
    joyride.callback(data);
  } else {
    // console.group(type);
    // console.log(data); //eslint-disable-line no-console
    console.groupEnd();
  }
};


  render() {

    var currentUser2
    const userArray = () =>{
    var usernameTwo = this.state.currentUser
    if (typeof this.state.currentUser !== 'undefined'){
      if (typeof this.state.currentUser.id !== 'undefined'){
    var newText = this.state.currentUser.id.split(/[_,]+/)
    
    usernameTwo['username'] = newText[0] 
    usernameTwo['status'] = newText[3]
    usernameTwo['consent']= newText[2]
    usernameTwo['password'] = newText[1]
    // console.log(usernameTwo)
    currentUser2 = usernameTwo
  }
    }}
userArray()
    var users2 = []
		const findDupsArr = () => {
			var newArray = this.state.currentRoom.users
			var newArray2 = []
      var i
      if (typeof newArray !== 'undefined'){
			for (i = 0; i< newArray.length; i++) {
        // console.log(newArray[i])
				var newText = newArray[i].id.split(/[_,]+/);

				newArray[i]['username'] = newText[0] 
				newArray[i]['status'] = newText[3]
				newArray[i]['consent']= newText[2]
        newArray[i]['password'] = newText[1]
      }
      users2 = newArray
    }}
    findDupsArr()
// console.log(users2)

    //   console.log(this.state.oldestM)
    // // console.log(oldestM)
    //   console.log(...this.state.allMes.map(m => m.id))
    //   console.log(this.state.allMes[this.state.allMes.length-1])
      // console.log(this.state.allMes)
      // console.log(this.state.postings)

    // console.log(this.state.allMes)
// console.log((this.state.delNote),(this.state.messages),(this.state.postings),(this.state.bubblePosList),(this.state.notesy))
    const x = -55
    const y = 19
    const a = -19
    const z = 22
    const b = -57
    const c = 3
    const d = 22
    const e = -25
    // console.log(this.state.notesy)
    // console.log(this.state.postings)
    // console.log(this.state.notesy)
    const styles = {


      container: {
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
      },
      chatContainer: {
        width:'22%' ,
        height: '100%',
        float: 'left',

        // display: 'flex',
        // flex: 1,
      },

      chatContainerTwo: {
        // width:'77%' ,
        float: 'right',
        borderRight: '1px solid rgba(0, 0, 0, 0.14)',
        borderLeft: '1px solid rgba(0, 0, 0, 0.14)',
        // display: 'flex',
        // flex: 1,
      },
      chatContainerTwoClosed: {
        // width:'49.75%' ,
        float: 'right',
        borderRight: '1px solid rgba(0, 0, 0, 0.14)',
        borderLeft: '1px solid rgba(0, 0, 0, 0.14)',
        // display: 'flex',
        // flex: 1,
      },
      borderBox: {
        padding: '10px',
        borderBottom: '1px solid rgba(0, 0, 0, 0.14)',
        borderTop: '1px solid rgba(0, 0, 0, 0.14)',
        zIndex: 1000
        // display: 'flex',
        // flex: 1,
      },
      whosOnlineListContainer: {
        width: '100%',
        backgroundColor: 'white',
        color: 'white',
        // zIndex: 1001, 
        position: 'relative'
      },

      button: {
        backgroundColor: 'rgba(0, 0, 0, 0.03)',
        borderRadius: 30,
        width: 180,
        height: 50,
        margin: 10,
        // flex: 'right',
        textAlign: 'center',
        display: 'inline-block',
        float: 'right',
        fontSize: 16,
        color: 'grey',
        // fontWeight: 'bold',
        fontFamily: 'avenir next',
        boxShadow: '1px 2px 4px rgba(0, 0, 0, .15)',
      },

      button2: {
        width: 180,
        height: 50,
        margin: 10,
        flex: 'right',
        textAlign: 'center',
        // border:'1px solid rgba(0, 0, 0, 0.14)',
        backgroundColor: 'rgba(0, 0, 0, 0.03)',
        borderRadius: 30,
        display: 'inline-block',
        float: 'right',
        fontSize: 16,
        color: 'grey',
        fontFamily: 'avenir next',
        boxShadow: '1px 2px 4px rgba(0, 0, 0, .15)'
      },

      chatListContainer: {
        width: '100%',
        height: '100%',

        // display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      },

      onlineList: {
        float: 'left',
        flex: 'right',
        display: 'inline-block',
      },
      MessageList: {
        width: '23vw',
        borderBottom: '1px solid rgba(0, 0, 0, 0.14)',
        // borderTop: '1px solid grey'
      },
      divStyle: {
        padding: 20,
        width: '00px'
      },
      transforming: {
        color: '#646465',
      },
      imagee: {
        transform: `translate(${x}px, ${y}px)`,
      },
      text: {
        transform: `translate(${z}px, ${a}px)`,
      },
      imagee2: {
        transform: `translate(${b}px, ${c}px)`,
      },
      text2: {
        transform: `translate(${d}px, ${e}px)`,
      },
      rsNotes: {
        width: 0,
        height: 0
      }

    }

    // const { steps } = this.state.steps;

    // console.log(varry)

    return (<div className='upperMost'>
                  {/* <button onClick={this.handleClickStart}>Let's Go!</button> */}
        <ReactJoyride
          continuous
          scrollToFirstStep
          showProgress
          showSkipButton
          run={this.state.run}
          steps={this.state.steps}
          styles={{
            options: {
              zIndex: 10000,
              // arrowColor: '#e3ffeb',
              // backgroundColor: "#eee",
              // backgroundColor: '#e3ffeb',
              // overlayColor: 'rgba(79, 26, 0, 0.4)',
              primaryColor: '#9FA7B8',
              // textColor: '#004a14',
              width: 900,
            }
          }}
          callback={this.handleJoyrideCallback, this.theChange}
        />
    <div onClick={this.handleClick} onScroll= {this.handleScroll}>       
        <aside className="bigSpace" style={styles.whosOnlineListContainer}>
        <WhosOnlineList 
                    style= {styles.onlineList}
            className='onlineList noselect' 
            currentUser={currentUser2} 
            users={users2}
          />
          <div style={styles.borderBox}>
          <MessageTwo onSubmit={this.sendMessage} 
          currentUser={this.state.currentUser} 
            users={this.state.currentRoom.users}/>

          <h1 style={styles.button2}
            className="title2"
            onClick={this.handleLineClick}
          ><img className='pictureLine noselect' style={styles.imagee} src={this.state.hidden? pic3:pic2}></img><p style={styles.text}>show line</p></h1>
          <h1 style={styles.button}
            className="title"
            onClick={this.handleMapClick}
          ><img className='pictureThree noselect' style={styles.imagee2} src={pic}></img><p style={styles.text2}>show map</p></h1>
               <ReactStickyNotes className='stickyButton' style={styles.rsNotes}
            onChange={this.sendTypingEvent}
            onSubmit={this.sendMessage}
            backgroundColor="#fefefe"
            useCSS={true}
            scrollScreen={this.state.scrollScreen}
            bubblePosList={this.state.bubblePosList}
            scrollVals={this.state.scrollVals}
            visible = {this.state.visible}
            onScroll= {this.handleScroll}
            convoBoxSize={this.state.convoBoxSize}
            hidden={this.state.hidden}
            notesy={this.state.notesy}
            delNote={this.state.delNote}
            messages={this.state.postings}
            currentUser={this.state.currentUser}
          />
              </div>
              
          </aside>   
          <svg className={`${this.state.mapName}`} height={window.screen.height*.81}>
               <Map className={`${this.state.mapName}`} onSubmit={this.sendMessage} knightPosition={this.state.knightPos}/> 
               </svg> 
    <div style={styles[this.state.sidePanel]} className={`${this.state.sidePanel}`} >
      <MessageListTwo className='messageListTwo' delNote={this.state.delNote} currentUser={this.state.currentUser} onSubmit={this.sendMessage} messages={this.state.postings} style={styles.transforming}/>
    </div>
    <div style={styles.chatContainer} className={`${this.state.feedback}`} >
      <section style={styles.chatContainer} className={`${this.state.feedback}`}>
          <div className="messages"style={styles.MessageList}>
            <MessageList messages={this.state.messages} users={this.state.currentRoom.users} currentUsername={this.props.currentUsername}/>
            <TypingIndicator usersWhoAreTyping={this.state.usersWhoAreTyping} />
            <SendMessageForm onSubmit={this.sendMessage}onChange={this.sendTypingEvent}/>
          </div>
      </section>
    </div>
  </div>
  </div>
    )
  }
}


export default ChatScreen