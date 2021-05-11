import React, { Component } from 'react'
import InfoBox from './InfoBox';

export default class SimpleCardRow extends Component {

    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div>
                <div className="row">

                    <div className="col-12 col-sm-6 col-md-3">
                        < InfoBox
                            bgstyle="info-box-icon bg-info elevation-1"
                            icon="fas fa-cog"
                            text="Total de Sabores"
                            number={this.props.totalFlavors}
                        />
                    </div>


                    <div className="col-12 col-sm-6 col-md-3">
                        < InfoBox
                            bgstyle="info-box-icon bg-danger elevation-1"
                            icon="fas fa-thumbs-up"
                            text="Total de Categorias"
                            number={this.props.totalFlavorCategories}
                        />
                    </div>

                    <div className="clearfix hidden-md-up" />
                    <div className="col-12 col-sm-6 col-md-3">
                        < InfoBox
                            bgstyle="info-box-icon bg-success elevation-1"
                            icon="fas fa-shopping-cart"
                            text="Total de Tamaños"
                            number={this.props.totalProductSize}
                        />
                    </div>

                    <div className="col-12 col-sm-6 col-md-3">
                        < InfoBox
                            bgstyle="info-box-icon bg-warning elevation-1"
                            icon="fas fa-users"
                            text="Total de Usuarios"
                            number={this.props.totalUsers}
                        />
                    </div>
                </div>

            </div>
        )
    }
}
