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
          if (user.id === this.props.currentUser.id) {
            return (
              <WhosOnlineListItem key={index} presenceState="online">
                {user.name} {index}
              </WhosOnlineListItem>
            )
          }
          return (
            <WhosOnlineListItem key={index} presenceState={user.presence.state}>
              {user.name} {index}
            </WhosOnlineListItem>
          )
        })}
      </ul>
    )
  }

  render() {
    if (this.props.users) {
      return this.renderUsers()
    } else {
      return <p>Loading...</p>
    }
  }
}

class WhosOnlineListItem extends Component {

  constructor(props) {
    super(props);
      this.state = {
        bgColor: [
          '#ECCC8E',
          '#5B7961',
          '#B87F75',
          '#65766E',
          '#646464',
          '#DEBD95',
          '#9FA7B8'
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
            // alignItems: 'center',
        float: 'right',
        marginTop: 5,
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
        color: '#864A5E',
        paddingLeft: 0,
      }
    }
    const name = this.props.children[2].toString()
    const fullname = this.props.children[0]
    // console.log(name)


    
    return (
      
/* <li style={styles.li}>
        <div
          style={{
            ...styles.div,
            backgroundColor:
              this.props.presenceState === 'online' ? '#539eff' : '#414756',
          }}
        />
        {this.props.children}
      </li>
 */





      <li style={styles.li}>
        <div data-tip data-for={name}
          style={{
            ...styles.div,
            backgroundColor: this.state.selectedColor,
              // width: this.props.presenceState === 'online' ? 51 :41,
              // height:this.props.presenceState === 'online' ? 51 :41,
  }}><p style={{...styles.cats}}>{fullname[0]}</p>

            </div>
            <ReactTooltip id={name}type='error'>
  <span>{this.props.children[0]}</span>
</ReactTooltip>

      </li>
    )
  }
}

export default WhosOnlineList

