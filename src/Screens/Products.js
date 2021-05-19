import React from 'react';
import products from "../products";
import Product from "../Components/Product";
import {Row, Col} from "react-bootstrap";
import Copyright from './Copyright';


const HomeScreen = () => {
    return (
        <>
            <h2>Our Products</h2>
            <Row>
                {
                    products.map((product)=>(
                        <Col key={product.id} sm={12} lg={4} md={6} xl={4}>
                            <Product product={product} />
                        </Col>
                    ))
                }
            </Row>
            <Row className="mt-5">
                <h1 style={{textAlign:"center"}}>Our Copyright Products</h1>
                <Copyright />
            </Row>
        </>
    )
}

export default HomeScreen
