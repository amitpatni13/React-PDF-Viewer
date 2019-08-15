import React from 'react';
import logo from './assets/documentIcon.svg';
import './Document.scss';

export class DocumentData extends React.Component {
    constructor(props) {
        super(props);
    }

    sendData = (files) => {
        this.props.fileSelectCallback(files);
    }
    render() {
        return (
            <div className="document-main" onClick={this.fileSelected}>
                <img src={logo} className="document-logo" alt="logo" />
                <div className="document-text">
                    <div className="document-title">{this.props.DocumentName}</div>
                    <div className="document-sub-title">Nam vel porta velit</div>
                </div>
            </div>
        );
    }

    fileSelected = () => {
        for (let file of this.props.files) {
            if (file.DocumentName === this.props.DocumentName) {
                this.sendData(file);
                return;
            }
        }
    }
}