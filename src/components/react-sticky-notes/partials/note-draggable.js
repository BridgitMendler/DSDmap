import ReactDOM from 'react-dom'
import Draggable from './../utils/draggable';
import { h } from './../utils';
import ChatScreen from '../../../ChatScreen'
import React, { Component, useContext } from 'react'
import { AppContext } from '../../../index'
import { moveKnight } from '../../Game'

class NoteDraggable extends React.Component {
	draggable = null
	constructor(props) {
		super(props);
		this.state= {
			options: {},
		}
		this.element = React.createRef();
		this.draggable = new Draggable();
	}
	componentDidMount() {
		const el = this.element?this.element.current:null;
		const scrollScreen = this.props.scrollScreen
		const options = {
			element: el, 
			unit: this.props.unit,
			useBoundaries: this.props.useBoundaries,
			disabledAxisX: this.props.disabledAxisX,
			position: this.props.position,
			onDragComplete:this.props.onDragComplete,
			onMouseDownMove: this.props.onMouseDownMove,
			onInit:this.props.onInit,
		};
		// console.log(options.position)
		this.setState({options}, ()=> {
			this.draggable.init(options);
		})
	}

	componentDidUpdate(previousProps, previousState) {
				const el = this.element?this.element.current:null;
				const options = {
					element: el, 
					unit: this.props.unit,
					useBoundaries: this.props.useBoundaries,
					disabledAxisX: this.props.disabledAxisX,
					position: this.props.position,
					onDragComplete:this.props.onDragComplete,
					onInit:this.props.onInit,

				};
				const heightly = this.state.heightly
				// this.setState({ heightly: scrollScreen });
					// console.log(el.style.top)
				const top = el.style.top
}




	onMouseDown = (e) => {
		if(this.props.target&&e.target===this.props.target.current){
			this.draggable.onMouseDown(e);
		}
	}
	render() {
		return (
			h('div', {
				className: this.props.className,
				style: this.props.style,
				ref: this.element,
				onMouseDown:this.onMouseDown,
				onTouchStart:this.onMouseDown,
				onScroll:this.props.handleScroll,
				// onParentScroll: this.handleParentScroll
				  },
				
			
				this.props.children
			)
		);
	}
}
export default NoteDraggable;
