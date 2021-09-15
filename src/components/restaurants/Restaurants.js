import React, { Component } from 'react';
import Restaurant from './Restaurant';

class Restaurants extends Component {
  render() {
    const restaurantsList = this.props.restaurants.map(r => {
      return (
        <Restaurant 
          key={r.id}
          restaurant={r}
          deleteRestaurant={this.props.deleteRestaurant}
        />
      )
    });

    return(
      <ul>
        {restaurantsList}
      </ul>
    );
  }
};

export default Restaurants;