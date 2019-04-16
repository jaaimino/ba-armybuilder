import React from 'react';
import { get } from 'lodash';

export default class UnitCard extends React.Component {
    render() {
      const { unit } = this.props;
      return (
          <div>
            <p>{get(unit, 'name', '')}</p>
            {Object.values(get(unit, 'models', {})).map((model) => (
              <div>
                <p>{JSON.stringify(model)}</p>
                <p>{`${model.count}x ${model.name}`}</p>
                <p>{JSON.stringify(model.weapon)}</p>
              </div>
            ))}
          </div>
      );
    }
  }