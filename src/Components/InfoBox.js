import React from 'react'

function InfoBox(props) {
    return (
        <div className="info-box mb-3">
            <span className={props.bgstyle}><i className={props.icon} /></span>
            <div className="info-box-content">
                <span className="info-box-text">{props.text}</span>
                <span className="info-box-number">{props.number}</span>
            </div>
        </div>
    )
}

export default InfoBox;