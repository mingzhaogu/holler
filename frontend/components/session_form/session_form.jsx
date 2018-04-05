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
    this.defaultLogin = { username: 'stitch626', password: 'password' }
    this.demoLogin = this.demoLogin.bind(this);
  }

  demoLogin() {
    this.setState(this.defaultLogin,
      () => this.props.login(this.state)
    )
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.processForm(this.state)
  }

  renderErrors() {
    return (
      <ul className="error login-errors">
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
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
            {this.props.altText}
            <br />
            {this.props.navLink}
          </h2>

          {this.renderErrors()}

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

          <button type="submit"
            className="login-button">
            {this.props.formType}
          </button>

          <div
            className="demo login-button"
            onClick={this.demoLogin}>
            demo login
          </div>
        </form>
      </div>
    )
  }
}

export default withRouter(SessionForm);
