import React, { Component } from 'react'
import { storeDatas,DetailProduct } from './data';

const ProductContext=React.createContext()
export default class ProductProvider extends Component {
    state={
        products:[],
        DetailProduct:DetailProduct,
        inCart:[],
        modelOpen:false,
        modelProduct:DetailProduct,
        cartTotal:0,
        cartTax:0,
        cartSubTotal:0
    };
    componentDidMount(){
        this.setProducts();
    };
    setProducts=()=>{
        let tempProducts=[];
        storeDatas.forEach(item=>{
            const SingleItem={...item}
            tempProducts=[...tempProducts,SingleItem]

        });
        this.setState(()=>{
            return {products:tempProducts};
        });

    };
    getItem=(id)=>{
        const product=this.state.products.find((item)=> item.id===id);
        return product;
    }
    handleDetail=(id)=>{
        const product=this.getItem(id);
        this.setState(()=>{return{DetailProduct:product}
    });
        
    }
    addToCart=(id)=>{
        let tempProducts=[...this.state.products];
        const index=tempProducts.indexOf(this.getItem(id));
        const product=tempProducts[index];
        product.inCart=true;
        product.count=1;
        const price=product.price;
        product.total=price;
        this.setState(()=>{
            return{products:tempProducts,inCart:[...this.state.inCart,product]}
        },()=>{this.add_total()}
        )

    }
    modelOpen=(id)=>{
        const Product=this.getItem(id);
        this.setState(()=>{
            return {modelProduct:Product,modelOpen:true}
        })
    }
    closeModel=()=>{
        this.setState(()=>{
            return {modelOpen:false}
        })
    }
    decrement=(id)=>{
        let tempCart=[...this.state.inCart]
        const selectedProduct=tempCart.find(item=>item.id===id)
        const index=tempCart.indexOf(selectedProduct)
        const product=tempCart[index]
        product.count=product.count-1
        if(product.count===0){
            return this.remove_to_cart(id)
        }
        else{
            product.total=product.count*product.price
            this.setState(()=>{
                return{inCart:[...tempCart]}
            },()=>{this.add_total()})
        }
    }
    increment=(id)=>{
        let tempCart=[...this.state.inCart]
        const selectedProduct=tempCart.find(item=>item.id===id)
        const index=tempCart.indexOf(selectedProduct)
        const product=tempCart[index]
        product.count=product.count+1
        product.total=product.count*product.price

        this.setState(()=>{
            return{inCart:[...tempCart]}
        },()=>{this.add_total()})
    }
    remove_to_cart=(id)=>{
        let tempProducts=[...this.state.products];
        let tempincart=[...this.state.inCart];
        tempincart=tempincart.filter(item=>item.id!==id)

        const index=tempProducts.indexOf(this.getItem(id))
        const removeProduct=tempProducts[index]
        removeProduct.inCart=false
        removeProduct.count=0
        removeProduct.total=0

        this.setState(()=>{
            return{
                inCart:[...tempincart],
                products:[...tempProducts]
            }
        },()=>{this.add_total()})

    }
    clear_cart=()=>{
        this.setState(()=>{
            return{inCart:[]}
        },()=>{ this.setProducts();this.add_total()})
    }
    add_total=()=>{
        let subtotal=0;
        this.state.inCart.map((item)=>( subtotal += item.total))
        const tempTax=subtotal*0.070;
        const Tax=parseFloat(tempTax.toFixed(2))
        const total=subtotal+Tax;
        this.setState(()=>{
            return{
                cartSubTotal:subtotal,
                cartTax:Tax,
                cartTotal:total
            }
        })
    }
    render() {
        return (
            <div>
                <ProductContext.Provider value={{
                    ...this.state,
                    handleDetail:this.handleDetail,
                    addToCart:this.addToCart,
                    modelOpen:this.modelOpen,
                    closeModel:this.closeModel,
                    increment:this.increment,
                    decrement:this.decrement,
                    remove_to_cart:this.remove_to_cart,
                    clear_cart:this.clear_cart
                    
                }}>{this.props.children}
                </ProductContext.Provider>
            </div>
        )
    }
}
const ProductConsumer=ProductContext.Consumer;
export{ProductProvider,ProductConsumer}