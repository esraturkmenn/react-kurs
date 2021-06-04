import React, { Component } from 'react'
import { ListGroup ,ListGroupItem} from 'reactstrap'

export default class CategoriLists extends Component {
    constructor(props){
        super(props);
        state:{}

    }
    render() {
        return (
            <div>
                <h3  >{this.props.info.title}</h3>
                <ListGroup>
                <ListGroupItem>djfhdkbvfbfjfndbv</ListGroupItem>
                <ListGroupItem>bbbvfbfjfndbv</ListGroupItem>
                <ListGroupItem>mnrkrnfbfjfndbv</ListGroupItem>
                </ListGroup>
            </div>
        )
    }
}
//deneme
