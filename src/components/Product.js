import React from 'react';
import { Button, Card, Col, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Product = ({product}) => {
    const { id, title, price, image, description } = product;
    return (
        <Col xs={12} md={4} lg={4}  className='gap-2'>
            <Link to={`/productDetails/${id}`}>
            <Card>
                {/* <Card.Img variant="top" src={image} height='300px' width='50px' className=''/> */}
                <Image src={image}  height='300px' width='300px' className='p-3'></Image>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
            </Link>
        </Col>
    );
};

export default Product;