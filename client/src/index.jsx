import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ReviewList from './components/reviewList.jsx';
import $ from 'jquery';

class Review extends Component {
  constructor() {
    super();
    this.state = {
      currentId: 3,
      reviews: []
    };
  }

  getReviewsForItem() {
    if (this.state.currentId === -1) {
      return;
    }
    $.get({
      url: `/reviews/${this.state.currentId}`
    })
      .then((reviews) => {
        this.setState({
          reviews
        });
        console.log(reviews);
      });
  }

  handleReviewPost() {
    // this data is just inserted for testing
    const review = {
      author: 'Jon',
      body: 'I\'m baby biodiesel before they sold out chia disrupt skateboard. Selfies bicycle rights hashtag wolf hexagon health goth chambray distillery chia chartreuse. Bespoke kickstarter fanny pack taxidermy. Mlkshk venmo everyday carry gentrify, YOLO synth activated charcoal literally vaporware truffaut pop-up bespoke keytar. Lomo taiyaki synth af VHS.',
      item: 1,
      rating: 5,
      likes: 25
    };
    $.post({
      url: '/reviews',
      data: review
    })
      .then(() => {
        console.log('sent');
      });
  }

  render() {
    return (
      <div className="reviews-component">
        <h1 className="reviews-component-header">REVIEWS</h1>
        <p className="for-testing"><em>The following buttons are used exclusevily for testing</em></p>
        <button className="for-testing" onClick={this.handleReviewPost} >Sent post request for testing</button>
        <button className="for-testing" onClick={this.getReviewsForItem.bind(this)} >Get me some reviews</button>
        <ReviewList reviews={[{
          _id: '5e6a7cdb65467417187a3bf2',
          author: 'Sierra',
          body: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Curabitur sed tortor. Integer aliquam adipiscing lacus. Ut nec urna',
          item: 3,
          rating: 8,
          likes: 214
        }, {
          _id: '5e6a7cdb65467417187a3c0',
          author: 'Lee',
          body: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Curabitur sed tortor. Integer aliquam adipiscing lacus. Ut nec urna et arcu',
          item: 3,
          rating: 8,
          likes: 312
        }]}/>
      </div>
    );
  }
}

ReactDOM.render(
  <Review />,
  document.getElementById('review')
);