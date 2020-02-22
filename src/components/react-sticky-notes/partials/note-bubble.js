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
var myBub
const findNewBub = () => {
    var i
    // console.log(props.newBub)
    if (props.newBub.length > 0){
        for (i =0;i < props.newBub.length; i++){
            // console.log('there are bubbles in the list')
            if (typeof props.newBub[i] !== 'undefined'){
                if (props.newBub[i].od === props.data.od) {
                    // console.log('there are matches ' +props.newBub[i].id + ' '+ props.newBub[i].id)
                    myBub = props.newBub[i]
                }
                // else{
                //     console.log('else is happening')
                //     myBub = props.data
                // }
            }
        }
    }
    else {
        // console.log('else is happening')
        myBub = props.data
    }
}
findNewBub()


var findit =document.getElementById(myBub['label']);
// console.log(myBub)
let word_With_Numbers = props.data.od
let word_Without_Numbers = word_With_Numbers.replace(/\D/g, '');
var myRand = word_Without_Numbers[0]


// console.log(props.newBub)
// console.log(myBub)
// console.log(props.posX)
// console.log(dropPositions)
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
const findX = (idValue) => {
    // console.log(myBub)
if (typeof myBub.label !== 'undefined' && myBub.label.length > 0){
// console.log(findit)
    if (findit !== null) {
        // console.log((findit.getBoundingClientRect().left -30)+ (myRand/.75))
        if (typeof mapEl !== 'undefined' && typeof self !== 'undefined'){
        mapEl.appendChild(self)}
        return ((findit.getBoundingClientRect().left -30)+ (myRand/.75))
    }
}
else {
        return 100
        }
}  

const findY = () => {
    if (typeof myBub.label !== 'undefined' && myBub.label.length > 1){
        if (findit !== null) {
            return (findit.getBoundingClientRect().top + (myRand/.75))
        }
}
    else {

            var myEl = document.getElementsByClassName(`${props.prefix}--full-note-${props.data.od}`)[0]
            return -10
    }
}

    useEffect(() => 
    // (observe(newPos => {arrayAdd(newPos)}),
    // observeTwo(newDrop => {
    //     (setHasDropped(newDrop), newArrayIndex(newDrop))
    //     })
    //     ,observeFour(newPos => {arrayAddTwo(newPos)} )),
        {findX(),findY()}, [arrayIndex])


//     const newArrayIndex = (newDrop) => {
//         if (newDrop !== hasDropped) {
//             setArrayIndex(arrayIndex + 1)
//         }
//         else if (newDrop == hasDropped) {
//         }
//     }
//         const arrayAdd = (newPos) => {
//                 if (!knightPos.includes(newPos)) {
//                     setKnightPos([...knightPos, newPos])

//                 }

//             }
// // console.log(knightPos)
//         const arrayAddTwo = (newPos) => {
//             const knightPosVersion = knightPos[knightPos.length-1]
//             // console.log(dropPositions)
//             // console.log(dropPositions)
//                 if (newPos in dropPositions) {
//                     // console.log('if ' +knightPos)
//                 const updateFieldChanged = newPos => {
//                     let newArr = dropPositions
//                     newArr[newPos] = {positionXY: knightPosVersion}
//                     setDropPositions(newArr)
//                     }
//                 updateFieldChanged(newPos, knightPosVersion)

//                 }
//                 else {
//                     var newID = newPos
//                     setDropPositions({...dropPositions,  [newID]:
//                         {positionXY: knightPosVersion}
//                       })

//                 }
//             }
var ElLeft
var ElTop
var myEl = document.getElementsByClassName(`${props.prefix}--full-note-${props.data.od}`)[0]
var mapEl = document.getElementsByClassName('bigSpace')[0]
var self = document.getElementsByClassName(`${props.prefix}--note-${props.data.od}`)[0]
if (typeof myEl !== 'undefined'){
ElTop = parseFloat(myEl.style.top)
ElLeft = parseFloat(myEl.style.left)
// console.log(self)
// console.log(mapEl)

        }      
    

    const colorSetting =(idValue) => {
        const myObj = dropPositions
        const theMatch = `${props.prefix}--note-${idValue}`
        const location = Object.keys(myObj).indexOf(theMatch)
        
        if (typeof myBub.label !== 'undefined' && myBub.label.length > 1) {    
            if (typeof knightPos[0] !== 'undefined' && knightPos.length > 0){
                const knightPosVersion = knightPos[0][2]
                // console.log(knightPosVersion)
        if (myBub.label===knightPos[0][2]) {
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
                className: (typeof myBub.label !== 'undefined' && myBub.label.length > 1) ?
                `${myBub.od} dropped${myBub.od} ${props.prefix}--note-${props.data.od} ${myBub.selected?props.prefix+'--note__selected':'' } ${myBub.od}`:
                `${myBub.od} ${props.prefix}--note-${myBub.od} ${myBub.selected?props.prefix+'--note__selected':'' } ${myBub.od}`,
                position: myBub.position,
                selected: myBub.selected,
                target: drag,
                onChange: (findX(), findY()),
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
                className: `${myBub.od} ${props.prefix}--note__bubble `,
                onMouseEnter: () => (props.settingLine(props.data.od)),
                ref: drag,
                title: myBub.title?myBub.title: getNoteTitle(props.data),
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

