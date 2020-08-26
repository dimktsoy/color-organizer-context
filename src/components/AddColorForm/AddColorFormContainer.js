import React from 'react';
import StoreContext from '../../StoreContext';
import { addColor } from '../../store/actions';
import AddColorForm from './AddColorForm';

class AddColorFormContainer extends React.Component {
  constructor(props) {
    super(props);
    this.onAddColor = this.onAddColor.bind(this);
  }

  onAddColor(text, color) {
    const store = this.context;
    store.dispatch(addColor(text, color));
  }

  render() {
    return <AddColorForm onAddColor={this.onAddColor} />;
  }
}

AddColorFormContainer.contextType = StoreContext;

export default AddColorFormContainer;
