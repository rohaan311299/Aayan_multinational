import React from 'react';
import {Link} from "react-router-dom";
import {Row,ListGroup, Table, thead, tbody, Col} from "react-bootstrap";
import products from "../products";

const ProductScreen = ({match}) => {
    const product=products.find(p=>p.id===match.params.id);
    // const names=product.values;

    return (
        <>
            <Link className="btn btn-dark my-3" to="/products">Go Back</Link>
            <Row className="pt-3">
                <h3 className="center">{product.name}</h3>
                <Table hover borderless>
                    <thead>
                        <tr>
                            <th>Sr. No</th>
                            <th>Name</th>
                            <th>Packing</th>
                        </tr>
                    </thead>
                    {product.values.map((item)=>(
                        <tbody style={{backgroundColor:item.id%2?"white":"#e6e6e6"}}>
                            <tr>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.packing} {item.indicative_packing}</td>
                            </tr>
                        </tbody>
                    ))}
                </Table>
            </Row>
        </>
    )
}

export default ProductScreen
