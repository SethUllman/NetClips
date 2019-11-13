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
      // .then(() => this.props.history.push('/movies')); 
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
      <div className="session-form">
        
        
        <form>
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
          
        </form>
          <p className="signup-btn" >
            <span>New to NetClips? </span><Link id='signup-link' to="/signup"> Sign up now</Link> .
          </p>
      </div>
    );
  }
}

export default Login;
