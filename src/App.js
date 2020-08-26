import React from 'react';
import StoreContext from './StoreContext';
import AddColorFormContainer from './components/AddColorForm/AddColorFormContainer';
import ColorListContainer from './components/ColorList/ColorListContainer';
import './App.scss';

class App extends React.Component {
  componentWillMount() {
    this.unsubscribe = this.props.store.subscribe(() => this.forceUpdate());
  }

  componentWillUnmount() {
    this.unsubscribe();
  }
  render() {
    return (
      <div className="app">
        <StoreContext.Provider value={this.props.store}>
          <AddColorFormContainer />
          <ColorListContainer />
        </StoreContext.Provider>
      </div>
    );
  }
}

export default App;
