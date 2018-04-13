// import React from 'react';
//
// import { createMessage } from '../../util/message_api_util';
//
// class ToggleGiphy extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       query: "",
//       offset: 0
//     }
//
//     this.handleInput = this.handleInput.bind(this);
//     this.fetchMoreGiphys = this.fetchMoreGiphys.bind(this);
//     this.clearQuery = this.clearQuery.bind(this);
//     this.displayGiphys = this.displayGiphys.bind(this);
//     this.sendExpression = this.sendExpression.bind(this);
//   }
//
//   componentDidMount() {
//     this.props.fetchGiphys("")
//   }
//
//   displayGiphys() {
//     return (
//       this.props.giphys.map((gif) => (
//       <li key={gif.id}
//         onClick={this.sendExpression}
//       >
//         <img src={gif.images.fixed_height.url} />
//       </li>
//       ))
//     )
//   }
//
//   fetchMoreGiphys(offset) {
//     this.setState({ offset: this.state.offset + 5 });
//     this.props.fetchMoreGiphys(this.state.query, this.state.offset + 5)
//   }
//
//   clearQuery() {
//     this.setState({ query: "", offset: 0 });
//     this.props.fetchGiphys("");
//   }
//
//   handleInput(e) {
//     this.setState({ query: e.target.value });
//     this.props.fetchGiphys(e.target.value);
//   }
//
//   sendExpression(e) {
//     e.preventDefault();
//     createMessage({
//       sender_id: this.props.currentUser.id,
//       conversation_id: this.props.convId,
//       body: e.target.src,
//       message_type: "gif"
//     });
//     this.setState({ query: "" })
//   }
//
//   render() {
//     const { showGiphys } = this.props;
//
//     if (!showGiphys) return <div></div>;
//     return (
//       <div className="giphy-container">
//         <div className="giphy-search">
//           <i className="fa fa-search" aria-hidden="true" />
//           <input type="text"
//             className="giphy-search-input"
//             onChange={this.handleInput}
//             value={this.state.query}
//             placeholder="Search Giphy"
//           />
//
//           <i className="fa fa-plus"
//             aria-hidden="true"
//             onClick={this.fetchMoreGiphys}
//           />
//
//           <i class="fa fa-times-circle"
//             aria-hidden="true"
//             onClick={this.clearQuery}
//           />
//         </div>
//
//         <ul className="display-giphys">
//           {this.displayGiphys()}
//         </ul>
//
//       </div>
//     )
//   }
// }
//
// export default ToggleGiphy;
