import React, { Component } from 'react';

export default class CartColumn extends Component {
  render() {
    return (
      <div className='container-fluid text-center d-none d-lg-block'>
          <div className='row'>
              <div className='col-10 mx-auto col-lg-2'>Product</div>
              <div className='col-10 mx-auto col-lg-2'>ProductName</div>
              <div className='col-10 mx-auto col-lg-2'>price</div>
              <div className='col-10 mx-auto col-lg-2'>quantity</div>
              <div className='col-10 mx-auto col-lg-2'>remove</div>
              
              <div className='col-10 mx-auto col-lg-2'>total</div>
          </div>
        
      </div>
    );
  }
}
