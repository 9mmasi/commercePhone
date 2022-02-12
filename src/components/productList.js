import React, { Component } from 'react'
import Title from './title'

import { ProductConsumer } from '../context'
import Product from '../Product'

export default class ProductList extends Component {
   
    render() {
        
        return (
            <React.Fragment>
                <div className='py-5'>
                <div className='container'>
                    <Title name='Our' title='Products' />
                    <div className='row'>
                        <ProductConsumer>
                            {value=>{
                                return value.products.map(product=> <Product key={product.id} product={product}/>)
                            }}
                        </ProductConsumer>
                       
                    </div>
                </div>
            </div>
            </React.Fragment>
            
        )
    }
}
