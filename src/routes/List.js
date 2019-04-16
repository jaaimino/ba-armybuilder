import React from 'react';
import s from '../styles/exampleComponent.style';
import { Container, Col, Row, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { DataContext } from 'datalayer';
import { UnitCard } from 'components/UnitCard';

export default class List extends React.Component {
  static contextType = DataContext;
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      selectedUnit: null
    };
  }

  toggle = () => {
    this.setState(prevState => ({
      modal: !prevState.modal,
      selectedUnit: null
    }));
  }

  selectUnit = (unit) => {
    this.setState({
      selectedUnit: unit
    });
  }

  renderAddHQ = (units) => {
    const { selectedUnit } = this.state;
    return (
      <Modal isOpen={this.state.modal} toggle={this.toggle}>
        <ModalHeader toggle={this.toggle}>{'Units'}</ModalHeader>
        <ModalBody>
          {selectedUnit ?
            <UnitCard unit={selectedUnit} />
              :
            [...units, ...units, ...units].map((unit) => (
              <div onClick={() => { this.selectUnit(unit)} }>{unit.name}</div>
            ))
          }
        </ModalBody>
        <ModalFooter>
          <Button onClick={this.toggle}>Add</Button>
        </ModalFooter>
      </Modal>
    );
  }

  render() {
    const { factionName } = this.props.match.params;
    return (
      <div style={s.main}>
        <DataContext.Consumer>
          {data => {
            return (
              <div>
                {this.renderAddHQ(data.getResolvedUnitsByType(factionName, 'infantry'))}
                <Container>
                  <Row>
                    <h2>HQ</h2>
                    <Col>
                        <Button color="danger" onClick={this.toggle}>{'Add Unit'}</Button>
                    </Col>
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