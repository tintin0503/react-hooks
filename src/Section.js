import React from 'react';
import { useContext } from 'react';
import { LevelContext } from './store/level-context';

const Section = (props) => {
  const level = useContext(LevelContext);
  return (
    <section className="section">
      <LevelContext.Provider value={level + 1}>
        {props.children}
      </LevelContext.Provider>
    </section>
  );
}

export default Section;
