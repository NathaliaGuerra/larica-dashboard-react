import React, { Component } from 'react'

export default class Menu extends Component {
    render() {
        return (
            <div>
                <aside className="main-sidebar sidebar-dark-primary elevation-4">
                    
                    <a href="index3.html" className="brand-link">
                        <img src="dist/img/LaricaLogo.png" alt="Larica Logo" className="brand-image img-circle elevation-3" style={{ opacity: '.8' }} />
                        <span className="brand-text font-weight-light">Larica</span>
                    </a>
                    
                    
                    <div className="sidebar">
                        

                        <nav className="mt-2">
                            <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                                
                                <li className="nav-item menu-open">
                                    <a href="#" className="nav-link active">
                                        <i className="nav-icon fas fa-tachometer-alt" />
                                        <p>Dashboard</p>
                                    </a>
                                </li>
                                
                            </ul>
                        </nav>
                        
                    </div>
                    
                </aside>
            </div>

        )
    }
}
