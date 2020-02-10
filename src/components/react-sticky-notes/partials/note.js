import React from 'react';
import ReactDOM from 'react-dom';
import { h, getElementStyle } from '../utils';
import NoteDraggable from './note-draggable';
import NoteHeader from './note-header';
import NoteBody from './note-body';
import LineTo from 'react-lineto';
import {NoteBubble} from './note-bubble';
import {ButtonAddDot, ButtonTitle, ButtonMenu, ButtonHideShow, ButtonTrash } from './../buttons' ;
import { throwStatement } from 'babel-types';

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
            theRightCard: [],
            percentX: 0,
            percentY: 0,
            closestCard: 0,
            justDropped: true,
            scrollVal: props.data.scrollVal,
            theCardOffset: this.getOffset(),
            newNoteLabel: ''
            // scrollTop: document.getElementsByClassName('listyThree')[0].scrollTop

        }
    }
getOffset = () => {
    var upperSpace
    var ourCard
    var theCardOffset
    var theCardHeight
    var theCardText
    var i
    if (typeof document.getElementsByClassName('bigSpace')[0] !== 'undefined' && typeof document.getElementsByClassName('listyTwo')[0] !== 'undefined'){
        var upperSpace = ((document.getElementsByClassName('bigSpace')[0]).offsetHeight)
    var theOne = (document.getElementsByClassName('listyTwo'))
    // console.log(theOne)

    for (i=0; i<theOne.length; i++){
        if (theOne[i].innerText === this.props.data.cardText && typeof theOne[i].childNodes[1] !== 'undefined'){
            ourCard = theOne[i]
            theCardOffset = theOne[i].offsetTop
            theCardHeight = theOne[i].offsetHeight
            theCardText = theOne[i].childNodes[0].offsetHeight
            // console.log(theCardOffset)
            
        }
    }
  }
  return theCardOffset
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
                        // console.log(xVal)
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
                                    if (typeof this.state !== 'undefined'){
                    if (this.state.visibleList[this.state.visibleList.length-1]=== true) {
                        // console.log('this is me visible list' + props.data.color)
                        // console.log('this is me visible list' + props.data.od)
                        // console.log('getting state pos '+ this.state.positionX)
                        return (this.getNotePositionX()*(4/3))
                        }
                    else {
                //         // console.log('this is me')
                //     // console.log(this.state.visibleList[this.state.visibleList.length-1])
                //     // console.log('getting state pos '+ this.state.positionX)
                    return (this.getNotePositionX())
                }}

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
                                // if (this.state.relClick !== 0) {
                                //     return (numbs+(this.state.absolLoc+100)) - props.scrollScreen
                                // }
                                // else {
                                    return (numbs+200) - props.scrollScreen
                                // }
                            }
                        }
                    }
            var figureY = (100+(50*(indexHashtag+1)-randomnum))
            var figureX = (85+(200*(indexHashtag+1)-randomnum))
            }
            else {
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
                return (this.getNotePositionY() - (this.props.scrollScreen))

    }

    }

    newFunc(){
        
        var cardWidth = ((document.getElementsByClassName('listyTwo')[0]).offsetWidth)
        if (this.state.visible === true){
            if (this.state.absolCardLeft !== 0){
            return ((this.state.percentX*(cardWidth-133))+this.state.absolCardLeft)
        }
        else {
            this.hashtagMoveX()
        }
    }
        else {
            if (this.state.absolCardLeft !== 0){
            return ((this.state.percentX*(cardWidth-133))+this.state.absolCardLeft)
        }
        else {
            this.hashtagMoveX()
        }
    }
    }

    componentDidUpdate(prevProps, prevState){
        // console.log(this.state.scrollTop)
        if (prevProps.visible !== this.props.visible) {
            // console.log(prevProps.visible)
            // window.scrollTo(window.scrollX, window.scrollY - 1);
            // window.scrollTo(window.scrollX, window.scrollY + 1);
            // (document.getElementsByClassName('listyThree')[0]).dispatchEvent(new CustomEvent('scroll'))
            var self = document.getElementsByClassName(`${this.props.prefix}--full-note-${this.props.data.od}`)
            // console.log(window.innerWidth)
            if (this.props.visible === true){
                self[0].style.left = ((this.props.data.x*((window.innerWidth*.5)-133))+this.state.absolCardLeft)
            }
            else {
                self[0].style.left = ((this.props.data.x*((window.innerWidth*.77)-133))+this.state.absolCardLeft)
            }
        }
        if (prevProps.messages !== this.props.messages){
            // console.log('new message!')
        
            // var absolCardLeft
            // if (typeof document.getElementsByClassName('listyTwo')[0] !== 'undefined'){
            //     var absolCardLeft = ((document.getElementsByClassName('listyTwo')[0]).offsetLeft)}
            // var cardWidth = ((document.getElementsByClassName('listyTwo')[0]).offsetWidth)
            
            // this.newFunc()
            
            // console.log('cardWidth ' + cardWidth)
            var self = document.getElementsByClassName(`${this.props.prefix}--full-note-${this.props.data.od}`)
            var scrollVal
            var scrollValOne = document.getElementsByClassName('listyThree')[0]
            if (typeof scrollValOne !== 'undefined'){
                scrollVal = scrollValOne.scrollTop
            }
            // this.setState({scrollVal:scrollVal})
            // console.log(this.state.scrollVal)
            // console.log(scrollVal)
            var upperSpace
            var ourCard
            var theCardOffset
            var theCardHeight
            var theCardText
            var i
            if (typeof document.getElementsByClassName('bigSpace')[0] !== 'undefined' && typeof document.getElementsByClassName('listyTwo')[0] !== 'undefined'){
                var upperSpace = ((document.getElementsByClassName('bigSpace')[0]).offsetHeight)
            var theOne = (document.getElementsByClassName('listyTwo'))
            // console.log(theOne)

            for (i=0; i<theOne.length; i++){
                if (theOne[i].innerText === this.props.data.cardText){
                    ourCard = theOne[i]
                    theCardOffset = theOne[i].offsetTop
                    theCardHeight = theOne[i].offsetHeight
                    // console.log(theCardOffset)
                    
                }
            }
          }
          this.setState({
            //   scrollVal:scrollVal,
              theCardOffset:theCardOffset,
            })
        }
    }

    render(){
        // console.log(this.state.theCardOffset)
        // console.log(this.state.scrollVal)
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
                                // console.log('visible false and state visible list is true')
                                // console.log('this is me visible list' + props.data.od)
                                // console.log('getting state pos '+ this.state.positionX)
                                console.log(this.getNotePositionX() *(4/3))
                                return (this.getNotePositionX()*(4/3))
                            }
                            else {
                                // console.log('this is me')
                            // console.log(this.state.visibleList[this.state.visibleList.length-1])
                            // console.log('getting state pos '+ this.state.positionX)
                            // console.log(this.getNotePositionX())
                            return (this.getNotePositionX())
                        }
    
                        //     var whereToGo = this.getNotePositionX()
                        // return whereToGo
                        }
                        else {
                            if ((this.getNotePositionX() *.75) > 400) {
                                if (this.state.visibleList[this.state.visibleList.length-1]=== true) {
                                    // console.log('hashtag yes and (this.getNotePositionX() *.75) > 400) and state visible list is true')
                                    // console.log('getting state pos '+ this.state.positionX)
                                    // console.log(this.getNotePositionX())
                                    return (this.getNotePositionX())
                                }
                                else {
                                    // console.log('hashtag yes and (this.getNotePositionX() *.75) > 400) and state visible list is not true')
                                    // console.log(this.getNotePositionX() *.75)
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
                            // console.log('hashtag no and state visible list is false and visible list last entry is true')
                            // console.log(this.getNotePositionX() *(4/3))
                            return (this.getNotePositionX()*(4/3))
                        }
                        else {
                            // console.log('hashtag no and state visible list is false and visible list last entry is not true')
                            // console.log('this is me')
                        // console.log(this.state.visibleList[this.state.visibleList.length-1])
                        // console.log('getting state pos '+ this.state.positionX)
                        // console.log(this.getNotePositionX())
                        return (this.getNotePositionX())
                    }

                    //     var whereToGo = this.getNotePositionX()
                    // return whereToGo
                    }
                    else {
                        if ((this.getNotePositionX() *.75) > this.state.absolCardLeft) {
                            if (this.state.visibleList[this.state.visibleList.length-1]=== true) {
                                
                                // console.log('(this.getNotePositionX() *.75) > cardleft) and state visible list is true')
                                // console.log(this.getNotePositionX())
                                return (this.getNotePositionX())
                            }
                            else {
                                // console.log('(this.getNotePositionX() *.75) > cardleft) and state visible list is not true')
                            // console.log(this.getNotePositionX() *.75)
                            return (this.getNotePositionX() *.75)
                        }
                        }
                        else{
                            if (this.state.visibleList[this.state.visibleList.length-1]=== true) {
                                
                                // console.log('(this.getNotePositionX() *.75) not greater cardleft) and state visible list is true')
                                // console.log(this.getNotePositionX())
                                return (this.getNotePositionX())
                            }
                            else {
                                // console.log('(this.getNotePositionX() *.75) not greater cardleft) and state visible list is not true')
                            // console.log(this.state.visibleList[this.state.visibleList.length-1])
                            // console.log('getting state pos '+ this.state.positionX)
                            // console.log(this.getNotePositionX() *.75)
                            return (this.getNotePositionX() *.75)
                        }
                        }
                    }
                }
            }

            // console.log(this.state.visibleList)
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
                                    // if (this.state.relClick !== 0) {
                                    //     return (numbs+(this.state.absolLoc+100)) - props.scrollScreen
                                    // }
                                    // else {
                                        return (numbs+200) - props.scrollScreen
                                    // }
                                }
                            }
                        }
                var figureY = (100+(50*(indexHashtag+1)-randomnum))
                var figureX = (85+(200*(indexHashtag+1)-randomnum))
                }
                else {
                        return this.getNotePositionY() - (props.scrollScreen)
                }
            }
            else {
                   return this.getNotePositionY() - (props.scrollScreen)
            }
        }
        else {
                    return this.getNotePositionY() - (props.scrollScreen)
        }
    }

        let word_With_Numbers = props.data.od
        // console.log(word_With_Numbers)
        let word_Without_Numbers = word_With_Numbers.replace(/\D/g, '');
        // var myRand = 2
        var myRand = word_Without_Numbers[0]

const setOpac = () => {
    var theOne = (document.getElementsByClassName('listyTwo'))
    // console.log(theOne)
    var ourCard
    var theCardOffset
    var theCardHeight
    var theCardText
    var i
    for (i=0; i<theOne.length; i++){
        if (theOne[i].innerText === props.data.cardText && typeof theOne[i].childNodes[0] !== 'undefined'){
            ourCard = theOne[i]
            theCardOffset = theOne[i].offsetTop
            theCardHeight = theOne[i].offsetHeight
            theCardText = theOne[i].childNodes[0].offsetHeight
            // console.log(theCardOffset)
            
        }
    }
  
    var theOneOffset
    var theOneHeight
    var theOneText
    if (typeof theOne[0] !== 'undefined') {
        theOneOffset = theOne[0].offsetTop
        theOneHeight = theOne[0].offsetHeight
        // theOneText = theOne[0].childNodes[1].offsetHeight
    }

    if ((((this.props.data.y*((theCardOffset+theCardHeight-145-theCardText-10-upperSpace)))+theCardText+(theCardOffset-upperSpace-10))-this.props.scrollScreen)< 20&& props.scrollScreen > 0){

        
        return 0.0
    }
    else { 
        if (typeof ourCard !== 'undefined'){
            if (ourCard.attributes[0].value === 'listyTwo dropTarget selectionssss'){
                return 1
            }
            else {
                if ((((this.props.data.y*((theCardOffset+theCardHeight-145-theCardText-10-upperSpace)))+theCardText+(theCardOffset-upperSpace-10))-this.props.scrollScreen)< 20&& props.scrollScreen > 0){
                    return 0
                }
                else {
                return 0.5}
            }
        }
        else {
            if ((((this.props.data.y*((theCardOffset+theCardHeight-145-theCardText-10-upperSpace)))+theCardText+(theCardOffset-upperSpace-10))-this.props.scrollScreen)< 20&& props.scrollScreen > 0){
                return 0
            }
            else {
        return 0.5
        }}
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
var toAdd = this.state.theRightCard
var self = document.getElementsByClassName(`${props.prefix}--full-note-${props.data.od}`)
var cardWidth
var absolCardTop
var relCardTop
var absolCardLeft
if (typeof document.getElementsByClassName('listyTwo')[0] !== 'undefined' && typeof document.getElementsByClassName('bigSpace')[0] !== 'undefined' && typeof document.getElementsByClassName('listyText')[0] !== 'undefined'){
var absolCardLeft = ((document.getElementsByClassName('listyTwo')[0]).offsetLeft)
var cardWidth = ((document.getElementsByClassName('listyTwo')[0]).offsetWidth)
var upperSpace = ((document.getElementsByClassName('bigSpace')[0]).offsetHeight)
    var absolCardTop = ((toAdd.offsetTop))
    var cardHeight = ((toAdd.offsetHeight))
    var relCardTop = ((toAdd.offsetTop) - props.scrollScreen)
    var listTextHeight = ((document.getElementsByClassName('listyText')[0]).offsetHeight)}


// var percentageX = (((this.currentX-absolCardLeft))/(cardWidth))
// console.log('closest Card ' + closestCard + ' plus cardHeight ' + cardHeight + ' minus textHeight ' + textHeight + ' minus upperSpace ' + upperSpace + ' minus 155 equals ' + (closestCard+cardHeight-145-textHeight-23-upperSpace))
// console.log(' y position '+ this.currentY + ' minus textHeight ' + textHeight + ' minus 18 minus (closest card minus upper space minus 10)'+ (closestCard-upperSpace-10) +' minus scrollScreen ' + scrollVal + ' equals ' + (this.currentY-textHeight-(closestCard-upperSpace-10)))
// var percentageY = (((this.currentY-textHeight-(closestCard-upperSpace-10)))/(closestCard+cardHeight-145-textHeight-10-upperSpace))
if (typeof toAdd.childNodes !== 'undefined' && typeof toAdd !== 'undefined'){
// console.log('textHeight ' +toAdd.childNodes[1].offsetHeight)
// console.log('cardHeight ' +toAdd.offsetHeight)
}

const newFunc = () => {
    // console.log(window.innerWidth)
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
                                
                    return((this.props.data.x*((window.innerWidth*.77)-133))+absolCardLeft)
                }
                else {
                    return ((this.props.data.x*((window.innerWidth*.5)-133))+absolCardLeft)
                }
            }
        }
        else {
    if (this.props.visible === true){
        return ((this.props.data.x*((window.innerWidth*.5)-133))+absolCardLeft)
    }
    else {
        return((this.props.data.x*((window.innerWidth*.77)-133))+absolCardLeft)
    }
}}
var cIndex
const newFunc2 = () => {
    // console.log(' y position '+ this.currentY + ' minus textHeight ' + textHeight + ' minus 18 minus (closest card minus upper space minus 10)'+ (closestCard-upperSpace-10) +' minus scrollScreen ' + scrollVal + ' equals ' + (this.currentY-textHeight-(closestCard-upperSpace-10)))
// var percentageY = (((this.currentY-textHeight-(closestCard-upperSpace-10)))/(this.state.closestCard+cardHeight-145-textHeight-10-upperSpace))
    // console.log(window.innerWidth)
    // ((this.props.data.y*((window.innerWidth*.5)-133))+absolCardLeft)

    var theOne = (document.getElementsByClassName('listyTwo'))
    // console.log(theOne)
    var ourCard
    var theCardOffset
    var theCardHeight
    var theCardText
    // var cIndex

    var i
    for (i=0; i<theOne.length; i++){
        if (typeof theOne[i] !== 'undefined'){
            console.log(typeof theOne[i].lastChild)
            theCardHeight = theOne[i].offsetHeight

            if (typeof theOne[i].lastChild !== 'undefined'){
            // console.log(theOne[i].innerText === props.data.cardText)
            // console.log(theOne[i].lastChild.innerText)
            // console.log(props.data.cardText)
        if (theOne[i].lastChild.innerText === props.data.cardText){
            console.log('hi from inside!')
            ourCard = theOne[i]
            theCardOffset = theOne[i].offsetTop
            theCardHeight = theOne[i].offsetHeight
            theCardText = theOne[i].lastChild.offsetHeight
            cIndex = i
            // console.log(ourCard)
            // console.log(i)
            
        }}}
    }
  
    var theOneOffset
    var theOneHeight
    var theOneText
    if (typeof theOne[0] !== 'undefined') {
        theOneOffset = theOne[0].offsetTop
        theOneHeight = theOne[0].offsetHeight
        // theOneText = theOne[0].childNodes[1].offsetHeight
    }
    // (((this.currentY-(cardHeight*cIndex)+scrollVal))/((cardHeight-140)))

    // console.log(ourCard)
    console.log(typeof theOne[0])
    console.log(theOne[0].lastChild.innerText)
    console.log(cIndex)
    console.log(props.data.scrollVal)
    console.log(this.props.scrollScreen)
    // console.log(theOne)
    // console.log((((this.props.data.y*(theCardHeight-140))+ (theCardHeight*(cIndex)) -props.data.scrollVal)-this.props.scrollScreen) )
    console.log(this.props.data.y)
    console.log(theCardHeight-140)
    console.log(this.props.data.y*(theCardHeight-140))
    // console.log((theCardHeight*(cIndex)) -props.data.scrollVal)
    // console.log((theCardHeight*(cIndex)))
    // console.log(props.data.scrollVal)
    // console.log(this.props.scrollScreen)
    console.log(((this.props.data.y*(theCardHeight-140))+ (theCardHeight*(cIndex)) -props.data.scrollVal)-this.props.scrollScreen) 
    return (((this.props.data.y*(theCardHeight-140))+ (theCardHeight*(cIndex)) -props.data.scrollVal)-this.props.scrollScreen)  
}
// var noteNameLabel
// if (typeof self[0] !== 'undefined'){
//     if (typeof self[0].children[2] !== 'undefined'){
//         if (typeof self[0].children[2].children[2] !== 'undefined'){
//             if (typeof self[0].children[2].children[2].children[0] !== 'undefined'){
//                 noteNameLabel = (self[0].children[2].children[2].children[0].innerText)
//             }
//         }
//     }
// }

// const findNot= ()=>{
//     var i
//     for (i=0; i <props.newNot.length; i++){
//         // console.log(props.newNot[i])
//         // console.log(noteNameLabel)
//     }
// }

// findNot()
// console.log(props.data.senderId)

newFunc2()
var newText = props.data.text.split(/[_,]+/);
        return h(NoteDraggable, {
                scrollScreen: props.scrollScreen,
                handleScroll: props.handleScroll,
                className: `${props.prefix}--full-note-${props.data.od} full-notey-note' ${props.data.od}`,
                selected: props.data.selected,
                target: this.targetRef,
                // onChange:newFunc(),
                useBoundaries:(pos) =>(console.log('mouseDown')),
                onMouseDownMove2:(pos) => (this.setState({mouseStatus:pos.mouseStatus})),
                // onMouseDownMove:(pos) => (this.setState({relClick:pos.relClick})),
                onDragComplete:(pos)=> (setWhatDragShouldDo(),
                (this.setState({justDropped: true, newNoteLabe: pos.newNoteLabel, mouseStatus: false, scrollVal: pos.scrollVal,theRightCard: pos.theRightCard, closestCard: pos.closestCard, cardHeight: pos.cardHeight, textHeight: pos.textHeight, absolCardLeft:pos.absolCardLeft, percentX:pos.percentX, percentY:pos.percentY})),
                props.onSubmit(('ggggg' + `${pos.text}`+ `_${pos.percentX},${pos.percentY}`+`_${props.data.od}`+`_${props.data.color}`+`_${props.data.selected}`+`_${pos.percentX}_${pos.percentY}`+`_${this.state.theRightCard.innerText}`+ `_${0}`+`_${props.data.senderId}`+`_moved by ${props.currentUser.id}`))
                //  (this.setState({positionX: pos.x, positionY:pos.y}
                    // )
                    // )                
                ),
                style: {
                    transition: (this.state.mouseStatus === false) ?"left .40s linear":null,
                    position: 'absolute',
                    left: newFunc(),
                    top: newFunc2(),
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
                    newNot: props.newNot,
                    data:props.data,
                    buttons: [ButtonTrash, ButtonTitle]
                }
                
                ),
                h(NoteBody,{
                    key:'note-body',
                    left: hashtagMoveX(),
                    top: hashtagMoveY(),
                    percentX: this.state.percentX,
                    percentY: this.state.percentY,
                    items: props.items,
                    currentUser:props.currentUser,
                    scrollTop: props.scrollScreen,
                    scrollVal: props.data.scrollVal,
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