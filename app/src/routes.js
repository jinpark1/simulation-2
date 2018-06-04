import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Dashboard from './component/Dashboard/Dashboard';
import Wizard from './component/Wizard/Wizard';
import WizardStepTwo from './component/Wizard/WizardStepTwo';
import WizardStepThree from './component/Wizard/WizardStepThree';

export default (
    <Switch>
        <Route exact path='/' component={ Dashboard } />
        <Route exact path='/Wizard' component={ Wizard } />
        <Route path='/Wizard/WizardStepTwo'component={ WizardStepTwo } />
        <Route path='/Wizard/WizardStepThree'component={ WizardStepThree } />
    </Switch>
)