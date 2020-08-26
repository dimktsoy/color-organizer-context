import React from 'react';
import PropTypes from 'prop-types';
import Color from './../Color/Color';
import { removeColor, rateColor } from '../../store/actions';
import './ColorList.scss';

const ColorList = ({ store }) => {
  const { colors } = store.getState();
  return (
    <div className="color-list">
      {colors.map((color) => (
        <Color
          key={color.id}
          {...color}
          onRemoveColor={() => store.dispatch(removeColor(color.id))}
          onRate={(rating) => store.dispatch(rateColor(color.id, rating))}
        />
      ))}
    </div>
  );
};

ColorList.propTypes = {
  store: PropTypes.object,
};

export default ColorList;
