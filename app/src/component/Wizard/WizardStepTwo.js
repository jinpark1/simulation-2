import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Wizard.css';
import { updateWizardStep2 } from '../../ducks/reducer';
import { connect } from 'react-redux';

class WizardStepTwo extends Component {
    constructor() {
        super()
    };

    render(){
        console.log('WizardStepTwo---------', this.props)

        return(
            <div>
                <div className="form">
                    <div>IMAGE URL<input onChange={ e => this.props.dispatch(updateWizardStep2('img', e.target.value)) } value={this.props && this.props.img}/></div>
                    <Link to='/'><button>Cancel</button></Link>
                    <div>
                    <button><Link to={{pathname: '/Wizard/'}}>Previous Step</Link></button>
                    <button><Link to={{pathname: '/Wizard/WizardStepThree'}}>Next Step</Link></button>
                    </div>
                </div>
            </div>
        )
    }
}


const mapStateToProps = state => {
    return state;
}

export default connect(mapStateToProps)(WizardStepTwo);