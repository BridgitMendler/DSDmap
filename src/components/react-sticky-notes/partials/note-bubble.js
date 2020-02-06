import React, { useState, useEffect } from "react";
import { h, getElementStyle, getNoteTitle } from './../utils';
import "./note-bubble.scss";
import { DragPreviewImage, useDrag, dragSource } from "react-dnd";
import ItemTypes from "./../../../ItemTypes";
import NoteDraggable from './note-draggable';
import { observe, moveKnight, observeTwo, newDropped, observeFour} from "../../Game";
import red from '../../../components/red2.png'
import green from '../../../components/green2.png'
import yellow from '../../../components/yellow2.png'

export const NoteBubble = (props) => {
    const [dropPositions, setDropPositions] = useState([])
    const [knightPos, setKnightPos] = useState([]);
    const [arrayIndex, setArrayIndex] = useState(0)
    const [eveID, setEveID] = useState()
    this.targetRef = React.createRef();
    const [myArrayPos, setMyArrayPos] = useState([]);
    const [myArray] = useState(props.myArray);
    var e = window.event;
    var w = window;
    const [{ isDragging, didDrop, item }, drag, end, preview] = useDrag({
        item: { type: ItemTypes.stickyMini, id:e},
        collect: monitor => ({
          item: monitor.getItem(),
          isDragging: !!monitor.isDragging(),
          didDrop: (!!monitor.didDrop()
          )
        })   
      })
    const [hasDropped, setHasDropped] = useState(false)
    var e = window.event
    var myIDs = []

var findit =document.getElementById(props.data['label']);
let word_With_Numbers = props.data.od
let word_Without_Numbers = word_With_Numbers.replace(/\D/g, '');
var myRand = word_Without_Numbers[0]
// console.log(myRand)
var myElementTop = () => {
var myEl = document.getElementsByClassName(`${props.prefix}--full-note-${props.data.od}`)[0]
if ( typeof myEl !== 'undefined') {
    myEl = myEl.style.top
    myEl = parseFloat(myEl.replace(/\D/g, ''))
    // console.log(myEl, myEl + 110)
    return myEl + 510
}}

// myElementTop()
const mouseEventFind = () => {
if (typeof window.event !== 'undefined') {
    if (window.event.type === 'dragstart'){
        const evID = window.event.target.parentElement.classList[0]
// console.log(evID)
newDropped(evID)
}


}

}
mouseEventFind()

    useEffect(() => 
    (observe(newPos => {arrayAdd(newPos)}),
    observeTwo(newDrop => {
        (setHasDropped(newDrop), newArrayIndex(newDrop))
        })
        ,observeFour(newPos => {arrayAddTwo(newPos)} )), [arrayIndex])


    const newArrayIndex = (newDrop) => {
        if (newDrop !== hasDropped) {
            setArrayIndex(arrayIndex + 1)
        }
        else if (newDrop == hasDropped) {
        }
    }
        const arrayAdd = (newPos) => {
                if (!knightPos.includes(newPos)) {
                    setKnightPos([...knightPos, newPos])

                }

            }
// console.log(knightPos)
        const arrayAddTwo = (newPos) => {
            const knightPosVersion = knightPos[knightPos.length-1]
            // console.log(dropPositions)
            // console.log(dropPositions)
                if (newPos in dropPositions) {
                    // console.log('if ' +knightPos)
                const updateFieldChanged = newPos => {
                    let newArr = dropPositions
                    newArr[newPos] = {positionXY: knightPosVersion}
                    setDropPositions(newArr)
                    }
                updateFieldChanged(newPos, knightPosVersion)

                }
                else {
                    var newID = newPos
                    setDropPositions({...dropPositions,  [newID]:
                        {positionXY: knightPosVersion}
                      })

                }
            }

    const findX = (idValue) => {
if (typeof props.data.label !== 'undefined' && props.data.label.length > 1){
        if (findit !== null) {
            // console.log(myRand)
            return ((findit.getBoundingClientRect().left -30)+ (myRand/.75))
        }
    }
    else {
            var myEl = document.getElementsByClassName(`${props.prefix}--full-note-${props.data.od}`)[0]
            if ( typeof myEl !== 'undefined') {
                myEl = myEl.style.left
                myEl = parseFloat(myEl)
                return ((myEl+100))
            }
    }        
    }

    const colorSetting =(idValue) => {
        const myObj = dropPositions
        const theMatch = `${props.prefix}--note-${idValue}`
        const location = Object.keys(myObj).indexOf(theMatch)
        
        if (typeof props.data.label !== 'undefined' && props.data.label.length > 1) {    
            if (typeof knightPos[0] !== 'undefined' && knightPos.length > 0){
                const knightPosVersion = knightPos[0][2]
                // console.log(knightPosVersion)
        if (props.data.label===knightPos[0][2]) {
            // console.log('match!')
            return 'tomato'
        }
else {
    return 'grey'
}
}
else {
    return 'grey'
}
}}




    const findY = () => {

        if (typeof props.data.label !== 'undefined' && props.data.label.length > 1){
            if (findit !== null) {
                // console.log(findit.getBoundingClientRect())
                return (findit.getBoundingClientRect().top + (myRand/.75))
            }
        }

//         const myObj = dropPositions
//         const theMatch = `${props.prefix}--note-${idValue}`
//         const location = Object.keys(myObj).indexOf(theMatch)
//         if (location > -1) {
            
//             if (typeof dropPositions[theMatch]['positionXY'] !== 'undefined'){
//             return (dropPositions[theMatch]['positionXY'][1])
//         }
//     }
//     else {
//         var propsKeys =Object.keys(props.myArrayPos)
//         if (props.myArrayPos.length !== 0){
//             // console.log(propsKeys.length)
//         var i
//         for (i = 0; i <propsKeys.length; i++){
//             // console.log(idValue)
//             if (propsKeys[i]=== idValue){
      
//         return(props.myArrayPos[idValue][1]+110)
//     }
// }
// }
        else {

                var myEl = document.getElementsByClassName(`${props.prefix}--full-note-${props.data.od}`)[0]
                if ( typeof myEl !== 'undefined') {
                    myEl = myEl.style.top
                    myEl = parseFloat(myEl)
                    // console.log(myEl)
                    return myEl + 90
                }
        }
    }
const setThatLine=(dataID)=> {
props.settingLine(dataID)
}
// var myObj2 = []
// const findNewDrop = () => {
//     var i
//     if (typeof props.data.label !== 'undefined'){
//     console.log(props.data.label.length)}
//     for (i=0; i < props.data.length; i++){
//         console.log(props.data[i])
//     }
// }
// findNewDrop()
// const myObj = dropPositions
// const theMatch = `${props.prefix}--note-${props.data.id}`
// const location = Object.keys(myObj).indexOf(theMatch)
// console.log(dropPositions)
// console.log(props.data.color)

const whichColor = (val) => {
 if (val === '#BC8276'){
     return red
 }
 else if (val === '#FAE3B6'){
     return yellow
 }
 else {
     return  green
 }
}
    return h(NoteDraggable, {
                className: (typeof props.data.label !== 'undefined' && props.data.label.length > 1) ?`${props.data.od} dropped${props.data.od} ${props.prefix}--note-${props.data.od} ${props.data.selected?props.prefix+'--note__selected':'' } ${props.data.od}`:
                `${props.data.od} ${props.prefix}--note-${props.data.od} ${props.data.selected?props.prefix+'--note__selected':'' } ${props.data.od}`,
                position: props.data.position,
                selected: props.data.selected,
                target: drag,
                // ref: drag,
                style: {
                position: 'absolute',
            //     left: props.viewSize==="pageview"||props.viewSize==="fullscreen"?0:props.data.position?`${props.data.position.x}px`:0,
            //     top: props.viewSize==="pageview"||props.viewSize==="fullscreen"?0:props.data.position?`${props.data.position.y - props.scrollScreen}px`:0,
            //     width: props.viewSize==="pageview"||props.viewSize==="fullscreen"?"100%":null,
            //     height: props.viewSize==="pageview"||props.viewSize==="fullscreen"?"100%":null,
            //     zIndex: props.data.selected ? 1: null
            // }
                    // position: 'relative',
                    left: findX(),
                    top: findY(),
                    width: '30px',
                    height: '30px',
                    textAlign: 'center',
                    // zIndex:10
                }
            }, 
            h('button',{
                className: `${props.data.od} ${props.prefix}--note__bubble `,
                onMouseEnter: () => (props.settingLine(props.data.od)),
                ref: drag,
                title: props.data.title?props.data.title: getNoteTitle(props.data),
                // onClick: (pos)=> (props.callbacks.updateItem(null, {id: props.data.id, position:pos, hidden: false })),
                style: {
                    // pointerEvents : isDragging ? 'none': 'auto',
                    opacity: (props.visible === true) ? 1 : 0,
                    background: 'transparent',
                    border: 'none !important',
                    width: '18px',
                    height: '20px',
                    borderRadius: '100%',
                    // backgroundColor: 'none',
                    // color: 'none',
                    // boxShadow: '1px 1px 2px rgba(0,0,0,.15)',
                    // zIndex: -5
                }

            },
            h('img', {
                src: whichColor(props.data.color),
                width: '18px',
                height: '20px'
            })
            )
        )
    }




//         import React from 'react';
// import { h, getElementStyle, getNoteTitle } from './../utils';
// import "./note-bubble.scss";
// import NoteDraggable from './note-draggable';
// export default class NoteBubble extends React.Component{
//     constructor(props){
//         super(props);
//         this.targetRef = React.createRef();
//     }
//     render(){
//         const props = this.props;
//         return h(NoteDraggable, {
//                 className:`${props.prefix}--note-${props.data.id} ${props.data.selected?props.prefix+'--note__selected':''}`,
//                 position: props.data.position,
//                 selected: props.data.selected,
//                 target: this.targetRef,
//                 // onDragComplete:(pos)=> props.callbacks.updateItem(null, {id: props.data.id, position:pos }),
//                 style : {
//                     position: 'absolute',
//                     left: props.viewSize==="pageview"||props.viewSize==="fullscreen"?0:props.data.position?`${props.data.position.x}px`:0,
//                     top: props.viewSize==="pageview"||props.viewSize==="fullscreen"?0:props.data.position?`${props.data.position.y - props.scrollScreen}px`:0,
//                     // width: props.viewSize==="pageview"||props.viewSize==="fullscreen"?"100%":null,
//                     // height: props.viewSize==="pageview"||props.viewSize==="fullscreen"?"100%":null,
//                     zIndex: props.data.selected ? 1: null
//                 }
            
//             }, 
//             h('button',{
//                 className: `${props.prefix}--note__bubble`,
//                 ref: this.targetRef,
//                 title: props.data.title?props.data.title: getNoteTitle(props.data),
//                 onClick: ()=> props.callbacks.updateItem(null, {id: props.data.id, hidden: false }),
//                 style: {
//                     "--background-color": props.data.color,
//                     width: '15px',
//                     height: '15px',
//                     borderRadius: '100%',
//                     backgroundColor: props.data.color,
//                     boxShadow: '1px 1px 2px rgba(0,0,0,.15)'
//                 }

//             })
//         )
//     }
// }

