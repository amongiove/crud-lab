import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {
    const restaurantReviews = this.props.reviews.filter(reivew => reivew.restaurantId === this.props.restaurantId)
    const reviewList = restaurantReviews.map((review,index) => {
      return (
        <Review 
          key={index}
          review={review}
          deleteReview={this.props.deleteReview} 
        />
      )
    })
      
    return (
      <ul>
        {reviewList}
      </ul>
    );
  }
};

export default Reviews;

