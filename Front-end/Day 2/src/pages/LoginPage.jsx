import { useState } from 'react';
import '../assets/css/login.css';
import Slider from './Slider';

const LoginPage = () => {
  const [isSignUpMode, setIsSignUpMode] = useState(false);

  const toggleMode = () => {
    setIsSignUpMode(!isSignUpMode);
  };

  return (
    <main className={isSignUpMode ? "sign-up-mode" : ""}>
      <div className="box">
        <div className="inner-box">
          <div className="forms-wrap">
            <form action="index.html" className="sign-in-form">
              <div className="logo">
                <img src="./img/logo.png" alt="evenn" />
                <h4>event</h4>
              </div>

              <div className="heading">
                <h2>Welcome Back</h2>
                <h6>Not registered yet?</h6>
                <button type="button" className="toggle" onClick={toggleMode}>Sign up</button>
              </div>

              <div className="actual-form">
                <div className="input-wrap">
                  <input
                    type="text"
                    className="input-field"
                    required
                  />
                  <label>Name</label>
                </div>

                <div className="input-wrap">
                  <input
                    type="password"
                    className="input-field"
                    required
                  />
                  <label>Password</label>
                </div>

                <input type="submit" value="Sign In" className="sign-btn" />

                
              </div>
            </form>

            <form action="index.html" className="sign-up-form">
              <div className="logo">
                <img src="./img/logo.png" alt="evenn" />
                <h4>eventuuh</h4>
              </div>

              <div className="heading">
                <h2>Get Started</h2>
                <h6>Already have an account?</h6>
                <button type="button" className="toggle" onClick={toggleMode}>Sign in</button>
              </div>

              <div className="actual-form">
                <div className="input-wrap">
                  <input
                    type="text"
                    className="input-field"
                    required
                  />
                  <label>Name</label>
                </div>

                <div className="input-wrap">
                  <input
                    type="email"
                    className="input-field"
                    required
                  />
                  <label>Email</label>
                </div>

                <div className="input-wrap">
                  <input
                    type="password"
                    className="input-field"
                    required
                  />
                  <label>Password</label>
                </div>

                <input type="submit" value="Sign Up" className="sign-btn" />

                <p className="text">
                  By signing up, I agree to the
                  <a href="javascript:void(0)"> Terms of Services and Privacy Policy</a> 
                </p>
              </div>
            </form>
          </div>

          <Slider />
        </div>
      </div>
    </main>
  );
};

export default LoginPage;
