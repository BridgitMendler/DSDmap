import { h, getElementStyle } from './../utils';
function NoteHeader(props) {
    // console.log(props)
    return h('div',{
        className: `${props.prefix}`,
        style: getElementStyle('note-header',{data: props.data})
    }, 
        props.buttons?props.buttons.map((Button,i)=> 
            h(Button, { 
                // onClick:(e)=>(console.log('hi')),
                key: `${props.prefix}${props.data?props.data.od:'all'}__note-button__${i}`,
                removeTodo: props.removeTodo,
                ...props 
            })
        ):null
    );
}
export default NoteHeader;

