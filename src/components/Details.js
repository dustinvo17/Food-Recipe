import React, {Component} from 'react'
import {ProductConsumer} from '../context'
import {Link} from 'react-router-dom'
import {ButtonContainer} from './Button'

export default class componentName extends Component {
    render() {
        return (
            <ProductConsumer>
                {(value) => {
                    const {
                        id,
                        title,
                        img,
                        price,
                        company,
                        inCart,
                        info
                    } = value.detailProduct
                    return (
                        <div className="ui container">
                            <div className="ui segment">
                                <div className="ui two column very relaxed grid">
                                    <div className="column ">
                                            <p className="ui red ribbon label">{title}</p>
                                             <img src={img} className="ui image" style={{margin:'0 auto'}}/>
                                      
                                       
                                    </div>
                                    <div className="column"  style={{display:'flex',flexDirection:'column',justifyContent:'space-between'}}>

                                        <div className="ui huge header">Model : {title}</div>
                                        <div className="meta">
                                            <div style={{fontStyle:'italic',color:'#232528',textTransform:'uppercase',fontSize:'1.5rem'}}>Made By : {company}</div>
                                           
                                          
                                        </div>
                                         <div className="ui header"style={{fontSize:'1.2rem',color:'#2a2a72',fontWeight:'bold '}}>Price: ${price}</div>
                                         <div className="ui header">Some Info About Product : </div>
                                         <div style={{width:'70%',fontSize:'1.1rem',fontFamily:'Oswald',color:'grey'}}>{info}</div>
                                        <div style={{marginTop:'1rem'}}>
                                            <Link to="/">
                                                <ButtonContainer>
                                                    Back to products
                                                </ButtonContainer>
                                            </Link>
                                            <Link to='/cart'>
                                                <ButtonContainer  cart disabled={inCart ? true:false} onClick={() =>{
                                                    value.addToCart(id)
                                                }}>
                                                    {inCart ? "inCart" : "add to cart"}
                                                </ButtonContainer>
                                            </Link>
                                            
                                        </div>
                                    </div>

                                </div>

                            </div>

                        </div>

                    )
                }}
            </ProductConsumer>
        )
    }
}
