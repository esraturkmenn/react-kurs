import React from 'react';
import CategoriLists from './CategoriLists';
import Navi from './Navi'
import ProductLists from './ProductLists';
import {Col, Container , Row } from 'reactstrap'

function App() {
  let productInfo = {title:"Product Lists"}
  let categorytInfo = {title:"Category Lists"}

  return (
    <div >
      <Container>
        <Row>
          <Navi/>
        </Row>
        <Row>
          <Col xs= "3">
          <CategoriLists info= {categorytInfo} />
          </Col>
          <Col xs= "3">
          <ProductLists info= {productInfo}/>
          </Col>

        </Row>
      </Container>


    </div>
  );
}

export default App;
