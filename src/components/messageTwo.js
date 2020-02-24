import React, { Component } from 'react'
import Popup from "reactjs-popup";
import pic from './pencil.png';


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
    const x = -5
    const y = 15
    const styles = {
      container: {
        marginBottom: 10,
        padding: 10,
        // height: 300,
        width:500
      },
      container2: {
        marginBottom: 10,
        padding: 10,
        height: 300,
        borderRadius: 50,
        width:500
      },
      form: {
        display: 'flex',
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

      img: {
        float: 'left',
        textAlign: 'center',
        display: 'inline-block',
      },

      imgee: {
        transform: `translate(${x}px, ${y}px)`,
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

    if (this.props.currentUser.id === 'Bridgit_session244pm__')
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
      <Popup trigger={<h1 onClick={this.handleClick} style={styles.button} className='myButton'> <img className='pictureTwo noselect' src={pic} style={styles.img}></img><p style={styles.imgee}>write post</p></h1>} modal position="right center">
      <div style={styles.container}>
        <div >
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



