import React, { Component } from 'react'
import Header from './Header';


export default class Users extends Component {

    constructor(props){
        super(props);
        this.state = {
            users: []
        }
    }

    apiCall(url, consequence){
        fetch(url)
            .then( response => response.json() )
            .then( data => consequence(data) )
            .catch( error => console.log (error) )
    }

    componentDidMount() {
        this.apiCall("http://localhost:3003/api/users", this.users);

    }

    users = (data) => {
        this.setState({
            users: data.data
        })
    }

    render() {
        return (
            <div>
                <div className="content-wrapper">
                    < Header />
                    <section className="content">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-md-12">
                                   < UsersList users={this.state.users} />
                                </div>
                            </div>
                        </div>{/*/. container-fluid */}
                    </section>
                    {/* /.content */}
                </div>
                {/* /.content-wrapper */}
            </div>

        )
    }
}
