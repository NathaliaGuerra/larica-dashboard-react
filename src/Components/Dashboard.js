import React, { Component } from 'react'
import ProductList from './ProductList';
import SimpleCardRow from './SimpleCardRow'

export default class Dashboard extends Component {

    constructor(props){
        super(props);
        this.state = {
            totalFlavors: 0,
            totalFlavorCategories: 0,
            users: 0,
            productSize: 0,
            flavors: [],
            flavorCategories: []
        }
    }

    apiCall(url, consequence){
        fetch(url)
            .then( response => response.json() )
            .then( data => consequence(data) )
            .catch( error => console.log (error) )
    }

    componentDidMount() {
        this.apiCall("http://localhost:3003/api/flavorCategories", this.flavorCategories);
        this.apiCall("http://localhost:3003/api/flavors", this.flavors);
        
        // this.apiCall( "", this.users );
        // this.apiCall( "", this.productSize );
        // this.apiCall( "", this.latestUser );

    }

    flavors = (data) => {
        let flavorsData = [];
        data.data.map((flavor) => {
            this.state.flavorCategories.map((category) => {
                if(flavor.flavorCategoryId == category.id){
                    flavor.categoryName = category.name;
                    flavorsData = flavor;
                }
            })
        })
        console.log(flavorsData)

        this.setState({
            totalFlavors: data.meta.total,
            flavors: flavorsData
        })
    }

    flavorCategories = (data) => {
        this.setState({
            totalFlavorCategories: data.meta.total,
            flavorCategories: data.data
        })

    }


    render() {
        return (
            <div>
                {/* Content Wrapper. Contains page content */}
                <div className="content-wrapper">
                    
                    
                    
                    {/* Content Header (Page header) */}
                    <div className="content-header">
                        <div className="container-fluid">
                            <div className="row mb-2">
                                <div className="col-sm-6">
                                    <h1 className="m-0">Larica Dashboard</h1>
                                </div>{/* /.col */}
                                <div className="col-sm-6">
                                    <ol className="breadcrumb float-sm-right">
                                        <li className="breadcrumb-item"><a href="#">Home</a></li>
                                        <li className="breadcrumb-item active">Larica Dashboard</li>
                                    </ol>
                                </div>{/* /.col */}
                            </div>{/* /.row */}
                        </div>{/* /.container-fluid */}
                    </div>
                    {/* /.content-header */}



                    {/* Main content */}
                    <section className="content">
                        <div className="container-fluid">
                            
                              
                            {/* Info boxes */}
                            < SimpleCardRow 
                                totalFlavors={this.state.totalFlavors}
                            />

                            
                            {/* Main row */}
                            <div className="row">
                                
                                
                                <div className="col-md-6">
                                    {/* ultimo usuario */}
                                    {/* Widget: user widget style 1 */}
                                    <div className="card card-widget widget-user">
                                                {/* Add the bg color to the header using any of the bg-* classes */}
                                                <div className="widget-user-header bg-info">
                                                    <h3 className="widget-user-username">Alexander Pierce</h3>
                                                    <h5 className="widget-user-desc">Último Usuario Registrado</h5>
                                                </div>
                                                <div className="widget-user-image">
                                                    <img className="img-circle elevation-2" src="../dist/img/user1-128x128.jpg" alt="User Avatar" />
                                                </div>
                                                <div className="card-footer">
                                                    <div className="row">
                                                        <div className="col-sm-6 border-right">
                                                            <div className="description-block">
                                                            <h5 className="description-header">Desde:</h5>
                                                                <span className="description-text">08/05/2021 16:00:00</span>
                                                            </div>
                                                            {/* /.description-block */}
                                                        </div>
                                                        {/* /.col */}
                                                        <div className="col-sm-6 ">
                                                            <div className="description-block">
                                                                <h5 className="description-header">Email</h5>
                                                                <span className="">alexander@pierce.com</span>
                                                            </div>
                                                            {/* /.description-block */}
                                                        </div>
                                                        {/* /.col */}
                                                        
                                                    </div>
                                                    {/* /.row */}
                                                </div>
                                            </div>
                                    {/* final ultimo usuario */}
                                </div>


                                <div className="col-md-6">
                                    {/* ultimo sabor */}
                                    <div className="card">
                                        <div className="card-header">
                                            <h3 className="card-title">Último Producto</h3>
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
                                                <div className="col-md-8">
                                                    Foto de ultimo producto
                                                    {/* ./chart-responsive */}
                                                </div>
                                                {/* /.col */}
                                                <div className="col-md-4">
                                                    Detalle de ultimo producto
                                                </div>
                                            {/* /.col */}
                                            </div>
                                            {/* /.row */}
                                        </div>
                                        {/* /.card-body */}
                                        
                                        {/* /.footer */}
                                    </div>
                                    {/* /.card */}


                                    {/* final ultimo sabor */}
                                </div>
                            
                            
                            </div>
                            
                            
                            
                            <div className="row">
                                {/* Left col */}
                                <div className="col-md-8">

                                    <div className="row">
                                        <div className="col-md-6">

                                            

                                        </div>
                                        {/* /.col */}
                                        <div className="col-md-6">
                                           
                                        </div>
                                        {/* /.col */}
                                    </div>
                                    {/* /.row */}
                                   
                                   
                                    {/* TABLE: LATEST ORDERS */}
                                   < ProductList 
                                        flavors = { this.state.flavors}                                   
                                   />


                                </div>
                                {/* /.col */}
                                <div className="col-md-4">
                                    
                                    
                                    {/* PRODUCT LIST */}
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
                                        {/* /.card-header */}
                                        <div className="card-body p-0">
                                            <ul className="products-list product-list-in-card pl-2 pr-2">
                                                <li className="item">
                                                    <div className="product-img">
                                                        <img src="dist/img/default-150x150.png" alt="Product Image" className="img-size-50" />
                                                    </div>
                                                    <div className="product-info">
                                                        <a href="javascript:void(0)" className="product-title">Samsung TV
                        <span className="badge badge-warning float-right">$1800</span></a>
                                                        <span className="product-description">
                                                            Samsung 32" 1080p 60Hz LED Smart HDTV.
                      </span>
                                                    </div>
                                                </li>
                                                {/* /.item */}
                                                <li className="item">
                                                    <div className="product-img">
                                                        <img src="dist/img/default-150x150.png" alt="Product Image" className="img-size-50" />
                                                    </div>
                                                    <div className="product-info">
                                                        <a href="javascript:void(0)" className="product-title">Bicycle
                        <span className="badge badge-info float-right">$700</span></a>
                                                        <span className="product-description">
                                                            26" Mongoose Dolomite Men's 7-speed, Navy Blue.
                      </span>
                                                    </div>
                                                </li>
                                                {/* /.item */}
                                                <li className="item">
                                                    <div className="product-img">
                                                        <img src="dist/img/default-150x150.png" alt="Product Image" className="img-size-50" />
                                                    </div>
                                                    <div className="product-info">
                                                        <a href="javascript:void(0)" className="product-title">
                                                            Xbox One <span className="badge badge-danger float-right">
                                                                $350
                        </span>
                                                        </a>
                                                        <span className="product-description">
                                                            Xbox One Console Bundle with Halo Master Chief Collection.
                      </span>
                                                    </div>
                                                </li>
                                                {/* /.item */}
                                                <li className="item">
                                                    <div className="product-img">
                                                        <img src="dist/img/default-150x150.png" alt="Product Image" className="img-size-50" />
                                                    </div>
                                                    <div className="product-info">
                                                        <a href="javascript:void(0)" className="product-title">PlayStation 4
                        <span className="badge badge-success float-right">$399</span></a>
                                                        <span className="product-description">
                                                            PlayStation 4 500GB Console (PS4)
                      </span>
                                                    </div>
                                                </li>
                                                {/* /.item */}
                                            </ul>
                                        </div>
                                        {/* /.card-body */}
                                        <div className="card-footer text-center">
                                            <a href="javascript:void(0)" className="uppercase">View All Products</a>
                                        </div>
                                        {/* /.card-footer */}
                                    </div>
                                    {/* /.card */}
                                </div>
                                {/* /.col */}
                            </div>
                            {/* /.row */}
                        </div>{/*/. container-fluid */}
                    </section>
                    {/* /.content */}
                </div>
                {/* /.content-wrapper */}
            </div>

        )
    }
}
