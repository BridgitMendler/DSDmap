import { h, getElementStyle } from './../utils';
import ReactTooltip from 'react-tooltip'

function NoteHeader(props) {
    var name
    if (typeof props.data !== 'undefined'){
        name =props.data.senderId
    }
    // console.log(props.data)

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
          borderColor: 'white',
          width: 27,
          height: 27,
          marginRight: 5,
          marginTop:3,
        //   fill: 'grey'
  
          
        },
        cats: {
          fontFamily: 'sans-serif',
          fontSize: '20px',
          textAlign: "center",
          color: 'white',
          paddingLeft: 0,
        }
      }

    return h('div',{
        className: `${props.prefix}`,
        style: {
        backgroundColor:props.data?props.data.color:'',
        width: 115
    }
        // getElementStyle('note-header',{data: props.data})
    },       
        props.buttons?props.buttons.map((Button,i)=> 
            h(Button, { 
                // onClick:(e)=>(console.log('hi')),
                key: `${props.prefix}${props.data?props.data.od:'all'}__note-button__${i}`,
                removeTodo: props.removeTodo, scrollScreen: props.scrollScreen,
                ...props,
            })
        ):null,

        h("div", {
            "data-tip": true,
            "data-for": props.data?name:'',
            style: { ...styles.div,
              backgroundColor: props.data?props.data.color:'',
            //   backgroundBorderColor: 'white'
            }
          }, 
          h("p", {
            style: { ...styles.cats
            }
          }, props.data?props.data.noteLabel?props.data.noteLabel[0]:'':'')), 
          h(ReactTooltip, {
            id: name,
            type: "error"
          }, 
          h("span", null, props.data?props.data.noteLabel?props.data.noteLabel:'':'')),
    );
}
export default NoteHeader;