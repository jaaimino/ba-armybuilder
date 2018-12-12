import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import s from '../styles/exampleComponent.style';

export default () => (
  <div style={s.main}>
    <p style={s.p}>
      This is an example to you can navigate to.
    </p>
  </div>
);
