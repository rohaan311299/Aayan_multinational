import React from 'react';
import {Carousel, Button, Nav} from "react-bootstrap";
import {LinkContainer} from "react-router-bootstrap";
import {Link} from "react-router-dom";

const Home = () => {
    return (
        <div>
            <Carousel className="container">
                <Carousel.Item>
                    <img
                    className="d-block w-100 btn-car"
                    src="/images/image_1.jpg"
                    alt="First slide"
                    />
                    <h1 className="onImageText">Aayan Multinational</h1>
                    <LinkContainer to="/products">
                        <Button className="onImage" variant="dark">Get Started</Button>
                    </LinkContainer>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100 btn-car"
                    src="/images/image_2.jpg"
                    alt="Second slide"
                    />
                    <h1 className="onImageText">Aayan Multinational</h1>
                    <LinkContainer to="/products">
                        <Button className="onImage" variant="dark">Get Started</Button>
                    </LinkContainer>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100 btn-car"
                    src="/images/image_3.jpg"
                    alt="Third slide"
                    />
                    <h1 className="onImageText">Aayan Multinational</h1>
                    <LinkContainer to="/products">
                        <Button className="onImage" variant="dark">Get Started</Button>
                    </LinkContainer>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100 btn-car"
                    src="/images/image_4.jpg"
                    alt="Third slide"
                    />
                    <h1 className="onImageText">Aayan Multinational</h1>
                    <LinkContainer to="/products">
                        <Button className="onImage" variant="dark">Get Started</Button>
                    </LinkContainer>
                </Carousel.Item>
                </Carousel>
        </div>
    )
}

export default Home
