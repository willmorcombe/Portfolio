import React, { PureComponent } from 'react';
import './modal.css';


class Modal extends PureComponent {
    render() {
        return (

          <div className="modal">
            <div className="modal__content">
              <div className="modal-header">

                <h2>{this.props.project_data.name}</h2>
              </div>

              <p className="modal-text-description">
                  {this.props.project_data.description}
              </p>

              <p>Built in: <p style={{color:'var(--color-primary)', margin:'0', display:'inline-block'}}>{this.props.project_data.language}</p></p>
              <div className="modal-button">
                <a href={this.props.project_data.url} className="btn modal-button-indv">Go To Repo</a>
                <a onClick={this.props.closeModal} className="btn btn-primary modal-button-indv">Go Back</a>
              </div>




            </div>
        </div>



        )
    }
}

export default Modal;
