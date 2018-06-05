import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class WizardStepTwo extends Component {
    constructor() {
        super()

        this.state = {
            img: '',
        };
        
        // this.addHouse = this.addHouse.bind( this );
    };


    updateImg( val ){
        this.setState({
            img: val
        });
    };


    render(){
        console.log(this.props)
        // let house = this.props.location.state;
        // let newHouse = {
        //     name: house.name,
        //     address: house.address,
        //     city: house.city,
        //     state: house.state,
        //     zip: house.zip,
        //     img: this.state.img
        // }

        let house;
        let newHouse;
        {this.props.location.state ? 
                newHouse = {
                name: this.props.location.state.name,
                address: this.props.location.state.address,
                city: this.props.location.state.city,
                state: this.props.location.state.state,
                zip: this.props.location.state.zip,
                img: this.state.img
            }
             : null;}
        
        let previous;    
        {this.props.location.previous ?
            newHouse = {
                name: this.props.location.previous.name,
                address: this.props.location.previous.address,
                city: this.props.location.previous.city,
                state: this.props.location.previous.state,
                zip: this.props.location.previous.zip,
                img: this.props.location.previous.img
            }
            : null;}


        return(
            <div>
                <Link to='/'><button>Cancel</button></Link>
                <div className="Form">
                    <div>IMAGE URL<input onChange={ e => this.updateImg(e.target.value) } value={this.props.location.previous && this.props.location.previous.img}/></div>
                </div>
                <div>
                    <button><Link to={{pathname: '/Wizard/', previous: newHouse}}>Previous Step</Link></button>
                    <button><Link to={{pathname: '/Wizard/WizardStepThree', state: newHouse}}>Next Step</Link></button>
                </div>
            </div>
        )
    }
}

export default WizardStepTwo;