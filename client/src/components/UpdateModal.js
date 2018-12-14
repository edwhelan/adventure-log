import React, { Component } from 'react';
import {
  Button,
  Modal,
  ModalHeader,
  Form,
  FormGroup,
  Label,
  Input,
  ModalBody,
} from 'reactstrap'
import { connect } from 'react-redux';

class UpdateModal extends Component {
  constructor() {
    super(props);
    this.state = {
      modal: false,
      updateName: ''
    }
  }
  render() {
    return (
      <div>
        <h1>yeeeee</h1>
      </div>
    )
  }
}

export default UpdateModal;