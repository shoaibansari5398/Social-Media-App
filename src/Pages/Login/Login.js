import { NavLink } from "react-router-dom";
import "./Login.css";
import { useContext, useState } from "react";
import { AuthContext } from "../../Context/AuthContext";

export default function Login() {
  const { userLoginHandler } = useContext(AuthContext);

  const [userDetails, setUserDetails] = useState({
    email: "",
    password: "",
  });

  const guestDetails = {
    email: "adarshbalika@gmail.com",
    password: "adarshBalika123",
  };

  const loginHandler = (e) => {
    // console.log(userDetails);
    if (!userDetails?.email.trim() || !userDetails?.password.trim()) {
      alert("Please enter valid inout");
    } else {
      e.preventDefault();
      userLoginHandler(userDetails);
    }
  };

  const guestLoginHandler = (e) => {
    e.preventDefault();
    setUserDetails(guestDetails);
    userLoginHandler(guestDetails);
  };
  return (
    <div>
      <form>
        <div className="login-container">
          <h1>Login Page</h1>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            placeholder="a.b@c.com"
            value={userDetails.email}
            onChange={(e) =>
              setUserDetails((data) => ({ ...data, email: e.target.value }))
            }
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={userDetails.password}
            onChange={(e) =>
              setUserDetails((data) => ({ ...data, password: e.target.value }))
            }
          />
          <button type="submit" onClick={loginHandler}>
            Login
          </button>
          <button type="submit" onClick={guestLoginHandler}>
            Test User Login
          </button>
          <p>
            Don't Have an Account?<NavLink to="/signup">Sign up</NavLink>
          </p>
        </div>
      </form>
    </div>
  );
}
