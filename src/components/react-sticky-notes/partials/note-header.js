import { h, getElementStyle } from './../utils';
function NoteHeader(props) {
    // console.log(props.removeTodo)
    return h('div',{
        className: `${props.prefix}`,
        style: getElementStyle('note-header',{data: props.data})
    }, 
        props.buttons?props.buttons.map((Button,i)=> 
            h(Button, { 
                key: `${props.prefix}${props.data?props.data.id:'all'}__note-button__${i}`,
                removeTodo: props.removeTodo,
                ...props 
            })
        ):null
    );
}
export default NoteHeader;
