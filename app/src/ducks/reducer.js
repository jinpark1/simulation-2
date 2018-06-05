const initialState = {
    name: '',
    address: '',
    city: '',
    state: '',
    zip: '',
}

const UPDATE_NAME = "UPDATE_NAME";
const UPDATE_ADDRESS = "UPDATE_ADDRESS";
const UPDATE_CITY = "UPDATE_CITY";
const UPDATE_STATE = "UPDATE_STATE";
const UPDATE_ZIP = "UPDATE_ZIP";

export default function reducer(state = initialState, action){
    switch( action.type ){
        case UPDATE_NAME:
        return {...state, name: action.payload};
        case UPDATE_ADDRESS:
        return {...state, address: action.payload};
        case UPDATE_CITY:
        return {...state, city: action.payload};
        case UPDATE_STATE:
        return {...state, state: action.payload};
        case UPDATE_ZIP:
        return {...state, zip: action.payload};
        default:
        return state;
    }
}

export function updateWizardStep1(type, value){
    switch(type){
        case 'name':
        return {type: UPDATE_NAME, payload: value};
        case 'address':
        return {type: UPDATE_ADDRESS, payload: value};
        case 'city':
        return {type: UPDATE_CITY, payload: value};
        case 'state':
        return {type: UPDATE_STATE, payload: value};
        case 'zip':
        return {type: UPDATE_ZIP, payload: value};
        default: 
        return value;
    }
}