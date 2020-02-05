import React, { Component } from 'react'
import Popup from "reactjs-popup";
import pic from './write.png';

class MessageTwo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      text: '',
    }
    this.onSubmit = this.onSubmit.bind(this)
    this.onChange = this.onChange.bind(this)
  }

  onSubmit(e) {
    e.preventDefault()
    this.props.onSubmit(('fffff' + this.state.text + '_listyTwo dropTarget selectionssss'+ '_listyText noselect'+ `_${Math.round((new Date()).getTime() / 1000)}`))
    this.setState({ text: '' })
    
  }

  onChange(e) {
    this.setState({ text: e.target.value })
    if (this.props.onChange) {
      this.props.onChange()
    }
  }

  render() {
    const styles = {
      container: {
        marginBottom: 10,
        padding: 10,
        width:500
      },
      form: {
        display: 'flex',
      },
      button: {
        border: '1px solid rgba(0, 0, 0, 0.14)',
        borderRadius: 20,
        width: 205,
        height: 50,
        margin: 10,
        // flex: 'right',
        textAlign: 'center',
        display: 'inline-block',
        float: 'right',
        fontSize: 16,
        color: 'grey',
        fontWeight: 'bold',
        fontFamily: 'avenir next'
      },
      input: {
        color: '#646465',
        background: 'none',
        outline: 'none',
        border: 'none',
        flex: 1,
        fontSize: 16,
        fontFamily: 'avenir next'
      },
    }

    // console.log(this.props.currentUser.id)

    if (this.props.currentUser.id === 'B')
    {
      // console.log('yay')
    
    return (
    //   <Popup
    //   trigger={<button className="button"> Open Modal </button>}
    //   modal
    //   closeOnDocumentClick
    // >
    //   <span> Modal content </span>
    // </Popup>
      <Popup trigger={<button onClick={this.handleClick} style={styles.button} className='myButton'> <img className='pictureTwo noselect' src={pic}></img>write post</button>} modal position="right center">
      <div style={styles.container}>
        <div>
          <form onSubmit={this.onSubmit} style={styles.form}>
            <input
              type="text"
              placeholder="Type message..."
              onChange={this.onChange}
              value={this.state.text}
              style={styles.input}
            />
          </form>
        </div>
      </div>
      </Popup>
    )
    }
    else {
      return (<div />)
    }
  }
}

export default MessageTwo



