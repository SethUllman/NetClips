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
    this.handleDemoSubmit = this.handleDemoSubmit.bind(this);
    this.startInterval = this.startInterval.bind(this);
  }

  handleInput(field){
    return e => {
      this.setState({ [field]: e.currentTarget.value })
    }
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.createNewUser(this.state)
  }

  handleDemoSubmit(){
    this.props.login(this.state);
  }

  startInterval() {
    this.letterInterval = setInterval(() => {
      if (this.state.email !== "demo@email.com") {
        this.addLetter()
      }
    }, 100)
    this.letterInterval;
  }

  componentWillUnmount() {
    clearInterval(this.letterInterval);
  }

  addLetter() {
    let keyword="demo@email.com";
    for(let i=0; i < keyword.length; i++) {
      if (this.state.email[i] !== keyword[i]) {
        let newWord = this.state.email + keyword[i];
        if (newWord === keyword) {
          this.simulateSubmit();
          this.setState({ email: newWord, password: newWord });
        }
        this.setState({ email: newWord, password: newWord });
        return;
      }
    }
  }

  simulateSubmit() {
    setTimeout(() => {
      document.getElementById("demo-login").classList.add("clicked");
      setTimeout(() => {
        document.getElementById("demo-login").classList.remove("clicked");
        setTimeout(() => {
          this.handleDemoSubmit();
        }, 300)
      }, 400)
    }, 900)
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
            {this.renderErrors()}
            <div className='button-div'>
              <button className='submit-button' onClick={this.handleSubmit}>Sign Up</button>
            </div>
            <div className='button-div'>
              <button id='demo-login' className='submit-button' onClick={this.startInterval}>Demo Login</button>
            </div>
            <div className="signup-btn" >
              <div>Have an account?</div>
              <div className='signup-link'>
                <Link id='signup-link' to="/login">Sign In</Link>
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
};

export default Signup;