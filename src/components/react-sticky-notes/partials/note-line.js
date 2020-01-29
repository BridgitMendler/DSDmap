import React from 'react';
import { h, getElementStyle, getNoteTitle } from './../utils';
import "./note-bubble.scss";
import NoteDraggable from './note-draggable';
import Note from '../partials/note';
import NoteBubble from '../partials/note-bubble';
import Line from 'react-lineto';
import LineTo from 'react-lineto';
export default class NoteLine extends React.Component{
    constructor(props){
        super(props);
        this.targetRef = React.createRef();
    }
    render(){
        const props = this.props;

        return (
        <svg height="210" width="500">
                <Line className='larry' x0={20} y0={10}
                      x1={20} y1={40} />
                <Line x0={5} y0={25}
                      x1={35} y1={25} />
                <Line x0={10} y0={15}
                      x1={30} y1={35} />
                <Line x0={30} y0={15}
                      x1={10} y1={35} />
            </svg>
        );

        }

    }

//         return   h('div',{
//             className:`sticky--line`,
//         }, h(Line, {
//             className: 'harry', 
//             x0:100, 
//             y0:100, 
//             x1:800, 
//             y1:800
//         })
//             // h('button',{
//             //     className: `${props.prefix}--note__bubble`,
//             //     ref: this.targetRef,
//             //     title: props.data.title?props.data.title: getNoteTitle(props.data),
//             //     onClick: ()=> props.callbacks.updateItem(null, {id: props.data.id, hidden: false }),
//             //     style: {
//             //         "--background-color": props.data.color,
//             //         width: '15px',
//             //         height: '15px',
//             //         borderRadius: '100%',
//             //         backgroundColor: props.data.color,
//             //         boxShadow: '1px 1px 2px rgba(0,0,0,.15)'
//             //     }

//             // })
//         )
//     }
        
// }
