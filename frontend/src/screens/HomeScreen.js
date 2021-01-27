import React, { useState, useEffect } from "react";
import axios from "axios";
//! moving the Products.json file to the backend :
// import products from "../products";
import { Row, Col } from "react-bootstrap";
import Product from "../components/Product";

const HomeScreen = () => {
  //! Defining products as a global state for now ...
  const [products, setProducts] = useState([]);

  //! usinf to make a request to our backend as soon as our component loads ...

  useEffect(() => {
    // effect :
    const fetchProducts = async () => {
      const res = await axios.get("/api/products");
      setProducts(res.data.data.products);
    };

    fetchProducts();
    return () => {
      // cleanup
    };
  }, []);

  return (
    <>
      <h1>Latest Product</h1>
      <Row>
        {" "}
        {products.map((product) => (
          <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default HomeScreen;
