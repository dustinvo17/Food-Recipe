import React, { Component } from 'react'
import {ProductConsumer} from '../../context'
export default class componentName extends Component {
    render() {
        return (
            <ProductConsumer>
                {value =>{
                    console.log(value.cart)
                }}
            </ProductConsumer>
        )
    }
}
