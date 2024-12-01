import { GoogleLogin } from "react-google-login";
const Login = () => {
  document.title = "Multi Store | Login";
  return (
    <div className="loginPage">
      <div className="loginBox">
        <h1>Login</h1>
        <input
          type="text"
          id="Login-Text"
          placeholder="Username or Email"
        />
        <input
          type="password"
          id="Pass-Text"
          onInput="InputUpdate()"
          placeholder="Password"
        />
        <button type="submit" id="loginBTN">
          Login
        </button>
        <div className="anotherLogin">
          <i class="fa-brands fa-google"></i>
          <i class="fa-brands fa-facebook"></i>
          <i class="fa-brands fa-github"></i>
        </div>
        <p>
          Don't have an account? <a href="/register">Register</a>
        </p>
      </div>
    </div>
  );
};
export default Login;
