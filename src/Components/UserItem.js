import React, { Component } from 'react'
import UserModal from './UserModal';

const {REACT_APP_BACKEND_URL} = process.env;

export default class UserItem extends Component {

    constructor(props){
        super(props)

    }

    render() {
        const fullName = this.props.user.firstName + ' ' + this.props.user.lastName;
        const avatarSrc = `${REACT_APP_BACKEND_URL}/${this.props.user.avatar}`;
        const avatar = <img src={avatarSrc} alt={fullName} className="img-circle elevation-2" width="60" height="60" />
        const dataTarget = `#modal-user${this.props.user.id}`;
        const buttonModal = <a type="button" class="btn btn-default btn-sm" data-toggle="modal" data-target={dataTarget}><i className="fa fa-eye"></i> </a>;

        return (
            
                <tr>
                    <td> {avatar} </td>
                    <td> {fullName}  <br /> <small>{this.props.user.email}</small> </td>
                    <td> 
                        {buttonModal}
                    </td>

                    < UserModal user={this.props.user}/>

                </tr>
                
             
        )
    }
}
