import { h, getElementStyle } from './../utils';
import NoteHeader from './../partials/note-header';
import { ButtonAddR, ButtonTitle, ButtonMenu, ButtonUpload, ButtonTrash, ButtonPageView } from './../buttons';
function NavBarThree({viewSize, prefix, items, callbacks, icons}, props){
    const buttons = [ ButtonTitle, ButtonTrash];
    if(viewSize==='pageview'||viewSize==='fullscreen'){
        // buttons.splice(1, 0, ButtonMenu )
    }
    // console.log(props)
    return h('div',{
        className:`${prefix}--red`, style:{height: '60px', width: '60px'},
    },[
        // h( 'div',{
        //     key: `${prefix}--navbar__nav`,
        //     className:`${prefix}--navbar__nav`,
        //     style: getElementStyle('navbar-nav', null, { flexGrow: 1 } )
        // },
        //     items?items.map((data)=>
        //         h(NoteHeader,{
        //             key: `navbar-item__${data.id}`,
        //             data,
        //             prefix: `${prefix}--navbar__item`,
        //             icons,
        //             callbacks,
        //             buttons: buttons
        //         })
        //     ):null 
        // ),
        h('div',{
            key: `red-item__options`,
            className:`${prefix}--red__nav`
        },
            h( NoteHeader, {
                prefix: `${prefix}--red__item`,
                icons,
                callbacks,
                props,
                scrollScreen: props.scrollScreen,
                buttons: [ButtonAddR]
            })
        )
    ]);
    
}
export default NavBarThree;


