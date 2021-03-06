import React from 'react';
import { get } from 'lodash';
import { Table, Row, Col, Container } from 'reactstrap';

export default class UnitCard extends React.Component {
    defaultProps = {
      showImage: false
    }
    render() {
      const { unit, showImage } = this.props;
      return (
          <div>
              {showImage && unit.img &&
              <Row>
                <Col className={'text-center'}><a href={get(unit, 'url', '')}><img className={'img-fluid'} src={get(unit, 'img', '')}/></a></Col>
              </Row>}
              <Row>
                <Col><h4>{get(unit, 'name', '')}</h4></Col>
                <Col><h4>{get(unit, 'quality', '')}</h4></Col>
                <Col className={'text-right'}><h4>{'Points: '}{get(unit, 'points', '')}</h4></Col>
              </Row>
              <Table>
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
                  <td>{get(weapon, 'count', '')}</td>
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