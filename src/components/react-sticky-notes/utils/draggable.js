

export default class Draggable {
    init(options, scrollScreen) {
        this.options = options;
        this.scrollScreen = scrollScreen
        
    }

    dx=0
    dy=0;
    percentX = 0;
    percentY = 0;
    currentX = 0;
    currentY = 0;
    mouseStatus= false;

    onMouseMove = (e) => {
        if (e.cancelable) {
            e.preventDefault();
        }
        const el = this.options.element;
        const parentElement = el.parentElement;
        const pRect = parentElement?parentElement.getBoundingClientRect():{left:0,top:0};
        const position = this.getPosition(e, this.dx, this.dy);
        let x = position.left - pRect.left;
        let y = position.top - pRect.top;
        this.currentX = x>0?x:0;
        this.currentY = y>0?y:0;
        var xYa = e.clientX;
        var yYa = e.clientY;
        // console.log(xYa)
        // console.log(parentElement.getBoundingClientRect())
        // console.log(position)
        var elementMouseIsOver = document.elementFromPoint(xYa, yYa);
        var absolCardLeft = ((document.getElementsByClassName('listyTwo')[0]).offsetLeft)
        var cardWidth = ((document.getElementsByClassName('listyTwo')[0]).offsetWidth)
        var upperSpace = ((document.getElementsByClassName('bigSpace')[0]).offsetHeight)
// console.log(this.currentX)
        if(this.options.useBoundaries){
            const maxX = cardWidth + absolCardLeft-133;
            const minY = 75;
            const minX = absolCardLeft

            if(this.currentX>=maxX){
                this.currentX = maxX;
            }

            if(this.currentY<=minY){
                this.currentY = minY;
            }
            if(this.currentX<=minX){
                this.currentX = minX;
            }
        }
        if(this.options.unit==="%"){
            this.percentX = this.currentX*100/pRect.width;
            this.percentY = this.currentY*100/pRect.height;
            this.setTranslate(`${this.percentX}%`, `${this.percentY}%`);
        }
        else{
            this.setTranslate(`${this.currentX}px`, `${this.currentY}px`);
        }


    }

    onMouseDown = (e, id) => {
        // console.log('mousedown')
        const el = this.options.element;
        const parentElement = el.parentElement;
        const rect = el.getBoundingClientRect();
        const pRect = parentElement?parentElement.getBoundingClientRect():{left:0,top:0};
        
        this.currentY = - pRect.top + rect.top;
        this.mouseStatus = true
        const position = this.getPosition(e, this.dx, this.dy);
        this.currentX = position.left - pRect.left;
        // const position = this.getPosition(e);
        this.dx = position.left - rect.left;
        this.dy = position.top - rect.top;
        // console.log(this.currentX)
        el.classList.add('draggable');
console.log(window.event)
        document.addEventListener('mousemove', this.onMouseMove, null);
        document.addEventListener('mouseup', this.onMouseUp, null);
        document.addEventListener('touchmove', this.onMouseMove, {passive: false});
        document.addEventListener('touchend', this.onMouseUp, {passive: false});
        if (this.options.onMouseDownMove2){
            this.options.onMouseDownMove2.call(this, {
                mouseStatus: this.mouseStatus,
                e:e.currentTarget.style,
                x: this.currentX,
                y: this.currentY
            })
        }
        console.log(this.currentY)   
    }
    
    // var elemClos = elementMouseIsOver.closestCard('.chatContainer')   
    // var i
    // for  (i=0; i<allCards.length; i++) {
    //     (document.getElementsByClassName('listyTwo')[i].offsetTop) - 
    // }
    // const allCards = document.getElementsByClassName('listyTwo');
    // const sourceTwo = document.getElementsByClassName('listyThree')[0].scrollTop;

    onMouseUp = (e) => {

    const allCards = document.getElementsByClassName('listyTwo');
    const scrollVal = document.getElementsByClassName('listyThree')[0].scrollTop;
    var i
    var b
    var c
    var liRelCardTop = []
    var liListTextHeight = []
    var liAbsolCardTop = []
    var liCardHeight = []
    var screenY = this.currentY
    var screenX = this.currentX
    var textHeight
    var cardHeight
    this.mouseStatus = false
    var absolCardLeft = ((document.getElementsByClassName('listyTwo')[0]).offsetLeft)
    var cardWidth = ((document.getElementsByClassName('listyTwo')[0]).offsetWidth)
    var upperSpace = ((document.getElementsByClassName('bigSpace')[0]).offsetHeight)
// console.log(upperSpace)
    for  (i=0; i<allCards.length; i++) {
        var absolCardTop = ((document.getElementsByClassName('listyTwo')[i].offsetTop))
        var cardHeight = ((document.getElementsByClassName('listyTwo')[i].offsetHeight))
        var relCardTop = ((document.getElementsByClassName('listyTwo')[i].offsetTop) - scrollVal)
        var listTextHeight = ((document.getElementsByClassName('listyText')[i]).offsetHeight)

        liRelCardTop.push(relCardTop)
        liListTextHeight.push(listTextHeight)
        liAbsolCardTop.push(absolCardTop)
        liCardHeight.push(cardHeight)

    }
    // console.log(absolCardLeft)
    // console.log(cardWidth)
    var closestCard = liRelCardTop.reduce(function(prev, curr) {
        return (Math.abs(curr - screenY) < Math.abs(prev - screenY) ? curr : prev);
      });
    var absolLoc = scrollVal + closestCard - upperSpace
    var relLoc = closestCard -upperSpace
    var relClick = scrollVal + screenY
    var myCard
    // console.log(relClick)

    for (c=0; c<liAbsolCardTop.length; c++) {
        if (closestCard+scrollVal === liAbsolCardTop[c]){
            // console.log(" liAbsolCardTop[c] " + liAbsolCardTop[c])
            // console.log(liListTextHeight[c], c)
            myCard = liAbsolCardTop[c]
            textHeight = liListTextHeight[c]
            cardHeight = liCardHeight[c]
        }
    }
    var theRightCard
    var getCards = document.getElementsByClassName('listyTwo')
    for (b = 0; b<getCards.length; b++){
        if (getCards[b].offsetTop === myCard){
            theRightCard = getCards[b]
        }
        // console.log(getCards[b].offsetTop, myCard)
    }

    if (typeof e.target.offsetParent!== 'undefined' && e.target.offsetParent !== null){
        if (typeof e.target.offsetParent.offsetParent !== 'undefined' && e.target.offsetParent.offsetParent !== null){
            if (typeof e.target.offsetParent.offsetParent.lastElementChild !== 'undefined' && e.target.offsetParent.offsetParent.lastElementChild !== null){
                if (typeof e.target.offsetParent.offsetParent.lastElementChild.children[0] !== 'undefined' &&  e.target.offsetParent.offsetParent.lastElementChild.children[0] !== null){
                    if (typeof e.target.offsetParent.offsetParent.lastElementChild.children[0].firstElementChild !== 'undefined' && e.target.offsetParent.offsetParent.lastElementChild.children[0].firstElementChild !== null){
                        if (typeof e.target.offsetParent.offsetParent.lastElementChild.children[0].firstElementChild.firstElementChild !== 'undefined' && e.target.offsetParent.offsetParent.lastElementChild.children[0].firstElementChild.firstElementChild !== null){
                            if (typeof e.target.offsetParent.offsetParent.lastElementChild.children[0].firstElementChild.firstElementChild.firstElementChild !== 'undefined' &&e.target.offsetParent.offsetParent.lastElementChild.children[0].firstElementChild.firstElementChild.firstElementChild !== null){
                                // console.log(e.target.offsetParent.offsetParent.lastElementChild.children[0].firstElementChild.firstElementChild)
                                if (typeof e.target.offsetParent.offsetParent.lastElementChild.children[0].firstElementChild.firstElementChild.firstElementChild.attributes.placeholder !== 'undefined'){
                                    var myText = e.target.offsetParent.offsetParent.lastElementChild.children[0].firstElementChild.firstElementChild.firstElementChild.attributes.placeholder.value
                                }
                            }
                        }
                    }
                }
            }
        }
    }
var percentageX = (((this.currentX-absolCardLeft))/(cardWidth-133))
var yVal = this.currentY +upperSpace -scrollVal

var theOne = (document.getElementsByClassName('listyTwo'))
// console.log(theOne)
var ourCard
var theCardOffset
var theCardHeight
var theCardText
var cIndex
var i
for (i=0; i<theOne.length; i++){
    if (theOne[i].innerText === theRightCard.innerText){
        ourCard = theOne[i]
        theCardOffset = theOne[i].offsetTop
        theCardHeight = theOne[i].offsetHeight
        // theCardText = theOne[i].childNodes[1].offsetHeight
        cIndex = i
        // console.log(ourCard)
        // console.log(i)
        
    }
}
// console.log(' card width ' + cardWidth + ' minus 125 equals ' + (cardWidth-133))
// console.log('x position' + this.currentX + ' minus absolCardLeft ' + absolCardLeft + ' equals ' +(this.currentX-absolCardLeft) )

console.log('closest Card ' + closestCard + ' plus cardHeight ' + cardHeight + ' minus textHeight ' + textHeight + ' minus upperSpace ' + upperSpace + ' minus 155 equals ' + (closestCard+cardHeight-145-textHeight-23-upperSpace))
var percentageY = (((this.currentY-(cardHeight*cIndex)+scrollVal))/((cardHeight-140)))
console.log(' (y position '+ this.currentY + ' minus textHeight ' + textHeight + ' minus (closest card minus upper space minus 10)'+ (closestCard-upperSpace-10) +') divided by (closest card ' + closestCard + ' plus cardHeight ' + cardHeight + ' minus 145 for note, 10 for margin, and minus text height ' + textHeight + ' minus upperSpace' + upperSpace + 'equals ' + percentageY)
console.log('numerator '+((this.currentY-(cardHeight*cIndex)+scrollVal)))
console.log('denominator '+((cardHeight-140)))
// var yDenominator = 
// console.log(percentageX)
console.log(percentageY, closestCard)
console.log(theRightCard)
    if(this.options.onDragComplete){
        this.options.onDragComplete.call(this, {
            x: this.currentX,
            y: this.currentY,
            px: this.percentX,
            py: this.percentY,
            text: myText,
            mouseStatus: this.mouseStatus,
            relClick: relClick,
            relLoc: relLoc,
            absolLoc: absolLoc,
            cardHeight: cardHeight,
            textHeight: textHeight,
            absolCardLeft: absolCardLeft,
            cardWidth: cardWidth,
            upperSpace: upperSpace,
            theRightCard: theRightCard,
            percentX: percentageX,
            percentY: percentageY,
            closestCard: closestCard,
            scrollVal: scrollVal
        })
    }
    if (this.options.onMouseDownMove){
        this.options.onMouseDownMove.call(this, {
            mouseStatus: this.mouseStatus,
            relClick: relClick,
            relLoc: relLoc,
            absolLoc: absolLoc,
            cardHeight: cardHeight,
            textHeight: textHeight
        })
    }
    this.options.element.classList.remove('draggable');
    document.removeEventListener('mousemove', this.onMouseMove);
    document.removeEventListener('mouseup', this.onMouseUp);
    document.removeEventListener('touchmove', this.onMouseMove);
    document.removeEventListener('touchend', this.onMouseUp);


    // console.log(scrollVal)
    // console.log('scrollVal'+ screenY)
    // console.log('cardHeight '+ cardHeight)
    }
    
    setTranslate(x, y) {
        if(this.options.element){
            if(!this.options.disabledAxisX){
                this.options.element.style.left = x;
            }
            if(!this.options.disabledAxisY){
                this.options.element.style.top = y;
            }
        }
    }
    getPosition(e, dx=0, dy=0){
        if ((/touch/).test(e.type)) {
            return {
                left: e.touches[0].clientX - dx,
                top: e.touches[0].clientY - dy,
                x: e.touches[0].clientX - dx,
                y: e.touches[0].clientY - dy
            };
        } else {
            // console.log( e.clientX, dx)
            if (dx=0){
                // console.log( e.clientX, dx)
            }
            else {
                // console.log( e.clientX, dx)
            return {
                left: e.clientX - 40,
                top: e.clientY - dy,
                x: e.clientX - dx,
                y: e.clientY - dy
            };
        }}
    }
}

