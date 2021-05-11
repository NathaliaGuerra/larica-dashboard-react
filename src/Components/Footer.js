import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <div>
                {/* Main Footer */}
                <footer className="main-footer">
                    <strong>Copyright © 2021 <a href="http://localhost:3003">Larica Heladería</a>.</strong>
                    <div className="float-right d-none d-sm-inline-block">
                        <b>Version</b> 1.0
                    </div>
                </footer>
            </div>

        )
    }
}
