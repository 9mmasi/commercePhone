import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { ProductConsumer } from '../../context';

export default class CartTotals extends Component {
  render() {
    return (
      <div>
        <ProductConsumer>
            {value=>{
                const{cartTotal,cartTax,cartSubTotal,clear_cart}=value;
                return(
                    <React.Fragment>
                        <div className='container'>
                            <div className='row tax_total'>
                                <div className='col-10 mt-2 ml-5 col-sm-8 text-capitalize '>
                                
                                <Link to='/' >
                                        <button className='btn btn-outline-danger    mb-3  px-5 text-uppercase' type='button' onClick={()=>clear_cart()}>clear_cart</button>
                                    </Link>
                                    
                                    <h5>
                                        <strong>SubTotal:</strong>
                                        {cartSubTotal}
                                    </h5>
                                    <h5>
                                        <strong>Tax:</strong>
                                        {cartTax}
                                    </h5>
                                    <h5>
                                        <strong>Total:</strong>
                                        {cartTotal}
                                    </h5>
                                
                                   
                                    
                                </div>
                            </div>
                        </div>
                    </React.Fragment>
                )
            }}
        </ProductConsumer>
      </div>
    );
  }
}
