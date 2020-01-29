import React from 'react';
import ReactDOM from 'react-dom';
import { h, getElementStyle } from '../utils';
import NoteDraggable from './note-draggable';
import NoteHeader from './note-header';
import NoteBody from './note-body';
import { ButtonAdd, ButtonTitle, ButtonMenu, ButtonAddDot, ButtonTrash } from './../buttons' ;
class NoteTwo extends React.Component{
    constructor(props){
        super(props);
        this.targetRef = React.createRef();
        this.handleScroll = this.handleScroll.bind(this)
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }


    handleScroll(event) {
        window.addEventListener('scroll', this.handleScroll);
        const source = ReactDOM.findDOMNode(this).getElementsByClassName('join')[0];
        const sourceTwo = ReactDOM.findDOMNode(this).getElementsByClassName('listyThree')[0];
            let scrollTop = sourceTwo.scrollTop,
                itemTranslate = Math.min(0, scrollTop/3 - 60);
        console.log(itemTranslate)
            };


    // onMove(e) {
    //     console.log(e)
    //     // this.props.onSubmit(('hi' + this.state.text))
    //     // this.setState({ text: '' })
    // }
    render(){
        const props = this.props;
        return h(NoteDraggable, {
                className:`${props.data.selected?'join':''}`,
                onScroll:this.handleScroll,
                selected: props.data.selected,
                target: this.targetRef,
                // onDragComplete:(pos)=> props.callbacks.updateItem(null, {id: props.data.id, position:pos, className:`'${props.data.selected}`}),
                style: getElementStyle('note', props, { boxShadow: '1px 1px 2px rgba(0,0,0,.15)' } )
            }, [
                h(NoteHeader, {
                    ...props,
                    key:'note-header',
                    targetRef: this.targetRef,
                    prefix: `${props.prefix}--header`,
                    buttons: [ButtonAdd, ButtonTitle, ButtonMenu, ButtonAddDot, ButtonTrash]
                }),
                h(NoteBody,{
                    key:'note-body',
                    ...props
                })
            ],


        )
    }
}
export default NoteTwo;
