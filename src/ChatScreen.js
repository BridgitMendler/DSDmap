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
      // oldestM: 0
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

    chatManager
      .connect()
      .then(currentUser => {
        this.setState({ currentUser })
        return currentUser.subscribeToRoom({
          roomId: '50e665bf-86f0-48f5-9290-7f1363829c0e',
          hooks: {
            onMessage: message => {
              if (message.id < oldestM){
                oldestM = message.id
              }
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
              else {this.setState({
                messages: [...this.state.messages, message],
                allMes:[...this.state.allMes, message]
              })
            }},
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
      .then(currentUser =>{        
        console.log('fetching!')
       return this.state.currentUser.fetchMessages({
        roomId:'50e665bf-86f0-48f5-9290-7f1363829c0e',
        initialId: oldestM,
        direction: 'older',
        limit:100, 
       })
        .then(message => {
            // console.log('message!')
            if (message.id < oldestM){
              oldestM = message.id
            }
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
            else {this.setState({
              messages: [...this.state.messages, message],
              allMes:[...this.state.allMes, message]
            })
          }})
      .catch(error => console.error('error', error))

      if (this.state.allMes.length === 100){
        const oldestMessageIdReceived = Math.min(...this.state.allMes.map(m => m.id))
        oldestM = oldestMessageIdReceived
        }
        console.log(chatManager)

  })}
  



  render() {

console.log(this.state.postings)

      // console.log(this.state.oldestM)
    // console.log(oldestM)
      // console.log(...this.state.allMes.map(m => m.id))
      // console.log(this.state.allMes)

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
        zIndex: 1001, 
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

  

    return (<div>
    <div onClick={this.handleClick} onScroll= {this.handleScroll}>       
        <aside className="bigSpace" style={styles.whosOnlineListContainer}>
        <WhosOnlineList 
                    style= {styles.onlineList}
            className='onlineList noselect' 
            currentUser={this.state.currentUser} 
            users={this.state.currentRoom.users}
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
          />
              </div>
              
          </aside>   
          <svg className={`${this.state.mapName}`} height={window.screen.height*.65}>
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