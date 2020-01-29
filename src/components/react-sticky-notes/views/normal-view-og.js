import { h, getElementStyle } from './../utils';
import React from 'react';
import NavBar from '../navbar';
import Note from '../partials/note';
import NoteBubble from '../partials/note-bubble';
export function NormalView(props){
    
const { direction, children } = props;

 return React.Children.map(children, (child, index) => {
        if (React.isValidElement(child)) {
    return [
        h(NavBar, { ...props, key: 'navbar' }),
        h('div', {
            key: props.prefix, 
            className: props.prefix,
            style: getElementStyle('container', props)}),
    //       {React: React.cloneElement(child, {
    // direction,
    // itemIndex: index,
    //     })
    // }
]
}
})}

