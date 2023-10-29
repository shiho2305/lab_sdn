import axios from "axios";
import { useEffect, useReducer } from "react";

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

const useFetchApi = (endpoint) => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  const fetchApi = async (endpointURL) => {
    dispatch({
      type: "API_LOADING",
    });
    try {
      const response = await request.get(endpointURL);
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

  useEffect(() => {
    fetchApi(endpoint);
  }, [endpoint]);

  return state;
};

export default useFetchApi;
