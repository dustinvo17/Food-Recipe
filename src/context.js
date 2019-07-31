import React, {Component} from 'react'
import {storeProducts, detailProduct} from './data'
const ProductContext = React.createContext();

class ProductProvider extends Component {
    state = {
        products: [],
        detailProduct: detailProduct,
        cart: [],
        modalOpen: false,
        modalProduct: detailProduct,
        cartSubTotal: 0,
        cartTax: 0,
        cartTotal: 0
    }
    componentDidMount() {
        this.setProducts()
        
    }
    setTotal =() => {
        let cartSubTotal = 0;
        if(this.state.cart.length){
            this.state.cart.map(item =>{
               cartSubTotal += item.price*item.count
        })
    }
        let cartTax = cartSubTotal /10
        let cartTotal = cartSubTotal + cartTax
    
        return this.setState({cartTotal:cartTotal,cartTax:cartTax,cartSubTotal:cartSubTotal})
          
       
    }
    getItem = id => {
        const product = this
            .state
            .products
            .find(item => item.id === id)
        return product
    }
    setProducts = () => {
        let arr = []
        storeProducts.forEach(item => {
            const singleItem = {
                ...item
            };
            arr = [
                ...arr,
                singleItem
            ]
        });
      
        return this.setState({products: arr})
    }

    handleDetail = (id) => {
        const product = this.getItem(id)
        return this.setState({detailProduct: product})
    }
    addToCart = (id) => {
        let tempProducts = [...this.state.products]
        const index = tempProducts.indexOf(this.getItem(id))
        const product = tempProducts[index]
        product.inCart = true;
        product.count = 1;
        const price = product.price;
        
        
        return this.setState({
            products: tempProducts,
            cart: [
                ...this.state.cart,
                product
            ]
        },()=>this.setTotal())
     
    }
    openModal = id => {
        const product = this.getItem(id)
        this.setState({modalProduct: product, modalOpen: true})
    }
    closeModal = () => {
        return this.setState({modalOpen: false})
    }
    increment = (id) => {
        const temp = this.state.cart
        temp.forEach(item =>{
            if(item.id === id){
                item.count++
            }
        })
        
        return this.setState({cart:temp},()=>this.setTotal())

    }
    decrement = (id) => {
        const temp = this.state.cart
        temp.forEach(item =>{
            if(item.id === id){
                if(item.count > 0){
                    item.count--
                }
            }
        })
     
        return this.setState({cart:temp},()=>this.setTotal())
    }
    removeItem = (id) => {
        const temp = this.state.cart.filter(item => item.id !== id)
         let tempProducts = [...this.state.products]
        const index = tempProducts.indexOf(this.getItem(id))
        const product = tempProducts[index]
        product.inCart = false;
        product.count = 1;

        return this.setState({
            products: tempProducts,
            cart:temp
            
        },()=>this.setTotal())
      
    }
    clearCart = () => {
        this.setState({cart:[]})
        
        this.setProducts()
        this.setTotal()
    }
    render() {
      
        return (
            <ProductContext.Provider
                value={{
                ...this.state,
                handleDetail: this.handleDetail,
                addToCart: this.addToCart,
                openModal: this.openModal,
                closeModal: this.closeModal,
                increment: this.increment,
                decrement: this.decrement,
                removeItem: this.removeItem,
                clearCart: this.clearCart,
                setTotal:this.setTotal
               
            }}>
                {this.props.children}
            </ProductContext.Provider>
        )
    }
}

const ProductConsumer = ProductContext.Consumer;

export {ProductProvider, ProductConsumer}