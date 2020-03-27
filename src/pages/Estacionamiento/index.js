import React, { useState } from 'react';
// nodejs library that concatenates classes
import classNames from "classnames";
// react plugin used to create charts
import { Line } from "react-chartjs-2";
import { Container } from './styles';

// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Row,
  Col,
} from "reactstrap";

// core components
import {
  anual,
  ano_2019,
  ano_2018,
  ano_2017,
} from "./variables/charts.js";

export default function Estacionamiento() {
  const [CharDataDefault] = useState("data1");


  return (
    <Container >
        <h3>Total recaudado Gs. 8.651.835.000 </h3>
      <ul>
          <Card className="card-chart"  >
            <CardHeader>
              <Row>
                <Col className="text-left" sm="6">
                  <CardTitle tag="h3">Cobros de forma anual</CardTitle>
                  <h5 className="card-category">Total recaudado</h5>
                </Col>
              </Row>
            </CardHeader>
            <CardBody>
              <div className="chart-area">
                <Line
                  data={anual[CharDataDefault]}
                  options={anual.options}
                />
              </div>
            </CardBody>
          </Card>
          <Card className="card-chart"  >
            <CardHeader>
              <Row>
                <Col className="text-left" sm="6">
                  <CardTitle tag="h3">Cobros del 2019</CardTitle>
                  <h5 className="card-category">Total recaudado</h5>
                </Col>
              </Row>
            </CardHeader>
            <CardBody>
              <div className="chart-area">
                <Line
                  data={ano_2019[CharDataDefault]}
                  options={ano_2019.options}
                />
              </div>
            </CardBody>
          </Card>
          <Card className="card-chart"  >
            <CardHeader>
              <Row>
                <Col className="text-left" sm="6">
                  <CardTitle tag="h3">Cobros del 2018</CardTitle>
                  <h5 className="card-category">Total recaudado</h5>
                </Col>
              </Row>
            </CardHeader>
            <CardBody>
              <div className="chart-area">
                <Line
                  data={ano_2018[CharDataDefault]}
                  options={ano_2018.options}
                />
              </div>
            </CardBody>
          </Card>
          <Card className="card-chart"  >
            <CardHeader>
              <Row>
                <Col className="text-left" sm="6">
                  <CardTitle tag="h3">Cobros del 2017</CardTitle>
                  <h5 className="card-category">Total recaudado</h5>
                </Col>
              </Row>
            </CardHeader>
            <CardBody>
              <div className="chart-area">
                <Line
                  data={ano_2017[CharDataDefault]}
                  options={ano_2017.options}
                />
              </div>
            </CardBody>
          </Card>
      </ul>
    </Container>
  );
}
