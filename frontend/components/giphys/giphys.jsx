import React from 'react';

class ToggleGiphy extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      query: "",
      offset: 0
    }

    this.handleInput = this.handleInput.bind(this);
    this.fetchMoreGiphys = this.fetchMoreGiphys.bind(this);
    this.displayGiphys = this.displayGiphys.bind(this);
  }

  componentDidMount() {
    this.props.fetchGiphys("")
  }

  displayGiphys() {
    return (
      this.props.giphys.map((gif) => (
      <li key={gif.id}>
        <img src={gif.images.fixed_height.url} />
      </li>
      ))
    )
  }

  fetchMoreGiphys(offset) {
    this.setState({ offset: this.state.offset + 5 });
    this.props.fetchGiphys(this.state.query, this.state.offset + 5)
  }

  handleInput(e) {
    this.setState({ query: e.target.value });
    this.props.fetchGiphys(e.target.value);
  }

  render() {
    const { showGiphys } = this.props;

    if (!showGiphys) return <div></div>;
    return (
      <div className="giphy-container">
        <input type="text"
          className="giphy-search-input"
          onChange={this.handleInput}
          value={this.state.query}
          placeholder="Search Giphy"
        />

        <ul className="display-giphys">
          {this.displayGiphys()}
        </ul>

        <button onClick={this.fetchMoreGiphys}>{">"}</button>
      </div>
    )
  }
}

export default ToggleGiphy;
