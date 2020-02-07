import * as d3 from "d3";
import { h, getElementStyle } from './react-sticky-notes/utils';
import React, { useState, useEffect } from "react";
import { useDrop } from 'react-dnd'
import ItemTypes from './../ItemTypes'
import { moveKnight, moveDropped, newDropped, observeThree, newIDLog } from './Game'
import Draggable from './react-sticky-notes/utils/draggable';
import Overlay from './Overlay';
import {NoteBubble} from './react-sticky-notes/partials/note-bubble'
import RectGreen from './RectGreen.png';
import RectPale from './Rect.png';

export const Map = (props) => {
    const [nodes1, setNodes] = useState(null);
    const [linky1, setLinks] = useState(null);
    const [eveID, setEveID] = useState()
    const [diamonds1, setDiamonds] = useState(null);
    const [dragState, setdragState] = useState(null)
    const [bubblePos, setbubblePos] = useState({x:'',y:''})
    const [itemInform, setItemInform] = useState()
    const [hasDropped, setHasDropped] = useState(false)
    const x = bubblePos.x
    const y = bubblePos.y
    const [{ isOver, isOverCurrent }, drop] = useDrop({
      accept: ItemTypes.stickyMini,
      drop(item, monitor, props) {
        const didDrop = monitor.didDrop()
        const itemInfo = monitor.getItem()
        const itemDrop = monitor.getDropResult();
        var e = window.event
        const x = bubblePos.x
        const y = bubblePos.y
        setItemInform(itemDrop)
        setHasDropped(true);
        setdragState('dragend')

        var targetRect = e.target.getBoundingClientRect()
        console.log(window.event.target.attributes)
        setbubblePos({x:targetRect.x, y:targetRect.y})
        // moveKnight(bubblePos.x,bubblePos.y)
        moveDropped(hasDropped)
        setHasDropped(false)
        moveDropped(hasDropped)
      },
      collect: monitor => ({
        isOver: monitor.isOver(),
        isOverCurrent: monitor.isOver({ shallow: true }),
      }),
    })
    const over= ()=> {
      if (isOver === true) {
        var e = window.event
        if (typeof e.clientX !== 'undefined' && typeof e.clientY !== 'undefined'){
        var selection = document.elementsFromPoint(e.clientX,e.clientY)[0].classList[0]
        var selectionTwo =document.elementsFromPoint(e.clientX,e.clientY)[0].localName
        // console.log(selectionTwo)
        if (selection === 'node') {
          document.elementsFromPoint(e.clientX,e.clientY)[0].style.transition = 'all 1s'
          document.elementsFromPoint(e.clientX,e.clientY)[0].setAttribute('r', 15)
        }
        else if (selection === 'link') {
          document.elementsFromPoint(e.clientX,e.clientY)[0].style.transition = 'all 1s'
          document.elementsFromPoint(e.clientX,e.clientY)[0].setAttribute("style","stroke-width: 10")
          // document.elementsFromPoint(e.clientX,e.clientY)[0].style.transition = 'all 1s'
          // document.elementsFromPoint(e.clientX,e.clientY)[0].style.strokeWidth = '10px'

          // console.log('i am a link!')
        }
        else if (selectionTwo === 'image') {
          // console.log('selected!')
          document.elementsFromPoint(e.clientX,e.clientY)[0].style.transition = 'all 1s'
          document.elementsFromPoint(e.clientX,e.clientY)[0].setAttribute("x", "-16px")
          document.elementsFromPoint(e.clientX,e.clientY)[0].setAttribute("y", "-16px")
          document.elementsFromPoint(e.clientX,e.clientY)[0].setAttribute("height", "34px")
          document.elementsFromPoint(e.clientX,e.clientY)[0].setAttribute("width", "34px")
          // .setAttribute("height", "34px")
          // .setAttribute("width", "34px")
          // .setAttribute("y", "-16px")
          // document.elementsFromPoint(e.clientX,e.clientY)[0].style.transition = 'all 1s'
          // document.elementsFromPoint(e.clientX,e.clientY)[0].style.strokeWidth = '10px'

          // console.log('i am a link!')
        }
        // console.log('i am drag start')


        // console.log(dragState)
      }
return

    }}


    // 2,3,4 ((150-250),200)
    // 7,8,9 ((200-300),425)
    // 11,12 ((275-325),575)

      useEffect(() => {
        // const arrayAddTwo = (newPos) => {
        //   setEveID(newPos)
        //   console.log(eveID)}
        observeThree(newPos => {setEveID(newPos), console.log(newPos)})
        // console.log(bubblePos.x,bubblePos.y, window.event.target.attributes[1].value)

        const diamonds = [
          { id: "2mortgagemortgage", icon: RectPale,reflexive: false, x: 250, y: 200 },
          { id: "3lender file sworn statement of debt including costs associated with foreclosure process on the homeowner's tab", icon: RectPale,reflexive: false, x: 150, y: 200},
          { id: "4loss mitigation affadavit to homeowner with form allowing homeowner to request mediation", icon: RectPale,reflexive: true, x: 200, y: 200},
          { id: "7Can file a motion asking the court to waive the fee", icon: RectPale,reflexive: true, x: 300, y: 425},
          { id: "8Mediation requested (can add up to 60 days to the foreclosure process, valuable time to use to avoid forclosure)", icon: RectPale,reflexive: false, x: 200, y: 425 },
          { id: "9Office of administrative hearings (OAH) sends a letter stating the time, date, and place of mediation", icon: RectPale,reflexive: false, x: 250, y: 425},
          { id: "11Mediation session", icon: RectPale,reflexive: false, x: 325, y: 575 },
          { id: "12Discuss a range of solutions", icon: RectPale,reflexive: false, x: 275, y: 575}
        ]

      const nodes = [
        { id: "0default on mortgage", reflexive: false, x: 200, y: 50},
        { id: "1notice of intent to forclose from lender", reflexive: true, x: 200, y: 125},
        { id: "2",  reflexive: false, x: 250, y: 200 },
        { id: "3", icon: RectGreen.png,reflexive: false, x: 150, y: 200},
        { id: "4", icon: RectGreen.png,reflexive: true, x: 200, y: 200},
        { id: "5Reach out to Maryland HOPE for free counseling, can discuss mediation strategy", reflexive: false, x: 250, y: 275 },
        { id: "6Homeowner 25 days to submit request for mediation and pay mediation fee", reflexive: false, x: 250, y: 350},
        { id: "7", icon: RectGreen.png, reflexive: true, x: 300, y: 425},
        { id: "8", icon: RectGreen.png, reflexive: false, x: 200, y: 425 },
        { id: "9", icon: RectGreen.png, reflexive: false, x: 250, y: 425},
        { id: "10Send documents to foreclosure attorneys and the office of administrative hearings in the “document exchange” process", reflexive: true, x: 300, y: 500},
        { id: "11", icon: RectGreen.png, reflexive: false, x: 325, y: 575 },
        { id: "12", icon: RectGreen.png, reflexive: false, x: 275, y: 575},
        { id: "13Loan modification (change terms of the loan so that you can afford the payment)", reflexive: true, x: 325, y: 650},

      ];
      let lastNodeId = 2;
      const linky = [
        { source: nodes[0], target: nodes[1], left: false, right: true },
        { source: nodes[1], target: nodes[2], left: false, right: true },
        { source: nodes[1], target: nodes[3], left: false, right: true },
        { source: nodes[1], target: nodes[4], left: false, right: true },
        { source: nodes[2], target: nodes[5], left: false, right: true },
        { source: nodes[5], target: nodes[6], left: false, right: true },
        { source: nodes[6], target: nodes[7], left: false, right: true },
        { source: nodes[6], target: nodes[8], left: false, right: true },
        { source: nodes[6], target: nodes[9], left: false, right: true },
        { source: nodes[7], target: nodes[10], left: false, right: true },
        { source: nodes[10], target: nodes[11], left: false, right: true },
        { source: nodes[10], target: nodes[12], left: false, right: true },
        { source: nodes[11], target: nodes[13], left: false, right: true },

          ];
          setNodes(nodes);
          setLinks(linky);
          setDiamonds(diamonds)
        // console.log("we're here")
        const svg = d3.select("#myanchor"),
        { width, height } = props;

        const links2 = linky1
        const nodes2 = nodes1
        const diamonds2 = diamonds1
        var pathTwo = document.querySelectorAll("linky[left]");
// console.log(svg)
        // pathTwo.forEach(function)
        // console.log(pathTwo)
        for (var i = 0; i < pathTwo.length; i++) {
          // pathTwo[i].attr('class', 'yoyo');
          (pathTwo[i].setAttribute("id", "red"));
        }
        //   init D3 drag support
          const drag = d3.drag()
            // Mac Firefox doesn't distinguish between left/right click when Ctrl is held...
            .filter(() => d3.event.button === 0 || d3.event.button === 2)
            .on('drag', (d) => {
              d.x = d3.event.x;
              d.y = d3.event.y;
              draw();
            })

          // define arrow markers for graph links
          svg.append('defs').append('marker')
              .attr('id', 'end-arrow')
              .attr('viewBox', '0 -5 10 10')
              .attr('refX', 16)
              .attr('markerWidth', 2)
              .attr('markerHeight', 2)
              .attr('orient', 'auto')
            .append('path')
              // .attr('d', 'M0,-5L10,0L0,5')
              .attr('fill', '#9FA7B8');


          // line displayed when dragging new nodes
          const dragLine = svg.append('path')
            .attr('class', 'link dragline hidden')

            // .attr('d', 'M0,0C0,0');
        // console.log(dragLine)
          // // handles to link and node element groups
          let path = svg.append('svg:g').selectAll('path');
          let circle = svg.append('svg:g').selectAll('g');
          let diamond = svg.append('svg:g').selectAll('image')



          // mouse event vars
          let selectedNode = null;
          let selectedLink = null;
          let mousedownLink = null;
          let mousedownNode = null;
          let mouseupNode = null;

          function resetMouseVars() {
            mousedownNode = null;
            mouseupNode = null;
            mousedownLink = null;
          }

          function draw() {

            var pathOne = document.querySelectorAll(".link")


                path
                .attr("d", function (d) {
                    var dx = d.target.x - d.source.x,
                        dy = d.target.y - d.source.y,
                        dr = Math.sqrt(dx * dx + dy * dy);
                        return "M" + d.source.x + "," + d.source.y
                         + "C" + d.source.x + "," + (d.target.y - 30)
                         + " " + d.target.x + "," + (d.target.y -30)
                         + " " + d.target.x + "," + d.target.y;
                });


                circle.attr('transform', (d) => `translate(${d.x},${d.y})`);
                diamond.attr('transform', (d) => `translate(${d.x},${d.y})`);
              }


              draw();

              // update graph (called when needed)
              function restart() {
                // path (link) group
                path = path.data(linky);
                // update existing links
                path.classed('selected', (d) => d === selectedLink)
                .attr('data-name', (d) => d.id)
                .attr('id', (d) => d.id)

                  .style('marker-start', (d) => d.left ? 'url(#start-arrow)' : '')
                  .style('marker-end', (d) => d.right ? 'url(#end-arrow)' : '');

                // remove old links
                path.exit().remove();

            pathTwo = document.querySelectorAll("*[style|='marker']");
            // pathTwo.forEach(function)

            for (var i = 0; i < pathTwo.length; i++) {
              // pathTwo[i].attr('class', 'yoyo');
              (pathTwo[i].setAttribute("id", "red"));
            }

            // for (const l of toSplice) {
            //       links.splice(links.indexOf(l), 1);
            //     }

            // console.log(pathTwo)
                // add new links

                path = path.enter().append('svg:path')
                  .attr('class', 'link')
                  .style("stroke-width", 5)
                  .classed('selected', (d) => d === selectedLink)
                  .style('marker-start', (d) => d.left ? 'url(#start-arrow)' : '')
                  .style('marker-end', (d) => d.right ? 'url(#end-arrow)' : '')
                  .on('mousedown', (d) => {

                    // select link
                    mousedownLink = d;
                    selectedLink = (mousedownLink === selectedLink) ? null : mousedownLink;
                    selectedNode = null;
                    // restart();
                  })
                  .on("mouseenter", function() {
                    d3.select(this).transition()
                    .duration(750)
                    .style("stroke-width", 10);
                  //   if (true) {
                  //   console.log(d3.event.type)
                  // }
                  })
                  // .on("mouseout", function() {
                  //   d3.select("#tooltip").classed("hidden", true);
                  //   d3.select(this).attr('class', 'node')
                  //   d3.select(this).transition()
                  //   .duration(750)
                  //   .attr("r", 7);
                  // })
                  .on("mouseout", function() {
                    d3.select(this).attr('class', 'link')
                    d3.select(this).transition()
                    .duration(750)
                    .style("stroke-width", 5);
                  //   if (true) {
                  //   console.log(d3.event.type)
                  // }
                  })
                  .merge(path);

                // circle (node) group
                // NB: the function arg is crucial here! nodes are known by id, not by index!
                circle = circle.data(nodes, (d) => d.id);

                diamond = diamond.data(diamonds, (d) => d.id)
                // update existing nodes (reflexive & selected visual states)
                circle.selectAll('circle')
                  .style('fill', "#61776E")
                  .classed('reflexive', (d) => d.reflexive);

                  diamond.selectAll('diamond')
                  .attr("xlink:href", function(d) { return d.icon; })
                  .attr("width", "34px")
                  .attr("height", "34px")
                  .style('stroke', 'black')
                  .style('stroke-width', 7)
                  .classed('reflexive', (d) => d.reflexive);

                // remove old nodes
                circle.exit().remove();

                diamond.exit().remove();

                // add new nodes
                const g = circle.enter().append('svg:g');

                var diamEnter = diamond.enter().append("svg:g")
                .attr("class", "diamond")
                .attr("transform", function(d) {
                  return "translate(" + d.x + "," + d.y + ")"; });

              diamEnter.append("image")
                  .attr("xlink:href", function(d) { return d.icon; })
                  .attr('data-name', (d) => d.id)
                  .attr('id', (d) => d.id)
                  .attr("x", "-14px")
                  .attr("y", "-14px")
                  .attr("width", "28px")
                  .attr("height", "28px")
                  .style('stroke', 'black')
                  .style('stroke-width', 7)
                  .on("mouseenter", function(e) {
                    tooltipElement.textContent = (e.id)
                    d3.select("#tooltip").classed("hidden", false);
                    d3.select(this).transition()
                    .duration(750)
                    .attr("width", "34px")
                    .attr("height", "34px")
                    .attr("x", "-16px")
                    .attr("y", "-16px")
                  })
                  .on("mouseout", function() {
                    d3.select("#tooltip").classed("hidden", true);
                    d3.select(this).attr('class', 'diamond')
                    d3.select(this).transition()
                    .duration(750)
                    .attr("x", "-14px")
                    .attr("y", "-14px")
                    .attr("width", "28px")
                    .attr("height", "28px")
                  })







            var tooltipElement = document.querySelector("#tooltip")

            document.addEventListener("mousemove", function(e){
              var x=e.clientX
               var y=e.clientY

              tooltipElement.setAttribute("style", `top:${y+30}px;left:${x}px`)
            })
            // .call(function(){draglistener(d3.select(this)),dragState})
            var down

            // var elements = document.elementsFromPoint(d3.event.pageX,d3.event.pageY);

            // d3.select('*').on('mousemove', function(){console.log(document.elementsFromPoint(d3.event.pageX,d3.event.pageY))})


                g.append('svg:circle')
                  // .attr('class', node')
                  .attr('class', 'node')
                  .attr('data-name', (d) => d.id)
                  .attr('id', (d) => d.id)
                  .attr('r', 7)
                  .style('fill', "#CACFDA")
                  // .style('stroke', '#82827E')
                  // .style('stroke-width', .5)
                  .classed('reflexive', (d) => d.reflexive)
                  .on("mouseover", function(e) {
                      tooltipElement.textContent = (e.id)
                      d3.select("#tooltip").classed("hidden", false);
                      d3.select(this)
                      // .attr('data-name', 'active')
                      .transition()
                      .duration(750)
                      .attr("r", 10);
                    })
                    .on("mouseout", function() {
                      d3.select("#tooltip").classed("hidden", true);
                      // d3.select(this).attr('class', 'node')
                      d3.select(this)
                      .transition()
                      .duration(750)

                      .attr('data-name', (d) => d.id)
                      .attr("r", 7);
                    })
                  .on('mousedown', function(d) {
                    d3.select(this).transition()
                    .duration(750)
                    .attr("r", 7);
                    document.addEventListener("mousemove", function(e){
                      var x=e.clientX
                       var y=e.clientY

                       if (isOver === true) {
                        // console.log(d3.event.type)
                      }
                    })
                    // select node
                    mousedownNode = d;
                    selectedNode = (mousedownNode === selectedNode) ? null : mousedownNode;
                    selectedLink = null;

                    // reposition drag line
                    dragLine
                      .style('marker-end', 'url(#end-arrow)')
                      .classed('hidden', false)
                      .attr('d', function (d) {
                        return `M${mousedownNode.x},${mousedownNode.y}A${mousedownNode.x},${mousedownNode.y}`;
                      });


                  })
                  .on('mouseup', function (d) {
                    if (!mousedownNode) return;

                    // needed by FF
                    dragLine
                      .classed('hidden', true)
                      .style('marker-end', '');

                    // check for drag-to-self
                    mouseupNode = d;
                    if (mouseupNode === mousedownNode) {
                      resetMouseVars();
                      return;
                    }

                    // unenlarge target node
                    d3.select(this).attr('transform', '');

                    // add link to graph (update if exists)
                    // NB: links are strictly source < target; arrows separately specified by booleans
                    const isRight = mousedownNode.id < mouseupNode.id;
                    const source = isRight ? mousedownNode : mouseupNode;
                    const target = isRight ? mouseupNode : mousedownNode;

                    const link = links2.filter((l) => l.source === source && l.target === target)[0];
                    if (link) {
                      link[isRight ? 'right' : 'left'] = true;
                    } else {
                      links2.push({ source, target});
                    }

                    // select new link
                    selectedLink = link;
                    selectedNode = null;


                    restart();
                  });



                circle = g.merge(circle);
                diamond = g.merge(diamond)
                draw();
              }

              function mouseover(d,i) {
                moveKnight(bubblePos.x,bubblePos.y, window.event.target.attributes[1].value)
                console.log(bubblePos.x,bubblePos.y, window.event.target.attributes[1].value)
              d3.select(this).transition()
                  .duration(750)
                  .attr("r", 20);
                      }

                      function mouseenter(d,i) {
                        // moveKnight(bubblePos.x,bubblePos.y, window.event.target)
                        // console.log(window.event)
                      }

            function mouseout(d,i) {
              d3.select(this).transition()
                  .duration(750)
                  .attr("r", 8);
            }



              function mousedown() {
                // because :active only works in WebKit?
                svg.classed('active', true);

                if (d3.event.ctrlKey || mousedownNode || mousedownLink) return;

                // insert new node at point
                const point = d3.mouse(this);
                const node = { class: 'tan', reflexive: false, x: point[0], y: point[1] };
                nodes2.push(node);
                restart();
              }

              function mousemove() {
                if (!mousedownNode) return;

                // update drag line
                dragLine.attr('d', `M${mousedownNode.x},${mousedownNode.y}L${d3.mouse(this)[0]},${d3.mouse(this)[1]}`);
              }
                        // return "M" + d.source.x + "," + d.source.y
                        //  + "C" + d.source.x + "," + (d.target.y - 30)
                        //  + " " + d.target.x + "," + (d.target.y -30)
                        //  + " " + d.target.x + "," + d.target.y;
              function mouseup() {
                if (mousedownNode) {
                  // hide drag line
                  dragLine
                    .classed('hidden', true)
                    .style('marker-end', '')
                }

                // because :active only works in WebKit?
                svg.classed('active', false);

                // clear mouse event vars
                resetMouseVars();
              }

              function spliceLinksForNode(node) {
                const toSplice = links2.filter((l) => l.source === node || l.target === node);
                for (const l of toSplice) {
                  links2.splice(links2.indexOf(l), 1);
                }
              }

              svg.on('mousedown', mousedown)
                .on('mousemove', mousemove)
                .on('mouseup', mouseup)
                .on('mouseover', mouseover)
                .on('mouseenter', mouseenter)
              // d3.select(window)
              // .on('keydown', keydown)
              // .on('keyup', keyup);
              restart();




          }, []);

          // var xVal = document.getElementsByTagName("g");
          // console.log(xVal)
        //  document.addEventListener("click", )
return (  <g ref= {drop} className='ourMap'>
      <g  id="myanchor" x={x} y={y} />
      {isOver && over()}
      {hasDropped && moveDropped(hasDropped) && moveKnight(bubblePos.x,bubblePos.y, window.event.target.attributes[1].value) && newIDLog(eveID) && props.onSubmit('jljljl' + `_${bubblePos.x}`+ `_${bubblePos.y}`+`_${window.event.target.attributes[1].value}`+`_${hasDropped}`+`_${eveID}`+`_${Math.round((new Date()).getTime() / 1000)}`) && console.log(window.event.target.attributes)
      }
      {/* {!isOver && canDrop && console.log('yes!')} */}
      {/* {isOver && console.log(drop)} */} */}
</g>
)

}

export default Map

