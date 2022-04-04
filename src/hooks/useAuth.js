import { useReducer, useEffect } from "react";
import axios from "axios";

const initialState = {
  accessToken: "",
  refreshToken: "",
  expiresIn: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "LOG_IN":
      return {
        ...state,
        accessToken: action.payload.accessToken,
        refreshToken: action.payload.refreshToken,
        expiresIn: action.payload.expiresIn,
      };
    default:
      return state;
  }
};

export default function useAuth(code) {
  console.log(code);
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    axios
      .post("http://localhost:3001/login", { code })
      .then((res) => {
        dispatch({ type: "LOG_IN", payload: res.data });
        // window.history.pushState({}, null, "/");
      })
      .catch((err) => {
        console.error(err);
        // window.location = "/";
      });
  }, [code]);

  return state;
}
