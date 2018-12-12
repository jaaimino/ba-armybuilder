import React from 'react';
import { Link } from 'react-router-dom';
import { Code } from 'styles/style';
import s from 'styles/home.style';

export default function Home() {

  return (
    <div style={s.main}>
      <p style={s.p}>
        This is a test app. More to come.
      </p>
    </div>
  );
}
