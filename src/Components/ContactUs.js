import React from 'react';
import {Row, Col} from "react-bootstrap";

const ContactUs = () => {
    return (
        <div>
            Contact Page
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3773.0543924885583!2d72.81154761400119!3d18.973205087146948!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7ce7051addea7%3A0x70833ff09ea73ac9!2sArun%20Chamber%20Tardeo!5e0!3m2!1sen!2sin!4v1620498120633!5m2!1sen!2sin" width="100%" height="250"  allowfullscreen="" loading="lazy"></iframe>
            <Row className="pt-3">
                <Col sm={12} md={4} className="center">
                    <i className="fas fa-map-marker-alt fa-2x"></i>
                    <h4 className="pt-4">Location</h4>
                    <p>127, 1st Floor</p>
                    <p>Arun Chambers</p>
                    <p>Tardeo Road</p>
                    <p>Mumbai 400034, India</p>
                </Col>
                <Col sm={12} md={4} className="center">
                    <i className="fas fa-phone fa-2x"></i>
                    <h4 className="pt-4">Contact Us!</h4>
                    <p><strong>Milind Kacheria</strong></p>
                    <p>+91 9820092066</p>
                    <p>milind@aayanmultinational.in</p>
                    <p></p>
                </Col>
                <Col sm={12} md={4} className="center">
                    <i className="fas fa-envelope fa-2x"></i>
                    <h4 className="pt-4">Mail Us At</h4>
                    <p><a className="mailto" href="mailto:milind@aayanmultinational.in">milind@aayanmultinational.in</a></p>
                </Col>
            </Row>
        </div>
    )
}

export default ContactUs
