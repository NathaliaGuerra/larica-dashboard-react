import React, { Component } from 'react'
import moment from 'moment';

const {REACT_APP_BACKEND_URL} = process.env;

export default class LastFlavorCard extends Component {

    constructor(props){
        super(props);
    }

    render() {
        const createdAt = moment(this.props.latestFlavor.createdAt).format('d-M-YYYY, h:mm:ss a');
        const photoUrl = `${REACT_APP_BACKEND_URL}/${this.props.latestFlavor.photo}`;
        const photo = <img src={photoUrl} alt={this.props.latestFlavor.name} className="img-circle elevation-2" width="170" height="170" />

        return (
            <div className="card">
                <div className="card-header">
                    <h3 className="card-title">Último Sabor</h3>
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
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="widget-user-image border-rigth">
                                {photo}
                            </div>
                            {/* ./chart-responsive */}
                        </div>
                        {/* /.col */}
                        <div className="col-md-6">
                            <h3>{this.props.latestFlavor.name}</h3>
                            <p>{this.props.latestFlavor.description}</p>
                            <small>{createdAt}</small>
                        </div>
                        {/* /.col */}
                    </div>
                    {/* /.row */}
                </div>
                {/* /.card-body */}

                {/* /.footer */}
            </div>

        )
    }
}
