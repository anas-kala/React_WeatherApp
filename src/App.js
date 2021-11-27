import React from 'react';
import './App.css';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';


class App extends React.Component {
  state = { lat: null, errorMessage: '' };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (Position) => {
        this.setState({ lat: Position.coords.latitude });
      },
      (err) => {
        this.setState({ errorMessage: err.message });
      }
    );
    console.log('My component was rendered to the screen');
  }

  componentDidUpdate() {
    console.log('My component did updated');
  }

  renderContent() {
    if (this.state.errorMessage && !this.state.lat) {
      return (<div>Error: {this.state.errorMessage}</div>);
    }

    if (!this.state.errorMessage && this.state.lat) {
      return (<SeasonDisplay lat={this.state.lat} />);
    }

    return <Spinner message='please accept location request' />
  }

  render() {
    return(
      <div className="border-red">
        {this.renderContent()}
      </div>
    );
  };
}

export default App;
