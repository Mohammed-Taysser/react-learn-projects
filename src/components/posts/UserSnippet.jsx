import React, { Component } from 'react';
import { connect } from 'react-redux';
import fetchUser from '../../redux/actions/posts/fetchUser';

class UserSnippet extends Component {
  componentDidMount() {
    this.props.fetchUser(this.props.user_id);
  }

  render() {

    if (!this.props.user) {
      return null;
    } else {
      return <div>{this.props.user.name}</div>;
    }
  }
}

function mapStateToProps(state,ownProps) {
  return { user: state.users.find(user => user.id === ownProps.user_id) };
}

export default connect(mapStateToProps, { fetchUser: fetchUser })(UserSnippet);
