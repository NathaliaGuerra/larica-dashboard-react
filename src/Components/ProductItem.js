import React, { Component } from 'react'

export default class ProductItem extends Component {

    constructor(props){
        super(props)
        console.log(this.props)
    }

    render() {
        return (
            <tr>
                <td> {this.props.id} </td>
                <td> {this.props.name} </td>
                <td> {this.props.status} </td>
                <td>
                   
                </td>
            </tr>
        )
    }
}
