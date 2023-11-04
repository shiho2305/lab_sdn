import React, { useEffect, useState } from "react";
import { Form, Row, Col } from "react-bootstrap";
import Button from "./Button";
import ListComment from "./ListComment";
import useQueryLazyApi from "../hooks/useQueryLazyApi";
import useMutationApi from "../hooks/useMutationApi";

const MAX_LIMIT_TEXT = 1000;

const Comments = () => {
  const [commentCount, setCommentCount] = useState(MAX_LIMIT_TEXT);

  const [trigger, { data }] = useQueryLazyApi();

  useEffect(() => {
    trigger("todos/1");
  }, [trigger]);

  const [deleteTrigger] = useMutationApi();

  return (
    <div>
      <button
        onClick={() => {
          deleteTrigger("/posts/1", "DELETE");
        }}
      >
        delete
      </button>
    </div>
  );
};

export default Comments;
