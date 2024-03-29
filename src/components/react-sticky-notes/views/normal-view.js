

import { h, getElementStyle } from './../utils';
import React, { useState, useEffect } from 'react';
import NavBar from './../navbar';
import NavBarTwo from './../navbar/notesIndex';
import NavBarThree from './../navbar/notesRed';
import NavBarFour from './../navbar/notesBlue.js';
import Note from '../partials/note';
import {NoteBubble} from '../partials/note-bubble';
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
    const [dontAdd, setDontAdd] = useState([])
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
        },
        collect: monitor => ({
          didDrop: !!monitor.didDrop()
          
        })
        
      })
var newArray = props.delNote
var newArIds = []
const delList = () => {
    // console.log(newArray)
var i
for (i=0;i<newArray.length; i++){

    var newText = newArray[i].text.split(/[_]+/);
    newArIds.push(newText[3])
}
}
delList()
const myItemsTwo = props.newNotesy
var newNot = props.newNotesy.filter(obj => {
    return (newArIds.indexOf(obj.od) < 0)
  })
var newBub = props.newBubble.filter(obj => {
    var i
    for (i = 0; i < newNot.length; i++){
    return (newArIds.indexOf(obj.od) < 0)
}
})


//     }
// var odList = []
// for (var j = 0; j < newNot.length; j++){
// odList.push(newNot[j].od)
// }
// console.log(odList)
// var allNotes = document.getElementsByClassName("full-notey-note'")
// // console.log(allNotes)
// if (typeof allNotes !== 'undefined'){
// for (var i = 0; i < allNotes.length; i++){

//     if(odList.indexOf(allNotes[i].classList[2]) < 0){
//         // allNotes[i].parentElement.removeChild(allNotes[i])
//         console.log(allNotes[i])
//     }
// }}

// var uniq = odList
//   .map((name) => {
//     return {
//       count: 1,
//       name: name
//     }
//   })
//   .reduce((a, b) => {
//     a[b.name] = (a[b.name] || 0) + b.count
//     return a
//   }, {})

// var duplicates = Object.keys(uniq).filter((a) => uniq[a] > 1)

// console.log(duplicates)

// for (var i = 0; i < duplicates.length; i++){
//     if (newNot)
// }
    return [
        h(NavBar, { ...props, key: 'navbar' }),
        h(NavBarTwo, { ...props, key: 'green' }),
        h(NavBarThree, { ...props, key: 'red' }),
        h(NavBarFour, { ...props, key: 'blue' }),
        h('div', {
            key: props.prefix, 
            className: props.prefix,
            style: getElementStyle('container', props),
        }, 
            newNot.map( data => !data.hidden ? (h( Note, {fetchedd: props.fetchedd,newNot:newNot, messages: props.messages, currentUser:props.currentUser, visible: props.visible, items: props.items, newBub: newBub, notesy: props.notesy, onSubmit: props.onSubmit, onChange: props.onChange, removeTodo: props.removeTodo, convoBoxSize: props.convoBoxSize, hashtagDups: props.hashtagDups,allHashtags: props.allHashtags, myHashtags: props.myHashtags, handleScroll: props.onScroll, scrollVals: props.scrollVals, scrollScreen: props.scrollScreen, className: 'full-notey', key: `note-${data.od}`,...props, data } )):h( NoteBubble, { key: `note-${data.od}`,...props, data } ) )
        ),
    ]
}






// import { h, getElementStyle } from './../utils';
// import React, { useState, useEffect } from 'react';
// import NavBar from './../navbar';
// import NavBarTwo from './../navbar/notesIndex';
// import NavBarThree from './../navbar/notesRed';
// import Note from '../partials/note';
// import {NoteBubble} from '../partials/note-bubble';
// import Switch from "react-switch";
// import { DragPreviewImage, useDrag, useDrop } from "react-dnd";
// import ItemTypes from "./../../../ItemTypes";
// import { observe, moveKnight, observeTwo, newDelLog } from "../../Game";


// export function NormalView(props){
//     const [hidden, setHidden] = useState(props.hidden);
//     const [knightPos, setKnightPos] = useState([[400, 300]]);
//     const [arrayIndex, setArrayIndex] = useState(0)
//     const [myArray] = useState(props.myArraypos);
//     const [myArrayId] = useState(props.myArrayID);
//     const [selectedLine, setSelectedLine] = useState();
//     const [dontAdd, setDontAdd] = useState([])
//     // const [myItems, setMyItems] = useState(myItemsTwo)
//     const [iclicked, setIclicked] = useState(0)
//     var e = window.event;
//     var w = window;
//     const [{ isDragging, didDrop, item }, drag, end, preview] = useDrag({
//         item: { type: ItemTypes.stickyMini},
//         drag(item, monitor) {
//             const itemInfo = monitor.getItem()
//             const isDragging = monitor.isDragging()

//             var e = window.event
//             if (isDragging) {
//               return
//             }
//             // console.log(itemInfo.id.srcElement.offsetParent.classList[0])
//         },
//         collect: monitor => ({
//         //   item: monitor.getItem(),
//         //   isDragging: !!monitor.isDragging(),
//           didDrop: !!monitor.didDrop()
          
//         })
        
//       })


      
//      const settingLine = (value) =>{
//         //  console.log('hi')
//         const regexp = /note/
//         var result = regexp.test(value)
//         // console.log(result, value)
//         if (result === false){
//       setSelectedLine(value)
//     //   console.log(selectedLine)
//     }
//     else {
//         const newValue = value.replace('rs-notes--note-', '')
//         // console.log(newValue)
//         setSelectedLine(newValue)
//         // console.log(selectedLine)

//     }
// }

// const settingLineOut = (value) => {
//     setSelectedLine(value)
// }
// // console.log(props.delNote)
// var newArray = props.delNote
// var newArIds = []
// const delList = () => {
//     // console.log(newArray)
// var i
// for (i=0;i<newArray.length; i++){

//     var newText = newArray[i].text.split(/[_,]+/);
//     newArIds.push(newText[3])
// }
// // console.log(newArIds)
// }
// delList()
// const myItemsTwo = props.newNotesy
// var newNot = props.newNotesy.filter(obj => {

//     // console.log(obj.id, newArIds)
//     return (newArIds.indexOf(obj.od) < 0)
//   })

// var newBub = props.newBubble.filter(obj => {
//     var i
//     for (i = 0; i < newNot.length; i++){
//     // console.log(Object.values(newNot[i]), obj.od)
//     return (newArIds.indexOf(obj.od) < 0)
// }
// })
// // console.log(newNot)
// // var newBub2 = () => {
// // console.log(newNot)
// // var i
// // console.log(findit)
// // // for (i=0; i < findit.length; i++) {
// //     // console.log(findit[i]['__data__'].id)
// //     var j
// //     for (j = 0; j< newBub.length; j++){
// //         if (typeof newBub[j] !== 'undefined') {
// //         // console.log(newBub[j])
// //         var findit =document.getElementById(newBub[j]['label']);
// //         console.log(findit)
// // //         if (findit[i] === newBub[i].label) {
// // // //  console.log(findit[i]['__data__'].id, newBub[i].label)
// // //         newBub[i]['x'] = findit[i].getBoundingClientRect().x
// // //         newBub[i]['y']= findit[i].getBoundingClientRect().y
// // // console.log(findit[i].getBoundingClientRect().x)
// // // }

// // }}

// // // }
// // }
// // newBub2()
// // console.log(newBub)
// // console.log(newNot)
// //         newArray[i]['id'] = newText[3]
// //         newArray[i]['x'] = newText[1]
// //         newArray[i]['y']= newText[2]
// //         console.log(newText)
// //      console.log(newArray)
// // console.log(myItemsTwo.length)
// // setTheArray(oldArray => [...oldArray, newElement]);
// // const removeTodo = () => {
// //     if (typeof window.event !== 'undefined'){

// //     if (window.event.type === 'click') {
// //         // const dontAdd = []
// //         // console.log('is click')
// //         if (window.event.target.innerText=== 'delete_outlined') {

// //             var myVariable = window.event.path[1].parentNode.parentNode.classList[2]
// //             // console.log(myVariable)
// // // console.log(Object.values(myItemsTwo)[1]).indexOf(myVariable)
// //             for (var i = 0; i<myItemsTwo.length; i++){
// //                 // if (typeof myVariable !== 'undefined' && typeof myItemsTwo !== 'undefined') {
// //                 if (Object.values(myItemsTwo[i]).indexOf(myVariable) > -1) {
// //                     if (myItemsTwo[i]['id'] !== 'undefined') {
// //                     newDelLog(myVariable)
// //                 //     const removeNote= (name)=>{

// //                 //         // return myItemsTwo.splice(name, 1)
// //                 //     // }
// //                 //     // removeNote(i);


// //                 //  }
// //                 }
// //             }}
// // // console.log(myItemsTwo)

// //         }
// //         // else {return myItemsTwo}
// //     }
// //     // else {return myItemsTwo}
// // }
// // else {return myItemsTwo}
// // }

// // var i = toRemove.length;
// // while (i--) {
// // newArray.splice(toRemove[i], 1);
// // }
// // console.log(dontAdd)
// // var newMap = props.newNotesy
// // const filtering = () => {

// //     var i
// //     // var j
// //     for (i = 0; i< newMap.length; i++) {
// //         // for (j = 0; j< props.items.length+1; j++)
// //         var j = dontAdd.length
// //         while (j--) {
// //             if (typeof newMap[i] !== 'undefined') {
// //                 if (newMap[i]['id'] === dontAdd[j]){
// //                     // console.log('it matches')
// //                     // newMap.splice(i,1)
// //                 }
// //         }
        
// //         // console.log(props.newNotesy[i]['id'])
// //         // else if (props.newNotesy[i]['id'] === dontAdd[j]){
// //         //     console.log('it matches')
// //         //     // newMap.splice(i,1)
// //         // }s
// //         // else {
// //             // console.log(props.newNotesy[i]['id'], dontAdd[j])
// //             // console.log (props.newNotesy[i]['id'] === dontAdd[j])
// //         }
// //     // }
// // }}
// //     filtering()
// // console.log(props.items)
// // console.log()
// // console.log(newMap)
// // console.log(props.newNotesy)
//         // console.log
        
// // console.log(iclicked)

// //     }
// // console.log(newBub)

//     const [hasDropped, setHasDropped] = useState(false)

//     // switch(nodeName){
//     //     case "container":
//     //             style = { 
//     //                 ...defaultStyle,
//     //                 position: 'relative',
//     //                 width: props.containerWidth, 
//     //                 height: props.containerHeight, 
//     //                 backgroundColor: props.backgroundColor
//     //             }
//     var heightDif = 0
//     var locaa = document.getElementsByClassName('listyThree')
//     var sticky = document.getElementsByClassName('stickyBox')
//     if (typeof locaa[0] !== 'undefined' && typeof sticky[0] !== 'undefined'){
//       console.log(locaa[0].scrollHeight- sticky[0].scrollHeight)
//       console.log(locaa[0].scrollHeight)
//       console.log(sticky[0].scrollHeight)
//       // sticky[0].scrollHeight = `${locaa[0].scrollHeight}px`
//     //   locaa[0].scrollTop =sticky[0].scrollTop
//     heightDif = (locaa[0].scrollHeight- sticky[0].scrollHeight)
//     }


//     return [
//         h(NavBar, { ...props, key: 'navbar' }),
//         // h(NavBarTwo, { ...props, key: 'green' }),
//         // h(NavBarThree, { ...props, key: 'red' }),
//         h('div', {
//             key: props.prefix, 
//             className: `stickyBox ${props.invisiBox}`,
//             style: {
//                 position: 'absolute',
//                 // width:700,
//                 // height: 900,
//                 width: (window.screen.width*.77),
//                 height: (window.screen.height*.81),
//                 // tranform:`translate(${x}px, ${y}px)`,
//                 overflowY: 'hidden',
//                 // translate: 
//                 // getElementStyle('container', props)
//             },
//             // onClick: () => (console.log('clicking!'))
//         }, 

//             newNot.map( data => !data.hidden ? (h( Note, {newNot:newNot, messages: props.messages, currentUser:props.currentUser, visible: props.visible, items: props.items, newBub: newBub, notesy: props.notesy, onSubmit: props.onSubmit, onChange: props.onChange, removeTodo: props.removeTodo, convoBoxSize: props.convoBoxSize, hashtagDups: props.hashtagDups,allHashtags: props.allHashtags, myHashtags: props.myHashtags, handleScroll: props.onScroll, scrollVals: props.scrollVals, scrollScreen: props.scrollScreen, className: 'full-notey', key: `note-${data.od}`,...props, data } )):h( NoteBubble, { key: `note-${data.od}`,...props, data } ) ),
//             h('div',
//             {
//                 style: {
//                     position: 'fixed',
//                     bottom: 0,
//                     width: 300,
//                     height: heightDif
//                 }
//             })
//             ),

//         // h('div', {
//         //     key: `${props.prefix}-bubble`, 
//         //     className: `${props.prefix}-bubble`,
//         //     width: 30,
//         //     height: 30,
//         //     onMouseEnter: ()=> (settingLine(window.event.relatedTarget.classList[0])),
//         //     onMouseOut: () => (settingLineOut(null)),


//         //     // style: getElementStyle('container', props)
//         // }, 
//         //     newBub.map( data => h( NoteBubble, {settingLine: settingLine, convoBoxSize: props.convoBoxSize, visible: props.visible, myArrayPos: props.myArrayPos, myArray: props.myArray, key: `note-${data.od}`,...props, data })
//         // )),
//     ]
// }
