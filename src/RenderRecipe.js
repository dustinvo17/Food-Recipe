import React from 'react'

class RenderRecipe extends React.Component {
    renderIngredients = ingredients => {
        return ingredients.map(item => {

            return (
                <ul >
                    <li >{item.text}</li>
                </ul>
            )
        })
    }
    renderImage = () => {

        const {recipes} = this.props

        return recipes.map(({recipe}) => {
            const {label, calories, image, ingredients} = recipe

            return (
                <div className="card" key={calories}>
                    <div className="ui image">
                        <img src={image}/>
                    </div>

                    <div className="content">
                        <div className="header">{label}</div>
                        <div className="meta">Calories: {calories}</div>
                        <div className="description">{this.renderIngredients(ingredients)}</div>
                    </div>
                </div>
            )
        })
    }
    render() {
        this.renderImage()
        return <div className="ui cards">{this.renderImage()}</div>
    }

}

export default RenderRecipe