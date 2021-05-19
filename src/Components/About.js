import React from 'react';
import {Row, Col, Card, ListGroup} from "react-bootstrap";

const About = () => {
    return (
        <div>
            <h3>About Us</h3>

            <Card style={{ width: '100%' }}>
                <Row style={{padding:"5px"}}>
                    <Card.Body>
                        <Card.Title>Our Mission</Card.Title>
                        <Card.Text className="">
                            <ul>
                                <li style={{margin:"2px"}}>The impeccable quality of the products has effortlessly established Aayan Multinational as the number one choice in providing premier pharmaceutical products.</li>
                                <li style={{margin:"2px"}}>Aayan multinational is a company headed by experienced CEO and managed by highly qualified professionals in their respective field of operations.</li>
                                <li style={{margin:"2px"}}>We strive for a happier, healthier tomorrow. We shall provide total customer satisfaction and achieve leadership in chosen markets, products and services across the country and internationally through excellence in technology, based on world-class research and development.</li>
                                <li style={{margin:"2px"}}>Our human resources will continue to be the most valuable asset in this pursuit of leadership and the prime driving force for our growth.</li>
                            </ul>
                        </Card.Text>
                    </Card.Body>
                </Row>
            </Card>

            
            <Card style={{ width: '100%', marginTop:"20px" }}>
                <Row style={{padding:"5px"}}>
                <Col md={3}>
                    <Card.Img style={{borderRadius:"50%"}} variant="top" src="/Images/milind.jpeg" />
                </Col>
                <Col md={9}>
                    <Card.Body>
                        <Card.Title>Milind Dasharath Kacheria</Card.Title>
                        <Card.Subtitle className="pt-1">CEO, Aayan Multinational</Card.Subtitle>
                        <Card.Text className="pt-3">
                            Milind Kacheria, CEO of Aayan Multinational,
                            graduated as a B Pharm in the year 1992.
                            He also finished his diploma in Pharmaceutical Production Management.
                            After graduation, he joined Glaxo as a trainee.
                            Owing to the hard work and sincerity he was selected to work for Glaxo after a period of 8 months and continued to work in Glaxo till the plant was shifted out of Mumbai.
                            In Glaxo he gathered the experience in various departments like Tablets, Capsules, Sterile Products and Ointments.
                            He has an experience of more then 25 years in the field of Pharmaceuticals. His production experience has an added advantage to his marketing abilities.
                            This company was formed to cater Pharmaceutical Finished Formulations to the world with main focus on Gulf Countries, West African Countries and South East Asian Countries.
                        </Card.Text>
                    </Card.Body>
                </Col>
                </Row>
            </Card>
            
        </div>
    )
}

export default About
