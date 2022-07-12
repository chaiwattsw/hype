import Cookies from "js-cookie";
import React, { useContext, createContext, useReducer } from "react";

interface State {
  accessToken: string | undefined;
  refreshToken: string | undefined;
  expiresIn: string | undefined;
}

interface Action {
  type: "LOG_IN" | "LOG_OUT" | "REFRESH";
  payload: State;
}

const initialState = {
  accessToken: "",
  refreshToken: "",
  expiresIn: "",
};

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case "LOG_IN":
      return {
        ...state,
        accessToken: action.payload.accessToken,
        refreshToken: action.payload.refreshToken,
        expiresIn: action.payload.expiresIn,
      };
    case "LOG_OUT":
      Cookies.remove("spotify_auth_state");
      return {
        accessToken: "",
        refreshToken: "",
        expiresIn: "",
      };
    case "REFRESH":
      return {
        ...state,
        accessToken: action.payload.accessToken,
        expiresIn: action.payload.expiresIn,
      };
    default:
      throw new Error(`Unknown action type: ${action.type}`);
  }
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within a AuthProvider");
  }
  return context;
};

const AuthContext = createContext<{
  state: State;
  dispatch: React.Dispatch<any>;
}>({ state: initialState, dispatch: () => null });

AuthContext.displayName = "AuthContext";

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
