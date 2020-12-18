import React, { Component } from 'react';
import { connect } from 'react-redux';


class EditComponent extends Component {
handleEdit = (e) => {
  e.preventDefault();
  const newTitle = this.getTitle.value;
  const newMessage = this.getMessage.value;
  const newAge = this.getAge.value;
  const newTelephone = this.getTelephone.value;
  const newAddress = this.getAddress.value;
  const newCompany = this.getCompany.value;
  const data = {
    newTitle,
    newAge,
    newTelephone,
    newAddress,
    newCompany,
    newMessage
  }
  this.props.dispatch({ type: 'UPDATE', id: this.props.post.id, data: data })
}
render() {
return (
<div key={this.props.post.id} className="post">
  <form className="form" onSubmit={this.handleEdit}>
    <input required type="text" ref={(input) => this.getTitle = input}
    defaultValue={this.props.post.title} placeholder="Enter Post Title" /><br /><br />
     <input required type="text" ref={(input) => this.getAge = input}
    defaultValue={this.props.post.age} placeholder="Enter Age" /><br /><br />
     <input required type="text" ref={(input) => this.getTelephone = input}
    defaultValue={this.props.post.telephone} placeholder="Enter Your Telephone" /><br /><br />
     <input required type="text" ref={(input) => this.getAddress = input}
    defaultValue={this.props.post.address} placeholder="Enter Your Address" /><br /><br />
     <input required type="text" ref={(input) => this.getCompany = input}
    defaultValue={this.props.post.company} placeholder="Enter Company Name" /><br /><br />
    <textarea required rows="5" ref={(input) => this.getMessage = input}
    defaultValue={this.props.post.message} cols="28" placeholder="Enter Post" /><br /><br />
    <button>Update</button>
  </form>
</div>
);
}
}
export default connect()(EditComponent);