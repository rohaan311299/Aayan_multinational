import React from 'react';
import {Link} from "react-router-dom";
import { Card } from 'react-bootstrap';

const Product = ({product}) => {
    return (
        <Card className="my-3 p-3 rounded">
            <Link to={`/product/${product.id}`}>
                <Card.Img src={product.image} variant="top" style={{height:"200px", width:"100%"}} />
            </Link>
            <Card.Body>
                <Link to={`/product/${product.id}`}>
                    <Card.Title style={{textAlign:"center"}} as="div"><strong>{product.name}</strong></Card.Title>
                </Link>
            </Card.Body>
        </Card>
    )
}

export default Product
