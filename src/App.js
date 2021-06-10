import React, { Component } from 'react'
import CategoriLists from './CategoriLists';
import Navi from './Navi'
import ProductLists from './ProductLists';
import {Col, Container , Row } from 'reactstrap'

export default class App extends Component {
state={currentCategory:"",products:[]};

componentDidMount() {
  this.getProducts();
}
  changeCategory=category=>{
    this.setState({currentCategory:category.categoryName});
}

getProducts=  () =>{
  fetch("http://localhost:3000/products")
      .then(response =>response.json())
      .then(data=>this.setState({products:data}));;
};

  render() {
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
            <CategoriLists currentCategory={this.state.currentCategory} changeCategory={this.changeCategory} info= {categorytInfo} />
            </Col>
            <Col xs= "9">
            <ProductLists products={this.state.products}  currentCategory={this.state.currentCategory} info= {productInfo}/>
            </Col>

          </Row>
        </Container>
      </div>
    );
  }
}


