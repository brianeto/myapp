import React, { Component } from 'react';

export default class Button extends Component {

    state = {
        hola: 'hi'
    }

    render() {
        const { action, name, image} = this.props

        return (
            <div className="button" onClick={action}>
                {name}
                <img className="button-image" src={image}/>
            </div>
        );
    }
}
