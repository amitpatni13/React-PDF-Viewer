import React from 'react';
import logo from './assets/documentIconLarge.svg';
import './PdfView.scss';
import { Document, Page } from "react-pdf";

export class ViewPDF extends React.Component {

    constructor(props) {
        super(props);
    }

    onDocumentLoadSuccess = ({ numPages }) => {
        this.setState({ numPages });
    }

    render() {
        const pageNumber = this.props.pageNumber;
        return (
            <div>
                <div className="pdf-view-head">
                    <img src={logo} className="pdf-view-logo" alt="pdf-view-logo" />
                    <div className="pdf-view-title">{this.props.selectedFile.DocumentName}</div>
                </div>
                <div className="pdf-view-area">
                    <Document file={this.props.selectedFile.filePath} onPageChange={this.onDocumentLoadSuccess}>
                        <Page pageNumber={pageNumber} />
                    </Document>
                </div>
            </div>
        );
    }
}