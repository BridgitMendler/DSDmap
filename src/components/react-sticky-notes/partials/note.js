import React from 'react';
import ReactDOM from 'react-dom';
import { h, getElementStyle } from '../utils';
import NoteDraggable from './note-draggable';
import NoteHeader from './note-header';
import NoteBody from './note-body';
import LineTo from 'react-lineto';
import {NoteBubble} from './note-bubble';
import {ButtonAddDot, ButtonTitle, ButtonMenu, ButtonHideShow, ButtonTrash } from './../buttons' ;

class Note extends React.Component{
    constructor(props){
        super(props);
        this.targetRef = React.createRef();
        this.state= {
            match: false,
            positionX: this.hashtagMoveX(),
            positionY: this.hashtagMoveY(),
            mouseStatus: false,
            firstAv: [],
            firstRan: this.getRandomThree(),
            relClick: 0,
            listy: [],
            absolLoc: 0,
            visibleList: [],
            textHeight: 0,
            cardHeight: 0,
            cardWidth: 0,
            absolCardLeft: 0,
            upperSpace: 0,
            selectedLine: '',
            theRightCard: []

        }
    }

    // const [selectedLine, setSelectedLine] = useState();
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
        var i = 1
        while (i< this.props.notesy.length){
            // console.log(this.props.notesy[i])
            var newVal = this.props.notesy[i]
            if ((newVal.od) !== null){
            // console.log(this.props.notesy, typeof this.props.data.od)
            i++
            if (newVal.od === this.props.data.od){
                // console.log(newVal)
                var yVal = parseInt(newVal.position.y)
                // console.log(yVal)
                return yVal
            }
        }
            else {
                // console.log('else' + this.props.data.position.y)
                return this.props.data.position.y
            }
        }
            // else {return 0}
        // }
        
    }
// }


getNotePositionX =() => {
            var i = 1
            while (i< this.props.notesy.length){
                // console.log(Object.keys(this.props.notesy[i]).indexOf('od'))
                var newVal = this.props.notesy[i]
                if ((newVal.od) !== null){
                // console.log(this.props.data.color, this.props.data.od)
                i++
                if (newVal.od === this.props.data.od){
    
                    var xVal = parseInt(newVal.position.x)
                    if (typeof this.state !== 'undefined'){
                return xVal
            }
        }
            }
            else {
                console.log('else ' + this.props.data.position.x)
                return this.props.data.position.x
            }
        }}
hashtagMoveX = () => {
    var precision = 100;
    var n = Math.floor(Math.random() * (10-(-10)) + (-10))
    var randomnum = Math.floor(Math.random() * (55 * precision - 1 * precision) + 1 * precision) / (1*precision);
    var props = this.props;
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
                        if (typeof this.state !== 'undefined'){
                        if (this.state.visibleList[this.state.visibleList.length-1]=== true) {
                            // console.log('this is me visible list' + props.data.color)
                            // console.log('this is me visible list' + props.data.od)
                            // console.log('getting state pos '+ this.state.positionX)
                            return (this.getNotePositionX()*(4/3))
                        }
                        else {
                            // console.log('this is me')
                        // console.log(this.state.visibleList[this.state.visibleList.length-1])
                        // console.log('getting state pos '+ this.state.positionX)
                        return (this.getNotePositionX())
                    }}

                    //     var whereToGo = this.getNotePositionX()
                    // return whereToGo
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
                                    
                    // if (this.state.visibleList[this.state.visibleList.length-1]=== true) {
                        // console.log('this is me visible list' + props.data.color)
                        // console.log('this is me visible list' + props.data.od)
                        // console.log('getting state pos '+ this.state.positionX)
                        return (this.getNotePositionX()*(4/3))
                        }
                //     else {
                //         // console.log('this is me')
                //     // console.log(this.state.visibleList[this.state.visibleList.length-1])
                //     // console.log('getting state pos '+ this.state.positionX)
                //     return (this.getNotePositionX())
                // }

                //     var whereToGo = this.getNotePositionX()
                // return whereToGo
                // }
                else {
                    if ((this.getNotePositionX() *.75) > 400) {
                        if (this.state.visibleList[this.state.visibleList.length-1]=== true) {
                            
                            // console.log('getting state pos '+ this.state.positionX)
                            return (this.getNotePositionX())
                        }
                        else {
                        // console.log(this.state.visibleList[this.state.visibleList.length-1])
                        // console.log('getting state pos '+ this.state.positionX)
                        return (this.getNotePositionX() *.75)
                    }
                    }
                    else{
                        return 400
                    }
                }
            }
        }

hashtagMoveY= () => {
    if (typeof this.state !== 'undefined'){
    var precision = 100;
    var n = Math.floor(Math.random() * (10-(-10)) + (-10))
    var randomnum = Math.floor(Math.random() * (55 * precision - 1 * precision) + 1 * precision) / (1*precision);
    var props = this.props;
    var i
    if (props.hashtagDups.length > 0) {
        if (Object.keys(props.myHashtags).includes(props.data.od)){
            const myValue = (props.myHashtags)[(props.data.od)][0][0]
            if (props.hashtagDups.includes(myValue)) {
                var indexHashtag =props.hashtagDups.indexOf(myValue)
                const vals = (Object.values(props.myHashtags))
                var i
                var topPos = []
                var total = 0
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
                                if (this.state.relClick !== 0) {
                                    return (numbs+(this.state.absolLoc+100)) - props.scrollScreen
                                }
                                else {
                                    return (numbs+200) - props.scrollScreen
                                }
                            }
                        }
                    }
            var figureY = (100+(50*(indexHashtag+1)-randomnum))
            var figureX = (85+(200*(indexHashtag+1)-randomnum))
            }
            else {
                // if (this.state.relClick !== 0) {
                    // if (this.state.relClick > this.state.absolLoc && this.state.relClick < (this.state.cardHeight+this.state.absolLoc)){
                        // if (this.state.relClick < (this.state.absolLoc + this.state.textHeight+30)){
                            // return (this.state.absolLoc + this.state.textHeight+40)- (props.scrollScreen)
                        // }
                        // else if (this.state.relClick < this.state.absolLoc){
                        // console.log(this.state.relClick)
                            // return (this.state.absolLoc + this.state.textHeight+30)- (props.scrollScreen)
                        // }
                        // else {
                        // console.log('this is happening')
                            // return this.state.relClick - (props.scrollScreen)}
                        // }
                    // else{
                // console.log('relClicksing' + this.state.relClick)
                // console.log('relClick ' + this.state.relClick + ' generictop ' + this.state.absolLoc+ ' card height ' + this.state.cardHeight + ' text height ' + this.state.textHeight)
                        // return this.state.relClick - (props.scrollScreen)
                //     // }
                // }
                // else {
                    return this.getNotePositionY() - (props.scrollScreen)
                }
            }
            else {
                return this.getNotePositionY() - (props.scrollScreen)
            }
            
        }
    // else {
        // if (this.state.relClick !== 0) {
        // console.log('relClicksing')
        // console.log('relClick ' + this.state.relClick + ' generictop ' + this.state.absolLoc+ ' cardHeight ' + this.state.cardHeight + ' text height ' + this.state.textHeight)
            // return this.state.relClick - (props.scrollScreen)
        // }
        else {
    // console.log('this is happening')
            return this.getNotePositionY() - (props.scrollScreen)
        }
    }
// }
else {
    // console.log('hashtag dups is 0, moving on to relclick')
    // if (this.state.relClick !== 0) {
        // console.log('relclick is not zero')
        // if (this.state.relClick > this.state.absolLoc && this.state.relClick < (this.state.cardHeight+this.state.absolLoc)){
            // console.log('relclick is in range')
            // if (this.state.relClick < (this.state.absolLoc + this.state.textHeight+30)){
                // console.log('hitting the text')
                // return ((this.state.absolLoc + this.state.textHeight)- (props.scrollScreen)+20)
            // }
            // else if (this.state.relClick > ((this.state.cardHeight - this.state.absolLoc)-145)) {
                // console.log('below the range')
                // var dif = ((this.state.cardHeight - this.state.absolLoc)-150)
                // console.log(dif)
                // return (dif)
            // }
            // else {
                // return this.state.relClick
            // }

        // }
        // else if (this.state.relClick < (this.state.absolLoc)){
            // console.log('above the range')
            // console.log('relClick ' + (this.state.relClick) + ' generictop ' + (this.state.absolLoc)+ ' generic bottom ' + (this.state.cardHeight) + ' text height ' + (this.state.textHeight))
            // return (this.state.absolLoc + this.state.textHeight + 30)- (props.scrollScreen)

        // }
        // else{
            // if (typeof this.state.relClick !== 'undefined'){
                // console.log('relclick is undefined')
                // console.log(this.getNotePositionY() - (props.scrollScreen))
                // console.log('relClick ' + (this.state.relClick) + ' absolLoc ' + (this.state.absolLoc)+ ' cardHeight ' + (this.state.cardHeight) + ' text height ' + (this.state.textHeight))
                return (this.getNotePositionY() - (this.props.scrollScreen))
            // }
            // else {
                // console.log('relclick is out of range')
                // console.log(this.getNotePositionY() - (props.scrollScreen))
                // return this.getNotePositionY() - (props.scrollScreen)
            // }
        // }
    }
    // else {
        // console.log('relclick is 0')
        // console.log((this.state.absolLoc + this.state.textHeight + 30)- (props.scrollScreen))
        // return ((this.state.absolLoc + this.state.textHeight + 30)- (props.scrollScreen))
        // return this.getNotePositionY() - (props.scrollScreen)
    // }
// }
// }
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
        // console.log(this.hashtagMoveX)
        // console.log(this.state.relClick)
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
            // console.log('doin it!')
            var joined = this.state.visibleList.concat(this.props.visible);
            this.setState({ visibleList: joined })
        }
        // console.log(this.props.visible)
        // console.log(this.state.visibleList)
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
                                        
                            if (this.state.visibleList[this.state.visibleList.length-1]=== true) {
                                // console.log('this is me visible list' + props.data.color)
                                // console.log('this is me visible list' + props.data.od)
                                // console.log('getting state pos '+ this.state.positionX)
                                return (this.getNotePositionX()*(4/3))
                            }
                            else {
                                // console.log('this is me')
                            // console.log(this.state.visibleList[this.state.visibleList.length-1])
                            // console.log('getting state pos '+ this.state.positionX)
                            return (this.getNotePositionX())
                        }
    
                        //     var whereToGo = this.getNotePositionX()
                        // return whereToGo
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
                                        
                        if (this.state.visibleList[this.state.visibleList.length-1]=== true) {
                            // console.log('this is me visible list' + props.data.color)
                            // console.log('this is me visible list' + props.data.od)
                            // console.log('getting state pos '+ this.state.positionX)
                            return (this.getNotePositionX()*(4/3))
                        }
                        else {
                            // console.log('this is me')
                        // console.log(this.state.visibleList[this.state.visibleList.length-1])
                        // console.log('getting state pos '+ this.state.positionX)
                        return (this.getNotePositionX())
                    }

                    //     var whereToGo = this.getNotePositionX()
                    // return whereToGo
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
                            return (this.getNotePositionX() *.75)
                        }
                        }
                        else{
                            return 400
                        }
                    }
                }
            }

    const hashtagMoveY= () => {
        var i
        if (props.hashtagDups.length > 0) {
            if (Object.keys(props.myHashtags).includes(props.data.od)){
                const myValue = (props.myHashtags)[(props.data.od)][0][0]
                if (props.hashtagDups.includes(myValue)) {
                    var indexHashtag =props.hashtagDups.indexOf(myValue)
                    const vals = (Object.values(props.myHashtags))
                    var i
                    var topPos = []
                    var total = 0
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
                                    if (this.state.relClick !== 0) {
                                        return (numbs+(this.state.absolLoc+100)) - props.scrollScreen
                                    }
                                    else {
                                        return (numbs+200) - props.scrollScreen
                                    }
                                }
                            }
                        }
                var figureY = (100+(50*(indexHashtag+1)-randomnum))
                var figureX = (85+(200*(indexHashtag+1)-randomnum))
                }
                else {
                    // if (this.state.relClick !== 0) {
                    //     if (this.state.relClick > this.state.absolLoc && this.state.relClick < (this.state.cardHeight+this.state.absolLoc)){
                    //         if (this.state.relClick < (this.state.absolLoc + this.state.textHeight+30)){
                    //             return (this.state.absolLoc + this.state.textHeight+40)- (props.scrollScreen)
                    //         }
                    //         else if (this.state.relClick < this.state.absolLoc){
                    //         // console.log(this.state.relClick)
                    //             return (this.state.absolLoc + this.state.textHeight+30)- (props.scrollScreen)
                    //         }
                    //         else {
                    //         // console.log('this is happening')
                    //             return this.state.relClick - (props.scrollScreen)}
                    //         }
                    //     else{
                    // // console.log('relClicksing' + this.state.relClick)
                    // // console.log('relClick ' + this.state.relClick + ' generictop ' + this.state.absolLoc+ ' card height ' + this.state.cardHeight + ' text height ' + this.state.textHeight)
                    //         return this.state.relClick - (props.scrollScreen)
                    //     }
                    // }
                    // else {
                        return this.getNotePositionY() - (props.scrollScreen)
                    // }
                // }
            }
        // else {
            // if (this.state.relClick !== 0) {
            // console.log('relClicksing')
            // console.log('relClick ' + this.state.relClick + ' generictop ' + this.state.absolLoc+ ' cardHeight ' + this.state.cardHeight + ' text height ' + this.state.textHeight)
                // return this.state.relClick - (props.scrollScreen)
            // }
            // else {
        // console.log('this is happening')
                // return this.getNotePositionY() - (props.scrollScreen)
            // }
        // }
    }
    else {
        // console.log('hashtag dups is 0, moving on to relclick')
        // if (this.state.relClick !== 0) {
            // console.log('relclick is not zero')
            // if (this.state.relClick > this.state.absolLoc && this.state.relClick < (this.state.cardHeight+this.state.absolLoc)){
                // console.log('relclick is in range')
                // if (this.state.relClick < (this.state.absolLoc + this.state.textHeight+30)){
                    // console.log('hitting the text')
                    // return ((this.state.absolLoc + this.state.textHeight)- (props.scrollScreen)+20)
                // }
                // else if (this.state.relClick > ((this.state.cardHeight - this.state.absolLoc)-145)) {
                    // console.log('below the range')
                    // var dif = ((this.state.cardHeight - this.state.absolLoc)-150)
                    // console.log(dif)
                    // return (dif)
                // }
                // else {
                    // return this.state.relClick
                // }

            // }
            // else if (this.state.relClick < (this.state.absolLoc)){
                // console.log('above the range')
                // console.log('relClick ' + (this.state.relClick) + ' generictop ' + (this.state.absolLoc)+ ' generic bottom ' + (this.state.cardHeight) + ' text height ' + (this.state.textHeight))
                // return (this.state.absolLoc + this.state.textHeight + 30)- (props.scrollScreen)

            // }
            // else{
                // if (typeof this.state.relClick !== 'undefined'){
                    // console.log('relclick is undefined')
                    // console.log(this.getNotePositionY() - (props.scrollScreen))
                    // console.log('relClick ' + (this.state.relClick) + ' absolLoc ' + (this.state.absolLoc)+ ' cardHeight ' + (this.state.cardHeight) + ' text height ' + (this.state.textHeight))
                    return this.getNotePositionY() - (props.scrollScreen)
                }}
                else {
                    // console.log('relclick is out of range')
                    // console.log(this.getNotePositionY() - (props.scrollScreen))
                    return this.getNotePositionY() - (props.scrollScreen)
                // }
            }
        }
        // else {
            // console.log('relclick is 0')
            // console.log((this.state.absolLoc + this.state.textHeight + 30)- (props.scrollScreen))
            // return ((this.state.absolLoc + this.state.textHeight + 30)- (props.scrollScreen))
            // return this.getNotePositionY() - (props.scrollScreen)
        // }
    // }
// }

        let word_With_Numbers = props.data.od
        // console.log(word_With_Numbers)
        let word_Without_Numbers = word_With_Numbers.replace(/\D/g, '');
        // var myRand = 2
        var myRand = word_Without_Numbers[0]

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
    if ((props.data.y - props.scrollScreen)< 20&& props.scrollScreen > 0){
        return 0.0
    }
    else { 
        return 1
    }
}

const settingLine = (value) =>{
    //  console.log('hi')
    const regexp = /note/
    var result = regexp.test(value)
    // console.log(result, value)
    if (result === false){
        this.setState({selectedLine:value})
//   setSelectedLine(value)
//   console.log(selectedLine)
}
else {
    const newValue = value.replace('rs-notes--note-', '')
    this.setState({selectedLine:newValue})
    // console.log(newValue)
    // setSelectedLine(newValue)
    // console.log(selectedLine)

}
}

const settingLineOut = (value) => {
    this.setState({selectedLine:value})
    // setSelectedLine(value)
}
// console.log('relClick' +this.state.relClick)
// console.log('absoLoc' +this.state.absolLoc)
// console.log('textHeight' +this.state.textHeight)
// console.log('cardHeight' +this.state.cardHeight)
var self = document.getElementsByClassName(`${props.prefix}--full-note-${props.data.od}`)
// var dest = document.getElementsByClassName()
// console.log(this.state.theRightCard)

var toAdd = this.state.theRightCard


var newText = props.data.text.split(/[_,]+/);
        return h(NoteDraggable, {
                scrollScreen: props.scrollScreen,
                handleScroll: props.handleScroll,
                className: `${props.prefix}--full-note-${props.data.od} full-notey-note' ${props.data.od}`,
                selected: props.data.selected,
                target: this.targetRef,
                useBoundaries:(pos) =>(console.log('mouseDown')),
                onMouseDownMove2:(pos) => (this.setState({mouseStatus:pos.mouseStatus})),
                onMouseDownMove:(pos) => (this.setState({relClick:pos.relClick})),
                onDragComplete:(pos)=> (setWhatDragShouldDo(),
                (this.setState({mouseStatus: false, relClick:pos.relClick, upperSpace:pos.upperSpace, absolLoc:pos.absolLoc, textHeight:pos.textHeight, cardHeight: pos.cardHeight, absolCardLeft: pos.absolCardLeft, cardWidth: pos.cardWidth, theRightCard: pos.theRightCard})),
                props.onSubmit(('ggggg' + `${pos.text}`+ `_${pos.x},${pos.y}`+`_${props.data.od}`+`_${props.data.color}`+`_${props.data.selected}`+`_${pos.x}_${pos.y}`)),
                 (this.setState({positionX: pos.x, positionY:pos.y}))                
                ),
                style: {
                    transition: (this.state.mouseStatus === false) ?"left .40s linear":null,
                    position: 'absolute',
                    left: hashtagMoveX(),
                    top: hashtagMoveY(),
                    // width: 115,
                    // height: 115,
                    boxShadow: '1px 1px 2px rgba(0,0,0,.15)',
                    opacity: setOpac()
                    }
            }, [
                h('div', {
                    key: `${props.prefix}-line`, 
                    className: `${props.prefix}-line`,
                    style: getElementStyle('container', props)
                }, 
                h("span", null,
                    props.hidden ? (props.visible === true)? (h( LineTo, { borderColor:'wheat',borderStyle: 'dashed', borderWidth: 1, from:`dropped${props.data.od}`, to:`rs-notes--full-note-${props.data.od}`, toAnchor: 'top right', key: `note-${props.data.od}`,...props, data: props.data } )):null: 
                    h( LineTo, { opacity:(this.state.selectedLine===props.data.od)?1:0,borderColor: '#9FA7B8', borderStyle: 'dashed', borderWidth: 1, from:`dropped${props.data.od}`, to:`rs-notes--full-note-${this.state.selectedLine}`, toAnchor: 'top right', key: `note-${props.data.od}`,...props, data: props.data } ))
                ),
                h('div', {
                    key: `${props.prefix}-bubble`, 
                    className: `${props.prefix}-bubble`,
                    width: 30,
                    height: 30,
                    onMouseEnter: ()=> (settingLine(window.event.relatedTarget.classList[0])),
                    onMouseOut: () => (settingLineOut(null)),
                }, 
                h( NoteBubble, {
                    settingLine: settingLine, 
                    convoBoxSize: props.convoBoxSize, 
                    visible: props.visible, 
                    myArrayPos: props.myArrayPos, 
                    myArray: props.myArray, 
                    key: `note-${props.data.od}`,
                    posX: this.hashtagMoveX(),
                    posY: this.hashtagMoveY(),
                    ...props, 
                    data:props.data
                })),
                h(NoteHeader, {
                    ...props,
                    className: 'full-notey-note',

                    key:'note-header',
                    targetRef: this.targetRef,
                    prefix: `${props.prefix}--header`,
                    removeTodo: this.props.removeTodo,
                    onSubmit: props.onSubmit,
                    buttons: [ButtonTrash, ButtonTitle]
                }
                
                ),
                h(NoteBody,{
                    key:'note-body',
                    left: hashtagMoveX(),
                    top: hashtagMoveY(),
                    items: props.items,
                    onSubmit: props.onSubmit,
                    onChange: props.onChange,
                    notesy: props.notesy,
                    ...props
                }),
            ],


        )
    }
}
export default Note;


