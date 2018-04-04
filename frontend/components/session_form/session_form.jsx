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
          <h2>{this.props.formType}</h2>
          <label>Username:
            <input type="text"
              className="login-input"
              value={this.state.username}
              onChange={this.updateInput('username')}
            />
          </label>

          <label>Password:
            <input type="password"
              className="login-input"
              value={this.state.password}
              onChange={this.updateInput('password')}
            />
          </label>

          <button className="login-button">Continue</button>
        </form>
      </div>
    )
  }
}

export default SessionForm;
