import React, { Component } from 'react'

const {REACT_APP_BACKEND_URL} = process.env;

export default class UserModal extends Component {

    constructor(props){
        super(props)

    }

    render() {

        const fullName = this.props.user.firstName + ' ' + this.props.user.lastName;
        const avatarSrc = `${REACT_APP_BACKEND_URL}/${this.props.user.avatar}`;
        const avatar = <img src={avatarSrc} alt={fullName} className="bd-placeholder-img rounded-circle" width={100} height={100} />
        const targetModal = `modal-user${this.props.user.id}`;


        return (
            <div className="modal fade" id={targetModal}>
                <div className="modal-dialog">
                    <div className="modal-content">

                        <div className="modal-header">
                            <h4 className="modal-title">{fullName}</h4>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>

                        {/* <div className="modal-body">
                            <p>{this.props.user.email}</p>
                        </div> */}

                        <div className="modal-body">
                        <div className="container">
                            <div className="row">
                            <div className="col-lg-6 d-flex justify-content-center">
                                {avatar}
                            </div>{/* /.col-lg-6 */}
                            <div className="col-lg-6">
                                <h6 className="text-muted">{this.props.user.email}</h6>
                                <h6 className="text-muted">{this.props.user.role}</h6>
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
