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
    this.props.onSubmit(('hi' + this.state.text))
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
    return (
    //   <Popup
    //   trigger={<button className="button"> Open Modal </button>}
    //   modal
    //   closeOnDocumentClick
    // >
    //   <span> Modal content </span>
    // </Popup>
      <Popup trigger={<button onClick={this.handleClick} className='myButton'> <img className='pictureTwo' src={pic}></img></button>} modal position="right center">
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
}

export default MessageTwo



