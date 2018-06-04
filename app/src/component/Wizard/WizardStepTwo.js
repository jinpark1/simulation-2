import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class WizardStepTwo extends Component {
    constructor() {
        super()

        this.state = {
            img: '',
        };
        
        this.addHouse = this.addHouse.bind( this );
    };


    updateImg( val ){
        this.setState({
            img: val
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
        console.log(this.props)
        return(
            <div>
                <Link to='/'><button>Cancel</button></Link>
                <div className="Form">
                    <div>IMAGE URL<input onChange={ e => this.updateImg(e.target.value) }/></div>
                </div>
                <div>
                    <button><Link to='/Wizard/'>Previous Step</Link></button>
                    <button><Link to={{pathname: '/Wizard/WizardStepThree', state: this.props.location.state}}>Next Step</Link></button>
                </div>
            </div>
        )
    }
}

export default WizardStepTwo;