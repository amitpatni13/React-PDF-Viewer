import React from 'react';
import {SideBar} from './SideBar.js';
import {ViewPDF} from './PdfView.js';
import './App.scss';

export class App extends React.Component {

  constructor() {
    super();
    this.state = {
      files: [
        { DocumentName: 'Document 01', filePath: 'F:/Amit/Code/Ventive/Sample_PDFs/sample1.pdf' },
        { DocumentName: 'Document 02', filePath: 'F:/Amit/Code/Ventive/Sample_PDFs/sample2.pdf' }
      ],
      selectedFile: { DocumentName: 'Document 02', filePath: 'F:/Amit/Code/Ventive/Sample_PDFs/sample2.pdf' },
      numPages: 1,
      pageNumber: 1
    }
  }

  fileAdded = (filesData, selectedFile) => {
    this.setState({ files: filesData, selectedFile: selectedFile, numPages: 1, pageNumber: 1 });
    return;
  }

  fileSelected = (filesData, selectedFile) => {
    this.setState({ files: filesData, selectedFile: selectedFile, numPages: 1, pageNumber: 1 });
    return;
  }

  pageSelect = (filesData, selectedFile, numPages, pageNumber) => {
    this.setState({ files: filesData, selectedFile: selectedFile, numPages: numPages, pageNumber: pageNumber });
  }

  render() {
    return (
      <div className="App">
        <SideBar className="App-Side-Bar" selectedFileCallback={this.fileSelected} fileAddCallback={this.fileAdded}
          files={this.state.files} selectedFile={this.state.selectedFile} />
        <ViewPDF className="App-Main" files={this.state.files} selectedFile={this.state.selectedFile} numPages={this.state.numPages} pageNumber={this.state.pageNumber} onPageChange={this.pageSelect}  />
      </div>
    );
  }
}
