import React, { Component } from "react";
import Table from "./components/table";
import Form from "./components/form";
import Navbar from "./components/navBar";

class App extends Component {
  state = {
    id: "",
    desc: "",
    quantity: "",
    price: "",
    shoppingItems: []
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleDelete = item => {
    const { shoppingItems } = this.state;
    const filteredItems = shoppingItems.filter(i => i.id !== item.id);
    this.setState({ shoppingItems: filteredItems });
  };

  handleSubmit = e => {
    e.preventDefault();
    const shoppingItems = [...this.state.shoppingItems];
    const id = Date.now().toString();
    const desc = this.state.desc;
    const quantity = this.state.quantity;
    const price = this.state.price;
    shoppingItems.push({ id, desc, quantity, price });
    this.setState({ shoppingItems });
    this.clearInput();
  };

  isEmpty = () => {
    return (
      this.state.desc === "" || this.state.quantity < 1 || this.state.price < 1
    );
  };

  clearInput() {
    this.setState({ desc: "", quantity: "", price: "" });
  }

  getGrandTotal() {
    const { shoppingItems } = this.state;
    return shoppingItems
      .map(item => item)
      .reduce((total, item) => total + item.quantity * item.price, 0);
  }

  render() {
    return (
      <React.Fragment>
        <Navbar />
        <div style={{ maxWidth: "720px", margin: "0 auto" }}>
          <div className="container-fluid">
            <Form
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
              isEmpty={this.isEmpty}
              desc={this.state.desc}
              quantity={this.state.quantity}
              price={this.state.price}
            />
            <h3 className="my-3">Grand Total: {this.getGrandTotal()}</h3>
            <Table
              items={this.state.shoppingItems}
              onDelete={this.handleDelete}
            />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
