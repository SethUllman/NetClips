import React from 'react';
import { Link } from 'react-router-dom';

class Signup extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      email: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(field){
    return e => {
      this.setState({ [field]: e.currentTarget.value })
    }
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.createNewUser(this.state)
      .then( () => this.props.history.push('/movies'))
  }

  render() {
    return (
      <div className="session-form">

        <form>
          <h2 className='signin-header'>Sign Up</h2>
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
            <button className='submit-button' onClick={this.handleSubmit}>Sign Up</button>
          </div>
          <p className="signup-btn" >
            Have an account? <Link id='signup-link' to="/login">Sign In</Link> .
          </p>
        </form>

      </div>
    );
  }
};

export default Signup;