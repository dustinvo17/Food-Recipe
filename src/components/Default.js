import React, { Component } from 'react'

export default class Default extends Component {
    render() {
        return (
            <div className="ui header huge">
                Page Not Found
                URL {this.props.location.pathname} 
            </div>
        )
    }
}
