import React, { Component } from 'react'

export default class Card extends Component {

    render() {
        const { name, description, image } = this.props
        return (
            <div className="card">
                <span className="card-close">X</span>
                <div className="card-left">
                    <h4>{name}</h4>
                    <div className="card-left-circle">
                        <img src={image} />
                    </div>
                </div>
                <div className="card-right">
                    <h3>Description</h3>
                    <div className="card-right-description">
                    <p>{description}</p>
                    </div>
                </div>
            </div>
        )
    }
}
