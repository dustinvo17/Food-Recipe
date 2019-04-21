import React from 'react'
import {connect} from 'react-redux'
import {storeInput, fetchRecipe} from './actions'
import RenderRecipe from './RenderRecipe'
class App extends React.Component {
    onSubmit = (e) => {
        e.preventDefault()
        this
            .props
            .fetchRecipe()

    }
    onInputChange = e => {
        this
            .props
            .storeInput(e.target.value)
    }

    render() {

        return (
            <div >

                <form className="ui segment" onSubmit={(e) => this.onSubmit(e)}>
                    <div className="ui input focus massive icon">
                        <input placeholder="Search food..." onChange={e => this.onInputChange(e)}/>
                        <i className="search icon"></i>
                    </div>

                </form>

                <RenderRecipe recipes={this.props.recipes}/>
            </div>

        )
    }
}
const mapStateToProps = (state, ownProps) => {

    return {userInput: state.storeInput, recipes: state.fetchRecipe}
}
export default connect(mapStateToProps, {storeInput, fetchRecipe})(App)