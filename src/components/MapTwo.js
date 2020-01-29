import React from "react";
import D3blackbox from "d3blackbox";
import * as d3 from "d3";

export default function (svg, width, height) {

const colors = d3.scaleOrdinal(d3.schemeCategory10);



    // .append('svg')
    // .on('contextmenu', () => { d3.event.preventDefault(); })
    // .attr('width', width)
    // .attr('height', height);

  // set up initial nodes and links
  //  - nodes are known by 'id', not by index in array.
  //  - reflexive edges are indicated on the node (as a bold black circle).
  //  - links are always source < target; edge directions are set by 'left' and 'right'.
  const nodes = [
    { id: "dispute", reflexive: false, x: 200, y: 100},
    { id: "claimant submits demand for arbitration to legal office of Kaiser health plan", reflexive: true, x: 200, y: 150},
    { id: "Kaiser confirms receipt of demand", reflexive: false, x: 200, y: 200 },
    { id: "Kaiser confirms receipt of demand", reflexive: false, x: 200, y: 250},
    { id: "Is the arbitration case below 200k?", reflexive: true, x: 200, y: 300},
    { id: "By California Law shall be heard by 3-person arbitration panel", reflexive: false, x: 150, y: 350 },
    { id: 6, reflexive: false, x: 200, y: 350},
    { id: 7, reflexive: true, x: 150, y: 400},
    { id: 8, reflexive: false, x: 150, y: 450 },
    { id: 9, reflexive: false, x: 200, y: 500},
    { id: 10, reflexive: true, x: 200, y: 550},
    { id: 11, reflexive: false, x: 150, y: 600 },
    { id: 12, reflexive: false, x: 200, y: 600},
    { id: 13, reflexive: true, x: 200, y: 650},
    { id: 14, reflexive: false, x: 200, y: 700 },
    { id: 15, reflexive: false, x: 200, y: 750},
    { id: 16, reflexive: true, x: 150, y: 750},
    { id: 17, reflexive: false, x: 100, y: 800 },
    { id: 18, reflexive: false, x: 250, y: 800},
    { id: 19, reflexive: true, x: 200, y: 850},
    { id: 20, reflexive: false, x: 200, y: 900 },
    { id: 21, reflexive: false, x: 150, y: 950},
    { id: 22, reflexive: true, x: 200, y: 950},
    { id: 23, reflexive: false, x: 200, y: 1000 }
  ];
  let lastNodeId = 2;
  const links = [
    { source: nodes[0], target: nodes[1], left: false, right: true },
    { source: nodes[1], target: nodes[2], left: false, right: true },
    { source: nodes[2], target: nodes[3], left: false, right: true },
    { source: nodes[3], target: nodes[4], left: false, right: true },
    { source: nodes[4], target: nodes[5], left: false, right: true },
    { source: nodes[4], target: nodes[6], left: false, right: true },
    { source: nodes[5], target: nodes[7], left: false, right: true },
    { source: nodes[7], target: nodes[8], left: false, right: true },
    { source: nodes[8], target: nodes[9], left: false, right: true },
    { source: nodes[6], target: nodes[9], left: false, right: true },
    { source: nodes[9], target: nodes[10], left: false, right: true },
    { source: nodes[10], target: nodes[11], left: false, right: true },
    { source: nodes[10], target: nodes[12], left: false, right: true },
    { source: nodes[11], target: nodes[16], left: false, right: true },
    { source: nodes[16], target: nodes[19], left: false, right: true },
    { source: nodes[16], target: nodes[17], left: false, right: true },
    { source: nodes[17], target: nodes[11], left: false, right: true },
    { source: nodes[12], target: nodes[13], left: false, right: true },
    { source: nodes[13], target: nodes[14], left: false, right: true },
    { source: nodes[14], target: nodes[15], left: false, right: true },
    { source: nodes[15], target: nodes[18], left: false, right: true },
    { source: nodes[15], target: nodes[19], left: false, right: true },
    { source: nodes[18], target: nodes[12], left: false, right: true },
    { source: nodes[19], target: nodes[20], left: false, right: true },
    { source: nodes[20], target: nodes[22], left: false, right: true },
    { source: nodes[20], target: nodes[21], left: false, right: true },
    { source: nodes[21], target: nodes[19], left: false, right: true },
    { source: nodes[22], target: nodes[23], left: false, right: true }
  ];


var  pathTwo = document.querySelectorAll("links[left]");
// pathTwo.forEach(function)
// console.log(pathTwo)
// for (var i = 0; i < pathTwo.length; i++) {
//   // pathTwo[i].attr('class', 'yoyo');
//   (pathTwo[i].setAttribute("id", "red"));
// }
  // init D3 drag support
  const drag = d3.drag()
    // Mac Firefox doesn't distinguish between left/right click when Ctrl is held...
    .filter(() => d3.event.button === 0 || d3.event.button === 2)
    .on('drag', (d) => {
      d.x = d3.event.x;
      d.y = d3.event.y;
  	draw();
    })



  // define arrow markers for graph links
  svg.append('svg:defs').append('svg:marker')
      .attr('id', 'end-arrow')
      .attr('viewBox', '0 -5 10 10')
      .attr('refX', 16)
      .attr('markerWidth', 2)
      .attr('markerHeight', 2)
      .attr('orient', 'auto')
    .append('svg:path')
      // .attr('d', 'M0,-5L10,0L0,5')
      .attr('fill', '#61776E');

console.log(svg)
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
  const dragLine = svg.append('svg:path')
    .attr('class', 'link dragline hidden')
    // .attr('d', 'M0,0C0,0');

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
// console.log(pathOne)
// }

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
        })
        .on("mouseout", function() {
          d3.select("#tooltip").classed("hidden", true);
        })
      .on('mousedown', (d) => {
        if (d3.event.ctrlKey) return;

        // select node
        mousedownNode = d;
        selectedNode = (mousedownNode === selectedNode) ? null : mousedownNode;
        selectedLink = null;

        // reposition drag line
        dragLine
          .style('marker-end', 'url(#end-arrow)')
          .classed('hidden', false)
          .attr('d', `M${mousedownNode.x},${mousedownNode.y}A${mousedownNode.x},${mousedownNode.y}`);

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
  let lastKeyDown = -1;

  function keydown() {
    d3.event.preventDefault();

    if (lastKeyDown !== -1) return;
    lastKeyDown = d3.event.keyCode;

    // ctrl
    if (d3.event.keyCode === 17) {
      circle.call(drag);
      svg.classed('ctrl', true);
      return;
    }

    if (!selectedNode && !selectedLink) return;

    switch (d3.event.keyCode) {
      case 8: // backspace
      case 46: // delete
        if (selectedNode) {
          nodes.splice(nodes.indexOf(selectedNode), 1);
          spliceLinksForNode(selectedNode);
        } else if (selectedLink) {
          links.splice(links.indexOf(selectedLink), 1);
        }
        selectedLink = null;
        selectedNode = null;
        restart();
        break;
      case 66: // B
        if (selectedLink) {
          // set link direction to both left and right
          selectedLink.left = true;
          selectedLink.right = true;
        }
        restart();
        break;
      case 76: // L
        if (selectedLink) {
          // set link direction to left only
          selectedLink.left = true;
          selectedLink.right = false;
        }
        restart();
        break;
      case 82: // R
        if (selectedNode) {
          // toggle node reflexivity
          selectedNode.reflexive = !selectedNode.reflexive;
        } else if (selectedLink) {
          // set link direction to right only
          selectedLink.left = false;
          selectedLink.right = true;
        }
        restart();
        break;
    }
  }

  function keyup() {
    lastKeyDown = -1;

    // ctrl
    if (d3.event.keyCode === 17) {
      circle.on('.drag', null);
      svg.classed('ctrl', false);
    }
  }

  // app starts here
  svg.on('mousedown', mousedown)
    .on('mousemove', mousemove)
    .on('mouseup', mouseup)
    .on('mouseover', mouseover)
  d3.select(window)
    .on('keydown', keydown)
    .on('keyup', keyup);
  restart();





}
