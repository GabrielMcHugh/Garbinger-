import React, {Component} from 'react';

class Cutlery extends Component {
	constructor(props) {
		super(props);
		this.state = {
			strokeColour: '#ce123e',
			fillColour: 'white',
			modalFlag: false, //has it been added already?
			modalData: {
				className: 'Cutlery',
				disposalDescription: 'Toss in the recycling bin',
				svgLink: 'Cutlery',
			},
		}
	}

	changeColour = () => {
		let strokeColour = this.state.strokeColour;
		let fillColour = this.state.fillColour;
    	this.setState({strokeColour: fillColour, fillColour: strokeColour});
  	}

    revertColour = () => {
    	let strokeColour = this.state.strokeColour;
		let fillColour = this.state.fillColour;
        this.setState({strokeColour: fillColour, fillColour: strokeColour});
    }

    addModalToDisplay = () => {
    	if (!this.state.modalFlag) {
    		this.props.onClick(this.state.modalData)
    		this.setState({modalFlag: true})
    		//keep the button highlighted
    	} else {//if its already been clicked,
    		this.props.onSecClick(this.state.modalData.className)
    		this.setState({modalFlag: false})
    	}
    }

    onEnterButton = () => {
    	if (!this.state.modalFlag) {
    		this.changeColour()
    	}
    }

    onLeaveButton = () => {
    	if (!this.state.modalFlag) {
    		this.revertColour()
    	}
    }

	render() {


     return (
     	<svg onClick={() => this.addModalToDisplay()} onMouseEnter={this.onEnterButton} onMouseLeave={this.onLeaveButton} xmlns="http://www.w3.org/2000/svg" width="217" height="285" viewBox="0 0 217 285">
		  <g id="Group_192" data-name="Group 192" transform="translate(5294 -17804)">
		    <g id="Group_177" data-name="Group 177" transform="translate(-5293.844 17803.814)">
		      <g id="Ellipse_5" data-name="Ellipse 5" transform="translate(-0.156 0.186)" fill={this.state.fillColour} stroke={this.state.strokeColour} stroke-width="5">
		        <circle cx="108.5" cy="108.5" r="108.5" stroke="none"/>
		        <circle cx="108.5" cy="108.5" r="106" fill="none"/>
		      </g>
		      <g id="Group_165" data-name="Group 165" transform="translate(57.465 79.805)">
		        <g id="Group_24" data-name="Group 24" transform="translate(0)">
		          <g id="Group_12" data-name="Group 12">
		            <path id="Path_27" data-name="Path 27" d="M159.085,4.027A32.3,32.3,0,0,0,142.759,0a15.611,15.611,0,0,0-11.112,4.6,15.817,15.817,0,0,0-3.1,4.4L75.141,6.436c-.233-.018-.462-.027-.708-.028a9.312,9.312,0,0,0-.007,18.624c.231,0,.463-.008.711-.027l53.4-2.568a15.643,15.643,0,0,0,14.221,9c8.237,0,15.727-2.572,20.036-6.881a12.431,12.431,0,0,0,3.926-8.84C166.72,11.123,164.009,6.97,159.085,4.027ZM159.031,20.8c-3.332,3.332-9.415,5.322-16.272,5.322a10.342,10.342,0,0,1-9.906-7.235,2.661,2.661,0,0,0-2.536-1.858c-.043,0-.086,0-.129,0L74.843,19.691l-.083.005c-.118.009-.218.014-.326.014a3.99,3.99,0,0,1-.007-7.979c.111,0,.217,0,.324.014l.093.006,55.346,2.662a2.665,2.665,0,0,0,2.664-1.851,10.436,10.436,0,0,1,2.558-4.2,10.324,10.324,0,0,1,7.348-3.044,26.96,26.96,0,0,1,13.6,3.273c3.252,1.944,5.043,4.475,5.043,7.125A7.241,7.241,0,0,1,159.031,20.8Z" transform="translate(-65.122 0)" fill={this.state.strokeColour}/>
		          </g>
		        </g>
		        <g id="Group_25" data-name="Group 25" transform="translate(2.736 25.971)">
		          <g id="Group_14" data-name="Group 14" transform="translate(0)">
		            <path id="Path_28" data-name="Path 28" d="M162.224,103.99c-.229,0-.463.008-.711.027l-53.4,2.569a15.688,15.688,0,0,0-13.945-9h-16.1a2.661,2.661,0,1,0,0,5.323h13.4v7.732h-13.4a2.661,2.661,0,1,0,0,5.323h13.4v7.732h-13.4a2.661,2.661,0,1,0,0,5.323h16.1a15.63,15.63,0,0,0,10.838-4.6,15.817,15.817,0,0,0,3.1-4.4l53.406,2.569c.235.018.465.027.707.028a9.312,9.312,0,0,0,.007-18.624Zm2.813,12.133a3.952,3.952,0,0,1-3.139,1.155l-.091-.006-55.346-2.662a2.66,2.66,0,0,0-2.664,1.851,10.439,10.439,0,0,1-2.558,4.2,10.334,10.334,0,0,1-4.458,2.635v-19.98a10.35,10.35,0,0,1,7.016,6.827,2.662,2.662,0,0,0,2.665,1.855l55.345-2.662.083-.005c.118-.009.224-.013.326-.014a3.989,3.989,0,0,1,2.82,6.81Z" transform="translate(-75.402 -97.585)" fill={this.state.strokeColour}/>
		          </g>
		        </g>
		      </g>
		    </g>
		    <text id="Cutlery" transform="translate(-5185 18077)" fill="#ce123e" font-size="32" font-family="AvenirNext-DemiBold, Avenir Next" font-weight="300"><tspan x="-53.392" y="0">Cutlery</tspan></text>
		  </g>
		</svg>
	   )

	}
};

export default Cutlery;