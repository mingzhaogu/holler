import React from 'react';
import { Link } from 'react-router-dom';

class NavHeader extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      displayDropdown: false
    }

    this.toggleGearDropdown = this.toggleGearDropdown.bind(this);
    this.closeGearDropdown = this.closeGearDropdown.bind(this);
  }

  componentDidMount() {
    document.addEventListener("click", this.closeGearDropdown)
    $('.nav-bar-cog').on("click", this.toggleGearDropdown)
  }

  componentWillUnmount() {
    document.removeEventListener("click", this.closeGearDropdown)
  }

  toggleGearDropdown(event) {
    event.stopPropagation()
    this.setState({ displayDropdown: !this.state.displayDropdown });
  }

  closeGearDropdown() {
    this.setState({ displayDropdown: false })
  }

  render() {
    const { logout, createConversation } = this.props;
    const extended = this.state.displayDropdown ? "extended" : "";

    return (
      <nav className="nav-bar">
        <i className="fa fa-cog nav-bar-cog"
          aria-hidden="true"
        />

        <menu className={`nav-bar-dropdown ${extended}`}>
          <ul onClick={(e) => e.stopPropagation()}>
            <li onClick={logout}>Logout</li>
          </ul>
        </menu>

        <h2 className="holler main-holler">Holler</h2>

        <Link to="/new">
          <i className="fa fa-pencil-square-o"
            aria-hidden="true"
          />
        </Link>
      </nav>
    )
  }
}

export default NavHeader;
