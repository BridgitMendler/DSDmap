    import React, { Component } from 'react'
    import Chatkit from '@pusher/chatkit-client'
    import MessageList from './MessageList'
    import SendMessageForm from './SendMessageForm'
    import TypingIndicator from './TypingIndicator'
    import WhosOnlineList from './WhosOnlineList'
    
    class ChatSticky extends Component {
      constructor(props) {
        super(props)
        this.state = {
          currentUser: {},
          currentRoom: {},
          messages: [],
          usersWhoAreTyping: [],
        }
        this.sendMessage = this.sendMessage.bind(this)
        this.sendTypingEvent = this.sendTypingEvent.bind(this)
      }
    
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
        // console.log("hi there")
        const chatManager = new Chatkit.ChatManager({
          instanceLocator: 'v1:us1:acacef6e-aaf4-4aa6-9871-cd0e7739435d',
          userId: this.props.currentUsername,
          tokenProvider: new Chatkit.TokenProvider({
            url: 'http://localhost:3001/authenticate',
          }),
        })
    
        chatManager
          .connect()
          .then(currentUser => {
            this.setState({ currentUser })
            return currentUser.subscribeToRoom({
              roomId: 'd2093daf-5ddc-498d-94e1-f27152a1eb1cs',
              messageLimit: 100,
              hooks: {
                onMessage: message => {
                  this.setState({
                    messages: [...this.state.messages, message],
                  })
                },
                onPresenceChange: () => this.forceUpdate(),
                onUserJoined: () => this.forceUpdate(),
              },
            })
          })
          .then(currentRoom => {
            this.setState({ currentRoom })
          })
          .catch(error => console.error('error', error))
      }
    
      render() {
        const styles = {
          container: {
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
          },
          chatContainer: {
            display: 'flex',
            flex: 1,
          },
          whosOnlineListContainer: {
            width: '100%',
            padding: 20,
            backgroundColor: 'white',
            color: 'white',
          },
          chatListContainer: {
            padding: 20,
            width: '85%',
            height: '900px',
            display: 'flex',
            flexDirection: 'column',
          },
          MessageList: {
            marginTop: 300,
          }
        }
    
        return (
            <div style={styles.chatContainer}>
              <section style={styles.chatListContainer}>
              <aside style={styles.whosOnlineListContainer}>
                <WhosOnlineList
                  currentUser={this.state.currentUser}
                  users={this.state.currentRoom.users}
                />
              </aside><div className="messages"style={styles.MessageList}>
                <MessageList
                  messages={this.state.messages}
                  ></MessageList>
                <TypingIndicator usersWhoAreTyping={this.state.usersWhoAreTyping} />
                <SendMessageForm
                  onSubmit={this.sendMessage}
                  onChange={this.sendTypingEvent}
                /></div>
              </section>
            </div>
        )
      }
    }
    
    export default ChatSticky
    