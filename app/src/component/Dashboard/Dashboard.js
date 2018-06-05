import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import House from '../House/House';
import './Dashboard.css';

class Dashboard extends Component {
    constructor() {
        super();

        this.state = {
            houseList: []
        };

        this.delete = this.delete.bind(this);
    }

    componentDidMount() {
        axios.get('/api/houses').then( res => {
            this.setState({
                houseList: res.data
            })
        })
    };

    delete(id){
        axios.delete(`api/houses/${ id }`)
        .then( response => {
            axios.get(`/api/houses`)
            .then( res => {
                this.setState({
                    houseList: res.data
                })
            })
        })
    }

    //Reminder: can't have two (res =>) change it to response
    //Reminder: below code will automatically get houseList after it deletes.
    // delete(id) {
    //     axios.delete(`/api/houses/${ id }`)
    //     .then( response => { 
    //         axios.get('/api/houses').then( res => {
    //         this.setState({
    //             houseList: res.data
    //         })
    //     })
    //     })
    // };

    //Reminder: Below method will delete the item, but it won't show the list of house afterwards.
    // delete(id) {
    //     axios.delete(`/api/houses/${ id }`)
    //     .then( res => { 
    //         this.setState({
    //             houseList: res.data
    //         })
    //     })
    // };

    //reminder setup ternary when deleting
    render(){
        const house = this.state.houseList ? this.state.houseList.map( v => {
            return (
                <House key={v.id} item={v} delete={ this.delete } />
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
            ) 
        }) : null;

        return(
            <div className="dashboard">
                <div className="dashboard-head-container">
                     <span className="dashboard-title">Dashboard</span>
                     <Link to='/Wizard'><button className="dashboard-button">Add New Property</button></Link>
                </div>
                {house}
            </div>
        )
    }
}

export default Dashboard;