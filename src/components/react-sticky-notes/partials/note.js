import React from 'react';
import ReactDOM from 'react-dom';
import { h, getElementStyle } from '../utils';
import NoteDraggable from './note-draggable';
import NoteHeader from './note-header';
import NoteBody from './note-body';
import {ButtonAddDot, ButtonTitle, ButtonMenu, ButtonHideShow, ButtonTrash } from './../buttons' ;

class Note extends React.Component{

    getRandom2= () => {
        var precision = 1;
        var n = Math.floor(Math.random() * (10-(-10)) + (-10))
        var randomnum = Math.floor(Math.random() * (250 * precision - 100 * precision) + 100 * precision) / (1*precision);
        return (randomnum+this.props.scrollScreen)
    }
    getRandom= () => {
        // console.log('getting random for x')
        var precision = 1;
        var n = Math.floor(Math.random() * (10-(-10)) + (-10))
        var randomnum = Math.floor(Math.random() * (1300 * precision - 400 * precision) + 400 * precision) / (1*precision);
        return randomnum
    } 
    getRandomThree= () => {
        var precision = 100;
        var n = Math.floor(Math.random() * (10-(-10)) + (-10))
        var randomnum = Math.floor(Math.random() * (180 * precision - 165 * precision) + 165 * precision) / (1*precision);
        return randomnum
    }   
    
    getNotePositionY =() => {
        var i
        for (i=0; i< this.props.notesy.length; i++){
            if (this.props.notesy[i].od === this.props.data.od){
                // console.log(this.props.notesy[i])
                var yVal = parseInt(this.props.notesy[i].y)
                // console.log(this.props.notesy[i].id, yVal)
                return yVal
            }
            else {
                // console.log(this.props.data.position.y)
                return this.props.data.position.y
            }
            // else {return 0}
        }
        
    }

        getNotePositionX =() => {
        var i
        // if (this.props.notesy.length>10){
        for (i=0; i< this.props.notesy.length; i++){
            // console.log(i)
            if (this.props.notesy[i].od === this.props.data.od){
                var xVal = parseInt(this.props.notesy[i].x)
                // console.log(this.props.notesy[i].id, xVal)
                return xVal
            }
            else {
                // console.log(this.props.data.position.x)
                return this.props.data.position.x
            }
        }}
    // }
    constructor(props){
        super(props);
        this.targetRef = React.createRef();
        this.state= {
            match: false,
            positionX: this.getNotePositionX(),
            positionY: this.getNotePositionY(),
            mouseStatus: false,
            firstAv: [],
            firstRan: this.getRandomThree(),
            listyPos: 0,
            listy: [],
            genericLoc: 0,
            visibleList: [],
            textHeight: 0,
            genericBottom: 0

        }
    }

 
    // handleScroll(event) {
    //      window.addEventListener('scroll', this.handleScroll);
    //     const source = ReactDOM.findDOMNode(this).getElementsByClassName('join')[0];
    //     const sourceTwo = ReactDOM.findDOMNode(this).getElementsByClassName('listyThree')[0];
    //         let scrollTop = sourceTwo.scrollTop,
    //             itemTranslate = Math.min(0, scrollTop/3 - 60);
    //     console.log(itemTranslate)
    //         };


    // onMove(e) {
    //     console.log(e)
    //     // this.props.onSubmit(('hi' + this.state.text))
    //     // this.setState({ text: '' })
    // }


    render(){
// console.log(this.state.listyPos)
        // console.log(this.props.notesy)
        var thisty = () => {
            var thisy = document.getElementsByClassName(`${this.props.prefix}--full-note-${this.props.data.od}`)
            if (thisy.length > 0) {
                var thirsy = document.getElementsByClassName(`${this.props.prefix}--full-note-${this.props.data.od}`)[0].style
                // console.log(thirsy.zIndex)
            }
        }

thisty()
        const setWhatDragShouldDo=() =>{
            // console.log(this.props.visible)
            var joined = this.state.visibleList.concat(this.props.visible);
            this.setState({ visibleList: joined })
        }
        // console.log(this.props.visible)
        const windowFocus = (val) => {
            // console.log(val)
            // return 'yes'
            document.body.addEventListener('click', function (event) {
                if (window.event.target.classList[0] ==='rs-notes--header--button' || 'innerTextNote' || 'forNotes') {
                    if (typeof props !== 'undefined'){
                    if (window.event.target.classList[1] === val){
                        // console.log(window.event.target.classList, val)
                        var newThing = document.getElementsByClassName(`${props.prefix}--full-note-${window.event.target.classList[1]}`)
                        // console.log(newThing)
                        newThing[0].style.zIndex = 10
                    }
                        else if (window.event.target.classList[2]=== val){
                            var newThing = document.getElementsByClassName(`${props.prefix}--full-note-${window.event.target.classList[2]}`)
                            newThing[0].style.zIndex = 10
                        }
                        else {
                            var newThing = document.getElementsByClassName(`${props.prefix}--full-note-${val}`)
                            if (typeof newThing[0] !== 'undefined'){
                                newThing[0].style.zIndex = 0
                            // console.log(newThing[0])
                        }}
                    }
                        else {return 0}
                        
             }
             else {return 0}
             })
        }

        windowFocus(this.props.data.od)
        // console.log(this.props.data.od)

// windowFocus(props.data.id)
//             // console.log(this.props.data.selected, this.props.data.id)
// console.log(window.event)
//             if (typeof window.event !== 'undefined'){
//                 console.log(window.event.type)
//             if (window.event.type === 'click'&& window.event.target.classList[0] ==='rs-notes--text') {
//                 // console.log(window.event)
//                 if (window.event.target.classList[1]=== this.props.data.id) {
//                     // console.log('yes ' +this.props.data.id +this.props.data.selected)
//                 return '10'}
//                 else {
//                     // console.log('no ' +this.props.data.id+this.props.data.selected)
//                     return '0'}
//                 // return this.state.showIncreaced === id ? '10' : '0'
//             }
//             else if(window.event.type === 'click' && window.event.target.classList[0] ==='rs-notes--header--button')
//             { if (window.event.target.classList[2] === this.props.data.id   ) {
//                 // console.log('front')
//                 return '10'
//             }
//             else { 
//                 // console.log('back')
//                 return '0'}
//                 // console.log(window.event.target.classList[2])}

//         }
//         else if (window.event.type === 'mousedown' && window.event.target.classList[0]==='rs-notes--header--button')
//         { if (window.event.target.classList[2] === this.props.data.id   ) {
//             return '10'
//         }
//         else { return '0'}
//     } return '0'
//     }
//     else { return '0'}
// }
        // windowFocus()
        var precision = 100;
        var n = Math.floor(Math.random() * (10-(-10)) + (-10))
        var randomnum = Math.floor(Math.random() * (55 * precision - 1 * precision) + 1 * precision) / (1*precision);
        // console.log(this.props.myHashtags)
        const props = this.props;
        const hashtagMoveX = () => {
            var i
            if (props.hashtagDups.length > 0) {
                if (Object.keys(props.myHashtags).includes(props.data.od)){
                    const myValue = (props.myHashtags)[(props.data.od)]
                    // console.log(myValue)
                    if (props.hashtagDups.includes(myValue)) {
                        // console.log('yes')
                        var indexHashtag =props.hashtagDups.indexOf(myValue)
                        const vals = (Object.values(props.myHashtags))
                        var i
                        var leftPos = []
                        var total = 0
                        for (i=0; i < vals.length; i++){
                            if (vals[i]=== myValue && typeof myValue !== 'undefined' ){
                            // console.log(vals[i])
                                var classID = (Object.keys(props.myHashtags)[i])
                                // console.log(parseFloat(document.getElementsByClassName(`${props.prefix}--full-note-${classID}`[0].style.left) !== 'undefined'))
                                // console.log((document.getElementsByClassName(`${props.prefix}--full-note-${classID}`)[0]))
                                if (typeof document.getElementsByClassName(`${props.prefix}--full-note-${classID}`)[0] !== 'undefined') {
                                    if (typeof document.getElementsByClassName(`${props.prefix}--full-note-${classID}`[0].style !== 'undefined')) {
                                    // console.log(typeof document.getElementsByClassName(`${props.prefix}--full-note-${classID}`)[0])
                                var styleLeft = parseFloat(document.getElementsByClassName(`${props.prefix}--full-note-${classID}`)[0].style.left)
                                // var styleLeft = 0
                                leftPos.push(styleLeft)
                                total += styleLeft
                                // console.log(styles)
                            }}}
                        }
                        if (leftPos.length > 1) {
                                                        
                            let word_With_Numbers = props.data.od
                                let word_Without_Numbers = word_With_Numbers.replace(/\D/g, '');
                                    var myRand = word_Without_Numbers[0]
                            var avg = (total / leftPos.length)-((this.state.firstRan+myRand));
                            var sorted = leftPos.slice().sort(function(a, b) {
                                var result = a-b
                                return (a,b);
                              });
                            //   console.log(props.visible)
                            var numbs = this.state.firstRan+myRand
                                // console.log('first ran ' + this.state.firstRan)
                                // console.log(myValue+ ' index '+ indexH+ ' this would be your calculation '+ numbs*((indexH+1)))
                                  if (numbs*(indexHashtag+1)>800){
                                    if (this.props.visible === false){
                                        // console.log('i moved greater than 800, visible false '+ numbs*(indexH+1))
                                        return (numbs*(indexHashtag+1)-300)
                                        }
                                        else {
                                            if (((numbs*(indexHashtag+1)-300)*.75) > 350) {
                                                // console.log('i moved greater than 800, visible true, greater than 400 '+ (numbs*(indexH+1)-300)*.75)
                                                return `${(numbs*(indexHashtag+1)-300)*.75}px`
                                            }
                                            else{
                                                // console.log('i moved greater than 800, visible true, less than 400, return 400'+(numbs*(indexH+1)-300)*.75)
                                                return 350
                                            }
                                        }
                                  }
                                  else {
                                    if (this.props.visible === false){
                                        // console.log('i moved less than 800, visible false: ' +numbs*(indexH+1)+200)
                                        return (numbs*(indexHashtag+1)+200)
                                        }
                                        else {
                                            if (((numbs*(indexHashtag+1)+200)*.85) > 350) {
                                                // console.log('i moved less than 800 props.visible === true and (numbs*(indexH+1)+200)*.75) > 400): ' +(numbs*(indexH+1)+200)*.75)
                                                return `${(numbs*(indexHashtag+1)+200)*.85}px`
                                            }
                                            else{
                                                // console.log('i moved less than 800, visible true, less than 400, return 400: ' + 350)
                                                return 350
                                            }}
                                  }
                    }

                        }
                        if (this.props.visible === false){
                        return (85+(200*(indexHashtag+1)-randomnum))
                        }
                        else {return (85+(200*(indexHashtag+1)-randomnum)*.75)}
                    }
                    else {
                        if (this.props.visible === false){
                            // console.log('getting state pos '+ this.state.positionX)
                        return this.getNotePositionX()
                        }
                        else {
                            if ((this.getNotePositionX() *.75) > 400) {
                                if (this.state.visibleList[this.state.visibleList.length-1]=== true) {
                                    // console.log('it is true')
                                    // console.log('getting state pos '+ this.state.positionX)
                                    return (this.getNotePositionX())
                                }
                                else {
                                    // console.log('getting state pos '+ this.state.positionX)
                                return (this.getNotePositionX() *.75)}
                            }
                            else{
                                return 400
                            }
                        }
                    }
                }
                else {
                    if (this.props.visible === false){
                        // console.log('this is me')
                        var whereToGo = this.getNotePositionX()
                    return whereToGo
                    }
                    else {
                        if ((this.getNotePositionX() *.75) > 400) {
                            if (this.state.visibleList[this.state.visibleList.length-1]=== true) {
                                
                                // console.log('getting state pos '+ this.state.positionX)
                                return (this.getNotePositionX())
                            }
                            else {
                            // console.log(this.state.visibleList[this.state.visibleList.length-1])
                            // console.log('getting state pos '+ this.state.positionX)
                            return (this.getNotePositionX() *.75)}
                        }
                        else{
                            return 400
                        }
                    }
                }
            }

    var firstAv = []
    var firstRan = []
    // console.log(props.data.id, this.state.positionX)
    // console.log(props.data.id, this.state.positionY)

    const hashtagMoveY= () => {
        var i
// console.log(props.data)
        if (props.hashtagDups.length > 0) {
        if (Object.keys(props.myHashtags).includes(props.data.od)){
            const myValue = (props.myHashtags)[(props.data.od)][0][0]
            if (props.hashtagDups.includes(myValue)) {
                var indexHashtag =props.hashtagDups.indexOf(myValue)
                        const vals = (Object.values(props.myHashtags))
                        var i
                        var topPos = []
                        var total = 0
// console.log(vals)
                        for (i=0; i < vals.length; i++){
                            if (vals[i][0][0]=== myValue){
                                var classID = (Object.keys(props.myHashtags)[i])
                                // console.log((document.getElementsByClassName(`${props.prefix}--full-note-${classID}`)[0]))
                                if ((document.getElementsByClassName(`${props.prefix}--full-note-${classID}`)[0] !== 'undefined')) {
                                var styleTop = parseFloat(document.getElementsByClassName(`${props.prefix}--full-note-${classID}`)[0].style.top)
                                topPos.push(styleTop)
                                total += styleTop
                                
                        }
                    }
                        if (topPos.length > 1) {
                            console.log('this is happening')
                            for (i=0; i < topPos.length+1; i++){
                                let word_With_Numbers = props.data.od
                                let word_Without_Numbers = word_With_Numbers.replace(/\D/g, '');
                                var myRand = word_Without_Numbers[0]
                                var avg = (total / topPos.length)-((this.state.firstRan+myRand));
                                var sorted = topPos.slice().sort(function(a, b) {
                                    var result = a-b
                                    return (a,b);
                                  });
    
                                    var numbs = myRand*2
                                    // console.log('this is numbs ' +numbs)
                                    if (this.state.listyPos !== 0) {
                                        console.log('this is happening')
                                        // console.log(this.state.listyPos)
                                        return (numbs+(this.state.genericLoc+100)) - props.scrollScreen}
                                
                                else {
                                    console.log('this is happening')
                                    return (numbs+200) - props.scrollScreen}
                                
                            }
                        }}
                // console.log(indexH)
                var figureY = (100+(50*(indexHashtag+1)-randomnum))
                var figureX = (85+(200*(indexHashtag+1)-randomnum))
                // const updateZ = () => props.callbacks.updateItem(null, {id: props.data.id, position:`${figureX},${figureY}`})
                // updateZ()
                // return (100+(50*(indexH+1)-randomnum-props.scrollScreen))
            }
            else {
                if (this.state.listyPos !== 0) {
                    if (this.state.listyPos > this.state.genericLoc && this.state.listyPos < (this.state.genericBottom+this.state.genericLoc)){
                        console.log('yes '+ 'listypos ' + this.state.listyPos + ' generictop ' + this.state.genericLoc+ ' generic bottom ' + this.state.genericBottom + ' text height ' + this.state.textHeight)
                        if (this.state.listyPos < (this.state.genericLoc + this.state.textHeight+30)){
                        console.log(this.state.listyPos)
                        return (this.state.genericLoc + this.state.textHeight+110)- (props.scrollScreen)
                    }
                    else if (this.state.listyPos < this.state.genericLoc){
                        console.log(this.state.listyPos)
                    return (this.state.genericLoc + this.state.textHeight+30)- (props.scrollScreen)
                    
                    }
                    else {
                        console.log('this is happening')
                        return this.state.listyPos - (props.scrollScreen)}
                }
                    else{
                    console.log('listypossing' + this.state.listyPos)
                    console.log('listypos ' + this.state.listyPos + ' generictop ' + this.state.genericLoc+ ' generic bottom ' + this.state.genericBottom + ' text height ' + this.state.textHeight)
                    return this.state.listyPos - (props.scrollScreen)}
            }
            else {return this.getNotePositionY() - (props.scrollScreen)}
        }
    }
    else {
        if (this.state.listyPos !== 0) {

            console.log('listypossing')
            console.log('listypos ' + this.state.listyPos + ' generictop ' + this.state.genericLoc+ ' generic bottom ' + this.state.genericBottom + ' text height ' + this.state.textHeight)
            return this.state.listyPos - (props.scrollScreen)
    }
    else {
        console.log('this is happening')
        return this.getNotePositionY() - (props.scrollScreen)}
}
    }
    else {
        if (this.state.listyPos !== 0) {
// if (this.state.listyPos > this.state.genericLoc && this.state.listyPos < (this.state.genericBottom+this.state.genericLoc)){
//     if (this.state.listyPos < (this.state.genericLoc + this.state.textHeight+30)){
//     console.log(this.state.listyPos)
//     return (this.state.genericLoc + this.state.textHeight)- (props.scrollScreen)
// }

// }
// else if (this.state.listyPos > (this.state.genericLoc)){
//     console.log('listypos ' + (this.state.listyPos) + ' generictop ' + (this.state.genericLoc)+ ' generic bottom ' + (this.state.genericBottom) + ' text height ' + (this.state.textHeight))
// return (this.state.genericLoc + this.state.textHeight)- (props.scrollScreen)

// }
// else{
//     if (typeof this.state.listyPos !== 'undefined'){
//             console.log('listypos ' + (this.state.listyPos) + ' generictop ' + (this.state.genericLoc)+ ' generic bottom ' + (this.state.genericBottom) + ' text height ' + (this.state.textHeight))}
//             return this.state.listyPos - (props.scrollScreen)
//     }}
//     else {
//         // console.log('this is happening, listypos is 0')
        return this.getNotePositionY() - (props.scrollScreen)}
        else {return this.getNotePositionY() - (props.scrollScreen)}
}


    }

        let word_With_Numbers = props.data.od
        // console.log(word_With_Numbers)
        // let word_Without_Numbers = word_With_Numbers.replace(/\D/g, '');
        var myRand = 2
        // var myRand = word_Without_Numbers[0]

        const onStart= (pos) =>{
            if (typeof pos !== 'undefined') {
            // console.log(pos.zIndex)
            let elems = document.querySelectorAll('.full-notey-note');
            // console.log(elems)
            for(let i = 0; i < elems.length; i++) {
              elems[i].style.zIndex = 1;
              pos.zIndex = 2;
            //   console.log(pos.zIndex)
            }
          }
        }
        //   console.log(window.event)
// console.log(this.state.mouseStatus)

// const conditions = () => {
//     var scrollVals= [0]
//     var newVals = props.scrollScreen
//     var i
//     for (i = 0; i< scrollVals.length; i++) {
//         if(scrollVals[i] !== newVals) {

//         scrollVals.push(newVals)
//         // console.log(scrollVals)}
//     }
// }
// // }
// conditions()
// console.log(props.data)
// console.log(this.state.visibleList)
const setOpac = () => {
    // console.log(props.data)
    if ((props.data.y - props.scrollScreen)< 20&& props.scrollScreen > 0){
        return 0.0
    }
    else { return 1}
}

var newText = props.data.text.split(/[_,]+/);
// console.log(props.data.id)
        return h(NoteDraggable, {
                // className:`${props.data.selected?'note-selected':'note-unselected'}`,
                scrollScreen: props.scrollScreen,
                handleScroll: props.handleScroll,
                className: `${props.prefix}--full-note-${props.data.od} full-notey-note' ${props.data.od}`,
                selected: props.data.selected,
                target: this.targetRef,
                onMouseDownMove:(pos) => (this.setState({mouseStatus:pos.mouseStatus, listyPos:pos.listyPos, genericLoc:pos.genericLoc, textHeight:pos.textHeight, genericBottom: pos.genericBottom})),
                // onClick: (e) =>(console.log('clicked'),onStart(e)),
                onDragComplete:(pos)=> (setWhatDragShouldDo(), 
                props.onSubmit(('ggggg' + `${pos.text}`+ `_${pos.x},${pos.y}`+`_${props.data.od}`+`_${props.data.color}`+`_${props.data.selected}`+`_${pos.x}_${pos.y}`)),
                    // props.callbacks.updateItem(null, {id: props.data.id, position:pos, className:`'${props.data.selected}`})
                (this.setState({positionX: pos.x, positionY:pos.y}))
                // props.onSubmit(('ggggg' + text+ `_${props.left},${props.top}`+`_${data.id}`+`_${data.color}`+`_${data.selected}`+`_${data.position.x}_${data.position.y}`))
                
                ),
                style: {
                    transition: (this.state.mouseStatus === false) ?"left .40s linear":null,
                    position: 'absolute',
                    left: hashtagMoveX(),
                    top: hashtagMoveY(),
                    width: props.viewSize==="pageview"||props.viewSize==="fullscreen"?"100%":null,
                    height: props.viewSize==="pageview"||props.viewSize==="fullscreen"?"100%":null,
                    boxShadow: '1px 1px 2px rgba(0,0,0,.15)',
                    opacity: setOpac()
                    }
            }, [
                h(NoteHeader, {
                    ...props,
                    className: 'full-notey-note',

                    key:'note-header',
                    targetRef: this.targetRef,
                    prefix: `${props.prefix}--header`,
                    removeTodo: this.props.removeTodo,
                    onSubmit: props.onSubmit,
                    buttons: [ButtonTrash, ButtonTitle]
                }),
                h(NoteBody,{
                    key:'note-body',
                    left: hashtagMoveX(),
                    top: hashtagMoveY(),
                    items: props.items,
                    // onClick: console.log('clicking!'),
                    onSubmit: props.onSubmit,
                    onChange: props.onChange,
                    notesy: props.notesy,
                    // onMouseDownMove:(pos) => (console.log(pos)),
                    // onFocus:(e)=>(console.log('focused')),
                    ...props
                })
            ],


        )
    }
}
export default Note;


