import React, { Component } from 'react'
import CartItem from './CartItem'
import { ProductConsumer } from '../../context'


export default class CartList extends Component {
   
    render() {
        
        return (
            <React.Fragment>
                
                < div  className='container-fluid'>
                    
                
                        <ProductConsumer>
                            {value=>{
                                return value.inCart.map(item=> <CartItem key={item.id} item={item} value={value}/>)
                            }}
                            
                        </ProductConsumer>
                       
                    
                </div>
            
            </React.Fragment>
            
        )
    }
}
