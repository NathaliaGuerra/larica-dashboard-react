import React, { Component } from 'react'
import CategoryList from './CategoryList';
import Header from './Header';
import LastFlavorCard from './LastFlavorCard';
import LastUserCard from './LastUserCard';
import ProductList from './ProductList';
import SimpleCardRow from './SimpleCardRow';
import UsersList from './UsersList';


export default class Dashboard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            totalFlavors: 0,
            totalFlavorCategories: 0,
            totalUsers: 0,
            totalProductSize: 0,

            flavors: [],
            flavorCategories: [],
            users: [],
            latestUser: {},
            latestFlavor: {}
        }
    }

    apiCall(url, consequence) {
        fetch(url)
            .then(response => response.json())
            .then(data => consequence(data))
            .catch(error => console.log(error))
    }

    componentDidMount() {
        this.apiCall("http://localhost:3003/api/flavorCategories", this.flavorCategories);
        this.apiCall("http://localhost:3003/api/flavors", this.flavors);
        this.apiCall("http://localhost:3003/api/users", this.users);
        this.apiCall("http://localhost:3003/api/products", this.products);
        this.apiCall("http://localhost:3003/api/users/latestUser", this.latestUser);
        this.apiCall("http://localhost:3003/api/flavors/latestFlavor", this.latestFlavor);

    }

    flavors = (data) => {
        data.data.map((flavor) => {
            this.state.flavorCategories.map((category) => {
                if (flavor.flavorCategoryId == category.id) {
                    flavor.categoryName = category.name;
                    this.state.flavors.push(flavor);
                }
            })
        })

        this.setState({
            totalFlavors: data.meta.total
        })
    }

    flavorCategories = (data) => {
        this.setState({
            totalFlavorCategories: data.meta.total,
            flavorCategories: data.data
        })

    }

    users = (data) => {
        data.data.map((user) => {
            this.state.users.push(user);
        });
        this.setState({
            totalUsers: data.meta.total
        })
    }

    products = (data) => {
        this.setState({
            totalProducts: data.meta.total
        })
    }

    latestUser = (data) => {
        this.setState({
            latestUser: data.data
        })
    }

    latestFlavor = (data) => {
        this.setState({
            latestFlavor: data.data
        })
    }

    render() {
        return (
            <div>
                <div className="content-wrapper">
                    < Header />
                    <section className="content">
                        <div className="container-fluid">

                            < SimpleCardRow
                                totalFlavors={this.state.totalFlavors}
                                totalFlavorCategories={this.state.totalFlavorCategories}
                                totalUsers={this.state.totalUsers}
                                totalProductSize={this.state.totalProducts}
                            />

                            <div className="row">

                                <div className="col-md-6">
                                    < LastUserCard latestUser={this.state.latestUser} />
                                </div>

                                <div className="col-md-6">
                                    < LastFlavorCard latestFlavor={this.state.latestFlavor} />
                                </div>

                            </div>


                            <div className="row">

                                <div className="col-md-8">
                                    < ProductList flavors={this.state.flavors} />
                                </div>

                                <div className="col-md-4">
                                    < CategoryList flavorCategories={this.state.flavorCategories} />
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
