import { h, getNoteTitle } from './../utils';


export function ButtonAdd({prefix, data, icons, callbacks}){
    return h('button',{
        key: `${prefix}--button__add`,
        className:`${prefix}--button ${prefix}--button__add noselect`,
        onClick:(e)=>callbacks.addItem(e, {id: data?data.id:null, position:data?data.position:null, selected: true})
    }, 
        icons.add
    )
}

export function ButtonAddR({prefix, data, icons, callbacks}){
    return h('button',{
        key: `${prefix}--button__addG `,
        className:`${prefix}--buttonG ${prefix}--button__addG noselect`,
        onClick:(e)=>callbacks.addItem(e, {id: data?data.id:null, position:data?data.position:null, selected: true})
    }, 
        icons.addG
    )
}

export function ButtonAddG({prefix, data, icons, callbacks}){
    return h('button',{
        key: `${prefix}--button__addR`,
        className:`${prefix}--buttonR ${prefix}--button__addR noselect`,
        onClick:(e)=>(callbacks.addItem(e, {id: data?data.id:null, position:data?data.position:null, selected: true}), console.log('clicked'))
    }, 
        icons.addR
    )
}

export function ButtonTitle({prefix, data, targetRef, callbacks }){
    return h('button',{
        key: `${prefix}--button__title`,
        className:`${prefix}--button ${prefix}--button__title ${data.id}`,
        ref: targetRef,
        onClick:(e)=>callbacks.updateItem(e, { id: data?data.id:null, menu: false, selected: true, hidden: false })
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
        onClick:(e)=>callbacks.updateItem(e, {id: data?data.id:null, position:data?data.position:null, hidden: !data.hidden})
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
        callbacks.onSubmit(('hhhhh' + `${newText[0]}`+ `_${data.position.x},${data.position.x}`+`_${data.id}`+`_${data.color}`+`_${data.selected}`+`_${data.position.x}_${data.position.y}`+ '_yes')))
    }, 
        icons.trash
    );
}


