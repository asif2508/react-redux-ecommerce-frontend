import axios from 'axios';
import React, { useEffect } from 'react';
import { Container, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { setProducts } from '../states/actions/productAction';
import Product from './Product';

const Products = () => {
    const products = useSelector((state) => state.allProducts.products);
    const dispatch = useDispatch();
    const fetchedData = async () =>{
        const response = await axios
        .get('https://fakestoreapi.com/products')
        .catch(err =>{
            console.log(err);
        });
        console.log(response.data);
        dispatch(setProducts(response.data));
    };
    useEffect(()=>{
        fetchedData();
    },[]);
    return (
        <div>
            <Container>
                <Row>
                    {
                        products.map(product => <Product
                        key={product.id}
                        product={product}
                        ></Product>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default Products;