import { h, nlToBr, getElementStyle, getCurrentDateTime } from './../utils';
import React, { useState, useEffect } from 'react';
function NoteText({ data, index, prefix, callbacks }, props) {

// console.log(callbacks)
    return h('div',{
        className:`${prefix}--text ${data.id}`,
        placeholder:"react-hooks",
        contentEditable:"true",
        onBlur:(e)=>callbacks.updateItem(index, {
            id:data.id,
            text: e.target.innerText
        }),
        onFocus:(e)=>(
        callbacks.updateItem(e, {id:data.id, selected:true, datetime: getCurrentDateTime() }), console.log(data.id, props)),
        dangerouslySetInnerHTML:{__html:nlToBr(data.text)},
        style: (getElementStyle('note-input'))
    })
}
export default NoteText;
