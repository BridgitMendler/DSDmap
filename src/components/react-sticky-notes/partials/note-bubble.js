import React, { useState, useEffect } from "react";
import { h, getElementStyle, getNoteTitle } from './../utils';
import "./note-bubble.scss";
import { DragPreviewImage, useDrag, dragSource } from "react-dnd";
import ItemTypes from "./../../../ItemTypes";
import NoteDraggable from './note-draggable';
import { observe, moveKnight, observeTwo, newDropped, observeFour} from "../../Game";

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

// myElementLeft()

var myElementTop = () => {
var myEl = document.getElementsByClassName(`${props.prefix}--full-note-${props.data.id}`)[0]
if ( typeof myEl !== 'undefined') {
    myEl = myEl.style.top
    myEl = parseFloat(myEl.replace(/\D/g, ''))
    console.log(myEl, myEl + 110)
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
                    // console.log('else ' +knightPos)
                    var newID = newPos
                    setDropPositions({...dropPositions,  [newID]:
                        {positionXY: knightPosVersion}
                      })

                }
            }
            // console.log(dropPositions)

                // console.log(props.myArrayPos)
                // console.log('after ' +knightPos)
//                 }
// console.log(dropPositions[`${props.prefix}--note-${props.data.id}`]['positionXY'])
    const findX = (idValue) => {
        // console.log(idValue)

 
        
// console.log(findit)
    //     const myObj = dropPositions
    //     const theMatch = `${props.prefix}--note-${idValue}`
    //     const location = Object.keys(myObj).indexOf(theMatch)
    //     console.log(myObj)
    //     if (location > -1) {
    //         if (typeof dropPositions[theMatch]['positionXY'] !== 'undefined'){
    //         return (dropPositions[theMatch]['positionXY'][0]-15)
    //     }
    // }
    //     else {
    //         var propsKeys =Object.keys(props.myArrayPos)
    //         if (props.myArrayPos.length !== 0){
    //             // console.log(propsKeys.length)
    //         var i
    //         for (i = 0; i <propsKeys.length; i++){
    //             // console.log(idValue)
    //             if (propsKeys[i]=== idValue){
          
    //         return(props.myArrayPos[idValue][0]+30)
    //     }
    // }
    // }
    // else {
            var myEl = document.getElementsByClassName(`${props.prefix}--full-note-${props.data.id}`)[0]
            if ( typeof myEl !== 'undefined') {
                myEl = myEl.style.left
                myEl = parseFloat(myEl)
                // console.log(((myEl)*.75) +30)
                return ((myEl))
            }
        // return (props.data.position.x+30)
    }        

    // }

    // console.log(props.visible)

    const colorSetting =(idValue) => {
        const myObj = dropPositions
        const theMatch = `${props.prefix}--note-${idValue}`
        const location = Object.keys(myObj).indexOf(theMatch)
        
        if (location > -1) {    
            if (typeof dropPositions[theMatch]['positionXY'] !== 'undefined'){
                const myLabel = dropPositions[theMatch]['positionXY'][2]
                const knightPosVersion = knightPos[knightPos.length-1][2]
                // console.log(myLabel, knightPosVersion)
        if (myLabel===knightPosVersion) {
            // console.log('match!')
            return 'tomato'
        }
        else {
            // console.log(myLabel, knightPosVersion)
            return 'grey'
        }
    }
    else {
        return 'grey'
    }
}
else {
    return 'grey'
}
}

    const findY = (idValue) => {
        const myObj = dropPositions
        const theMatch = `${props.prefix}--note-${idValue}`
        const location = Object.keys(myObj).indexOf(theMatch)
        if (location > -1) {
            
            if (typeof dropPositions[theMatch]['positionXY'] !== 'undefined'){
            return (dropPositions[theMatch]['positionXY'][1])
        }
    }
    else {
        var propsKeys =Object.keys(props.myArrayPos)
        if (props.myArrayPos.length !== 0){
            // console.log(propsKeys.length)
        var i
        for (i = 0; i <propsKeys.length; i++){
            // console.log(idValue)
            if (propsKeys[i]=== idValue){
      
        return(props.myArrayPos[idValue][1]+110)
    }
}
}
        else {

                var myEl = document.getElementsByClassName(`${props.prefix}--full-note-${props.data.id}`)[0]
                if ( typeof myEl !== 'undefined') {
                    myEl = myEl.style.top
                    myEl = parseFloat(myEl)
                    // console.log(myEl)
                    return myEl + 110
                }
            // return ((myElementTop())+110)
        }
    }}
const setThatLine=(dataID)=> {
props.settingLine(dataID)
}

const myObj = dropPositions
const theMatch = `${props.prefix}--note-${props.data.id}`
const location = Object.keys(myObj).indexOf(theMatch)
// if (location > -1) {

    return h(NoteDraggable, {
                className: (location > -1) ?`${props.data.id} dropped${props.data.id} ${props.prefix}--note-${props.data.id} ${props.data.selected?props.prefix+'--note__selected':'' } ${props.data.id}`:
                `${props.data.id} ${props.prefix}--note-${props.data.id} ${props.data.selected?props.prefix+'--note__selected':'' } ${props.data.id}`,
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
                    left: parseFloat(props.data.x),
                    top: parseFloat(props.data.y),
                    width: '30px',
                    height: '30px',
                    textAlign: 'center',
                    // zIndex:10
                }
            }, 
            h('button',{
                className: `${props.data.id} ${props.prefix}--note__bubble `,
                onMouseEnter: () => (props.settingLine(props.data.id)),
                ref: drag,
                title: props.data.title?props.data.title: getNoteTitle(props.data),
                // onClick: (pos)=> (props.callbacks.updateItem(null, {id: props.data.id, position:pos, hidden: false })),
                style: {
                    // pointerEvents : isDragging ? 'none': 'auto',
                    opacity: (props.visible === true) ? 1 : 0,
                    width: '10px',
                    height: '10px',
                    // borderRadius: '100%',
                    backgroundColor: colorSetting(props.data.id),
                    boxShadow: '1px 1px 2px rgba(0,0,0,.15)',
                    // zIndex: -5
                }

            })
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

