import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.loggedIn) {
      this.props.history.push('/');
    }
  }

  handleSubmit(e) {
    e.preventDefault;
    this.props.processForm(this.state)
  }

  updateInput(field) {
    return ( (e) => this.setState({ [field]: e.target.value }))
  }

  render() {
    return (
      <div className="login-form-container">
        <form className="login-form-box" onSubmit={this.handleSubmit}>
          <img className="logo login-logo"
            src="https://i.imgur.com/XSTheUg.png" />

          <h1 className="holler login-holler">Holler</h1>
          <h2 className="login-text">
            Instantly connect with people in your life.
          </h2>

          <h2 className="login-text">
            Sign in below to get started.
          </h2>

          <input type="text"
            className="login-input"
            value={this.state.username}
            onChange={this.updateInput('username')}
            placeholder="Username"
          />

          <input type="password"
            className="login-input"
            value={this.state.password}
            onChange={this.updateInput('password')}
            placeholder="Password"
          />


          <button className="login-button">{this.props.formType}</button>
        </form>
      </div>
    )
  }
}

export default withRouter(SessionForm);
