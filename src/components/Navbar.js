import React from 'react'
import {Link} from 'react-router-dom'
import logo from '../logo.svg'
import './Navbar.css'


export default class Navbar extends React.Component{
    render(){
        return (
            <nav className="ui inverted menu navbar teal">
                <div className="left">
                    <Link to="/" className="phone-icon">
                    <img src={logo} alt="store" className="ui icon item"/>
                </Link>
                <ul className="product-list">
                    <li className="product-item">
                        <div className="product"><Link to='/' >Products</Link></div>
                    </li>

               </ul>
                </div>
               
               <Link to='/cart' className="cart">
                   
                        <i className="fas fa-cart-plus"/>
                        <div className="cart-text">My cart</div>
                 
               
               </Link>
            </nav>
        )
    }
}
