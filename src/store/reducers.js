import { ADD_COLOR, REMOVE_COLOR, RATE_COLOR } from './actions';

const initialState = [
  {
    id: 1,
    title: 'Brandy',
    color: '#87413F',
    rating: 5,
  },
  {
    id: 2,
    title: 'Avocado',
    color: '#568203',
    rating: 4,
  },
  {
    id: 3,
    title: 'Black coffee',
    color: '#3B2F2F',
    rating: 5,
  },
  {
    id: 4,
    title: 'Blue sapphire',
    color: '#126180',
    rating: 0,
  },
];

export const colorsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_COLOR:
      return [
        ...state,
        {
          id: action.id,
          title: action.title,
          color: action.color,
          rating: 0,
        },
      ];
    case REMOVE_COLOR:
      return state.filter((color) => color.id !== action.id);
    case RATE_COLOR:
      return state.map((color) =>
        color.id !== action.id ? color : { ...color, rating: action.rating }
      );
    default:
      return state;
  }
};
