import React, {Component} from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import {ProductConsumer} from '../context'
import PropTypes from 'prop-types'
export default class Product extends Component {

    render() {
        const {id, title, img, price, inCart} = this.props.product
        return (
            <ProductWrapper >
                <ProductConsumer>
                    {(value) => (
                        <div
                            className="column"
                            style={{
                            marginBottom: '2rem'
                        }}>

                            <div className="ui fluid card">

                                <div className="image center aligned">
                                    <Link to="/details">
                                        <img
                                            src={img}
                                            style={{
                                            width: '50%',
                                            height: 'auto'
                                        }}
                                            className="center aligned"
                                            onClick={() => {
                                                value.handleDetail(id)
                                                
                                            }}
                                            
                                            />
                                    </Link>
                                </div>

                                <div className="content center aligned">
                                    <p>{title}</p>
                                    <p className="header">${price}</p>
                                </div>
                                <div className="extra content">
                                    <button
                                        className={`ui button fluid ${inCart
                                        ? 'red'
                                        : 'primary'}`}
                                        disabled={inCart
                                        ? true
                                        : false}
                                        onClick={() => {
                                            value.addToCart(id)
                                            value.openModal(id)
                                            }}>
                                        {inCart
                                            ? (
                                                <p className="header">Aready in Cart</p>
                                            )
                                            : <div> Add To Cart <i className="fas fa-cart-plus">
                                                  </i></div>}
                                    </button>
                                </div>
                            </div>

                        </div>
                    )}
                </ProductConsumer>

            </ProductWrapper>
        )
    }
}
Product.propTypes = {
    product: PropTypes.shape({id: PropTypes.number, title: PropTypes.string, img: PropTypes.string, price: PropTypes.number, inCart: PropTypes.bool})
}

const ProductWrapper = styled.div `
    .image img {
        transition: all 0.5s linear;
        transform:scale(0.9)
    }
    .image img:hover{
        transform:scale(1)
    }
`