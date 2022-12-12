import React from 'react';
import Buttons from './Buttons';
import Panel from './Panel';

const Form = () => {
  return (
    <Panel title="Welcome">
      <Buttons>Sign up</Buttons>
      <Buttons>Log in</Buttons>
    </Panel>
  );
}

export default Form;
