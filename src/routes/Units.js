import React from 'react';
import s from '../styles/exampleComponent.style';
import { DataContext } from 'datalayer';

export default class Units extends React.Component {
  // Assign a contextType to read the current theme context.
  // React will find the closest theme Provider above and use its value.
  // In this example, the current theme is "dark".
  static contextType = DataContext;
  render() {
    const { factionName } = this.props.match.params;
    return (
      <div style={s.main}>
        <DataContext.Consumer>
          {data => {
            return (
              <div>
                <h2>{data.getFaction(factionName).name}</h2>
                {data.getUnits(factionName).map((unit) => (
                  <div>
                    <p>{unit.name}</p>
                  </div>
                ))}
              </div>
            );
          }}
        </DataContext.Consumer>
      </div>
    );
  }
}