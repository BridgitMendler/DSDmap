import React, { Component } from 'react'
import pic from './thankYou.png';

class UsernameForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: '',
      status: '',
      consent: '',
    }
    this.onSubmit = this.onSubmit.bind(this)
    this.onChange = this.onChange.bind(this)
    this.onChange2 = this.onChange2.bind(this)
    this.onChange3 = this.onChange3.bind(this)
    this.onChange4 = this.onChange4.bind(this)
  }


 onSubmit(e) {
    e.preventDefault()
    console.log(this.state.username)
    this.props.onSubmit(`${this.state.username}`+`_${this.state.password}`+`_${this.state.status}`+`_${this.state.consent}`)
  }

  onChange(e) {
    this.setState({ username: e.target.value })
  }

  onChange2(e) {
// console.log()

      // console.log(this.state.password)
    this.setState({ password: e.target.value })
  }

  onChange3(e) {
    this.setState({ consent: e.target.value })
  }

  onChange4(e) {
    this.setState({ status: e.target.value })
  }



  render() {
    // console.log(this.state)
    const styles = {


      container: {
        overflowY: 'scroll'
      },
    }    
    return (
      <div className='frontpage'>
        <div className='frontpage2' style={styles.container}>
          <h2 className='welcome'>Welcome!</h2>
          <h3 className='inputLabel3'>This activity will work best if you are on a desktop or laptop computer and you are using google chrome as your web browser</h3>
          <form onSubmit={this.onSubmit}>
{/*             
            <label for='last' className='inputLabel'>LAST NAME</label>
              <input
              className='inputField'
              type="text"
              placeholder=""
              // onChange={this.onChange}
              name='last'
            /> */}
          {/* <label for='role' className='inputLabel'>ROLE(S) IN COMPANY</label>
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
            /> */}
{/* <h3 className='inputLabel3' for="cars">CONSENT TO PARTICIPATE IN NON-BIOMEDICAL RESEARCH</h3><h3 className='inputLabel3'> */}

{/* 

</h3><h3 className='inputLabel3'> Online Collaborative Design Workshop</h3>



<h3 className='inputLabel3'>You have been asked to participate in a research study conducted by Bridgit Mendler
and Deb Roy, PhD, from the Laboratory for Social Machines within the Media Lab at the Massachusetts Institute 
of Technology (M.I.T.) Results will contribute to the thesis work of Bridgit Mendler.


<h3 className='inputLabel3'>
The information below provides a summary of the research. Your participation in this research is voluntary and you can withdraw 
at any time.</h3>
<h3 className='inputLabel3'>
·      Purpose
</h3>
<h3 className='inputLabel3'>
To identify if visual elements used in offline design workshops can translate to a virtual space, and if such visual elements help a group to 
evaluate a formal process.
</h3>
<h3 className='inputLabel3'>
·      Study Procedures
</h3>
<h3 className='inputLabel3'>
Inspired by the visual methods used in offline design workshops, participants use virtual "stickies" to respond to a series of questions. 
The questions are centered around a hypothetical scenario in which participants are tasked to redesign an existing system. Participants 
are asked to visit the webpage during two separate windows of time and contribute their answers before finally 
filling out a closing survey.
</h3>
<h3 className='inputLabel3'>
·      Risks & Potential Discomfort
</h3>
<h3 className='inputLabel3'>
It is possible that a participant may share opinions or ideas that another participant may disagree with. There will be facilitation to
oversee the discussion and help ease tension.

 
</h3>
<h3 className='inputLabel3'>
You should read the information below, and ask questions about anything you do not understand before deciding 
whether or not to participate.
</h3>
 

 
<h3 className='inputLabel3'>
    PARTICIPATION AND WITHDRAWAL

</h3>
<h3 className='inputLabel3'>
Your participation in this study is completely voluntary and you are free to choose whether to be in it or not. 
If you choose to be in this study, you may subsequently withdraw from it at any time without penalty or consequences of any kind. 
The investigator may withdraw you from this research if circumstances arise. 
</h3>
 
<h3 className='inputLabel3'>
    PURPOSE OF THE STUDY

 
</h3>
The purpose of this study is to understand how visual elements used in offline design workshops can translate to a virtual space, 
and if such visual elements help a group to evaluate a formal process.

<h3 className='inputLabel3'>

 

    PROCEDURES

</h3>
<h3 className='inputLabel3'>
If you volunteer to participate in this study, we would ask you to do the following things:
</h3>
 
<h3 className='inputLabel3'>
I.      
Join the online workshop during the first half hour window and respond to a series of questions designed to generate 
ideas about how to improve a formal process.
</h3>
<h3 className='inputLabel3'>
II.    
Join the online workshop during the second half hour window and respond to a second series of questions designed to generate 
ideas about how to improve a formal process. In the unlikely event that responses to questions contain any identifying information, 
that content will be removed and no answers to questions will be distributed beyond the research team. By choosing "I consent" 
below, you consent to this collection of answers to questions:</h3>
</h3>
<select id="cars" value={this.state.consent} onChange={this.onChange3}>
  <option value="I consent">I consent</option>
  <option value="I do not consent">I do not consent</option>
</select>
            <br></br>
            <label for="cars" className='inputLabel10'>What role best describes you:</label>
<br></br>
            <select id="cars" value={this.state.status} onChange={this.onChange4}>
              <option value="student">student</option>
              <option value="faculty">faculty</option>
              <option value="staff">staff</option>
              <option value="facilitator">facilitator</option>
              <option value="other">other</option>
            </select> */}
            {/* <img className='picture' src={pic}></img> */}
            <label for='first' className='inputLabel2'>create a username</label><br></br>
            <input 
              className='inputField'
              type="text"
              placeholder=""
              onChange={this.onChange}
              name='first'
            /><br></br>
            {/* <h3 className='inputLabel3'>
The researcher will send you a password for your session right before the start of your timeslot
</h3> */}
            <label for='psw' className='inputLabel2'>password sent to you by session leader </label>
            <br></br>
              <input
              className='inputField'
              type="password"
              placeholder=""
              onChange={this.onChange2}
              name='psw'
            />
            <br></br>
            <input type="submit" />
          </form>
        </div>
      </div>
    )
  }
}

export default UsernameForm
