import React, { useReducer } from 'react';
import ReactDOM from 'react-dom'
import Cheese from './App'
import './index.css'
import update from 'immutability-helper';
import * as d3 from "d3"
import { DndProvider } from 'react-dnd'
import Backend from 'react-dnd-html5-backend'

function Apps() {
    return (
        <div className="Apps">
            <DndProvider backend={Backend}>
                <Cheese />
            </DndProvider>
        </div>
    )
}
// function App() {
//     return (
//       <div className="App">
//         <h1>This is my heading</h1>
//         <SplitPane split="vertical" minSize={"50%"} defaultSize={"50%"}>
//           <div>split 1</div>
//           <div>split 2</div>
//         </SplitPane>
//       </div>
//     );
//   }

// const D3blackbox = ({ x, y, render }) => {
//   const refAnchor = React.useRef(null);

//   React.useEffect(() => {
//     render(d3.select(refAnchor.current));
//   });

//   return <g ref={refAnchor} transform={`translate(${x}, ${y})`} />
// }

ReactDOM.render(<Apps />, document.getElementById('root'))


