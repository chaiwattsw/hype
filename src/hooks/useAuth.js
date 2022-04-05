import { useReducer, useEffect, useContext, createContext } from "react";
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

export const AuthContext = createContext();

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

// export default function useAuth(code) {
//   const [state, dispatch] = useReducer(reducer, initialState);

//   useEffect(() => {
//     if (code) {
//       axios
//         .post("http://localhost:3001/login", { code })
//         .then((res) => {
//           dispatch({ type: "LOG_IN", payload: res.data });
//           window.history.pushState({}, null, "/");
//         })
//         .catch((err) => {
//           console.error(err);
//           window.location.reload();
//         });
//     }
//   }, [code]);

//   return state;
// }
