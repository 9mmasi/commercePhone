import React, { Component } from 'react'
import Title from '../title'
import CartColumn from './CartColumn'
import Empty from './Empty'
import { ProductConsumer } from '../../context'
import CartList from './CartList'
import CartTotals from './CartTotals'

export default class InCart extends Component {
    render() {
        return (
            
                 <section>
                     <ProductConsumer>
                         {value=>{
                            const{inCart}=value;
                            if(inCart.length>0){
                                return(
                                    <React.Fragment>
                                        <Title name='Your' title='Cart' />
                                        <CartColumn/>
                                        <CartList />
                                        <CartTotals history={this.props.history}/>
                                    </React.Fragment>
                                    

                                );
                            }else{
                                return(
                                    <Empty />

                                )
                            }


                         }}
                        
                        
                     </ProductConsumer>
                
            </section>
           
           
        )
    }
}
