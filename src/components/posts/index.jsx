import React from 'react';
import { connect } from 'react-redux';
import fetchPosts from '../../redux/actions/posts/fetchPosts';
import UserSnippet from './UserSnippet';

class Posts extends React.Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  render_list = () => {
    return this.props.posts.map((post) => {
      return (
        <div className='col-md-6 my-3' key={post.id}>
          <div className='card h-100'>
            <div className='card-body'>
              <h5 className='card-title'>{post.title}</h5>
              <h6 className='card-subtitle mb-2 text-muted'>
                <UserSnippet user_id={post.userId} />
              </h6>
              <p className='card-text text-muted'>{post.body}</p>
            </div>
          </div>
        </div>
      );
    });
  };

  render() {
    return (
      <section>
        <div className='container'>
          <div className='row justify-content-center align-items-stretch'>
            {this.render_list()}
          </div>
        </div>
      </section>
    );
  }
}

function mapStateToProps(state) {
  return { posts: state.posts };
}

export default connect(mapStateToProps, {
  fetchPosts: fetchPosts,
})(Posts);
