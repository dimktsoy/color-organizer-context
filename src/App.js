import React from 'react';
import AddColorForm from './components/AddColorForm/AddColorForm';
import ColorList from './components/ColorList/ColorList';
import './App.scss';

const App = ({ store }) => {
  return (
    <div className="app">
      <AddColorForm store={store} />
      <ColorList store={store} />
    </div>
  );
};

export default App;
