import React, { Component } from 'react'
import CategoryItem from './CategoryItem';

export default class CategoryList extends Component {

    constructor(props){
        super(props);
    }

    render() {
        return (
            <div className="card">
                <div className="card-header">

                    <h3 className="card-title">Listado de Categorias</h3>
                    <div className="card-tools">

                        <button type="button" className="btn btn-tool" data-card-widget="collapse">
                            <i className="fas fa-minus" />
                        </button>
                        <button type="button" className="btn btn-tool" data-card-widget="remove">
                            <i className="fas fa-times" />
                        </button>

                    </div>

                </div>
                
                <div className="card-body p-0">
                    <ul className="products-list product-list-in-card pl-2 pr-2">

                        {this.props.flavorCategories.map((category, i) => {
                            return <CategoryItem key={i} category={category} />
                        })}
                        
                    </ul>
                </div>
                
                <div className="card-footer text-center">
                </div>
                
            </div>
        )
    }
}
