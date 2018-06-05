import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Wizard.css';

class Wizard extends Component {
    constructor() {
        super()

        this.state = {
            name: '',
            address: '',
            city: '',
            state: '',
            zip: '',
        };
        
        this.addHouse = this.addHouse.bind( this );
    };


    updateName( val ){
        this.setState({
            name: val
        });
    };

    updateAddress( val ){
        this.setState({
            address: val
        });
    };

    updateCity( val ){
        this.setState({
            city: val
        });
    };

    updateState( val ){
        this.setState({
            state: val
        });
    };

    updateZip( val ){
        this.setState({
            zip: val
        });
    };

    addHouse(){
        let newHouse = {
            name: this.state.name,
            address: this.state.address,
            city: this.state.city,
            state: this.state.state,
            zip: this.state.zip
        }

        axios.post('/api/house', newHouse).then( res => {
            this.setState({
                house: res.data
            })
        })
    }


    render(){
        let newHouse = {
            name: this.state.name,
            address: this.state.address,
            city: this.state.city,
            state: this.state.state,
            zip: this.state.zip
        }

        console.log(this.props.location.previous)

        let previous;    
        {this.props.location.previous ?
            newHouse = {
                name: this.props.location.previous.name,
                address: this.props.location.previous.address,
                city: this.props.location.previous.city,
                state: this.props.location.previous.state,
                zip: this.props.location.previous.zip,
            }
            : null;}
        

        return(
            <div>
                <div className="form">
                    <span>Add New Listing</span><span><Link to='/'><button>Cancel</button></Link></span>
                    <div>Property Name<input onChange={ e => this.updateName(e.target.value) } value={this.props.location.previous && this.props.location.previous.name} /></div>
                    <div>Address<input onChange={ e => this.updateAddress(e.target.value) } value={this.props.location.previous && this.props.location.previous.address}/></div>
                    <div>City<input onChange={ e => this.updateCity(e.target.value) } value={this.props.location.previous && this.props.location.previous.city}/></div>
                    <div>State<input onChange={ e => this.updateState(e.target.value) } value={this.props.location.previous && this.props.location.previous.state}/></div>
                    <div>Zip<input onChange={ e => this.updateZip(e.target.value) } value={this.props.location.previous && this.props.location.previous.zip}/></div>
                    <div>
                        <button><Link to={{pathname: '/Wizard/WizardStepTwo', state: newHouse}}>Next Step</Link></button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Wizard;