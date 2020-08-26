import { v4 } from 'uuid';

export const ADD_COLOR = 'ADD_COLOR';
export const REMOVE_COLOR = 'REMOVE_COLOR';
export const RATE_COLOR = 'RATE_COLOR';

export const addColor = (title, color) => ({
  type: ADD_COLOR,
  id: v4(),
  title,
  color,
});

export const removeColor = (id) => ({
  type: REMOVE_COLOR,
  id,
});

export const rateColor = (id, rating) => ({
  type: RATE_COLOR,
  id,
  rating,
});
