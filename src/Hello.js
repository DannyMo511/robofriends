import React, {Component} from 'react';
import './Hello.css';

class Hello extends Component{
	render(){
		return (
			<div className='f2 tc'>
				<h1>Hello World!</h1>
				<h2>{this.props.greetings}</h2>
			</div>
		)
	}
}

export default Hello;