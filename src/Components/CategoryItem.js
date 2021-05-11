import React, { Component } from 'react'

export default class CategoryItem extends Component {

    constructor(props){
        super(props)
    }

    render() {
        const photoUrl = `http://localhost:3003/${this.props.category.photo}`;
        const photo = <img src={photoUrl} alt={this.props.category.name} className="img-size-50" />

        return (
            <li className="item">

                <div className="product-img">
                    {photo}
                </div>

                <div className="product-info">
                    {this.props.category.name}
                    <span className="product-description">{this.props.category.countByCategory} sabores</span>
                </div>

            </li>
    )
    }
}
