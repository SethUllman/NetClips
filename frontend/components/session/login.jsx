import React from 'react';
import { Link } from 'react-router-dom';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(type) {
    return (e) => {
      this.setState({ [type]: e.target.value });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.login(user)
  }

  renderErrors() {
    return (
      <ul className='error-ul'>
        {this.props.errors.map((error, i) => (
          <li className='error-li' key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className="session-form-div">
        <div className="session-form">
          <form className='signup-form'>
            <h2 className='signin-header'>Sign In</h2>

            <div className='email-div'>
              <input
                className='email-input'
                type="text"
                value={this.state.email}
                placeholder='Email'
                onChange={this.handleInput('email')}
              />
            </div>
            <div className='password-div'>
              <input
                className='password-input'
                type="password"
                value={this.state.password}
                placeholder='Password'
                onChange={this.handleInput('password')}
              />
            </div>
            {this.renderErrors()}
            <div className='button-div'>
              <button className='submit-button' onClick={this.handleSubmit}>Sign In</button>
            </div>
            <div className='button-div'>
              <button id='demo-login' className='submit-button' onClick={this.startInterval}>Demo Login</button>
            </div>
            <div className="signup-btn" >
              <div>Have an account?</div>
              <div className='signup-link'>
                <Link id='signup-link' to="/signup">Sign Up</Link>
              </div>
            </div>
            <div className='auth-contact'>
              <div className='git-div'>
                <a className='git-link' href="https://github.com/SethUllman" target="_blank"></a>
              </div>
              <div className='linked-div'>
                <a className='linkedin-link' href="https://www.linkedin.com/in/seth-ullman-80027a199/" target="_blank"></a>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
