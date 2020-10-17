import React, {Component} from 'react';

class Coffee extends Component {
	constructor(props) {
		super(props);
		this.state = {
			strokeColour: '#ffd166',
			fillColour: 'white',
			modalFlag: false, //has it been added already?
			modalData: {
				className: 'Coffee Cup',
				disposalDescription: 'Pull of the lid and place into the Yellow Bin and toss the Cup into the Red Bin',
				svgLink: 'Coffee',
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
		<svg onClick={() => this.addModalToDisplay()} onMouseEnter={this.onEnterButton} onMouseLeave={this.onLeaveButton} xmlns="http://www.w3.org/2000/svg" width="217" height="282" viewBox="0 0 217 282">
			  <g id="Group_191" data-name="Group 191" transform="translate(5527 -17542)">
			    <g id="Group_182" data-name="Group 182" transform="translate(-5527.049 17542)">
			      <g id="Ellipse_12" data-name="Ellipse 12" transform="translate(0.049)" fill={this.state.fillColour} stroke={this.state.strokeColour} stroke-width="5">
			        <circle cx="108.5" cy="108.5" r="108.5" stroke="none"/>
			        <circle cx="108.5" cy="108.5" r="106" fill="none"/>
			      </g>
			      <g id="coffee" transform="translate(60.173 48.008)">
			        <path id="Path_25" data-name="Path 25" d="M93.052,10.828H87.237L85.622,2.979A3.743,3.743,0,0,0,81.973,0H16.237a3.741,3.741,0,0,0-3.649,2.979l-1.616,7.849H5.157A4.667,4.667,0,0,0,.5,15.495V23.21a4.668,4.668,0,0,0,4.657,4.667H7.442L8.737,37a4.094,4.094,0,0,0-2.015,4.135L15.366,102a4.123,4.123,0,0,0,3.086,3.4l1.23,8.666a6.771,6.771,0,0,0,6.666,5.8H71.861a6.771,6.771,0,0,0,6.666-5.8l1.23-8.666a4.123,4.123,0,0,0,3.086-3.4l8.645-60.865A4.092,4.092,0,0,0,89.472,37l1.3-9.118h2.285A4.668,4.668,0,0,0,97.71,23.21V15.495A4.668,4.668,0,0,0,93.052,10.828ZM88.015,40.636,79.37,101.5a.59.59,0,0,1-.581.506H62a1.758,1.758,0,0,0,0,3.515H76.2l-1.143,8.049a3.244,3.244,0,0,1-3.194,2.777H26.349a3.244,3.244,0,0,1-3.194-2.777l-1.143-8.049H53.843a1.758,1.758,0,0,0,0-3.515H19.42a.59.59,0,0,1-.581-.506L10.194,40.636a.583.583,0,0,1,.551-.668l.071,0H87.392l.071,0a.583.583,0,0,1,.551.668ZM10.985,27.878H87.224l-1.217,8.571H12.2ZM94.2,23.21a1.152,1.152,0,0,1-1.15,1.152H5.157a1.153,1.153,0,0,1-1.15-1.152V15.495a1.153,1.153,0,0,1,1.15-1.152H20.85a1.757,1.757,0,0,0,0-3.514h-6.3L16.023,3.69a.221.221,0,0,1,.214-.176H81.973a.221.221,0,0,1,.214.176l1.469,7.138H29.011a1.757,1.757,0,0,0,0,3.514H93.052a1.152,1.152,0,0,1,1.15,1.152Zm0,0" transform="translate(-0.5 0)" fill={this.state.strokeColour}/>
			        <path id="Path_26" data-name="Path 26" d="M168.355,229.591l-.04-.037c-6.236-6.172-17.6-4.891-25.362,2.876a22.714,22.714,0,0,0-6.664,13.06,14.484,14.484,0,0,0,3.834,12.351l0,0,.015.014a13.992,13.992,0,0,0,10.09,3.96,18.353,18.353,0,0,0,2.243-.142,22.725,22.725,0,0,0,13.061-6.664c7.785-7.786,9.055-19.186,2.83-25.411A.069.069,0,0,0,168.355,229.591Zm-28.343,16.362a18.964,18.964,0,0,1,5.593-10.87,18.405,18.405,0,0,1,12.616-5.714,11.11,11.11,0,0,1,5.319,1.272c-3.15,1.871-8.042,5.553-9.53,11.009-1.294,4.743-8.317,10-12.172,12.435A11.246,11.246,0,0,1,140.013,245.952Zm22.868,6.4a18.958,18.958,0,0,1-10.87,5.593,11.611,11.611,0,0,1-7.28-1.272c3.869-2.554,11.279-8.1,12.9-14.042,1.323-4.853,6.551-8.12,8.939-9.39C170.283,238.189,168.788,246.449,162.881,252.357Zm0,0" transform="translate(-105.637 -174.228)" fill={this.state.strokeColour}/>
			      </g>
			    </g>
			    <text id="Coffee_Cup" data-name="Coffee Cup" transform="translate(-5418 17812)" fill="#ffd166" font-size="32" font-family="AvenirNext-DemiBold, Avenir Next" font-weight="300"><tspan x="-83.68" y="0">Coffee Cup</tspan></text>
			  </g>
		</svg>
	   )

	}
};

export default Coffee;