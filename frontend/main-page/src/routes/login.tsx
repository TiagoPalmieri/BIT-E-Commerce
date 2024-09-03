import { Fragment } from "react/jsx-runtime"
import '../styles/login.css'
import '../scripts/login.js'

const Login: React.FC = () => {
  return (
    <Fragment>
      <div className="login-form">
        <h1>Sign In</h1>
        <div className="container">
          <div className="main">
            <div className="content">
              <h2>Sign in</h2>
              <form action="#" id="myForm">
                <input type="email" placeholder="User Name" id="email"></input>
                <input
                  type="password"
                  placeholder="User Password"
                  id="password"
                ></input>
                <button className="btn" type="submit">
                  Login
                </button>
              </form>
              <p className="account">
                Don't Have An Account? <a href="signup.html">Register</a>
              </p>
              <div className="form-img">
                <img src="iPhone 15.png" alt=""></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Login;