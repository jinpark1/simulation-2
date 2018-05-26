import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

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
        return(
            <div>
                <Link to='/'><button>Cancel</button></Link>
                <div className="Form">
                    <div>Property Name<input onChange={ e => this.updateName(e.target.value) } /></div>
                    <div>Address<input onChange={ e => this.updateAddress(e.target.value) } /></div>
                    <div>City<input onChange={ e => this.updateCity(e.target.value) } /></div>
                    <div>State<input onChange={ e => this.updateState(e.target.value) } /></div>
                    <div>Zip<input onChange={ e => this.updateZip(e.target.value) } /></div>
                </div>
                <div>
                    <button onClick={ this.addHouse }>Complete</button>
                </div>
            </div>
        )
    }
}

export default Wizard;