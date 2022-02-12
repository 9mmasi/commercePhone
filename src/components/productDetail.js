import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { ProductConsumer } from '../context';
import {ButtonContainer} from './button';

export default class ProductDetail extends Component {
    render() {
        return( 
        <ProductConsumer>
            {value=>{
                 const{id,img,description,company,Productname,inCart}=value.DetailProduct;
                 
            return (
                <div className='container py-5'> 
                <div className='row py-5'>
                    <h2 className='text-center capitalize'>
                        {Productname}
                    </h2>

                </div>
                <div className='row'>
                    <div className='col col-10 mx-auto col-md-6'>
                        <img src={img} alt={Productname} className='img-fluid' />
                    </div>
                    <div className='col text-capitalize  py-3 m-auto'>
                        <h4>made by:<span>{company}</span></h4>
                        <p className='lead'>{description}</p>
                       
                        <div>
                        <Link to='/'>
                            <ButtonContainer continue>
                                Continue shopping
                            </ButtonContainer>

                        </Link>
                        <ButtonContainer cart disabled={inCart?true:false} onClick={()=>{value.addToCart(id);value.modelOpen(id)}}>
                           {inCart ? (<p className='text-capitalize mb-0' disabled>{""}
                                        in cart</p>):
                                        (<p  className='text-capitalize mb-0'>Add to cart</p>)}
                        </ButtonContainer>
                        </div>
                        
                    </div>
                </div>
                    
                </div>
            )
            }}
        </ProductConsumer>);
       
       
    }
}
