import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";
import { AuthContext } from "./AuthContext";

export const DataContext = createContext();

const dataReducer = (state, action) => {
  switch (action.type) {
    case "SET_ALL_POSTS":
      return {
        ...state,
        posts: action.payload,
      };
    case "SET_ALL_USERS":
      return {
        ...state,
        users: action.payload,
      };
    case "SET_ALL_BOOKMARKS":
      return {
        ...state,
        bookmarks: action.payload,
      };
    default:
      return state;
  }
};

export default function DataProvider({ children }) {
  const { authState } = useContext(AuthContext);

  const initialState = {
    posts: [],
    users: [],
    userPosts: [],
    bookmarks: [],
  };

  const [dataState, dataDispatch] = useReducer(dataReducer, initialState);

  const getAllPostHandler = async () => {
    try {
      const res = await axios.get("/api/posts");
      console.log(res?.data?.posts);
      dataDispatch({
        type: "SET_ALL_POSTS",
        payload: res?.data?.posts,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const getAllUserHandler = async () => {
    try {
      const res = await axios.get("/api/users");
      console.log(res?.data?.users);
      dataDispatch({
        type: "SET_ALL_USERS",
        payload: res?.data?.users,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const getAllBookmarkHandler = async () => {
    try {
      const res = await axios.get(`api/users/bookmark`, {
        headers: {
          authorization: authState.encodedToken,
        },
      });
      console.log(res?.data);
      dataDispatch({
        type: "SET_ALL_BOOKMARKS",
        payload: res?.data?.bookmarks,
      });
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (authState.encodedToken) {
      getAllPostHandler();
      getAllUserHandler();
      getAllBookmarkHandler();
    }
  }, [authState.encodedToken]);

  return (
    <DataContext.Provider value={{ dataState }}>
      {children}
    </DataContext.Provider>
  );
}
