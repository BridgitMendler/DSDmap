

export default class Draggable {
    init(options, scrollScreen) {
        this.options = options;
        this.scrollScreen = scrollScreen
        
    }

    dx=0;
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
        // console.log('moving!')
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
        var elementMouseIsOver = document.elementFromPoint(xYa, yYa);

        if(this.options.useBoundaries){
            const maxX = pRect.width-el.offsetWidth;
            const maxY = pRect.height-el.offsetHeight;

            if(this.currentX>=maxX){
                this.currentX = maxX;
            }

            if(this.currentY>=maxY){
                this.currentY = maxY;
            }
        }
        if(this.options.unit==="%"){
            this.percentX = this.currentX*100/pRect.width;
            this.percentY = this.currentY*100/pRect.height;
            this.setTranslate(`${this.percentX}%`, `${this.percentY}%`);
        }else{
            this.setTranslate(`${this.currentX}px`, `${this.currentY}px`);
        }


    }

    onMouseDown = (e, id) => {
        // console.log('mousedown')
        const el = this.options.element;
        const parentElement = el.parentElement;
        const rect = el.getBoundingClientRect();
        const pRect = parentElement?parentElement.getBoundingClientRect():{left:0,top:0};
        this.currentX = - pRect.left + rect.left;
        this.currentY = - pRect.top + rect.top;
        this.mouseStatus = true
        const position = this.getPosition(e);
        this.dx = position.left - rect.left;
        this.dy = position.top - rect.top;
        // console.log(id)
        el.classList.add('draggable');
// console.log(e.currentTarget.style)
        document.addEventListener('mousemove', this.onMouseMove, null);
        document.addEventListener('mouseup', this.onMouseUp, null);
        document.addEventListener('touchmove', this.onMouseMove, {passive: false});
        document.addEventListener('touchend', this.onMouseUp, {passive: false});
        if (this.options.onMouseDownMove){
            this.options.onMouseDownMove.call(this, {
                mouseStatus: this.mouseStatus,
                e:e.currentTarget.style,
                x: this.currentX,
                y: this.currentY
            })
        }
        
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
    const allCardText = document.getElementsByClassName('listyText')
    // var elemClos = elementMouseIsOver.closestCard('.chatContainer')   
    var i
    var liRelCardTop = []
    var liListTextHeight = []
    var liAbsolCardTop = []
    var liCardHeight = []

    var screenY = this.currentY
    // console.log(allCards)
    for  (i=0; i<allCards.length; i++) {
        var absolCardTop = ((document.getElementsByClassName('listyTwo')[i].offsetTop))
        var cardHeight = ((document.getElementsByClassName('listyTwo')[i].offsetHeight))
        var relCardTop = ((document.getElementsByClassName('listyTwo')[i].offsetTop) - scrollVal)
        var listTextHeight = ((document.getElementsByClassName('listyText')[i]).offsetHeight)
        // var ListWidth = ((document.getElementsByClassName('listyTwo')[i].offsetWidth))
// console.log(myVal)
        liRelCardTop.push(relCardTop)
        liListTextHeight.push(listTextHeight)
        liAbsolCardTop.push(absolCardTop)
        liCardHeight.push(cardHeight)
        // console.log(document.getElementsByClassName('listyTwo'))


    }

    console.log(liCardHeight)
    var closestCard = liRelCardTop.reduce(function(prev, curr) {

        return (Math.abs(curr - screenY) < Math.abs(prev - screenY) ? curr : prev);
      });

    var theActual = screenY-closestCard

    var textHeight
    var bottomOfCard
    var c
    var cardDepth
for (c=0; c<liAbsolCardTop.length; c++) {
    if (closestCard+scrollVal === liAbsolCardTop[c]){
        console.log(" liAbsolCardTop[c] " + liAbsolCardTop[c])
        console.log(liListTextHeight[c], c)

        textHeight = liListTextHeight[c]
        bottomOfCard = liCardHeight[c]
        cardDepth = liAbsolCardTop[c]
    }
    else {
        console.log("closestCard-scrollVal " + (closestCard-scrollVal) + " liAbsolCardTop[c] " + liAbsolCardTop[c])
        // textHeight = counts2[c]
        // bottomOfCard = liCardHeight[c]
        // cardDepth = counts3[c]
    }
}
console.log('text height ' + textHeight)
console.log(scrollVal)
console.log(scrollVal, screenY)
console.log('cardDepth '+ cardDepth)
console.log('bottomOfCard '+ bottomOfCard)
// var theActual = screenY
// console.log(theActual, closestCard)
    var absolLoc = scrollVal + closestCard - 110
    var textBottom = absolLoc + textHeight
    var genericBottom = bottomOfCard
// var absolLoc = sourceTwo
var relCick = scrollVal+screenY
var thePosition = 0
var thePositionDrop
for  (i=0; i<allCards.length; i++) {

    var myVal = (document.getElementsByClassName('listyTwo')[i].offsetTop)

    if (relCick === myVal){
    thePosition = document.getElementsByClassName('listyTwo')[i]
    thePositionDrop = document.getElementsByClassName('listyText')[i]
    }

}
console.log(relCick)
// console.log((document.getElementsByClassName('listyTwo')))
if (typeof e.target.offsetParent!== 'undefined' && e.target.offsetParent !== null){
    // console.log(e.target.offsetParent)
if (typeof e.target.offsetParent.offsetParent !== 'undefined' && e.target.offsetParent.offsetParent !== null){
    // console.log(e.target.offsetParent.offsetParent)
if (typeof e.target.offsetParent.offsetParent.lastElementChild !== 'undefined'){
    // console.log(e.target.offsetParent.offsetParent.lastElementChild)
if (typeof e.target.offsetParent.offsetParent.lastElementChild.children[0] !== 'undefined'){
    if (typeof e.target.offsetParent.offsetParent.lastElementChild.children[0].firstElementChild.firstElementChild.firstElementChild.attributes.placeholder !== 'undefined'){
var myText = e.target.offsetParent.offsetParent.lastElementChild.children[0].firstElementChild.firstElementChild.firstElementChild.attributes.placeholder.value
}}}}}
//    console.log(myText)
// console.log(e.target.offsetParent.offsetParent.lastElementChild.children[0].firstElementChild.firstElementChild.firstElementChild.attributes.placeholder.value)
const el = this.options.element;
        this.mouseStatus = false
        const parentElement = el.parentElement;
        if(this.options.onDragComplete){
            this.options.onDragComplete.call(this, {
                x: this.currentX,
                y: this.currentY,
                px: this.percentX,
                py: this.percentY,
                text: myText
            })
        }
        if (this.options.onMouseDownMove){
            this.options.onMouseDownMove.call(this, {
                mouseStatus: this.mouseStatus,
                listy: thePosition,
                relClick: relCick,
                absolLoc: absolLoc,
                textBottom: textBottom,
                genericBottom: genericBottom,
                textHeight: textHeight
            })
        }
        // console.log(this)
        this.options.element.classList.remove('draggable');

        document.removeEventListener('mousemove', this.onMouseMove);
        document.removeEventListener('mouseup', this.onMouseUp);
        document.removeEventListener('touchmove', this.onMouseMove);
        document.removeEventListener('touchend', this.onMouseUp);
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
            // console.log(this.scrollScreen)
            return {
                left: e.clientX - dx,
                top: e.clientY - dy,
                x: e.clientX - dx,
                y: e.clientY - dy
            };
        }
    }
}

