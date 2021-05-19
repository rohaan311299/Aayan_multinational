import React from 'react';
import copyright from "../Copyrighted.js";
import {Row, Col, Card, Table} from "react-bootstrap";

const Copyright = () => {
    const colors=['red','blue'];
    return (
        <div>
            <Row>
                <Table hover borderless>
                    <thead>
                        <tr>
                            <th>Sr. No</th>
                            <th >Name</th>
                        </tr>
                    </thead>
                    {copyright.map((copy)=>(
                        <tbody style={{backgroundColor:copy.id%2?"white":"#e6e6e6"}}>
                            <tr>
                                <td>{copy.id}</td>
                                <td >{copy.name}</td>
                            </tr>
                        </tbody>
                    ))}
                </Table>
            </Row>
        </div>
    )
}

export default Copyright
