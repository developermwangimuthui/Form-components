import React from 'react';
import logo from './logo.svg';
import { Message, Form } from "semantic-ui-react";

import './App.css';
class ReactForm extends React.Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.target);
    console.log(data);
    this.setState({ isSubmitting: true });
    fetch("https:kenyasihami.co.ke/api/v1/newlogin", {
        method: "POST",
        body:data,
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(res => {
        this.setState({ isSubmitting: false });
        return res.json();
    })
    .then(data => {
        console.log(data);
        !data.hasOwnProperty("error")
            ? this.setState({ message: data.success })
            : this.setState({ message: data.error, isError: true });
    });
  }

  render() {
    return (

      <div className="row" id="evra">
      {/* left column */}
      <div className="col-md-4"></div>
      <div className="col-md-4">
        {/* general form elements */}
        <div className="card card-primary">
          <div className="card-header">
            <h3 className="card-title">Form Component</h3>
          </div>
          {/* /.card-header */}
          {/* form start */}
          <form role="form" onSubmit={this.handleSubmit}>
            <div className="card-body">
              <div className="form-group">
                <label htmlFor="text">Text</label>
                <input type="text" className="form-control" id="text" placeholder="placeholder-value" name="text"   />
              </div>
              <div className="form-group">
                <label htmlFor="textArea">Text Area</label>
                <textarea type="textArea" className="form-control" id="textArea" placeholder="default-value" name="password"/>
              </div>
       
            
            </div>
            {/* /.card-body */}
            <div className="card-footer">
              <button type="submit" className="btn btn-primary">Submit</button>
            </div>
        
          </form>
        </div>
        {/* /.card */}
        {/* Form Element sizes */}
       
      </div>
    <div className= "col-md-4"></div>
    </div>
      
    );
  }
}

export default ReactForm;











