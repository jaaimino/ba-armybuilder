import React from 'react';
import { get } from 'lodash';
import { Table, Row, Col, Button } from 'reactstrap';

export default class UnitEditor extends React.Component {
    defaultProps = {
      showImage: false,
      onEditUnit: () => {}
    }
    handleRemoveWeapon = (weapon) => {
      const unit = {
        ...this.props.unit,
      };
      const unitWeapon = unit.weapons[weapon.weapon];
      const min = unitWeapon.min || 0;
      if (unitWeapon) {
        unit.weapons[weapon.weapon] = unitWeapon.count - 1 < min ? unitWeapon : { ...unitWeapon, count: unitWeapon.count - 1 }
      }
      this.props.onEditUnit(unit);
    }
    handleAddWeapon = (weapon) => {
      const unit = {
        ...this.props.unit,
      };
      const unitWeapon = unit.weapons[weapon.weapon];
      if (unitWeapon) {
        unit.weapons[weapon.weapon] = unitWeapon.count + 1 > unitWeapon.max ? unitWeapon : { ...unitWeapon, count: unitWeapon.count + 1 }
      }
      this.props.onEditUnit(unit);
    }
    render() {
      const { unit, showImage } = this.props;
      return (
          <div>
              <Row>
                <Col className={'text-center'}><a href={get(unit, 'url', '')}><img className={'img-fluid'} src={get(unit, 'img', '')}/></a></Col>
              </Row>
              <Row>
                <Col><h4>{get(unit, 'name', '')}</h4></Col>
                {unit.maxWeapons && <Col><h4>{`${get(unit, 'minWeapons', 0)}/${get(unit, 'maxWeapons', -1)}`}</h4></Col>}
                <Col><h4>{get(unit, 'quality', '')}</h4></Col>
                <Col className={'text-right'}><h4>{'Points: '}{get(unit, 'points', '')}</h4></Col>
              </Row>
              <Table responsive striped>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Weapon</th>
                    <th>Range</th>
                    <th>Shots</th>
                    <th>Pen</th>
                    <th>Rules</th>
                  </tr>
                </thead>
                <tbody>
              {Object.values(get(unit, 'weapons', {})).map((weapon) => (
                <tr>
                  <td>
                    <Button onClick={() => this.handleRemoveWeapon(weapon)}>-</Button>
                    {` ${get(weapon, 'count', '')} `}
                    <Button onClick={() => this.handleAddWeapon(weapon)}>+</Button>
                  </td>
                  <td>{get(weapon, 'stats.name', '')}</td>
                  <td>{`${get(weapon, 'stats.range', '')}\"`}</td>
                  <td>{get(weapon, 'stats.shots', '')}</td>
                  <td>{get(weapon, 'stats.pen', '-')}</td>
                  <td>{get(weapon, 'stats.rules', '').map((rule) => <p>{rule.name}</p>)}</td>
                </tr>
              ))}
                </tbody>
              </Table>
          </div>
      );
    }
  }