import React, { Component } from 'react'

export default class FlavorsInfoBox extends Component {

    constructor(props){
        super(props);
        
    }

    render() {
        return (
            <div>
                <div className="info-box">
                    <span className="info-box-icon bg-info elevation-1"><i className="fas fa-cog" /></span>
                    <div className="info-box-content">
                        <span className="info-box-text">Total de Sabores</span>
                        <span className="info-box-number">{this.props.totalFlavors}</span>
                    </div>
                    {/* /.info-box-content */}
                </div>
                {/* /.info-box */}
                
            </div>
        )
    }
}
