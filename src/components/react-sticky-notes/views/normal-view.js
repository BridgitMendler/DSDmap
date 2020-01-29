

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
import { observe, moveKnight, observeTwo, newDropped } from "../../Game";


export function NormalView(props){
    const [hidden, setHidden] = useState(props.hidden);
    const [knightPos, setKnightPos] = useState([[400, 300]]);
    const [arrayIndex, setArrayIndex] = useState(0)
    const [myArray] = useState(props.myArraypos);
    const [myArrayId] = useState(props.myArrayID);
    const [selectedLine, setSelectedLine] = useState();
    const [myItems, setMyItems] = useState(myItemsTwo)
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
            console.log(itemInfo.id.srcElement.offsetParent.classList[0])
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
        console.log(selectedLine)

    }
}

const settingLineOut = (value) => {
    setSelectedLine(value)
}

// console.log(window.event)
const myItemsTwo = props.items

const removeTodo = () => {
    if (typeof window.event !== 'undefined'){
    if (window.event.type === 'click') {
        if (window.event.target.innerText=== 'delete_outlined') {
            var myVariable = window.event.path[1].parentNode.parentNode.classList[2]
            for (var i = 0; i<myItemsTwo.length; i++){
                if (Object.values(myItemsTwo[i]).indexOf(myVariable) > -1) {
                    const removeNote= (name)=>{
                        return myItemsTwo.splice(name, 1)
                    }
                    removeNote(i);
                 }
            }
console.log(myItemsTwo)
        }
        else {return myItemsTwo}
    }
    else {return myItemsTwo}
}
else {return myItemsTwo}
}

const myNew = removeTodo()
// console.log(props.visible)

    const [hasDropped, setHasDropped] = useState(false)

    return [
        h('div', {
            key: props.prefix, 
            className: props.prefix,
            style: getElementStyle('container', props),
            // removeTodo:removeTodo(),
            onClick: () => (removeTodo(), setIclicked(iclicked+1))
        }, 
            props.items.map( data => !data.hidden ? (h( Note, {removeTodo: removeTodo, convoBoxSize: props.convoBoxSize, hashtagDups: props.hashtagDups,allHashtags: props.allHashtags, myHashtags: props.myHashtags, handleScroll: props.onScroll, scrollVals: props.scrollVals, scrollScreen: props.scrollScreen, className: 'full-notey', key: `note-${data.id}`,...props, data } )):h( NoteBubble, { key: `note-${data.id}`,...props, data } ) )
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
            props.items.map( data => h( NoteBubble, {settingLine: settingLine, convoBoxSize: props.convoBoxSize, visible: props.visible, myArrayPos: props.myArrayPos, myArray: props.myArray, key: `note-${data.id}`,...props, data })
        )),
        h('div', {
            key: `${props.prefix}-line`, 
            className: `${props.prefix}-line`,
            style: getElementStyle('container', props)
        }, 
        h("span", null,
            props.items.map( data => props.hidden ? (props.visible === true)? h( LineTo, { borderColor:'wheat',borderStyle: 'dashed', borderWidth: 1, from:`dropped${data.id}`, to:`rs-notes--full-note-${data.id}`, toAnchor: 'top right', key: `note-${data.id}`,...props, data } ):null: 
            h( LineTo, { opacity:(selectedLine===data.id)?1:0,borderColor: 'red', borderStyle: 'dashed', borderWidth: 1, from:`dropped${selectedLine}`, to:`rs-notes--full-note-${selectedLine}`, toAnchor: 'top right', key: `note-${data.id}`,...props, data } ))
        ),),
        h(NavBar, { ...props, key: 'navbar' }),
        h(NavBarTwo, { ...props, key: 'green' }),
        h(NavBarThree, { ...props, key: 'red' }),
    ]
}