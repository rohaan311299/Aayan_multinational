import React from 'react';
import { Table } from 'react-bootstrap';
import product from "../products.js";

const Tablets = () => {
    return (
        <div>
            <h3 className="center">{product.name}</h3>
                <Table hover borderless>
                    <thead>
                        <tr>
                            <th>Sr. No</th>
                            <th>Name</th>
                            <th>Packing</th>
                            {/* <th >Indicative Packing</th> */}
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
        </div>
    )
}

export default Tablets
