import React from 'react';
import logo from './assets/reader-zone.png';
import buttonLogo from './assets/cloudIcon.svg';
import './SideBar.scss';
import {DocumentData} from './Document.js'


export class SideBar extends React.Component {
  constructor(props) {
    super(props);
  }

  sendData = (files) => {
    this.props.fileAddCallback(files, this.props.selectedFile);
    return;
  }

  fileSelected = (selectedFile) => {
    this.props.selectedFileCallback(this.props.files, selectedFile);
    return;
  }



  render() {
    let DocumentRows = [];
    for (let file of this.props.files) {
        DocumentRows.push(<DocumentData key={file.DocumentName} files={this.props.files} DocumentName={file.DocumentName} fileSelectCallback={this.fileSelected} />);
    }
    return (
      <div className="side-bar-main">
        <div className="side-bar-title">
          <img src={logo} className="side-bar-title-logo" alt="logo" />
          <span>&nbsp;Reader Zone</span>
        </div>
        <div className="side-bar-file">files</div>
        <div>{DocumentRows}</div>
        <footer>
            <div className="upload-button" onClick={this.selectFile}>
                <img src={buttonLogo} className="upload-button-logo" alt="logo" />
                <input type="file" id="file" className='upload-file-input' onChange={this.onFileSelect} />
                <div className="upload-button-text">Upload Files</div>
            </div>
        </footer>
      </div>
    );
  }

  selectFile() {
    document.getElementById('file').click();
    return;
  }

  onFileSelect = (input) => {
    const files = input.target.files;
    if (files && files.length) {
      const fileToRead = files[0];
      console.log("File Data: ", fileToRead);
      let filesData = this.props.files;
      filesData.push({ DocumentName: fileToRead.name, filePath: fileToRead.path });
      this.sendData(filesData, this.props.selectedFile);
    }
    return;
  }

}