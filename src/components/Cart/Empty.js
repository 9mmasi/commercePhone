import React, { Component } from 'react';

export default class Empty extends Component {
  render() {
    return (
      <div className='container mt-5'>
          <div className='row'>
              <div className='col-10 mx-auto text-center'>
                  <h3>Your Cart is Currently Empty</h3>
              </div>
          </div>
        
      </div>
    );
  }
}
