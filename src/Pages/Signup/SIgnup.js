import { useContext, useState } from "react";
import "./Signup.css";
import { AuthContext } from "../../Context/AuthContext";

export default function SIgnup() {
  const { userSignupHandler } = useContext(AuthContext);

  const [userDetails, setUserDetails] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const signupHandler = (e) => {
    e.preventDefault();
    // if (
    //   !userDetails?.firstName.trim() ||
    //   !userDetails?.lastName.trim() ||
    //   !userDetails?.username.trim() ||
    //   !userDetails?.email.trim() ||
    //   !userDetails?.password.trim() ||
    //   !userDetails?.confirmPassword.trim()
    // ) {
    //   alert("Enter valid input!");
    // } else if (userDetails?.password !== userDetails?.confirmPassword) {
    //   alert("Password & Confirm password should match!");
    // } else {
    //   userSignupHandler(userDetails);
    // }
    userSignupHandler(userDetails);
  };

  return (
    <div class="signup-container">
      <form>
        <h1>Sign Up</h1>
        <label for="firstName">First Name</label>
        <input
          type="text"
          id="firstName"
          value={userDetails.firstName}
          onChange={(e) =>
            setUserDetails((prev) => ({
              ...prev,
              firstName: e.target.value,
            }))
          }
        />
        <label for="lastName">Last Name</label>
        <input
          type="text"
          id="lastName"
          value={userDetails.lastName}
          onChange={(e) =>
            setUserDetails((prev) => ({
              ...prev,
              lastName: e.target.value,
            }))
          }
        />
        <label for="email">Email</label>
        <input
          type="email"
          id="email"
          value={userDetails.email}
          onChange={(e) =>
            setUserDetails((prev) => ({
              ...prev,
              email: e.target.value,
            }))
          }
        />
        <label for="password">Password</label>
        <input
          type="password"
          id="password"
          value={userDetails.password}
          onChange={(e) =>
            setUserDetails((prev) => ({
              ...prev,
              password: e.target.value,
            }))
          }
        />
        <label for="confirm-password">Confirm Password</label>
        <input
          type="password"
          id="confirm-password"
          value={userDetails.confirmPassword}
          onChange={(e) =>
            setUserDetails((prev) => ({
              ...prev,
              confirmPassword: e.target.value,
            }))
          }
        />
        <button type="submit" onClick={signupHandler}>
          Signup
        </button>
      </form>
    </div>
  );
}
