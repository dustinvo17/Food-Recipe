import React, {Component} from 'react'
import styled from 'styled-components';

export default class CartColumns extends Component {
    renderComponent = (content)=>{
        return <div style={{width:'15rem',textAlign:'center'}}>{content}</div>

    }
    render() {
        const {product,price,name,quant,remove,total} = this.props
        return (
            
            <div style={{marginBottom:'2rem'}}>
                <GridContainer>
                  
                   {this.renderComponent(product)}
 
                    {this.renderComponent(name)}

                    {this.renderComponent(price)}
  
                    {this.renderComponent(quant)}
              
                    {this.renderComponent(remove)}
              
                    {this.renderComponent(total)}
                
                </GridContainer>
        

            </div>
        )
    }
}
const GridContainer = styled.div `
display:flex;
justify-content:space-evenly;

`
