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
    this.props.login(this.state)
      .then(() => this.props.history.push('/movies'));
  }

  render() {
    // console.log(this.props);
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
          <div className='button-div'>
            <button className='submit-button' onClick={this.handleSubmit}>Sign In</button>
          </div>
          <p className="signup-btn" >
            New to NetClips? <Link id='signup-link' to="/signup">Sign up now</Link> .
          </p>
        </form>
  
      </div>
    );
  }
}

export default Login;
