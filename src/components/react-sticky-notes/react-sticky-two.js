import React, { Component } from 'react';
import reducer from './reducers/reducer';
import * as icons from './icons';
import { h, getColorCodes, getNotes, getUUID } from './utils';
import { AlterView } from './views' ;
import './index.scss';
class ReactStickyTwo extends Component {
	static defaultProps = {
		useCSS: true,
		prefix: 'rs-notes',
		colorCodes: ['#ECCC8E'],
		navbar: true,
		sessionKey: 'react-sticky-notes',
		noteWidth: 370,
		noteHeight: 150,
		containerWidth: '700px',
		containerHeight: '700px',
		icons,
		useMaterialIcons: true
	}
	constructor(props) {
		super(props);
		this.state = {
			modal: null,
			viewSize: 'alterview',
			items: getNotes(props.colorCodes, props.notes)
		};
	}
	componentDidMount(){
		if(this.props.useCSS){
			require('./index.scss');
		}
		if(this.props.useMaterialIcons){
			const stylesheet = document.createElement('link');
			stylesheet.href = "https://fonts.googleapis.com/icon?family=Material+Icons";
			stylesheet.rel="stylesheet";
			stylesheet.id="material-icons-css";
			if(!document.getElementById('material-icons-css')){
				document.head.appendChild(stylesheet);
			}
		}
	}
	dispatch = (options) => {
		let { type, payload } = options;
		if(this.props.onBeforeChange){
			payload = this.props.onBeforeChange(type, payload, [...this.state.items])
		}
		this.setState(
			reducer(this.state, { type, payload }),
			()=>{
				if(this.props.sessionKey){
					localStorage.setItem(this.props.sessionKey, JSON.stringify(this.state.items));
				}
				if(this.props.onChange){
					this.props.onChange(type, payload, [...this.state.items])
				}
			}
		)
	}
	getColor() {
		return this.props.colorCodes[Math.floor(Math.random() * this.props.colorCodes.length)];
	}
	addItem = (e, data) => {
		const { items } = this.state;
		const index=data?items.findIndex(item=>item.id===data.id)+1:items.length;
		this.dispatch({
			type: 'add',
			payload: {
				index,
				data: {
					id: getUUID(),
					color: this.getColor(),
					text: '',
					selected: true,
					position: {
						x: 0,
						y: 0
					}
				}
			}
		});
	}
	updateItem = (e, data) => {
		this.dispatch({
			type: 'update',
			payload: {
				data
			}
		});
	}
	deleteItem = (e, data) => {
		this.dispatch({
			type: 'delete',
			payload: {
				data
			}
		});
	}
	changeView = (e) => {
		this.dispatch({
			type: 'changeview'
		});
	}
	changeModal = (e, modal) => {
		this.dispatch({
			type: 'changemodal',
			payload:{
				modal
			}
		});
	}
	saveJSON = (e, json) => {
		this.dispatch({
			type: 'import',
			payload:{
				items: getNotes(this.props.colorCodes, json)
			}
		});
	}
	render() {
		const { items, viewSize } = this.state;
        let View = null;
			switch(viewSize){
				case "pageview":
					View = AlterView
				break;
				default:
					View = AlterView
				break;
			}
		return h( View, {
			...this.props,
			items,
			icons: { ...icons, ...this.props.icons },
			viewSize,
			callbacks: {
				changeView: this.changeView,
				addItem: this.addItem,
				updateItem: this.updateItem,
				deleteItem: this.deleteItem,
				saveJSON: this.saveJSON,		
			}
		})
	}

}
export default ReactStickyTwo;
