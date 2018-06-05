import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Wizard.css';
import { connect } from 'react-redux';
import { updateWizardStep3 } from '../../ducks/reducer';

class WizardStepThree extends Component {
    constructor() {
        super()

    };



    addHouse(){
        // console.log('addHouse---------', this.props)
        // console.log(this.props.location.state)

        let house = this.props;
        let newHouse = {
            name: house.name,
            address: house.address,
            city: house.city,
            state: house.state,
            zip: house.zip,
            img: house.img,
            mortgage: house.mortgage,
            rent: house.rent
        };

        console.log('newHouse-------------', newHouse)

        axios.post('/api/house', newHouse).then( res => {
            this.setState({
                house: res.data
                
            })
        })
    }




    render(){
        console.log('WizardStepThree--------', this.props)

        return(
            <div>
                <div className="form">
                    <div>Recommended Rent: ${1.5 * this.props.mortgage}</div>
                    <Link to='/'><button>Cancel</button></Link>
                    <div>Monthly Mortgage Amount<input onChange={ e => this.props.dispatch(updateWizardStep3('mortgage', e.target.value)) } /></div>
                    <div>Desired Monthly Rent<input onChange={ e => this.props.dispatch(updateWizardStep3('rent', e.target.value)) } /></div>
                    <div>
                        <button><Link to={{pathname:'/Wizard/WizardStepTwo'}}>Previous Step</Link></button>
                        <button onClick={() => this.addHouse() }><Link to='/'>Complete</Link></button>
                    </div>
                </div>
            </div>
        )
    }
}


const mapStateToProps = state => {
    return state;
}

export default connect(mapStateToProps)(WizardStepThree);