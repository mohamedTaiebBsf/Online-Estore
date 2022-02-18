import React, { Component } from "react";
import Layout from "../layout/layout";
import Attributes from "../../components/attributes/attributes";
import ProductImages from "../../components/product-images/productImages";
import { withProductDetails } from "../../services/http-service";
import { storeConsumer } from "../../store";
import { displayPrice } from "../../utils";
import {
  Container,
  Descriptions,
  Brand,
  Name,
  SubTitle,
  Price,
  Button,
  Text,
} from "./styles";

class ProductDetails extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    const { currency } = this.props;

    if (nextProps.currency !== currency) return true;

    return false;
  }

  render() {
    const { product } = this.props.data;
    return (
      <Layout>
        <Container>
          <ProductImages images={product.gallery} />
          <Descriptions>
            <Brand>{product.brand}</Brand>
            <Name>{product.name}</Name>
            <Attributes attributes={product.attributes} />
            <SubTitle>Price: </SubTitle>
            <Price>{displayPrice(product.prices, this.props.currency)}</Price>
            <Button>Add To Cart</Button>
            <Text dangerouslySetInnerHTML={{ __html: product.description }} />
          </Descriptions>
        </Container>
      </Layout>
    );
  }
}

export default storeConsumer(
  withProductDetails(ProductDetails, (props) => {
    return {
      variables: {
        id: props.match.params.id,
      },
    };
  })
);
