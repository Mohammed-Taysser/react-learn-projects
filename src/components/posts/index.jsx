import React from 'react';
import { connect } from 'react-redux';
import fetchPosts from '../../redux-actions/fetchPosts';

class Posts extends React.Component {

  componentDidMount() {
    this.props.fetchPosts();
  }
  
  render() {
    return <>posts</>;
  }
}

export default connect(null, {
  fetchPosts: fetchPosts,
})(Posts);
