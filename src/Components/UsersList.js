import React, { Component } from 'react'
import UserItem from './UserItem'

export default class UsersList extends Component {

    constructor(props){
        super(props);
    }
    render() {
        return (
            <div>
                 <div className="card">
                    <div className="card-header border-transparent">
                        <h3 className="card-title">Listado de Usuarios</h3>
                        <div className="card-tools">
                            <button type="button" className="btn btn-tool" data-card-widget="collapse">
                                <i className="fas fa-minus" />
                            </button>
                            <button type="button" className="btn btn-tool" data-card-widget="remove">
                                <i className="fas fa-times" />
                            </button>
                        </div>
                    </div>
                    {/* /.card-header */}
                    <div className="card-body p-0">
                        <div className="table-responsive">
                            <table className="table m-0">
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th></th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    
                                {this.props.users.map((user, i) => {
                                    return <UserItem key={i} user={user} />
                                })}

                                </tbody>
                            </table>
                        </div>
                        {/* /.table-responsive */}
                    </div>
                    {/* /.card-body */}
                    <div className="card-footer clearfix">
                        
                    </div>
                    {/* /.card-footer */}
                </div>
                {/* /.card */}

            </div>
        )
    }
}
