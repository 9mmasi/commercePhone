import React, { Component } from 'react'
import styledComponents from 'styled-components'
import{Link} from 'react-router-dom'
import PropTypes from 'prop-types'
import {ProductConsumer} from './context'

export default class Product extends Component {
    render() {
        const{id,Productname,price,img,inCart}=this.props.product;
        
        return (
            <ProductWrapper className=' d-flex justify-content-center align-items-center product col-lg-3 col-md-6 col-9  my-3'>
                    <div className='card mx-auto' >
           <ProductConsumer>
               {value=> {return( 
               
                                        <div className='image-container' onClick={()=>value.handleDetail(id)}>
                                            <Link to='/productDetail'>
                                                <img src={img} alt='product' className='card-img-top p-5' />
                                            </Link>
                                            <button disabled={inCart?true:false} className='cart-btn' onClick={()=>{value.addToCart(id);value.modelOpen(id)}}>
                                                {inCart ? (<p className='text-capitalize mb-0' disabled>{""}
                                                in cart</p>):
                                                (<i className='fas fa-cart-plus'></i>)
                                            }
                                            </button>
                                        </div>
                                
                                        
                    
                   
                        
                  )}}
                 
           </ProductConsumer>
           <div className='card-footer d-flex justify-content-between'>
                                        <p className='align-self-center mb-0'>{Productname}</p>
                                        <h5 className='font-italic mb-0'>
                                            <span className='mr-1'>$</span>{price}
                                        </h5>
                                    </div>
                            
                       
                    </div>
                </ProductWrapper>
               
     )
    }
}
Product.propTypes={
    product:PropTypes.shape({
        id:PropTypes.number,
        img:PropTypes.string,
        Productname:PropTypes.string,
        price:PropTypes.number,
        incart:PropTypes.bool
    }).isRequired
}
 const ProductWrapper=styledComponents.div`
 .product{
   
 }
 .card{
     border-color:transparent;
     transition:all 1s linear;
     border-radius:0.7rem .8rem 0.6rem .7rem;
     
 }
 .card-footer{
     background:transparent;
     border-top:transparent;
     transition:all 1s linear
 }&:hover{
     .card{
        border:0.04rem solid rgba(0,0,0,0.2);
        box-shadow:2px 2px 5px 0px rgba(0,0,0,0.2)
     }
     .card-footer{
         background:rgba(247,247,247)
     }
 
 }
 .image-container{
     position:relative;
     overflow:hidden;
     
 }
 .card-img-top{
     transition:1s all linear;
     object-fit:contain;
     height:300px;
     width:250px
 }
 .image-container:hover .card-img-top{
     transform:scale(1.2);
 }
 .cart-btn{
     position:absolute;
     bottom:0;
     right:0;
      padding:0.2rem 0.4rem;
      background:var(--mainPink);
      border:none;
      font-size:1.4rem;
      transition:1s all linear;
      transform:translate(100%,100%);
      border-radius:0.5rem 0 0 0;
 }
 .image-container:hover .cart-btn{
     transform:translate(0,0)
 }
 .cart-btn:hover{
     cursor:pointer;
 }
 `