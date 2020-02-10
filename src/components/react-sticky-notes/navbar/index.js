import { h, getElementStyle } from './../utils';
import NoteHeader from './../partials/note-header';
import { ButtonAdd, ButtonTitle, ButtonTrash, } from './../buttons';
function NavBar({viewSize, prefix, items, callbacks, icons}, props){
    const buttons = [ ButtonTitle, ButtonTrash];
    if(viewSize==='pageview'||viewSize==='fullscreen'){
        // buttons.splice(1, 0, ButtonMenu )
    }
    return h('div',{
        className:`${prefix}--navbar`, style:{height: '60px', width: '60px'},
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
            key: `navbar-item__options`,
            className:`${prefix}--navbar__nav`
        },
            h( NoteHeader, {
                prefix: `${prefix}--navbar__item`,
                icons,
                callbacks,
                scrollScreen: props.scrollScreen,
                buttons: [ButtonAdd]
            })
        )
    ]);
    
}
export default NavBar;
