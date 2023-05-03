import React from 'react';
import PropTypes from 'prop-types';

function Button(props) {
  const { className, label, onClick } = props;

  return (
    <button type="button" className={className} onClick={onClick}>
      {label}
    </button>
  );
}

Button.propTypes = {
  className: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

export default Button;
