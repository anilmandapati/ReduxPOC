import React, { Component } from 'react';
import PostForm from './PostForm';


class App extends Component {
render() {
return (
<div className="App">
  <div className="navbar">
    <h2 className="center ">Employee Registration Form</h2>
    </div>
    <PostForm />
   
</div>
);
}
}
export default App;