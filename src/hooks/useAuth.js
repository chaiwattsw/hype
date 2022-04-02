import { useReducer, useEffect } from "react";

const initialState = {
  accessToken: "",
  refreshToken: "",
  expiresIn: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "REGISTER":
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

export default function useAuth(token) {
  const [state, dispatch] = useReducer(reducer, initialState);
}
