import React, { useReducer, useContext, createContext } from "react";

interface State {
  accessToken: string | undefined;
  refreshToken: string | undefined;
  expiresIn: number | undefined;
}

interface Action {
  type: "LOG_IN" | "LOG_OUT" | "REFRESH";
  payload: State;
}

const initialState = {
  accessToken: "",
  refreshToken: "",
  expiresIn: undefined,
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
      return {
        ...state,
        accessToken: undefined,
        refreshToken: undefined,
        expiresIn: undefined,
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

const AuthContext = createContext<{
  state: State;
  dispatch: React.Dispatch<any>;
}>({ state: initialState, dispatch: () => null });

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within a AuthProvider");
  }
  return context;
};

export const AuthProvider: React.FC<{ children?: React.ReactNode }> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
