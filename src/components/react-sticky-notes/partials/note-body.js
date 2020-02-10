import { h, getElementStyle } from './../utils';
import React, { useState, useEffect } from 'react';
import NoteText from './note-text';
import NoteMenu from './note-menu';

export default function NoteBody(props) {
    // const increase= (incId)=> {
    //     if (incId !== '') {
    //     console.log('increasing')
    //     setShowIncreaced(incId);
    //     console.log(showIncreaced)
    //   }}
    // const getImgStyle= (id) =>{
    //     return showIncreaced === id ? '10' : '0'
    //   }
    const { data, prefix, callbacks } = props;
    const [showIncreaced, setShowIncreaced] = useState(null)
    return h('div',{
        className:`${prefix}--note__body`,
        // onClick: (e)=>(newClick(data.id)),
        style: {
            width: props.viewSize==="pageview"||props.viewSize==="fullscreen"?"100%":props.noteWidth,
            height : props.viewSize==="pageview"||props.viewSize==="fullscreen"?"100%":props.noteHeight,
            backgroundColor: props.data.color,
            overflow : "auto",
            minWidth :props.data.selected? props.noteWidth: null,
            resize: props.data.selected? "both": null,
        }
        
        
        // (getElementStyle('note-body', props)
        // ,{zIndex: getImgStyle(data.id)}
        // )
        // style: (getElementStyle('note-input'))
    },
        data.menu?
            h(NoteMenu, { 
                key: 'note-menu', 
                ...props
            }):
            h(NoteText, { 
                onChange: props.onChange,
                onSubmit: props.onSubmit,
                notesy: props.notesy,
                items: props.items,
                currentUser:props.currentUser,
                key: 'note-text',
                onFocus:props.onFocus,
                ...props
            })
    )
}
