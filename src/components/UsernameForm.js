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
    // console.log(this.state.username)
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
          <h3 className='inputLabel3'>Thank you for taking part in this online workshop. 
          Below are some questions before you log in.</h3>
          <form onSubmit={this.onSubmit}>
          <label for='first' className='inputLabel'>FIRST NAME</label>
            <input 
              className='inputField'
              type="text"
              placeholder=""
              onChange={this.onChange}
              name='first'
            />
            
            <label for='last' className='inputLabel'>LAST NAME</label>
              <input
              className='inputField'
              type="text"
              placeholder=""
              // onChange={this.onChange}
              name='last'
            />
          <label for='role' className='inputLabel'>ROLE(S) IN COMPANY</label>
            <input
              className='inputField'
              type="text"
              placeholder=""
              // onChange={this.onChange}
              name='role'
            />
            <label for='time' className='inputLabel'>TIME SPENT IN ROLE</label>
              <input
              className='inputField'
              type="text"
              placeholder=""
              // onChange={this.onChange}
              name='time'
            />
            <img className='picture' src={pic}></img>
            <label for='psw' className='inputLabel2'>password</label>
              <input
              className='inputField'
              type="password"
              placeholder=""
              // onChange={this.onChange}
              name='psw'
            />
            <input type="submit" />
          </form>
        </div>
      </div>
    )
  }
}

export default UsernameForm
