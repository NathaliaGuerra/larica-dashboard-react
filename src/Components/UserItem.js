import React, { Component } from 'react'

export default class UserItem extends Component {

    constructor(props){
        super(props)

    }

    render() {
        const fullName = this.props.user.firstName + ' ' + this.props.user.lastName;
        const avatarSrc = `http://localhost:3003/${this.props.user.avatar}`;
        const avatar = <img src={avatarSrc} alt={fullName} className="img-circle elevation-2" width="60" height="60" />
        const dataTarget = `#modal-user${this.props.user.id}`;
        const buttonModal = <a type="button" class="btn btn-default btn-sm" data-toggle="modal" data-target={dataTarget}><i className="fa fa-eye"></i> </a>;
        const targetModal = `modal-user${this.props.user.id}`;

        return (
            
                <tr>
                    <td> {avatar} </td>
                    <td> {fullName}  <br /> <small>{this.props.user.email}</small> </td>
                    <td> 
                        {buttonModal}
                    </td>

                    {/* /.modal */}
                    <div className="modal fade" id={targetModal}>
                    <div className="modal-dialog">
                        <div className="modal-content">

                            <div className="modal-header">
                                <h4 className="modal-title">{fullName}</h4>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">×</span>
                                </button>
                            </div>

                            <div className="modal-body">
                                <p>{this.props.user.email}</p>
                            </div>

                            <div className="modal-footer justify-content-between">
                                <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                            </div>

                        </div>
                        {/* /.modal-content */}
                    </div>
                    {/* /.modal-dialog */}
                    </div>
                    {/* /.modal */}

                </tr>
                
             
        )
    }
}
