import React from 'react';
import s from '../styles/exampleComponent.style';
import { Container, Col, Row } from 'reactstrap';
import { DataContext } from 'datalayer';
import { NavLink as RRNavLink } from 'react-router-dom';

export default class Factions extends React.Component {
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
                <Container>
                  <Row className="justify-content-md-center">
                    {data.getFactions().map((faction) => (
                      <Col sm="3" style={{height: '300px', border: '1px solid black', margin: '5px', display: 'flex', alignItems: 'center', justifyContent: 'center'}} tag={RRNavLink} exact to={`/factions/${faction.id}`}>
                        {faction.name}
                      </Col>
                    ))}
                  </Row>
                </Container>
              </div>
            );
          }}
        </DataContext.Consumer>
      </div>
    );
  }
}