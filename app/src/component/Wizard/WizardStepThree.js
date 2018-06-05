import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class WizardStepThree extends Component {
    constructor() {
        super()

        this.state = {
            mortgage: '',
            rent: ''

        };
        
        this.addHouse = this.addHouse.bind( this );
    };


    updateImg( val ){
        this.setState({
            img: val
        });
    };

    addHouse(){
        console.log(this.props)
        console.log(this.props.location.state)

        let house = this.props.location.state; 
        let newHouse = {
            name: house.name,
            address: house.address,
            city: house.city,
            state: house.state,
            zip: house.zip,
            img: house.img,
            mortgage: this.state.mortgage,
            rent: this.state.rent
        }

        console.log('newHouse-------------', newHouse)

        axios.post('/api/house', newHouse).then( res => {
            this.setState({
                house: res.data
            })
        })
    }

    updateMortgage(v){
        this.setState({
            mortgage: v
        })
    }

    updateRent(v){
        this.setState({
            rent: v
        })
    }


    render(){
        console.log(this.props)
        let house = this.props.location.state; 
        let newHouse = {
            name: house.name,
            address: house.address,
            city: house.city,
            state: house.state,
            zip: house.zip,
            img: house.img
        }

        return(
            <div>
                <Link to='/'><button>Cancel</button></Link>
                <div className="Form">
                    <div>Recommended Rent: ${1.5 * this.state.mortgage}</div>
                    <div>Monthly Mortgage Amount<input onChange={ e => this.updateMortgage(e.target.value) } /></div>
                    <div>Desired Monthly Rent<input onChange={ e => this.updateRent(e.target.value) } /></div>
                </div>
                <div>
                    <button><Link to={{pathname: '/Wizard/WizardStepTwo', previous: newHouse}}>Previous Step</Link></button>
                    <button onClick={ this.addHouse }><Link to='/'>Complete</Link></button>
                </div>
            </div>
        )
    }
}

export default WizardStepThree;