// import Map from './components/Map'
// import React, { Component } from 'react'
// import ReactBootstrap from 'react-bootstrap';

// // class Collapsible extends React.Component {
// //     constructor(props){
// //         super(props);
// //         this.state = {
// //             open: false
// //         }
// //         this.togglePanel = this.togglePanel.bind(this);
// //     }

// //     togglePanel(e){
// //         this.setState({open: !this.state.open})
// //     }

// //     componentDidUpdate(){
// //         // this.props.onToggle(this.props.index);
// //     }

// //     render() {
// //       return (<div>
// //         <div onClick={(e)=>this.togglePanel(e)} className='header' >
// //             {this.props.title}</div>
// //         {this.state.open ? (
// //             <div className='content'>
// //                 {this.props.children}
// //             </div>
// //             ) : null}
// //       </div>);
// //     }
// //   }

// // class Accordion extends React.Component {
// //    constructor(props) {
// //     super(props);
    
// //   }
// //   render() {
// //     return  (<div>
// //         <Collapsible title="Map">
// //         <svg width="600" height="2300"> 
// //           <Map width={600} height={1300}/> 
// //         </svg> 
// //         </Collapsible>
// //     </div>
// //     )
// //   }
// // }

// // export default Accordion;




// // const PanelGroup = ReactBootstrap.PanelGroup;
// // const Panel = ReactBootstrap.Panel;


// class PanelHorizontal extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       visible: false
//     }
//   }
  
//   render() {
//     const classesNames = ['panelHorizontal'];
//     if (this.state.visible){
//       classesNames.push('slideIn');
//     } else {
//       classesNames.push('slideOut');
//     }
//     return (
//       <div>
//         <h1
//           className="title"
//           onClick={()=>this.setState({visible: !this.state.visible})}
//         >click to toggle</h1>
        
//         <div className={classesNames.join(' ')}>
//             <svg width="600" height="2300">
//                  <Map width={600} height={1300}/> 
//                  </svg> 
//         </div>
//       </div>
//     );
//   };
// }

// class Accordion extends React.Component {
//   constructor(props) {
//     super(props);
//   }

//   render() {
//     return (
//       <PanelHorizontal />
//     )
//   }
// }

// export default Accordion;