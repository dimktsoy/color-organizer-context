import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { addColor } from '../../store/actions';
import './AddColorForm.scss';

const AddColorForm = ({ store }) => {
  const text = useRef(null);
  const color = useRef(null);

  const submit = (e) => {
    e.preventDefault();
    store.dispatch(addColor(text.current.value, color.current.value));
    text.current.value = '';
    color.current.value = '';
    text.current.focus();
  };

  return (
    <form className="add-color-form" onSubmit={submit}>
      <input
        className="add-color-form__input"
        ref={text}
        type="text"
        required
        placeholder="Заголовок цвета..."
      />
      <input
        className="add-color-form__input add-color-form__input--color"
        ref={color}
        type="color"
        required
      />
      <button className="add-color-form__button" type="submit">
        Добавить цвет
      </button>
    </form>
  );
};

AddColorForm.propTypes = {
  store: PropTypes.object,
};

export default AddColorForm;
