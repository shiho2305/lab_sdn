import React from 'react';
import {Form} from 'react-bootstrap';
import './style.css';

const Comments = () => {
    return (
        <div className='comments'>
            <h2>Comments</h2>
            <div>
                <div>
                    <div>
                        <p>Name: </p>
                        <Form.Control type="text" placeholder="Enter your name" />
                    </div>
                    <div>
                        <p>Comment: </p>
                        <Form.Control type="text" placeholder="Enter your comment" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Comments;
