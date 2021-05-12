import React, { Component } from 'react';
import moment from 'moment';

const {REACT_APP_BACKEND_URL} = process.env;

export default class LastUserCard extends Component {

    constructor(props){
        super(props);
    }

    render() {
        const fullName = this.props.latestUser.firstName + ' ' + this.props.latestUser.lastName;
        const createdAt = moment(this.props.latestUser.createdAt).format('d-M-YYYY, h:mm:ss a');
        const avatarSrc = `${REACT_APP_BACKEND_URL}/${this.props.latestUser.avatar}`;
        const avatar = <img src={avatarSrc} alt={fullName} className="img-circle elevation-2" />


        return (
            <div className="card card-widget widget-user">
                
                <div className="widget-user-header bg-info">
                    <h3 className="widget-user-username">{fullName}</h3>
                    <h5 className="widget-user-desc">Último Usuario Registrado</h5>
                </div>


                <div className="widget-user-image">
                    {avatar}
                </div>


                <div className="card-footer">
                    <div className="row">

                        <div className="col-sm-6 border-right">
                            <div className="description-block">
                                <h5 className="description-header">Desde:</h5>
                                <span className="description-text">{createdAt}</span>
                            </div>
                        </div>
                        
                        <div className="col-sm-6 ">
                            <div className="description-block">
                                <h5 className="description-header">Email</h5>
                                <span className="">{this.props.latestUser.email}</span>
                            </div>
                        </div>
                        
                    </div>
                </div>

            </div>
        )
    }
}
