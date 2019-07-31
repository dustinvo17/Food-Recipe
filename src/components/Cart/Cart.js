import React, { Component } from 'react'
import Title from '../Title'
import CartColumns from './CartColumns'

import {ProductConsumer} from '../../context'
export default class componentName extends Component {
    renderQuant = (count,id,increment,decrement) =>{
        return <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
            <button onClick={()=>decrement(id)} className="ui button red">-</button>
            <span style={{margin:'0 2rem'}}>{count}</span>
            <button onClick={()=>increment(id)}className="ui button primary">+</button>
        </div>
    }
    render() {
        return (
            <ProductConsumer>
                {value =>{
                    let {cart,increment,decrement,removeItem,clearCart,setTotal,cartSubTotal,cartTax,cartTotal} = value
                    if(cart.length){
                    
                        return (
                            <section>
                                 <Title name="your" title="cart">
                            </Title>
                                  <CartColumns product='Product ' name="Name of product" price="Price" quant="Quantity" remove="remove" total="Total"></CartColumns>
                                  {cart.map(({title,company,img,price,count,id})=>{
                                      
                                      return <CartColumns key={id} product={<img className="image ui small" src={img}></img>} name={title} price={price} quant={this.renderQuant(count,id,increment,decrement)} remove={<div onClick={()=>removeItem(id)}className="ui button yellow"><i className="fas fa-trash btn"></i></div> } total={`Item Total: $${price*count}`}></CartColumns>
                                  })}
                                  <div style={{display:'flex',justifyContent:'flex-end',marginRight:'3rem'}}>
                                    <div  className="ui relaxed list">
                                    <div className="item">
                                        <button onClick={()=>clearCart()}  className="ui button red " >Clear Cart</button>
                                    </div>

                                         
                                         
                                           <div className="item">SUBTOTAL : ${cartSubTotal}</div>
                                         <div className="item">TAX : ${cartTax}</div>
                                         <div className="item">TOTAL : ${cartTotal}</div>
                                         
                                        
                                    </div>
                                  </div>
                                    
                                 
                                 
                            </section>
                           
                            
                        )
                    }
                    else{
                        return (
                            <section>
                                <Title name="your cart is" title="currently empty">
                                </Title>
                              
                            </section>
                            
                        )
                    }
                }}
            </ProductConsumer>
           
        )
    }
}
