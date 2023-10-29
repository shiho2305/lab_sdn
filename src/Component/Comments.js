import React, { useState } from "react";
import { Form, Row, Col } from "react-bootstrap";
import Button from "./Button";
import ListComment from "./ListComment";
import useFetchApi from "../hooks/useFetchApi";

const MAX_LIMIT_TEXT = 1000;

const Comments = () => {
  const [commentCount, setCommentCount] = useState(MAX_LIMIT_TEXT);

  const state = useFetchApi("posts");

  console.log(state);

  return (
    <div className="comment__wrapper">
      <div>
        <h2>Comments</h2>
        <div>
          <div className="comment__wrapper-form">
            <Row>
              <Col xs={2}>
                <label>Name: </label>
              </Col>
              <Col xs={10}>
                <Form.Control type="text" placeholder="Enter your name" />
              </Col>
            </Row>
            <Row>
              <Col xs={2}>
                <label>Comment: </label>
              </Col>
              <Col xs={10}>
                <Form.Control
                  as="textarea"
                  rows={4}
                  placeholder="Enter your comment..."
                  maxLength={MAX_LIMIT_TEXT}
                  onChange={(e) => {
                    const count = MAX_LIMIT_TEXT - e.target.value.length;
                    setCommentCount(count);
                  }}
                />
                <p className="helper__text">
                  You can enter {commentCount} more characters.
                </p>
              </Col>
            </Row>
            <div className="comment__button-wrapper">
              <Button>Add</Button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <ListComment />
      </div>
    </div>
  );
};

export default Comments;
