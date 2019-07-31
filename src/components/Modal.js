import React, {Component} from 'react'
import styled from 'styled-components';
import {ProductConsumer} from '../context'
import {ButtonContainer} from './Button'
import {Link} from 'react-router-dom'
export default class Modal extends Component {
    render() {
        return (
            <ProductConsumer>
                {value => {
                    const {modalOpen, closeModal} = value
                    const {img, title, price} = value.modalProduct
                    if (!modalOpen) {
                        return null
                    } else {

                        return (
                            <ModalContainer>

                                <div className='ui fluid card'>
                                    <div className="center aligned">
                                        <img src={img}/>
                                    </div>
                                    <div className="content">
                                        <div className="header center aligned">{title}</div>
                                    </div>
                                    <div className="description center aligned">${price}</div>
                                    <div className="extra content center aligned">
                                        <Link to="/cart"onClick={()=>closeModal()}>
                                             <ButtonContainer className="" >
                                            Go To Cart
                                        </ButtonContainer>
                                        </Link>
                                       
                                        <Link to='/' onClick={()=>closeModal()}>
                                            <ButtonContainer className="">
                                                Continue Shopping
                                            </ButtonContainer>
                                        </Link>

                                    </div>

                                </div>
                            </ModalContainer>
                        )
                    }
                }}
            </ProductConsumer>

        )
    }
}

const ModalContainer = styled.div `
    position:fixed;
    top:0;
    left:0;
    right:0;
    bottom;
    background:rgba(0,0,0,0.3);
    display:flex;
    align-items:center;
    justify-content:center;
    height:100vh;

`
