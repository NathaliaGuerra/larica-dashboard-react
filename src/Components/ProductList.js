import React, { Component } from 'react'
import ProductItem from './ProductItem'

export default class ProductList extends Component {

    constructor(props){
        super(props);
console.log(this.props.flavors)
    }

    render() {
        return (
            <div>
                 <div className="card">
                    <div className="card-header border-transparent">
                        <h3 className="card-title">Listado de Productos (Sabores)</h3>
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
                                        <th>ID</th>
                                        <th>Name</th>
                                        <th>Status</th>
                                        <th>Category</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    
                                    {this.props.flavors.map((flavor) => {
                                        return <ProductItem flavor={flavor} />
                                    })}

                                </tbody>
                            </table>
                        </div>
                        {/* /.table-responsive */}
                    </div>
                    {/* /.card-body */}
                    <div className="card-footer clearfix">
                        <a href="javascript:void(0)" className="btn btn-sm btn-info float-left">Place New Order</a>
                        <a href="javascript:void(0)" className="btn btn-sm btn-secondary float-right">View All Orders</a>
                    </div>
                    {/* /.card-footer */}
                </div>
                {/* /.card */}

            </div>
        )
    }
}
