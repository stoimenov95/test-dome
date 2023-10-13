// React is loaded and is available as React and ReactDOM
// imports should NOT be used

import React from "react";
import ReactDOM from "react-dom";

class CommentList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: [],
      currentComment: ""
    };
  }

  handleInputChange = (event) => {
    this.setState({ currentComment: event.target.value });
  };

  handlePostClick = () => {
    if (this.state.currentComment.trim() !== "") {
      this.setState((prevState) => ({
        comments: [...prevState.comments, prevState.currentComment],
        currentComment: ""
      }));
    }
  };

  render() {
    return (
      <div>
        <form>
          <input
            type="text"
            value={this.state.currentComment}
            onChange={this.handleInputChange}
          />
          <input type="button" value="Post" onClick={this.handlePostClick} />
        </form>
        <ul>
          {this.state.comments.map((comment, index) => (
            <li key={index}>{comment}</li>
          ))}
        </ul>
      </div>
    );
  }
}

document.body.innerHTML = "<div id='root'></div>";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<CommentList />);

setTimeout(() => {
  let input = document.querySelector("input[type='text']");
  input.value = "test";
  input.dispatchEvent(new Event("change", { bubbles: true }));

  setTimeout(() => {
    document.querySelector("input[type='button']").click();
    console.log(document.getElementsByTagName("ul")[0].innerHTML);
  });
});
