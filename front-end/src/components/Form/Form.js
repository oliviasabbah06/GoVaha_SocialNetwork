import React, { Component } from 'react';

class Form extends Component {
    render() {
        return (
            <div>
                <label id="content">Votre article :</label>
                <input type="text" className="content" id="content"></input>
                <label id="author">Votre nom :</label>
                <input type="text" className="author" id="author"></input>
                <input type="submit">Envoyer !</input>
            </div>
        );
    }
}

export default Form;