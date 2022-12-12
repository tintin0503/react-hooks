import React, { useContext } from 'react';
import ThemeContext from '../theme-context';

const Button = (props) => {
  const theme = useContext(ThemeContext);
  const className = 'button-' + theme;

  return (
    <button className={className}>
      {props.children}
    </button>
  );
}

export default Button;
