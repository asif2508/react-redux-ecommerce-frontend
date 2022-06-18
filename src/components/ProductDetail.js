import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { Button, Card, Image } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { removeSelectedProduct, selectedProduct } from '../states/actions/productAction';

const ProductDetail = () => {
    const {id} = useParams();
    const product = useSelector((state)=> state.allProducts.product);
    const dispatch = useDispatch();
    const fetchedSingleData = async () =>{
        const response = await axios
        .get(`https://fakestoreapi.com/products/${id}`)
        .catch(err =>{
            console.log(err);
        })
        dispatch(selectedProduct(response.data))
    }
    useEffect(()=>{
        if(id && id !== '') fetchedSingleData();
    },[id]);
    const {title, description, price, image} = product;
    return (
        <div>
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
        </div>
    );
};

export default ProductDetail;