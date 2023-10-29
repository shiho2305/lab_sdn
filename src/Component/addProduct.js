import {React, useState} from 'react';
import {Button, Form, Row, Container, Image, Col } from 'react-bootstrap';
import Product from './Product.js';

const AddProduct = () => {

    const [showProductList, setShowProductList] = useState(false);

    const handleCancel = () => {
        setShowProductList(true);
    };

    return (
        <div className='mt-4 mb-4'>
            {showProductList ? (
              <Product/>
            ) : ( 
            <Container>
                <h2 className='mt-3 mb-4 fw-bolder'>Add Product</h2>
                <Form>
                    <Row className="mb-3">
                        <Form.Label className='form-label'>Name</Form.Label>
                        <Form.Control className='form-input' type="text" placeholder="Enter name product" />
                    </Row>

                    <Row className="mb-3">
                        <Form.Label className='form-label'>Price</Form.Label>
                        <Form.Control className='form-input' placeholder="$$$" />
                    </Row>

                    <Row className="mb-3 d-flex align-items-center">
                        <Col>
                            <Form.Label className='form-label'>Image</Form.Label>
                            <Form.Control type='file' className='form-input' placeholder="upload image" />
                        </Col>
                        <Col className='mt-3'>
                            <Image 
                            style={{ width: '800px', height: '400px' }} 
                            src="https://secureservercdn.net/166.62.110.60/h65.3a1.myftpupload.com/wp-content/uploads/2021/09/variable-placeholder-product-31.jpg?time=1644500349" 
                            rounded 
                            />
                        </Col>
                    </Row>

                    <Row className="mb-3">
                        <Form.Label className='form-label'>Category</Form.Label>
                        <Form.Select className='form-input' defaultValue="Choose...">
                            <option>Choose...</option>
                            <option>...</option>
                        </Form.Select>
                    </Row>

                <div className='mt-3 d-flex gap-4 mt-5'>
                    <Button className='btn-addProduct' variant="primary" type="submit">
                        Add
                    </Button>
                    <Button className='btn-addProduct' variant="danger" onClick={handleCancel}>
                        Cancel
                    </Button>
                </div>
                </Form>
            </Container>
            )}
        </div>
    );
}

export default AddProduct;
