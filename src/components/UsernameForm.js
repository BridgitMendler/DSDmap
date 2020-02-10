import React, { Component } from 'react'
import pic from './thankYou.png';

class UsernameForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
    }
    this.onSubmit = this.onSubmit.bind(this)
    this.onChange = this.onChange.bind(this)
  }

  onSubmit(e) {
    e.preventDefault()
    this.props.onSubmit(this.state.username)
  }

  onChange(e) {
    this.setState({ username: e.target.value })
  }

  render() {
    return (
      <div className='frontpage'>
        <div className='frontpage2'>
          <h2 className='welcome'>Welcome!</h2>
          <body className='inputLabel3'>Thank you for taking part in this online workshop. 
          Below are some questions before you log in.</body>
          <body className='inputLabel'>FIRST NAME</body>
          <form onSubmit={this.onSubmit}>
            <input 
              className='inputField'
              type="text"
              placeholder=""
              onChange={this.onChange}
            /><body className='inputLabel'>LAST NAME</body>
              <input
              className='inputField'
              type="text"
              placeholder=""
              onChange={this.onChange}
            />
          </form>
          <body className='inputLabel'>ROLE(S) IN COMPANY</body>
          <form onSubmit={this.onSubmit}>
            <input
              className='inputField'
              type="text"
              placeholder=""
              onChange={this.onChange}
            /><body className='inputLabel'>TIME SPENT IN ROLE</body>
              <input
              className='inputField'
              type="text"
              placeholder=""
              onChange={this.onChange}
            />
            <img className='picture' src={pic}></img>
            <body className='inputLabel2'>password</body>
              <input
              className='inputField'
              type="password"
              placeholder=""
              onChange={this.onChange}
            />
            <input type="submit" />
          </form>
        </div>
      </div>
    )
  }
}

export default UsernameForm
