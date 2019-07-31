import React, { Component } from 'react'
import Product from './Product'
import Title from './Title'
import {ProductConsumer} from '../context'
export default class ProductList extends Component {

    render() {
        
        return (
           <React.Fragment>
             <div className="">
                <div className="container">
                    <Title name='our' title='products'/>
                </div>
                <div className="ui three column grid center aligned" style={{marginTop:'2rem'}}>
                    <ProductConsumer>
                        {value=>{
                            return value.products.map(product => {
                                return <Product product={product} key={product.id}/>
                            })
                        }}
                    </ProductConsumer>

                </div>
             </div>

           </React.Fragment>
        )
    }
}
