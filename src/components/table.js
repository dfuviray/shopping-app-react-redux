import React, { Component } from "react";

class Table extends Component {
  render() {
    if (this.props.items.length === 0) return <p>No shopping items</p>;
    return (
      <div className="row">
        <div className="col-lg-12">
          <table className="table table-hover ">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Description</th>
                <th scope="col">Quantity</th>
                <th scope="col">Price</th>
                <th scope="col">Total</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              {this.props.items.map((item, index) => (
                <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <td>{item.desc}</td>
                  <td>{item.quantity}</td>
                  <td>${item.price}</td>
                  <td>{item.quantity * item.price}</td>
                  <td>
                    <button
                      onClick={() => this.props.onDelete(item)}
                      type="button"
                      className="btn btn-sm btn-danger"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Table;
