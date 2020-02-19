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
    const styles = {


      container: {
        overflowY: 'scroll'
      },
    }    
    return (
      <div className='frontpage'>
        <div className='frontpage2' style={styles.container}>
          <h2 className='welcome'>Welcome!</h2>
          <h3 className='inputLabel3'>Thank you for taking part in this online workshop. 
          Below are some questions before you log in.</h3>
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
<h3 className='inputLabel3' for="cars">CONSENT TO PARTICIPATE IN NON-BIOMEDICAL RESEARCH</h3><h3 className='inputLabel3'>



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
Complete a survey intended to understand your personality traits with Google forms. It will ask if you see yourself 
as more introverted or extroverted. Further, it will ask about facilitation, management, and collaboration experience.
</h3>
<h3 className='inputLabel3'>
II.    
Join the online workshop during the second half hour window and respond to a second series of questions designed to generate 
ideas about how to improve a formal process. In the unlikely event that responses to questions contain any identifying information, 
that content will be removed and no answers to questions will be distributed beyond the research team. By choosing "I consent" 
below, you consent to this collection of answers to questions:</h3>
</h3>
<select id="cars">
  <option value="volvo">I consent</option>
  <option value="saab">I do not consent</option>
</select>
{/* <label for='first' className='inputLabel'>AFFILIATION WITH MIT</label>
            <input 
              className='inputField'
              type="text"
              placeholder=""
              onChange={this.onChange}
              name='first'
            /> */}
            <br></br>
            <label for="cars" className='inputLabel10'>What role best describes you:</label>
<br></br>
            <select id="cars">
              <option value="volvo">student</option>
              <option value="saab">faculty</option>
              <option value="opel">staff</option>
              <option value="opel">facilitator</option>
              <option value="audi">other</option>
            </select>
            <img className='picture' src={pic}></img>
            <label for='psw' className='inputLabel2'>password</label>
            <br></br>
              <input
              className='inputField'
              type="password"
              placeholder=""
              // onChange={this.onChange}
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
