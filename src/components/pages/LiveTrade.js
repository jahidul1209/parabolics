import React, { Component } from 'react';
import Dashboard from '../liveTrade/Dashboard'
import { Container } from 'react-bootstrap';
import UnsafeScriptsWarning from "../liveTrade/UnsafeScriptsWarning";

class LiveTrade extends Component {

  state = {
    hasError: false,
    showSpinner: true
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    console.log('some error has occured');
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    // You can also log the error to an error reporting service
    console.log(error, info);
  }

  hideSpinner = () => {
    this.setState({showSpinner: false});
  }

  render() {
    if (this.state.hasError) {
      return <UnsafeScriptsWarning />;
    }
    return (<>
          <div className="bg-dash-dark-2 py-4">
                <div className="container-fluid flox">
                  <h2 className="h5 mb-0">Live Trade</h2>
              </div>
          </div>
          <Container  fluid className='mt-3'>
            <div className ="card py-3 px-3">
            <Dashboard hideSpinner={this.hideSpinner} showSpinner={this.state.showSpinner} />
            </div>
            </Container>
        </>
    );
  }
}

export default LiveTrade;
