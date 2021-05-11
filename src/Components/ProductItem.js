import React, { Component } from 'react'

export default class ProductItem extends Component {

    constructor(props){
        super(props)

    }

    render() {
        const dataTarget = `#modal-flavor${this.props.flavor.id}`;
        const buttonModal = <a type="button" class="btn btn-default btn-sm" data-toggle="modal" data-target={dataTarget}><i className="fa fa-eye"></i> </a>;
        const targetModal = `modal-flavor${this.props.flavor.id}`;
        
        let status;
        if(this.props.flavor.status){
            status = <span class="badge badge-info">Activo</span>
        } else {
            status = <span class="badge badge-danger">No Activo</span>
        }

        return (
            <tr>
                <td> {this.props.flavor.id} </td>
                <td> {this.props.flavor.name} </td>
                <td> {status} </td>
                <td> {this.props.flavor.categoryName} </td>
                <td> 
                    {buttonModal}
                </td>

                {/* /.modal */}
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
                                <p>{this.props.flavor.description}</p>
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
