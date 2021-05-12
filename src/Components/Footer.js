import React, { Component } from 'react'

const {REACT_APP_BACKEND_URL} = process.env;

export default class Footer extends Component {
    render() {
        return (
            <div>
                {/* Main Footer */}
                <footer className="main-footer">
                    <strong>Copyright © 2021 <a href={REACT_APP_BACKEND_URL} target="_blank">Larica Heladería</a>.</strong>
                    <div className="float-right d-none d-sm-inline-block">
                        <b>Version</b> 1.0
                    </div>
                </footer>
            </div>

        )
    }
}
