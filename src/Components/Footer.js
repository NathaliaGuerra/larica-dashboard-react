import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <div>
                {/* Main Footer */}
                <footer className="main-footer">
                    <strong>Copyright © 2014-2021 <a href="https://adminlte.io">AdminLTE.io</a>.</strong>
                    All rights reserved.
                    <div className="float-right d-none d-sm-inline-block">
                        <b>Version</b> 3.1.0
                    </div>
                </footer>
            </div>

        )
    }
}
