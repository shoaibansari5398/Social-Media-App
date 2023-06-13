export default function Login() {
  return (
    <div className="login-container">
      <h1>Login Page</h1>
      <label htmlFor="email">Email</label>
      <input id="email" placeholder="a.b@c.com" />
      <label htmlFor="password">Password</label>
      <input type="password" id="password" />
      <button>Login</button>
      <button>Test User Login</button>
      <p>
        Don't Have an Account?<NavLink to="/sign-up">Sign up</NavLink>
      </p>
    </div>
  );
}
