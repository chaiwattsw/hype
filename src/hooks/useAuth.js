import { useReducer, useContext, createContext } from "react";
import { useSearchParams } from "react-router-dom";

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

const AuthContext = createContext(initialState);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within a AuthProvider");
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
