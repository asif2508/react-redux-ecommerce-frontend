import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';

const Product = ({product}) => {
    const { id, title, price, image, description } = product;
    return (
        <Col xs={12} md={4} lg={4}>
            <Card>
                <Card.Img variant="top" src={image} height='300px' width='50px'/>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Product;