import React, { Component } from "react";
import Item from "./item/item";
import Container from "./styles";

class Items extends Component {
  selectOption = (option) => {
    if (this.props.select) {
      this.props.select(this.props.attributeId, option.id);
    }
  };

  isActive = (itemId) => {
    return this.props.selectedOptions.some(
      (item) => item.selectItem === itemId && item.id === this.props.attributeId
    );
  };

  render() {
    return (
      <Container>
        {this.props.items.map((item) => (
          <Item
            key={item.id}
            isColor={this.props.isColor && item.value}
            selected={this.isActive(item.id)}
            select={!this.props.isCart ? () => this.selectOption(item) : null}
          >
            {!this.props.isColor && item.value}
          </Item>
        ))}
      </Container>
    );
  }
}

export default Items;
