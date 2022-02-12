import React, { Component } from 'react'

export default class CartItem extends Component {
  render(){
    const{id,img,Productname,total,price,count}=this.props.item;
    const{increment,decrement,remove_to_cart}=this.props.value;
    return (
      <div className='text-capitalize text-center row my-1'>
        <div className=' col-10 mx-auto col-lg-2'>
          <img src={img} style={{width:"5rem",height:"5rem"}}
           className='img-fluid' alt='product'/>
        </div>
        <div className='col-10 mx-auto col-lg-2'>
          <h5><span className='d-lg-none'>Product:</span>{Productname}</h5>
        </div>
        <div className='col-10 mx-auto col-lg-2'>
          <h4><span className='d-lg-none'>Price:</span>{price}</h4>
        </div>
        <div className='col-10 mx-auto col-lg-2'>
          <div className='d-flex justify-content-center'>
            <div>
              <span className='btn-dark mx-1' onClick={()=>decrement(id)}><i className='fas fa-minus text-dark'></i></span>
              <span className='btn-dark mx-1'>{count}</span>
              <span className='btn-dark mx-1' onClick={()=>increment(id)}><i className='fas fa-plus text-dark'></i></span>
            </div>
          </div>
        </div>
        <div className='col-10 mx-auto col-lg-2' onClick={()=>remove_to_cart(id)}>
          <i className='fas fa-trash'></i>
        </div>
        <div className='col-10 mx-auto col-lg-2'>
          <h4><span className='d-lg-none'>total:</span>{total}</h4>
        </div>
      </div>
    )
  }
  
  }
  
  