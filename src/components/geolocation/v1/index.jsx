import React from 'react';
import SeasonDisplay from './SeasonDisplay';
import Spinner from '../../bootstrap-component/Spinner';
import Alert from '../../bootstrap-component/Alert';

class GeoLocation extends React.Component {
  state = {
    latitude: null,
    message: '',
    navigator_not_support: false,
  };

  componentDidMount() {
    if ('geolocation' in navigator) {
      window.navigator.geolocation.getCurrentPosition(
        (position) => this.setState({ latitude: position.coords.latitude }),
        (err) => this.setState({ message: err.message })
      );
    } else {
      this.setState({ navigator_not_support: true });
    }
  }

  check_data() {
    if (this.state.message && !this.state.latitude) {
      return (
        <Alert color='danger'>
          <i className='fas fa-exclamation-triangle me-2'></i>
          {this.state.message}
        </Alert>
      );
    }
    if (!this.state.message && this.state.latitude) {
      return <SeasonDisplay latitude={this.state.latitude} />;
    }
    return <Spinner text='Please accept Location Request' />;
  }

  view_message() {
    if (this.state.navigator_not_support) {
      return (
        <Alert color='warning'>
          <i className='fas fa-exclamation-circle me-2'></i>
          Sorry Geolocation is not supported by your browser
        </Alert>
      );
    } else {
      return this.check_data();
    }
  }

  render() {
    return this.view_message();
  }
}

export default GeoLocation;
