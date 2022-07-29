import React, { Component } from 'react';
import './modal.css';

class Modal extends Component {
    render() {
        return (

          <div className="modal">
            <div className="modal__content">
                <h1>CSS Only Modal</h1>

                <p>
                    You can use the :target pseudo-className to create a modals with Zero JavaScript. Enjoy!
                </p>

                <div className="modal__footer">
                    Made with <i className="fa fa-heart"></i>, by <a href="https://twitter.com/denicmarko" target="_blank">@denicmarko</a>
                </div>

                <a onClick={this.props.closeModal} className="modal__close">&times;</a>
            </div>
        </div>



        )
    }
}

export default Modal;
