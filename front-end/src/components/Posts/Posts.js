/*
* Component to display a post
*/

/* Modules imports */
import React, { Component } from 'react';

/* Components imports */
import App from '../App/App';

/* Styles imports */
import './Posts.css';

/* Posts component */
class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return(
      <div className="post card">
        <div className="card-body">
          <h5 className="card-title">{this.props.title}</h5>
          <h6 className="card-subtitle mb-2 text-muted">{this.props.author}</h6>
          <p className="card-text">{this.props.text}</p>
        </div>
      </div>
    )
  }
}

export default Posts;