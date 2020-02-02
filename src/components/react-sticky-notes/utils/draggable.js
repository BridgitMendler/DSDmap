

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
    // var elemClos = elementMouseIsOver.closest('.chatContainer')   
    // var i
    // for  (i=0; i<sourceThree.length; i++) {
    //     (document.getElementsByClassName('listyTwo')[i].offsetTop) - 
    // }
    // const sourceThree = document.getElementsByClassName('listyTwo');
    // const sourceTwo = document.getElementsByClassName('listyThree')[0].scrollTop;

    onMouseUp = (e) => {

    const sourceThree = document.getElementsByClassName('listyTwo');
    const sourceTwo = document.getElementsByClassName('listyThree')[0].scrollTop;
    // var elemClos = elementMouseIsOver.closest('.chatContainer')   
    var i
    var counts = []
    var goal = this.currentY
    // console.log(sourceThree)
    for  (i=0; i<sourceThree.length; i++) {

        var myVal = ((document.getElementsByClassName('listyTwo')[i].offsetTop) - sourceTwo)

        counts.push(myVal)


    }
    var closest = counts.reduce(function(prev, curr) {
        return (Math.abs(curr - goal) < Math.abs(prev - goal) ? curr : prev);
      });

    // var theActual = goal-closest
var theActual = goal
// console.log(theActual, closest)
    // var genericLoc = sourceTwo+closest
var genericLoc = sourceTwo
var listyLoc = sourceTwo+goal
var thePosition = 0
for  (i=0; i<sourceThree.length; i++) {

    var myVal = (document.getElementsByClassName('listyTwo')[i].offsetTop)

    if (listyLoc === myVal)
    thePosition = document.getElementsByClassName('listyTwo')[i]


}

// console.log((document.getElementsByClassName('listyTwo')))
if (typeof e.target.offsetParent!== 'undefined'){
    // console.log(e.target.offsetParent)
if (typeof e.target.offsetParent.offsetParent !== 'undefined'){
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
                listyPos: listyLoc,
                genericLoc: genericLoc
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

