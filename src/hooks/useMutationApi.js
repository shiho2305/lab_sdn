import axios from "axios";
import { useReducer } from "react";

const INITIAL_STATE = {
  isLoading: false,
  data: null,
  error: null,
};

const request = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});

const reducer = (state, action) => {
  switch (action.type) {
    case "API_LOADING":
      return { ...state, isLoading: true };
    case "API_SUCCESS":
      return { ...state, isLoading: false, data: action.payload };
    case "API_FAILED":
      return { ...state, isLoading: false, error: action.payload };
    default:
      return state;
  }
};

const useMutationApi = () => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  const postApi = async (endpointURL, body) => {
    dispatch({
      type: "API_LOADING",
    });
    try {
      const response = await request.post(endpointURL, body);
      dispatch({
        type: "API_SUCCESS",
        payload: response?.data,
      });
    } catch (error) {
      dispatch({
        type: "API_FAILED",
        payload: "Something when wrong. Please try again!",
      });
    }
  };

  const putApi = async (endpointURL, body) => {
    dispatch({
      type: "API_LOADING",
    });
    try {
      const response = await request.put(endpointURL, body);
      dispatch({
        type: "API_SUCCESS",
        payload: response?.data,
      });
    } catch (error) {
      dispatch({
        type: "API_FAILED",
        payload: "Something when wrong. Please try again!",
      });
    }
  };

  const deleteApi = async (endpointURL) => {
    dispatch({
      type: "API_LOADING",
    });
    try {
      const response = await request.put(endpointURL);
      dispatch({
        type: "API_SUCCESS",
        payload: response?.data,
      });
    } catch (error) {
      dispatch({
        type: "API_FAILED",
        payload: "Something when wrong. Please try again!",
      });
    }
  };

  const trigger = async (endpointURL, method, body) => {
    if (method === "POST") {
      postApi(endpointURL, body);
    } else if (method === "PUT") {
      putApi(endpointURL, body);
    } else if (method === "DELETE") {
      deleteApi(endpointURL);
    }
  };

  return [trigger, state];
};

export default useMutationApi;
