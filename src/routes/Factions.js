import React from 'react';
import s from '../styles/exampleComponent.style';
import { LinkContainer } from 'react-router-bootstrap';
import { DataContext } from 'database';

export default class Factions extends React.Component {
  // Assign a contextType to read the current theme context.
  // React will find the closest theme Provider above and use its value.
  // In this example, the current theme is "dark".
  static contextType = DataContext;
  render() {
    return (
      <div style={s.main}>
        <DataContext.Consumer>
          {data => {
            console.log(data);
            return (
              <div>
                <h1>Factions</h1>
                {data.getFactions().map((faction) => (
                  <LinkContainer to={`/factions/${faction.id}`}>
                    <div style={{ background: 'purple' }}>
                      <h2>{faction.name}</h2>
                    </div>
                  </LinkContainer>
                ))}
              </div>
            );
          }}
        </DataContext.Consumer>
      </div>
    );
  }
}