import React, { Component } from 'react'
import ProductModal from './ProductModal';

export default class ProductItem extends Component {

    constructor(props){
        super(props)

    }

    render() {
        const dataTarget = `#modal-flavor${this.props.flavor.id}`;
        const buttonModal = <a type="button" class="btn btn-default btn-sm" data-toggle="modal" data-target={dataTarget}><i className="fa fa-eye"></i> </a>;
        
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

                <ProductModal flavor={this.props.flavor} />

            </tr>
        )
    }
}
