import React, { Component } from 'react'
import { randomColor } from './randomColor';
import ReactTooltip from 'react-tooltip'

// export function getColorCodes(){
//   const codes = [];
//   for(let i=0;i<360;i+=18){
//       codes.push(`hsl(${i},50%, 50%)`);
//   }
//   return codes;
// };



class WhosOnlineList extends Component {
  renderUsers() {
    return (
      <ul>
        {this.props.users.map((user, index) => {
          if (typeof this.props.currentUser !== 'undefined'){
            // console.log(user.id, this.props.currentUser.id)
          if (user.id === this.props.currentUser.id) {
            return (
              <WhosOnlineListItem key={index} presenceState="online">
                {user.username} {index}
              </WhosOnlineListItem>
            )
          }
          else if (user.presence.state === 'online'){
          // console.log(user)
          return (
            <WhosOnlineListItem key={index} presenceState={user.presence.state}>
              {user.username} {index}
            </WhosOnlineListItem>
          )
  }}})}
      </ul>
    )
  }

  render() {
    // if (typeof this.props.users !== 'undefined'){
    // console.log(this.props.users.presence)}
    if (this.props.users) {
      return this.renderUsers()
    } else {
      return <p>Loading...</p>
    }
  }
}


// var currentUser2
// var users2 = []
// const findDupsArr = () => {
//   var newArray = this.state.currentRoom.users
//   var newArray2 = []
//   var i
//   if (typeof newArray !== 'undefined'){
//   for (i = 0; i< newArray.length; i++) {
//     console.log(newArray[i])
//     var newText = newArray[i].id.split(/[_,]+/);

//     newArray[i]['username'] = newText[0] 
//     newArray[i]['status'] = newText[3]
//     newArray[i]['consent']= newText[2]
//     newArray[i]['password'] = newText[1]
//   }
//   users2 = newArray
// }}
// findDupsArr()
// console.log(users2)
class WhosOnlineListItem extends Component {

  constructor(props) {
    super(props);
      this.state = {
        bgColor: [
          '#F7E3BB',
          '#B48479',
          '#8DA08C',
          '#CBCFD9',
          '#A0A7B7'
        ],
        selectedColor: '',
      };
    }

  componentDidMount() {
    this._getRandomColor()
  }
  
  _getRandomColor(){
    var item = this.state.bgColor[Math.floor(Math.random()*this.state.bgColor.length)];
    this.setState({
      selectedColor: item,
    })
  }

  render() {
   
    const styles = {
      li: {
        display: 'inline-block',
        float: 'left',
        marginTop: 25,
        marginBottom: 5,
        paddingTop: 2,
        paddingBottom: 2,
      },
      div: {
        borderRadius: '150%',
        width: 27,
        height: 27,
        marginRight: -5,

        
      },
      cats: {
        fontFamily: 'sans-serif',
        fontSize: '20px',
        textAlign: "center",
        color: 'grey',
        paddingLeft: 0,
      }
    }
    const name = this.props.children[2].toString()
    const fullname = this.props.children[0]


    
    return (
      <li style={styles.li}>
        <div className="theUsers" data-tip data-for={name}
          style={{
            ...styles.div,
            backgroundColor: this.state.selectedColor,
  }}>
    <p style={{...styles.cats}}>{fullname[0]}</p>

            </div>
            <ReactTooltip id={name}type='error'>
  <span>{this.props.children[0]}</span>
</ReactTooltip>

      </li>
    )
  }
}

export default WhosOnlineList

