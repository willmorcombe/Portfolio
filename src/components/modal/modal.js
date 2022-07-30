import React, { Component } from 'react';
import './modal.css';


class Modal extends Component {
    render() {
        return (

          <div className="modal">
            <div className="modal__content">
              <div className="modal-header">
              
                <h2>{this.props.project_data.name}</h2>
              </div>

              <p>
                  {this.props.project_data.description}
              </p>

              <p>{this.props.project_data.language}</p>
              <div className="modal-button">
                <a href={this.props.project_data.url} className="btn">Go To Repo</a>
                <a onClick={this.props.closeModal} className="btn btn-primary">Go Back</a>
              </div>




            </div>
        </div>



        )
    }
}

export default Modal;
