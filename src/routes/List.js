import React from 'react';
import { Container, Col, Row, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { DataContext } from 'datalayer';
import { flatten, sumBy } from 'lodash';
import { UnitCard } from 'components/UnitCard';
import { UnitEditor } from 'components/UnitEditor';

export default class List extends React.Component {
  static contextType = DataContext;
  constructor(props) {
    super(props);
    this.state = {
      units: {
        hq: {
          name: "HQ",
          units: []
        },
        infantry: {
          name: "Infantry",
          units: []
        },
        tanks: {
          name: "Tanks",
          units: []
        }
      },
      modal: false,
      unitType: null,
      selectedUnit: null,
      editing: false
    };
  }

  getTotalPoints = () => {
    const allUnits = flatten(Object.values(this.state.units).map(unitCat => unitCat.units));
    return sumBy(allUnits, 'points');
  }

  toggleAddUnit = (type) => {
    this.setState(prevState => ({
      modal: !prevState.modal,
      unitType: type,
      selectedUnit: null,
    }));
  }

  selectUnit = (unit) => {
    this.setState({
      selectedUnit: unit
    });
  }

  editUnit = (type, unit) => {
    this.setState(prevState => ({
      modal: !prevState.modal,
      unitType: type,
      selectedUnit: unit,
      editing: true
    }));
  }

  addUnit = (type) => {
    const { selectedUnit, editing } = this.state;
    const units = {
      ...this.state.units
    };
    if (!selectedUnit) {
      this.toggleAddUnit();
      return;
    }
    if (!editing) {
      units[type].units.push(selectedUnit);
    }
    this.setState(prevState => ({
      modal: !prevState.modal,
      unitType: null,
      selectedUnit: null,
      index: null,
      editing: false,
      units
    }));
    
  }

  renderAddUnit = (units) => {
    const { selectedUnit, unitType } = this.state;
    return (
      <Modal centered isOpen={this.state.modal} toggle={this.toggleAddUnit}>
        <ModalHeader toggle={this.toggle}>{'Units'}</ModalHeader>
        <ModalBody>
          {selectedUnit ?
            <UnitEditor unit={selectedUnit} onEditUnit={(unit) => { this.selectUnit(unit) }} />
              :
              <Row className={'align-items-center'}>
            {[...units, ...units, ...units, ...units, ...units,  ...units,  ...units,  ...units,  ...units,  ...units].map((unit) => (

                <Col md={3} style={{ padding: '3px' }} className={'text-center'}>
                  <div style={{ border: '1px solid grey', borderRadius: '5px' }} size="lg" onClick={() => { this.selectUnit(unit)} }>
                    {unit.img && <Row className={'align-items-center'}>
                      <Col>
                        <img className={'img-fluid'} src={unit.img || ''} />
                      </Col>
                    </Row>}
                    <Row>
                      <Col>
                        <h3 size="lg">{unit.name}</h3>
                      </Col>
                    </Row>
                  </div>
                </Col>
            ))}
            </Row>
          }
        </ModalBody>
        <ModalFooter>
          <Button size="lg" onClick={() => {
            if (this.state.selectedUnit){
              this.selectUnit(null);
            } else {
              this.toggleAddUnit();
            }
          } }>Back</Button>
          <Button size="lg" onClick={() => this.addUnit(unitType)}>{this.state.editing? 'Done' : 'Add'}</Button>
        </ModalFooter>
      </Modal>
    );
  }

  render() {
    const { factionName } = this.props.match.params;
    const { units } = this.state;
    return (
      <div>
        <DataContext.Consumer>
          {data => {
            return (
              <Container fluid>
                {this.renderAddUnit(data.getResolvedUnitsByType(factionName, this.state.unitType))}
                <Row style={{ paddingBottom: '10px' }}>
                  <Col><h2>{data.getFaction(factionName).name}</h2></Col><Col className="text-right"><h2>{'Points: '}{this.getTotalPoints()}</h2></Col>
                </Row>
                {Object.keys(units).map((unitCategory) => (
                  <div>
                <Row style={{ paddingBottom: '5px' }}>
                  <Col><h2>{units[unitCategory].name}</h2></Col><Col className="text-right" s={1}><Button size="lg" color="danger" onClick={() => this.toggleAddUnit(unitCategory)}>{'Add'}</Button></Col>
                </Row>
                  <div>
                    {units[unitCategory].units.map((unit, index) => (
                      <Row>
                        <Col>
                          <UnitCard unit={unit} />
                        </Col>
                        <Col s={1} className="text-right"><Button block size="lg" color="danger" onClick={() => this.editUnit(unitCategory, unit, index)}>{'Edit'}</Button></Col>
                      </Row>
                    ))}
                  </div>
                </div>
                ))}
              </Container>
            );
          }}
        </DataContext.Consumer>
      </div>
    );
  }
}