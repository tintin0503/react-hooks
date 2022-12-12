import React from 'react';
import { useContext } from 'react';
import { LevelContext } from './store/level-context';

const Heading = (props) => {
  const level = useContext(LevelContext);

  switch (level) {
    case 0:
      throw Error('Heading must be inside a Section!');
    case 1:
      return <h1>{props.children}</h1>;
    case 2:
      return <h2>{props.children}</h2>;
    case 3:
      return <h3>{props.children}</h3>;
    case 4:
      return <h4>{props.children}</h4>;
    case 5:
      return <h5>{props.children}</h5>;
    case 6:
      return <h6>{props.children}</h6>;
    default:
      throw Error('Unknown level: ' + level);
  }
}

export default Heading;
