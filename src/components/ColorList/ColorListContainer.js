import React from 'react';
import StoreContext from '../../StoreContext';
import { removeColor, rateColor } from '../../store/actions';
import ColorList from './ColorList';

class ColorListContainer extends React.Component {
  constructor(props) {
    super(props);
    this.onRemoveColor = this.onRemoveColor.bind(this);
    this.onRate = this.onRate.bind(this);
  }

  onRemoveColor(colorId) {
    const store = this.context;
    store.dispatch(removeColor(colorId));
  }

  onRate(colorId, rating) {
    const store = this.context;
    store.dispatch(rateColor(colorId, rating));
  }

  render() {
    const { colors } = this.context.getState();
    return (
      <ColorList
        colors={colors}
        onRemoveColor={this.onRemoveColor}
        onRate={this.onRate}
      />
    );
  }
}

ColorListContainer.contextType = StoreContext;

export default ColorListContainer;
