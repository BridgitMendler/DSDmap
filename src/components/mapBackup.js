import * as d3 from "d3";
import React, { useState, useEffect } from "react";
import { useDrop } from 'react-dnd'
import itemTypes from './../itemTypes'
import Draggable from './react-sticky-notes/utils/draggable';



class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {
        nodes: null,
        linky: null
    }
    this.draggable = new Draggable();
  }
    // class NoteDraggable extends React.Component {
    //   draggable = null
    //   constructor(props) {
    //     super(props);
    //     this.state= {
    //       options: {},
    //       scrollScreen: this.props.scrollScreen,
    //     }
    //     this.element = React.createRef();
    //     this.draggable = new Draggable();
    //   }
    componentWillMount() {


      const [{ isOver, canDrop }, drop] = useDrop({
        accept: itemTypes.stickyMini,
        canDrop: () => this.draggable.onMouseDown(),
        drop: () => this.draggable.onMouseMove(),
        collect: monitor => ({
          isOver: !!monitor.isOver(),
          canDrop: !!monitor.canDrop(),
        }),
      })

      const nodes = [
        { id: "0default on mortgage", reflexive: false, x: 200, y: 100},
        { id: "1notice of intent to forclose from lender", reflexive: true, x: 200, y: 150},
        { id: "2lender mail a copy of order to docket", reflexive: false, x: 150, y: 200 },
        { id: "3lender file sworn statement of debt including costs associated with foreclosure process on the homeowner's tab", reflexive: false, x: 250, y: 200},
        { id: "4loss mitigation affadavit to homeowner with form allowing homeowner to request mediation", reflexive: true, x: 200, y: 300},
        { id: "5Reach out to Maryland HOPE for free counseling, can discuss mediation strategy", reflexive: false, x: 250, y: 350 },
        { id: "6Homeowner 25 days to submit request for mediation and pay mediation fee", reflexive: false, x: 200, y: 350},
        { id: "7Can file a motion asking the court to waive the fee", reflexive: true, x: 150, y: 350},
        { id: "8Mediation requested (can add up to 60 days to the foreclosure process, valuable time to use to avoid forclosure)", reflexive: false, x: 200, y: 400 },
        { id: "9Office of administrative hearings (OAH) sends a letter stating the time, date, and place of mediation", reflexive: false, x: 200, y: 450},
        { id: "10Send documents to foreclosure attorneys and the office of administrative hearings in the “document exchange” process", reflexive: true, x: 200, y: 500},
        { id: "11Mediation session", reflexive: false, x: 200, y: 550 },
        { id: "12Discuss a range of solutions", reflexive: false, x: 200, y: 600},
        { id: "13Loan modification (change terms of the loan so that you can afford the payment)", reflexive: true, x: 100, y: 650},
        { id: "14Short sale (sell your home for less than you owe)", reflexive: false, x: 150, y: 650 },
        { id: "15Deed in lieu of foreclosure (you give the house back to the bank)", reflexive: false, x: 200, y: 650},
        { id: "16Cash for keys (bank agrees to pay you money in exchange for moving out)", reflexive: true, x: 250, y: 650},
        { id: "17Mediation is confidential so make sure to get it protected in writing", reflexive: false, x: 200, y: 700 },
        { id: "18OAH files a report 7 days after mediation", reflexive: false, x: 250, y: 800},
        { id: "19Motion to stay or dismiss 15 days after mediation ", reflexive: true, x: 200, y: 850},
        { id: "20Mediation not successful, lender can schedule foreclosure", reflexive: false, x: 200, y: 900 },
        { id: "21Free legal advice from the debtor assistance project", reflexive: false, x: 150, y: 950},
        { id: "22Must publish notice of foreclosure in the local newspaper and send notice of sale to homeowner no less than 10 days prior to sale", reflexive: true, x: 200, y: 950},
        { id: "23Sale, an auction held at the courthouse", reflexive: false, x: 200, y: 1000 },
        { id: "24Lender must file a report of sale with the Circuit Court", reflexive: true, x: 150, y: 1400},
        { id: "25Count Clerk issues a notice that the sale will be ratified", reflexive: false, x: 150, y: 1450 },
        { id: "26Homeowner can file exceptions to sale with the Court within 30 days after the Clerk’s notice", reflexive: false, x: 200, y: 1500},
        { id: "27After sale, Circuit Court must ratify (confirm the purchase, total amount owing, apply proceeds to the debt.", reflexive: true, x: 200, y: 550},
        { id: "28The court appointed auditor will file the Auditor’s Report with the Court", reflexive: false, x: 150, y: 1600 },
        { id: "29Proceeds enough?", reflexive: false, x: 200, y: 1800},
        { id: "30yes, homeowner can request to keep excess", reflexive: true, x: 200, y: 1650},
        { id: "31no, lender can file a motion for entry of a deficiency judgment", reflexive: false, x: 200, y: 1700 },
        { id: "32Purchaser of the foreclosure sale files a motion for entry of judgment awarding possession", reflexive: false, x: 200, y: 1750},
        { id: "33Court must issue an order granting possession", reflexive: true, x: 150, y: 1750},
        { id: "34Purchaser must send an eviction notice prior to executing the writ of possession", reflexive: false, x: 100, y: 800 },
        { id: "35After the eviction notice is served, purchaser must file a request for writ of possession", reflexive: false, x: 250, y: 1800},
        { id: "36Sherif then executes the writ and evicts former homeowner", reflexive: true, x: 200, y: 1850}
      ];
      let lastNodeId = 2;
      const linky = [
        { source: nodes[0], target: nodes[1], left: false, right: true },
        { source: nodes[1], target: nodes[2], left: false, right: true },
        { source: nodes[1], target: nodes[3], left: false, right: true },
        { source: nodes[3], target: nodes[4], left: false, right: true },
        { source: nodes[2], target: nodes[4], left: false, right: true },
        { source: nodes[4], target: nodes[6], left: false, right: true },
        { source: nodes[5], target: nodes[6], left: false, right: true },
        { source: nodes[6], target: nodes[7], left: false, right: true },
        { source: nodes[6], target: nodes[8], left: false, right: true },
        { source: nodes[8], target: nodes[9], left: false, right: true },
        { source: nodes[9], target: nodes[10], left: false, right: true },
        { source: nodes[10], target: nodes[11], left: false, right: true },
        { source: nodes[11], target: nodes[12], left: false, right: true },
        { source: nodes[12], target: nodes[13], left: false, right: true },
        { source: nodes[12], target: nodes[14], left: false, right: true },
        { source: nodes[12], target: nodes[15], left: false, right: true },
        { source: nodes[12], target: nodes[16], left: false, right: true },
        { source: nodes[16], target: nodes[17], left: false, right: true },
        { source: nodes[15], target: nodes[17], left: false, right: true },
        { source: nodes[14], target: nodes[17], left: false, right: true },
        { source: nodes[13], target: nodes[17], left: false, right: true },
        { source: nodes[17], target: nodes[18], left: false, right: true },
        { source: nodes[18], target: nodes[19], left: false, right: true },
        { source: nodes[19], target: nodes[20], left: false, right: true },
        { source: nodes[20], target: nodes[22], left: false, right: true },
        { source: nodes[20], target: nodes[21], left: false, right: true },
        { source: nodes[22], target: nodes[23], left: false, right: true },
        { source: nodes[23], target: nodes[24], left: false, right: true }
          ];
          this.setState({
              nodes,
              linky
          });
        //   console.log(linky,nodes)
    }

    componentDidMount() {
        // console.log("we're here")
        const svg = d3.select("#myanchor"),
        { width, height } = this.props;

        const links = this.state.linky
        const nodes = this.state.nodes
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
              .attr('fill', '#61776E');
        

                    // return ("M" + d.source.x + "),(" + d.source.y
                    //  + "C" + d.source.x + "),(" + (d.target.y - 30)
                    //  + " " + d.target.x + "),(" + (d.target.y -30)
                    //  + " " + d.target.x + "),(" + d.target.y);
        
          // svg.append('svg:defs').append('svg:marker')
          //     .attr('id', 'start-arrow')
          //     .attr('viewBox', '0 -5 1 10')
          //     .attr('refX', 4)
          //     .attr('markerWidth', 33)
          //     .attr('markerHeight', 3)
          //     .attr('orient', 'auto')
          //   .append('svg:path')
          //     // .attr('d', 'M10,-5L0,10,5')
          //     .attr('fill', '#000');
        
          // line displayed when dragging new nodes
          const dragLine = svg.append('path')
            .attr('class', 'link dragline hidden')
            // .attr('d', 'M0,0C0,0');
        // console.log(dragLine)
          // // handles to link and node element groups
          let path = svg.append('svg:g').selectAll('path');
          let circle = svg.append('svg:g').selectAll('g');
  
        
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
            
            
            // for (var i = 0; i < pathOne.length; i++) {
            //   // pathTwo[i].attr('class', 'yoyo');
            // $(".link").has("[left]").addClass("hello");
            
            // }
            // console.log(pathOne)
            
                path.attr("d", function (d) {
                    var dx = d.target.x - d.source.x,
                        dy = d.target.y - d.source.y,
                        dr = Math.sqrt(dx * dx + dy * dy);
                        return "M" + d.source.x + "," + d.source.y
                         + "C" + d.source.x + "," + (d.target.y - 30)
                         + " " + d.target.x + "," + (d.target.y -30)
                         + " " + d.target.x + "," + d.target.y;
                });
            //
            //     path.attr('d', (d) => {
            //       const deltaX = d.target.x - d.source.x;
            //       const deltaY = d.target.y - d.source.y;
            //       const dist = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
            //       const normX = deltaX / dist;
            //       const normY = deltaY / dist;
            //       const sourcePadding = d.left ? 17 : 12;
            //       const targetPadding = d.right ? 17 : 12;
            //       const sourceX = d.source.x + (sourcePadding * normX);
            //       const sourceY = d.source.y + (sourcePadding * normY);
            //       const targetX = d.target.x - (targetPadding * normX);
            //       const targetY = d.target.y - (targetPadding * normY);
            //
            //
            // return "M" + d.source.x + "," + d.source.y + "A" + dist + "," + dist + " 0 0,1 " + m.x + "," + m.y;
            //
            //       //
            //       // return `M${sourceX},${sourceY}L${targetX},${targetY}`;
            //     });
            
                circle.attr('transform', (d) => `translate(${d.x},${d.y})`);
              }
            
            
              draw();
            
              // update graph (called when needed)
              function restart() {
                // path (link) group
                path = path.data(links);
                // update existing links
                path.classed('selected', (d) => d === selectedLink)
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
                    if (d3.event.ctrlKey) return;
            
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
                  .on("mouseout", function() {
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
            
                // update existing nodes (reflexive & selected visual states)
                circle.selectAll('circle')
                  .style('fill', "#61776E")
                  .classed('reflexive', (d) => d.reflexive);
            
                // remove old nodes
                circle.exit().remove();
            
                // add new nodes
                const g = circle.enter().append('svg:g');
            
            var tooltipElement = document.querySelector("#tooltip")
            
            document.addEventListener("mousemove", function(e){
              var x=e.clientX
               var y=e.clientY
            
              tooltipElement.setAttribute("style", `top:${y+30}px;left:${x}px`)
            })
            
                g.append('svg:circle')
                  .attr('class', 'node')
                  .attr('r', 7)
                  .style('fill', "grey")
                  .classed('reflexive', (d) => d.reflexive)
                  .on("mouseenter", function(e) {
                      tooltipElement.textContent = (e.id)
                      d3.select("#tooltip").classed("hidden", false);
                      d3.select(this).attr('class', 'droppable')
                      d3.select(this).transition()
                      .duration(750)
                      .attr("r", 10);
                    //   if (true) {
                    //   console.log(d3.event.type)
                    // }
                    })
                    .on("mouseout", function() {
                      d3.select("#tooltip").classed("hidden", true);
                      d3.select(this).attr('class', 'node')
                      d3.select(this).transition()
                      .duration(750)
                      .attr("r", 7);
                    })
                  .on('mousedown', (d) => {
                    if (d3.event.ctrlKey) return;
                    document.addEventListener("mousemove", function(e){
                      var x=e.clientX
                       var y=e.clientY
                    
                      console.log(x)
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
            
                    //   path.attr("d", function (d) {
                    //     var dx = d.target.x - d.source.x,
                    //         dy = d.target.y - d.source.y,
                    //         dr = Math.sqrt(dx * dx + dy * dy);
                    //         return "M" + d.source.x + "," + d.source.y
                    //          + "C" + d.source.x + "," + (d.target.y - 30)
                    //          + " " + d.target.x + "," + (d.target.y -30)
                    //          + " " + d.target.x + "," + d.target.y;
                    // });
                      
                      // return "M" + d.source.x + "," + d.source.y
                      //    + "C" + d.source.x + "," + (d.target.y - 30)
                      //    + " " + d.target.x + "," + (d.target.y -30)
                      //    + " " + d.target.x + "," + d.target.y;
            
                    // restart();
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
            
                    const link = links.filter((l) => l.source === source && l.target === target)[0];
                    if (link) {
                      link[isRight ? 'right' : 'left'] = true;
                    } else {
                      links.push({ source, target});
                    }
            
                    // select new link
                    selectedLink = link;
                    selectedNode = null;
            
            
                    restart();
                  });
            
            
                // show node IDs
            // g.append('svg:text')
            //       .attr('x', 0)
            //       .attr('y', 4)
            //       .attr('class', 'id')
            //       .text((d) => d.id);
            
            
            
                circle = g.merge(circle);
                draw();
              }
            
              function mouseover(d,i) {
              d3.select(this).transition()
                  .duration(750)
                  .attr("r", 20);
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
                nodes.push(node);
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
                const toSplice = links.filter((l) => l.source === node || l.target === node);
                for (const l of toSplice) {
                  links.splice(links.indexOf(l), 1);
                }
              }
            
              // only respond once per keydown
              // let lastKeyDown = -1;
            


              // function keydown() {
              //   d3.event.preventDefault();
            
              //   if (lastKeyDown !== -1) return;
              //   lastKeyDown = d3.event.keyCode;
            
              //   // ctrl
              //   if (d3.event.keyCode === 17) {
              //     circle.call(drag);
              //     svg.classed('ctrl', true);
              //     return;
              //   }
            
              //   if (!selectedNode && !selectedLink) return;
            
              //   switch (d3.event.keyCode) {
              //     case 8: // backspace
              //     case 46: // delete
              //       if (selectedNode) {
              //         nodes.splice(nodes.indexOf(selectedNode), 1);
              //         spliceLinksForNode(selectedNode);
              //       } else if (selectedLink) {
              //         links.splice(links.indexOf(selectedLink), 1);
              //       }
              //       selectedLink = null;
              //       selectedNode = null;
              //       restart();
              //       break;
              //     case 66: // B
              //       if (selectedLink) {
              //         // set link direction to both left and right
              //         selectedLink.left = true;
              //         selectedLink.right = true;
              //       }
              //       restart();
              //       break;
              //     case 76: // L
              //       if (selectedLink) {
              //         // set link direction to left only
              //         selectedLink.left = true;
              //         selectedLink.right = false;
              //       }
              //       restart();
              //       break;
              //     case 82: // R
              //       if (selectedNode) {
              //         // toggle node reflexivity
              //         selectedNode.reflexive = !selectedNode.reflexive;
              //       } else if (selectedLink) {
              //         // set link direction to right only
              //         selectedLink.left = false;
              //         selectedLink.right = true;
              //       }
              //       restart();
              //       break;
              //   }
              // }
            
              // function keyup() {
              //   lastKeyDown = -1;
            
              //   // ctrl
              //   if (d3.event.keyCode === 17) {
              //     circle.on('.drag', null);
              //     svg.classed('ctrl', false);
              //   }
              // }

             
              // app starts here
              svg.on('mousedown', mousedown)
                .on('mousemove', mousemove)
                .on('mouseup', mouseup)
                .on('mouseover', mouseover)
              // d3.select(window)
              // .on('keydown', keydown)
              // .on('keyup', keyup);
              restart();
            
            }
            


    render() {
        
        const { linky, nodes } = this.state;

        if (!linky || !nodes) {
            return null;
        }
        return <g id="myanchor" />;
    }
}


export default Map;
