import { h, getNoteTitle, getUUID } from './../utils';
// import ReactDOM from 'react-dom';

const sourceTwo = document.getElementsByClassName('listyThree')


export function ButtonAdd({prefix, data, icons, callbacks}){
    
    // if (typeof sourceTwo[0] !== 'undefined'){
    //     console.log(sourceTwo[0].scrollTop)
    //     // scrollHeight = sourceTwo[0].scrollTop
    // }
// console.log(typeof sourceTwo[0])
    const getColor= (val) => {
        if (val.nativeEvent.target.className === 'icons-g') {
            return '#BC8276'
        } else if (val.nativeEvent.target.className === 'icons-r') {
            return '#88A18A'
        }
        else {
        return '#FAE3B6';
    }}

    const getRandom= () => {
    if (typeof document.getElementsByClassName('listyTwo') !== 'undefined' && typeof document.getElementsByClassName('bigSpace') !== 'undefined'){
        var absolCardLeft = ((document.getElementsByClassName('listyTwo')[0]).offsetLeft)
        var cardWidth = ((document.getElementsByClassName('listyTwo')[0]).offsetWidth)
        var upperSpace = ((document.getElementsByClassName('bigSpace')[0]).offsetHeight)
        var precision = 1;
        var n = Math.floor(Math.random() * (10-(-10)) + (-10))
        var randomnum = Math.floor(Math.random() * ((absolCardLeft+cardWidth-115) * precision - (absolCardLeft) * precision) + (absolCardLeft) * precision) / (1*precision);
        return randomnum
    }}
    const getRandom2= () => {
        if (typeof sourceTwo[0] !== 'undefined'){
        var precision = 1;
        var n = Math.floor(Math.random() * (10-(-10)) + (-10))
        var randomnum = Math.floor(Math.random() * (150 * precision - 100 * precision) + 100 * precision) / (1*precision);
        return (randomnum+sourceTwo[0].scrollTop)
       
    }}

    return h('button',{
        key: `${prefix}--button__add`,
        className:`${prefix}--button ${prefix}--button__add noselect`,
        onClick:(e)=>(
            callbacks.onSubmit(('ggggg' + ` `+ `_${getRandom()},${getRandom2()}`+`_${getUUID()}`+`_${getColor(e)}`+`_${true}`+`_${getRandom()}_${getRandom2()}`)))
    }, 
        icons.add
    )
}

export function ButtonAddR({prefix, data, icons, callbacks}){

    const getColor= (val) => {
        if (val.nativeEvent.target.className === 'icons-g') {
            return '#BC8276'
        } else if (val.nativeEvent.target.className === 'icons-r') {
            return '#88A18A'
        }
        else {
        return '#FAE3B6';
    }}

    const getRandom= () => {
        if (typeof document.getElementsByClassName('listyTwo') !== 'undefined' && typeof document.getElementsByClassName('bigSpace') !== 'undefined'){
            var absolCardLeft = ((document.getElementsByClassName('listyTwo')[0]).offsetLeft)
            var cardWidth = ((document.getElementsByClassName('listyTwo')[0]).offsetWidth)
            var upperSpace = ((document.getElementsByClassName('bigSpace')[0]).offsetHeight)
            var precision = 1;
            var n = Math.floor(Math.random() * (10-(-10)) + (-10))
            var randomnum = Math.floor(Math.random() * ((absolCardLeft+cardWidth-115) * precision - (absolCardLeft) * precision) + (absolCardLeft) * precision) / (1*precision);
            return randomnum
        }}
    const getRandom2= () => {
        if (typeof sourceTwo[0] !== 'undefined'){
        var precision = 1;
        var n = Math.floor(Math.random() * (10-(-10)) + (-10))
        var randomnum = Math.floor(Math.random() * (150 * precision - 100 * precision) + 100 * precision) / (1*precision);
        return (randomnum+sourceTwo[0].scrollTop)
       
    }}
    return h('button',{
        key: `${prefix}--button__addG `,
        className:`${prefix}--buttonG ${prefix}--button__addG noselect`,
        onClick:(e)=>(
            callbacks.onSubmit(('ggggg' + ` `+ `_${getRandom()},${getRandom2()}`+`_${getUUID()}`+`_${getColor(e)}`+`_${true}`+`_${getRandom()}_${getRandom2()}`)))
     }, 
        icons.addG
    )
}

export function ButtonAddG({prefix, data, icons, callbacks}){

    const getColor= (val) => {
        if (val.nativeEvent.target.className === 'icons-g') {
            return '#BC8276'
        } else if (val.nativeEvent.target.className === 'icons-r') {
            return '#88A18A'
        }
        else {
        return '#FAE3B6';
    }}

    const getRandom= () => {
        if (typeof document.getElementsByClassName('listyTwo') !== 'undefined' && typeof document.getElementsByClassName('bigSpace') !== 'undefined'){
            var absolCardLeft = ((document.getElementsByClassName('listyTwo')[0]).offsetLeft)
            var cardWidth = ((document.getElementsByClassName('listyTwo')[0]).offsetWidth)
            var upperSpace = ((document.getElementsByClassName('bigSpace')[0]).offsetHeight)
            var precision = 1;
            var n = Math.floor(Math.random() * (10-(-10)) + (-10))
            var randomnum = Math.floor(Math.random() * ((absolCardLeft+cardWidth-115) * precision - (absolCardLeft) * precision) + (absolCardLeft) * precision) / (1*precision);
            return randomnum
        }}
    const getRandom2= () => {
        if (typeof sourceTwo[0] !== 'undefined'){
        var precision = 1;
        var n = Math.floor(Math.random() * (10-(-10)) + (-10))
        var randomnum = Math.floor(Math.random() * (150 * precision - 100 * precision) + 100 * precision) / (1*precision);
        return (randomnum+sourceTwo[0].scrollTop)
       
    }}
    return h('button',{
        key: `${prefix}--button__addR`,
        className:`${prefix}--buttonR ${prefix}--button__addR noselect`,
        onClick:(e)=>(
            callbacks.onSubmit(('ggggg' + ` `+ `_${getRandom()},${getRandom2()}`+`_${getUUID()}`+`_${getColor(e)}`+`_${true}`+`_${getRandom()}_${getRandom2()}`)))
 
    }, 
        icons.addR
    )
}

export function ButtonTitle({prefix, data, targetRef, callbacks }){
    return h('button',{
        key: `${prefix}--button__title`,
        className:`${prefix}--button ${prefix}--button__title ${data.id}`,
        ref: targetRef,
        onClick:(e)=>callbacks.updateItem(e, { od: data?data.od:null, menu: false, selected: true, hidden: false })
    },
        data.title?data.title: getNoteTitle(data)
    )
}

export function ButtonMenu({prefix, data, icons, callbacks }){
    return h('button',{
        key: `${prefix}--button__menu`,
        className:`${prefix}--button ${prefix}--button__menu`,
        onClick:(e)=>callbacks.updateItem(e, {id: data?data.id:null, menu: !data.menu, selected: true})
    }, 
        icons.menu
    );
}

// export function ButtonHideShow({prefix, data, icons, callbacks }){
//     return h('button',{
//         key: `${prefix}--button__hideshow`,
//         className:`${prefix}--button ${prefix}--button__hideshow`,
//         onClick:(e)=>callbacks.updateItem(e, {id: data?data.id:null, hidden: !data.hidden})
//     }, 
//         data.hidden?icons.hide:icons.show
//     );
// }

export function ButtonAddDot({prefix, data, icons, callbacks}){
    return h('button',{
        key: `${prefix}--button__addDot`,
        className:`${prefix}--button ${prefix}--button__addDot`,
        onClick:(e)=>callbacks.addUpdate(e, {id: data, position:data.position, hidden: !data.hidden})
    }, 
        data.hidden?icons.hide:icons.show
    )
}

export function ButtonHideShow({prefix, data, icons, callbacks }){
    return h('button',{
        key: `${prefix}--button__hideshow`,
        className:`${prefix}--button ${prefix}--button__hideshow`,
        onClick:(e)=>callbacks.updateItem(e, {id: data?data.od:null, position:data?data.position:null, hidden: !data.hidden})
    }, 
        data.hidden?icons.hide:icons.show
    );
}

export function ButtonTrash({prefix, data, icons, callbacks, removeTodo}, props){
    // console.log(data.text)

    // const sendMessage= (text) =>{
    //     this.state.currentUser.sendMessage({ 
    //       text,
    //       roomId: this.state.currentRoom.id,
    //     })
    //   }
    const removeItem =(e)=> {
        // console.log(removeTodo)
        
        removeTodo(e);
    }
    var newText = data.text.split(/[_,]+/);
    // console.log(newText[0])
    return h('button',{
        key: `${prefix}--button__trash`,
        className:`${prefix}--button ${prefix}--button__trash noselect`,
        onClick:(e)=>(
        callbacks.onSubmit(('hhhhh' + `${newText[0]}`+ `_${data.position.x},${data.position.x}`+`_${data.od}`+`_${data.color}`+`_${data.selected}`+`_${data.position.x}_${data.position.y}`+ '_yes')))
    }, 
        icons.trash
    );
}


