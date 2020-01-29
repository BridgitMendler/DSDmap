import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import reducer from './reducers/reducer';
import * as icons from './icons';
import { h, getNotes, getUUID } from './utils';
import { NormalView } from './views' ;
import Line from 'react-lineto';
import './index.scss';
class ReactStickyNotes extends Component {
	static defaultProps = {
		useCSS: true,
		prefix: 'rs-notes',
		colorCodes: ['#ECCC8E', '#975347', '#5B7961'],
		navbar: true,
		sessionKey: 'react-sticky-notes',
		noteWidth: 115,
		noteHeight: 115,
		icons,
		useMaterialIcons: true,
	}
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
		this.state = {
			modal: null,
			viewSize: 'normalview',
			items: getNotes(props.colorCodes, props.notes),
			scrollScreen: this.props.scrollScreen,
			scrollVals: this.props.scrollVals,
			onScroll: this.props.handleScroll,
			myArrayID: '',
			myArrayPos: [],
			myHashtags: [],
			allHashtags: [],
			hashtagDups: [],
			newUnsortedHash: [],
		};
	}
	componentDidMount(){

		// if(this.props.useCSS){
		// 	require('./index.scss');
		// }
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

	handleClick(event) {
		const target = event.target.className;
		const child = event.target
		const layer = child.parentElement
		const layerTwo = layer.parentElement
		const source = ReactDOM.findDOMNode(this).getElementsByClassName('listyThree')[0];
		// console.log(this.props.scrollScreen)
		if (target == 'rs-notes--header--button rs-notes--header--button__title') {
		  // this.toggleSidenav(child)
	
		} 
	  }

// 	handleScroll(event) {
// console.log('here')
// 	}


	addItem = (e, data) => {
		
		const childlike = this.props.icons.add
		const source = ReactDOM.findDOMNode(this).getElementsByClassName('green')[0];
		const sourceTwo = ReactDOM.findDOMNode(this).getElementsByClassName('icons-r');

		this.getColor= () => {
			if (e.nativeEvent.target.className === 'icons-g') {
				return '#975347'
			} else if (e.nativeEvent.target.className === 'icons-r') {
				return '#5B7961'
			}
			else {
			return '#ECCC8E';
		}}

		this.getRandom= () => {
			var precision = 1;
			var n = Math.floor(Math.random() * (10-(-10)) + (-10))
			var randomnum = Math.floor(Math.random() * (600 * precision - 200 * precision) + 200 * precision) / (1*precision);
			return randomnum
		}
		this.getRandom2= () => {
			var precision = 1;
			var n = Math.floor(Math.random() * (10-(-10)) + (-10))
			var randomnum = Math.floor(Math.random() * (150 * precision - 100 * precision) + 100 * precision) / (1*precision);
			return randomnum
		}
		
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
						x: this.getRandom(),
						y: this.getRandom2()
					}
				}
			}
		});
// console.log(e)
		if (this.state.items.length === 0) {
			return null
		} 
		else {


	var dataPos = this.state.items[this.state.items.length-1].position
	var dataID = this.state.items[this.state.items.length-1].id
		if (dataPos === undefined) {
			return null
		} else {
			var newInput = Object.assign({}, 
		  this.state.myArrayPos, {[dataID]: [dataPos.x,dataPos.y]});
			this.setState({
			  myArrayPos: newInput,
			});
			
	}
}}

		

	addUpdate = (e, data) => {
		this.getColor= () => {
			if (e.nativeEvent.target.className === 'icons-g') {
				return '#975347'
			} else if (e.nativeEvent.target.className === 'icons-r') {
				return '#5B7961'
			}
			else {
			return '#ECCC8E';
		}}
		const { items } = this.state;

		// console.log(e._targetInst.return.return.return.return.return.return.return.return.sibling)
		const index=data?items.findIndex(item=>item.id===data.id)+1:items.length;
		this.dispatch({
			type: 'add',
			payload: {
				index,
				data: {
					id: getUUID(),
					color: this.getColor(),
					width: '100px',
					position: {
						x: 550,
						y: 100,
						// x: document.getElementsByClassName('rs-notes--header')[index].getBoundingClientRect().x,
						// y: document.getElementsByClassName('rs-notes--header')[index].getBoundingClientRect().y
					}
				}
			}
		});
		// console.log(document.getElementsByClassName('harry'))
	}
	updateItem = (e, data) => {
		// console.log(data.position)
		this.dispatch({
			type: 'update',
			payload: {
				data: {
				}
			}

		}

		);
		// console.log(data)

if (Object.keys(data).includes('text')) {
const newText = data.text
		var regexp = /\B\#\w\w+\b/g
		var result = newText.match(regexp);
		if (result) {
			this.state.allHashtags.push(result[0])
			// console.log(this.state.allHashtags)
			// console.log(result, data.id);
			var newInput = Object.assign({}, 
				this.state.myHashtags, {[data.id]: [result]});
				  this.setState({
					myHashtags: newInput,
				  });
				//   console.log(this.state.myHashtags)
		} else {
			// console.log('false');
		}
						  
	// console.log(data.text)
}

// const findDuplicates = (arr) => {
// 	let sorted_arr = arr.slice().sort(); // You can define the comparing function here. 
// 	let results = [];
// 	let resultsTwo = []
// 	for (let i = 0; i < sorted_arr.length - 1; i++) {
// 	  if (sorted_arr[i + 1] == sorted_arr[i]) {
// 		results.push(sorted_arr[i]);
// 	  }
// 	}
// this.setState({hashtagDups:results})
// // console.log(this.state.hashtagDups)
//   }

// findDuplicates(this.state.allHashtags)


const findDuplicatesTwo = (arr) => {
	function Comparator(a, b) {
		if (a[1] < b[1]) return -1;
		if (a[1] > b[1]) return 1;
		return 0;
	  }
	let sorted_arr = arr.slice().sort(); // You can define the comparing function here. 
	let results = [];
	let resultsTwo = []
	for (let i = 0; i < sorted_arr.length - 1; i++) {
		const index = arr.indexOf(sorted_arr[i]);
	  if (sorted_arr[i + 1] == sorted_arr[i]) {
		results.push([sorted_arr[i],index]);
	  }
	}
	var myArray = results.sort(Comparator);
	for (let i = 0; i < myArray.length; i++) {
		resultsTwo.push(myArray[i][0]);
	}
this.setState({hashtagDups:resultsTwo})
// console.log(resultsTwo)
  }

findDuplicatesTwo(this.state.allHashtags)	

		if (data.position == undefined) {
			return null
		} else {
			var objectSize = Object.keys(this.state.myArrayPos).length;
			var newInput = Object.assign({}, 
		  this.state.myArrayPos, {[data.id]: [data.position.x,data.position.y]});
			this.setState({
			  myArrayPos: newInput,
			});
			console.log(this.state.myArrayPos)
		}
	}
	deleteItem = (e, data) => {
		console.log(data)
		this.dispatch({
			type: 'delete',
			payload: {
				data: {
				}
			}
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

	render() {

		const { items, viewSize } = this.state;
		// console.log(this.props)
        let View = NormalView
		return h( View, {
			...this.props,
			myArrayPos:this.state.myArrayPos,
			myArrayID: this.state.myArrayID,
			myHashtags: this.state.myHashtags,
			allHashtags: this.state.allHashtags,
			hashtagDups: this.state.hashtagDups,
			visible: this.props.visible,
			convoBoxSize: this.props.convoBoxSize,
			items,
			icons: { ...icons, ...this.props.icons },
			viewSize,
			callbacks: {
				changeView: this.changeView,
				addItem: this.addItem,
				updateItem: this.updateItem,
				deleteItem: this.deleteItem,
				addUpdate: this.addUpdate		
			}
		},
		)
	}

}
export default ReactStickyNotes;
