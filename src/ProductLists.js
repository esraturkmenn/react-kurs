import React, { Component } from 'react'
import {Table} from "reactstrap"

export default class ProductLists extends Component {
    render() {
        return (
            <div>
                <h3> {this.props.info.title}-{this.props.currentCategory}</h3>
                <Table>
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>
         {this.props.products.map(products=>(
      <tr key= {products.id}>
          <th scope="row">{products.id}</th>
          <td>{products.productName}</td>
          <td>Otto</td>
          <td>@mdo</td>
      </tr>
           ))}

      </tbody>
    </Table>

            </div>
        )
    }
}
