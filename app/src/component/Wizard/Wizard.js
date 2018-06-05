import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Wizard.css';
import { connect } from 'react-redux';
import { updateWizardStep1 } from '../../ducks/reducer';

class Wizard extends Component {
    constructor() {
        super()
    };




    render(){
        console.log('Redux----------', this.props);

        return(
            <div>
                <div className="form">
                    <span>Add New Listing</span><span><Link to='/'><button>Cancel</button></Link></span>
                    <div>Property Name<input onChange={ e => this.props.dispatch(updateWizardStep1('name', e.target.value)) } value={this.props && this.props.name} /></div>
                    <div>Address<input onChange={ e => this.props.dispatch(updateWizardStep1('address', e.target.value)) } value={this.props && this.props.address}/></div>
                    <div>City<input onChange={ e => this.props.dispatch(updateWizardStep1('city', e.target.value)) } value={this.props && this.props.city}/></div>
                    <div>State<input onChange={ e => this.props.dispatch(updateWizardStep1('state', e.target.value)) } value={this.props && this.props.state}/></div>
                    <div>Zip<input onChange={ e => this.props.dispatch(updateWizardStep1('zip', e.target.value)) } value={this.props && this.props.zip}/></div>
                    <div>
                        <button><Link to={{pathname: '/Wizard/WizardStepTwo'}}>Next Step</Link></button>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return state;
}


export default connect(mapStateToProps)(Wizard);