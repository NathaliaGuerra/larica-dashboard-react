import React, { Component } from 'react';

const {REACT_APP_BACKEND_URL} = process.env;

export default class ProductModal extends Component {

    constructor(props) {
        super(props)

    }

    render() {

        const targetModal = `modal-flavor${this.props.flavor.id}`;
        const photoUrl = `${REACT_APP_BACKEND_URL}/${this.props.flavor.photo}`;
        const photo = <img src={photoUrl} alt={this.props.flavor.name} className="bd-placeholder-img rounded-circle" width={200} height={200}/>

        return (
            <div className="modal fade" id={targetModal}>
                <div className="modal-dialog">
                    <div className="modal-content">

                        <div className="modal-header">
                            <h4 className="modal-title">{this.props.flavor.name}</h4>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>

                        <div className="modal-body">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-6 d-flex justify-content-center">
                                        {photo}
                                    </div>{/* /.col-lg-6 */}
                                    <div className="col-lg-6">
                                        <h6 className="text-muted">{this.props.flavor.description}</h6>
                                    </div>{/* /.col-lg-6 */}
                                </div>
                            </div>
                        </div>


                        <div className="modal-footer justify-content-between">
                            <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}
