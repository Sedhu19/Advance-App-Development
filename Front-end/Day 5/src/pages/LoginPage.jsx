import { useState } from 'react';
import '../assets/css/login.css';
import Slider from './Slider';

const LoginPage = () => {
  const [isSignUpMode, setIsSignUpMode] = useState(false);

  const toggleMode = () => {
    setIsSignUpMode(!isSignUpMode);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

  };

  return (
    <main className={isSignUpMode ? 'sign-up-mode' : ''}>
      <div className="box">
        <div className="inner-box">
          <div className="forms-wrap">
            {isSignUpMode ? (
              <form onSubmit={handleFormSubmit} className="sign-up-form">
                <div className="logo">
                  <img src="./img/logo.png" alt="event" />
                  <h4>event</h4>
                </div>

                <div className="heading">
                  <h2>Get Started</h2>
                  <h6>
                    Already have an account?
                    <button type="button" className="toggle" onClick={toggleMode}>
                      Sign in
                    </button>
                  </h6>
                </div>

                <div className="actual-form">
                  <div className="input-wrap">
                    <input type="text" className="input-field" placeholder="Name" required />
                  </div>
                  <div className="input-wrap">
                    <input type="email" className="input-field" placeholder="Email" required />
                  </div>
                  <div className="input-wrap">
                    <input type="password" className="input-field" placeholder="Password" required />
                  </div>
                  <input type="submit" value="Sign Up" className="sign-btn" />
                </div>

                <p className="text">
                  By signing up, I agree to the{' '}
                  <a href="/terms-of-service">Terms of Services and Privacy Policy</a>
                </p>
              </form>
            ) : (
              <form onSubmit={handleFormSubmit} className="sign-in-form">
                <div className="logo">
                  <img src="./img/logo.png" alt="event" />
                  <h4>event</h4>
                </div>

                <div className="heading">
                  <h2>Welcome Back</h2>
                  <h6>
                    Not registered yet?
                    <button type="button" className="toggle" onClick={toggleMode}>
                      Sign up
                    </button>
                  </h6>
                </div>

                <div className="actual-form">
                  <div className="input-wrap">
                    <input type="text" className="input-field" placeholder="Name" required />
                  </div>
                  <div className="input-wrap">
                    <input type="password" className="input-field" placeholder="Password" required />
                  </div>
                  <input type="submit" value="Sign In" className="sign-btn" />
                </div>
              </form>
            )}
          </div>

          <Slider />
        </div>
      </div>
    </main>
  );
};

export default LoginPage;
