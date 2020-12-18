import React, { Component } from 'react';
import { connect } from 'react-redux';
import AllPost from './AllPost';

class PostForm extends Component {
    constructor () {
        super()
        this.state = {
          isHidden: true
        }
      }
      toggleHidden () {
        this.setState({
          isHidden: !this.state.isHidden
        })
      }    
handleSubmit = (e) => {
e.preventDefault();
 const title = this.getTitle.value;
 const age = this.getAge.value;
 const telephone = this.getTelephone.value;
 const address = this.getAddress.value;
 const company = this.getCompany.value;
 const message = this.getMessage.value;
 const data = {
  id: new Date(),
  title,
  age,
  telephone,
  address,
  company,
  message,
  editing: false
 }
 this.props.dispatch({
 type: 'ADD_POST',
 data
 })
 this.getTitle.value = '';
 this.getMessage.value = '';
 this.getAge.value= '';
 this.getTelephone.value= '';
 this.getAddress.value= '';
 this.getCompany.value= '';
 this.getMessage.value = '';
}
// show() {
//     return this.data !== '';
//   };
render() {
return (
<div className="post-container">
  <h3 className="post_heading">Please Enter Details</h3>
  <form className="form" onSubmit={this.handleSubmit} >
   <input required type="text" ref={(input) => this.getTitle = input}
   placeholder="Enter Your Name" /><br /><br />
   <input required type="text" ref={(input) => this.getAge = input}
   placeholder="Enter Your Age" /><br /><br />
    <input required type="text" ref={(input) => this.getTelephone = input}
   placeholder="Enter your Telephone Number" /><br /><br />
   <input required type="text" ref={(input) => this.getAddress = input}
   placeholder="Enter Your Address" /><br /><br />
   <input required type="text" ref={(input) => this.getCompany = input}
   placeholder="Enter Company Name" /><br /><br />
   <textarea required rows="5" ref={(input) => this.getMessage = input}
   cols="28" placeholder="Enter Your Hobbies" /><br /><br />
   <div className="control-buttons">
   <button className="edit">Register</button>
  
   </div>
  
  </form>
  {/* {this.show() ? (
  <AllPost />
  ):null} */}
  <div className="Wrapper">
   <button className="delete" onClick={this.toggleHidden.bind(this)} style={{ marginTop: 20, background:'white', color:'black',fontSize: 16}}>
         Click here to see Registered Employees 
        </button>
  </div>    
        {!this.state.isHidden && <AllPost />}

</div>
);
}
}
export default connect()(PostForm);