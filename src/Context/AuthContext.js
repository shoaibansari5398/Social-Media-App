import { createContext, useReducer } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

const authReducer = (state, action) => {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.payload,
      };
    case "SET_TOKEN":
      return {
        ...state,
        encodedToken: action.payload,
      };
    default:
      return state;
  }
};

export default function AuthProvider({ children }) {
  const navigate = useNavigate();

  const initialState = {
    user: {},
    encodedToken: "",
  };

  const [authState, authDispatch] = useReducer(authReducer, initialState);

  const userLoginHandler = async (loginData) => {
    try {
      const res = await axios.post("/api/auth/login", loginData);
      if (res.status === 200) {
        localStorage.setItem(
          "data",
          JSON.stringify({
            user: res?.data?.foundUser,
            encodedToken: res?.data?.encodedToken,
          })
        );
        authDispatch({
          type: "SET_USER",
          payload: res?.data?.foundUser,
        });
        authDispatch({
          type: "SET_TOKEN",
          payload: res?.data?.encodedToken,
        });
        // console.log(authState);
        navigate("/home");
      }
    } catch (error) {
      console.error(error);
    }
  };
  const userSignupHandler = async (signupData) => {
    try {
      const res = await axios.post("/api/auth/signup", signupData);
      console.log(res);
      if (res.status === 200) {
        localStorage.setItem(
          "data",
          JSON.stringify({
            user: res?.data?.createUser,
            encodedToken: res?.data?.encodedToken,
          })
        );
        authDispatch({
          type: "SET_USER",
          payload: res?.data?.createUser,
        });
        authDispatch({
          type: "SET_TOKEN",
          payload: res?.data?.encodedToken,
        });
        navigate("/home");
        // console.log(authState);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const logoutHandler = () => {
    localStorage.removeItem("data");
    authDispatch({
      type: "SET_USER",
      payload: {},
    });
    authDispatch({
      type: "SET_TOKEN",
      payload: "",
    });
  };

  return (
    <div>
      <AuthContext.Provider
        value={{
          userLoginHandler,
          authState,
          userSignupHandler,
          logoutHandler,
        }}
      >
        {children}
      </AuthContext.Provider>
    </div>
  );
}
