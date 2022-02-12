import React, { Component } from 'react'
import styledComponents from 'styled-components';
import { ProductConsumer } from '../context';
import { ButtonContainer } from './button';
import { Link } from 'react-router-dom';


export default class Model extends Component {
    render() {
        return (
           
                <ProductConsumer>
                   
                    {value=>{
                        const {modelOpen,closeModel}=value;
                        const {img,price,Productname}=value.modelProduct;
                        if(!modelOpen){
                            return null;

                        }
                        else{
                            return(
                                <ModelContainer>
                                    <div className='container'>
                                        <div className='row'>
                                            <div className='col-8 mx-auto col-md-6 col-lg-4'  id='modal'>
                                                <h3 className='text-center text-capitalize pt-4'> item added to the cart</h3>
                                                <img src={img} alt='product ' className='img-fluid'/>
                                                <h5>{Productname}</h5>
                                                <p className='text-muted'>{price}</p>
                                                <Link to='/incart'><ButtonContainer cart onClick={()=>closeModel()}> store </ButtonContainer></Link>
                                                <Link to='/'>
                                                <ButtonContainer continue onClick={()=>closeModel()} >continue shopping</ButtonContainer>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </ModelContainer>
                            );
                        }
                        
                       
                        }
                    }
               
                </ProductConsumer>
                
                
           
        )
    }
}
const ModelContainer = styledComponents.div`
position:fixed;
top:0;
bottom:0;
right:0;
left:0;
z-index:2;
background:rgba(0,0,0,0.3);
display:flex;
justify-content:center;
align-items:center;
#modal{
    margin-top:80px;
    background:var(--mainwhite);
}
`;