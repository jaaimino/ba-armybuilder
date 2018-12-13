import React from 'react';
import s from '../styles/exampleComponent.style';
import { LokiContext } from 'App';
import { refs } from 'utils/db';
console.log(LokiContext);

export default class Example extends React.Component {
  // Assign a contextType to read the current theme context.
  // React will find the closest theme Provider above and use its value.
  // In this example, the current theme is "dark".
  static contextType = LokiContext;
  render() {
    return (
      <div style={s.main}>
        <LokiContext.Consumer>
          {collections => {
            const units = collections.units.find().map((unit) => ({
                    ...unit,
                    rules: refs(unit.rules, collections.rules, 'name')
                  }));
            return (
              <div>
                <h1>Dynamically Generated Content from Flat File data in LokiJS DB :O</h1>
                {units.map((unit, i) => (
                  <div>
                    <h1>{unit.name}</h1>
                    {unit.rules.map((rule, i) => (
                      <div>
                        <h3>{rule.name}</h3>
                        <p>{rule.text}</p>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            );
          }}
        </LokiContext.Consumer>
      </div>
    );
  }
}
