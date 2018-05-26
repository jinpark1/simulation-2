import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import House from '../House/House'

class Dashboard extends Component {
    constructor() {
        super();

        this.state = {
            houseList: []
        };
    }

    componentDidMount() {
        axios.get('/api/houses').then( res => {
            this.setState({
                houseList: res.data
            })
        })
    };

    delete = (id) => {
        axios.delete(`/api/products/${ id }`)
        .then( res => {
            this.setState({
                houseList: res.data
            })
        })
    }; 



    render(){
        const house = this.state.houseList.map( v => {
            return (
                <House key={v.id} item={v} delete={this.delete}/>
                // Reminder: Passing props to House Component
                // <div key={v.id}>
                //     <p>Property Name: {v.name}</p>
                //     <p>Address: {v.address}</p>
                //     <p>City: {v.city}</p>
                //     <p>State: {v.state}</p>
                //     <p>Zip: {v.zip}</p>
                //     <img src={`${v.img}`} />
                //     <p>Mortgage: {v.mortgage}</p>
                //     <p>Rent: {v.rent}</p>
                // </div>
            );
        });

        return(
            <div>
                <Link to='/Wizard'><button>Add New Property</button></Link>
                {house}
            </div>
        )
    }
}

export default Dashboard;