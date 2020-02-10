import { h, getElementStyle } from './../utils';
import NoteHeader from './../partials/note-header';
import { ButtonAddG, ButtonTitle, ButtonMenu, ButtonUpload, ButtonTrash, ButtonPageView } from './../buttons';
function NavBarTwo({viewSize, prefix, items, callbacks, icons}, props){
    const buttons = [ ButtonTitle, ButtonTrash];
    if(viewSize==='pageview'||viewSize==='fullscreen'){
        // buttons.splice(1, 0, ButtonMenu )
    }
    return h('div',{
        className:`${prefix}--green`, style:{height: '60px', width: '60px'},
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
            key: `green-item__options`,
            className:`${prefix}--green__nav`
        },
            h( NoteHeader, {
                prefix: `${prefix}--green__item`,
                icons,
                callbacks,
                scrollScreen: props.scrollScreen,
                buttons: [ButtonAddG]
            })
        )
    ]);
    
}
export default NavBarTwo;
