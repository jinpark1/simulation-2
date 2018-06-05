import React, { Component } from 'react';
import './House.css';

class House extends Component {
    
    render(){
        console.log(this.props.delete)
        // Reminder: Assigning passed in props from Dashboard Component.
        const item = this.props.item
        console.log(item)
        return(
            <div>
               {item ? // Reminder: Ternary to wait for the this.props.item to render.
                    <div className="house-container">
                        {/* Reminder: Passed in props from Dashboard Component. */}
                        <img className="house-img" src={item.img} alt=''/>
                        <button onClick={ () => this.props.delete(item.id) }>Delete</button>
                        <p>Property Name: {item.name}</p>
                        <p>Address: {item.address}</p>
                        <p>City: {item.city}</p>
                        <p>State: {item.state}</p>
                        <p>Zip: {item.zip}</p>
                        <p>Mortgage: {item.mortgage}</p>
                        <p>Rent: {item.rent}</p>
                    </div> 
               : null}
            </div>
        )
    }
}

export default House;