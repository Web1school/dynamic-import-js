import React, { Component } from 'react';
import { upload } from '../../services/uploadFiles';

class UploadFile extends Component {
  state = {
    fileName: ''
  }

  handleChange = () => {
    this.setState({
      fileName: this.file.files[0].name
    });
    const file = this.file.files[0];
    const formData = new FormData();
    formData.append('file', file);
    upload(formData).then((res) => {
      this.props.setCompName(res.fileName);
    });
  }

  displayName = () => {
    return this.state.fileName ? this.state.fileName : 'Choose file';
  }

  render() {
    return (
      <div className="input-group mb-3">
        <div className="custom-file">
          <input type="file" className="custom-file-input" id="inputFile" ref={(node) => { this.file = node; }} onChange={this.handleChange} />
          <label className="custom-file-label" htmlFor="inputFile">{this.displayName()}</label>
        </div>
        <div className="input-group-append">
          <span className="input-group-text">Upload</span>
        </div>
      </div>
    );
  }
}

export default UploadFile;