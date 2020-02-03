

import { h, getElementStyle } from './../utils';
import React, { useState, useEffect } from 'react';
import NavBar from './../navbar';
import NavBarTwo from './../navbar/notesIndex';
import NavBarThree from './../navbar/notesRed';
import Note from '../partials/note';
import {NoteBubble} from '../partials/note-bubble';
import LineTo from 'react-lineto';
import Switch from "react-switch";
import { DragPreviewImage, useDrag, useDrop } from "react-dnd";
import ItemTypes from "./../../../ItemTypes";
import { observe, moveKnight, observeTwo, newDelLog } from "../../Game";


export function NormalView(props){
    const [hidden, setHidden] = useState(props.hidden);
    const [knightPos, setKnightPos] = useState([[400, 300]]);
    const [arrayIndex, setArrayIndex] = useState(0)
    const [myArray] = useState(props.myArraypos);
    const [myArrayId] = useState(props.myArrayID);
    const [selectedLine, setSelectedLine] = useState();
    const [dontAdd, setDontAdd] = useState([])
    // const [myItems, setMyItems] = useState(myItemsTwo)
    const [iclicked, setIclicked] = useState(0)
    var e = window.event;
    var w = window;
    const [{ isDragging, didDrop, item }, drag, end, preview] = useDrag({
        item: { type: ItemTypes.stickyMini},
        drag(item, monitor) {
            const itemInfo = monitor.getItem()
            const isDragging = monitor.isDragging()

            var e = window.event
            if (isDragging) {
              return
            }
            // console.log(itemInfo.id.srcElement.offsetParent.classList[0])
        },
        collect: monitor => ({
        //   item: monitor.getItem(),
        //   isDragging: !!monitor.isDragging(),
          didDrop: !!monitor.didDrop()
          
        })
        
      })


      
     const settingLine = (value) =>{
        //  console.log('hi')
        const regexp = /note/
        var result = regexp.test(value)
        // console.log(result, value)
        if (result === false){
      setSelectedLine(value)
    //   console.log(selectedLine)
    }
    else {
        const newValue = value.replace('rs-notes--note-', '')
        // console.log(newValue)
        setSelectedLine(newValue)
        // console.log(selectedLine)

    }
}

const settingLineOut = (value) => {
    setSelectedLine(value)
}
// console.log(props.delNote)
var newArray = props.delNote
var newArIds = []
const delList = () => {
var i
for (i=0;i<props.delNote.length; i++){
    var newText = newArray[i].text.split(/[_,]+/);
    newArIds.push(newText[3])
}
// console.log(newArIds)
}
delList()
const myItemsTwo = props.newNotesy
var newNot = props.newNotesy.filter(obj => {

    // console.log(obj.id,)
    return (newArIds.indexOf(obj.id) < 0)
  })

var newBub = props.newBubble.filter(obj => {
    var i
    for (i = 0; i < newNot.length; i++){
    // console.log(Object.values(newNot[i]), obj.id)
    return (newArIds.indexOf(obj.id) < 0)
}
})

// var newBub2 = () => {

// var i
// console.log(findit)
// // for (i=0; i < findit.length; i++) {
//     // console.log(findit[i]['__data__'].id)
//     var j
//     for (j = 0; j< newBub.length; j++){
//         if (typeof newBub[j] !== 'undefined') {
//         // console.log(newBub[j])
//         var findit =document.getElementById(newBub[j]['label']);
//         console.log(findit)
// //         if (findit[i] === newBub[i].label) {
// // //  console.log(findit[i]['__data__'].id, newBub[i].label)
// //         newBub[i]['x'] = findit[i].getBoundingClientRect().x
// //         newBub[i]['y']= findit[i].getBoundingClientRect().y
// // console.log(findit[i].getBoundingClientRect().x)
// // }

// }}

// // }
// }
// newBub2()
console.log(newBub)
// console.log(newNot)
//         newArray[i]['id'] = newText[3]
//         newArray[i]['x'] = newText[1]
//         newArray[i]['y']= newText[2]
//         console.log(newText)
//      console.log(newArray)
// console.log(myItemsTwo.length)
// setTheArray(oldArray => [...oldArray, newElement]);
const removeTodo = () => {
    if (typeof window.event !== 'undefined'){

    if (window.event.type === 'click') {
        // const dontAdd = []
        // console.log('is click')
        if (window.event.target.innerText=== 'delete_outlined') {

            var myVariable = window.event.path[1].parentNode.parentNode.classList[2]
            // console.log(myVariable)
// console.log(Object.values(myItemsTwo)[1]).indexOf(myVariable)
            for (var i = 0; i<myItemsTwo.length; i++){
                // if (typeof myVariable !== 'undefined' && typeof myItemsTwo !== 'undefined') {
                if (Object.values(myItemsTwo[i]).indexOf(myVariable) > -1) {
                    if (myItemsTwo[i]['id'] !== 'undefined') {
                    newDelLog(myVariable)
                //     const removeNote= (name)=>{

                //         // return myItemsTwo.splice(name, 1)
                //     // }
                //     // removeNote(i);


                //  }
                }
            }}
// console.log(myItemsTwo)

        }
        // else {return myItemsTwo}
    }
    // else {return myItemsTwo}
}
// else {return myItemsTwo}
}

// var i = toRemove.length;
// while (i--) {
// newArray.splice(toRemove[i], 1);
// }
// console.log(dontAdd)
// var newMap = props.newNotesy
// const filtering = () => {

//     var i
//     // var j
//     for (i = 0; i< newMap.length; i++) {
//         // for (j = 0; j< props.items.length+1; j++)
//         var j = dontAdd.length
//         while (j--) {
//             if (typeof newMap[i] !== 'undefined') {
//                 if (newMap[i]['id'] === dontAdd[j]){
//                     // console.log('it matches')
//                     // newMap.splice(i,1)
//                 }
//         }
        
//         // console.log(props.newNotesy[i]['id'])
//         // else if (props.newNotesy[i]['id'] === dontAdd[j]){
//         //     console.log('it matches')
//         //     // newMap.splice(i,1)
//         // }s
//         // else {
//             // console.log(props.newNotesy[i]['id'], dontAdd[j])
//             // console.log (props.newNotesy[i]['id'] === dontAdd[j])
//         }
//     // }
// }}
//     filtering()
// console.log(props.items)
// console.log()
// console.log(newMap)
// console.log(props.newNotesy)
        // console.log
        


//     }

    const [hasDropped, setHasDropped] = useState(false)

    return [
        h(NavBar, { ...props, key: 'navbar' }),
        h(NavBarTwo, { ...props, key: 'green' }),
        h(NavBarThree, { ...props, key: 'red' }),
        h('div', {
            key: props.prefix, 
            className: props.prefix,
            style: getElementStyle('container', props),
            onClick: () => (removeTodo(), setIclicked(iclicked+1))
        }, 
            newNot.map( data => !data.hidden ? (h( Note, {items: props.items, notesy: props.notesy, onSubmit: props.onSubmit, onChange: props.onChange, removeTodo: props.removeTodo, convoBoxSize: props.convoBoxSize, hashtagDups: props.hashtagDups,allHashtags: props.allHashtags, myHashtags: props.myHashtags, handleScroll: props.onScroll, scrollVals: props.scrollVals, scrollScreen: props.scrollScreen, className: 'full-notey', key: `note-${data.id}`,...props, data } )):h( NoteBubble, { key: `note-${data.id}`,...props, data } ) )
        ),
        h('div', {
            key: `${props.prefix}-bubble`, 
            className: `${props.prefix}-bubble`,
            width: 30,
            height: 30,
            onMouseEnter: ()=> (settingLine(window.event.relatedTarget.classList[0])),
            onMouseOut: () => (settingLineOut(null)),


            // style: getElementStyle('container', props)
        }, 
            newBub.map( data => h( NoteBubble, {settingLine: settingLine, convoBoxSize: props.convoBoxSize, visible: props.visible, myArrayPos: props.myArrayPos, myArray: props.myArray, key: `note-${data.id}`,...props, data })
        )),
        h('div', {
            key: `${props.prefix}-line`, 
            className: `${props.prefix}-line`,
            style: getElementStyle('container', props)
        }, 
        h("span", null,
            newNot.map( data => props.hidden ? (props.visible === true)? (h( LineTo, { borderColor:'wheat',borderStyle: 'dashed', borderWidth: 1, from:`dropped${data.id}`, to:`rs-notes--full-note-${data.id}`, toAnchor: 'top right', key: `note-${data.id}`,...props, data } )):null: 
            h( LineTo, { opacity:(selectedLine===data.id)?1:0,borderColor: 'red', borderStyle: 'dashed', borderWidth: 1, from:`dropped${selectedLine}`, to:`rs-notes--full-note-${selectedLine}`, toAnchor: 'top right', key: `note-${data.id}`,...props, data } ))
        ),),
    ]
}
