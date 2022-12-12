import React, { useContext } from 'react';
import ThemeContext from '../theme-context';

const Panel = (props) => {
  const theme = useContext(ThemeContext);
  const className = 'panel-' + theme;
  return (
    <section className={className}>
      <h1>{props.title}</h1>
      {props.children}
    </section>
  )
}

export default Panel;
