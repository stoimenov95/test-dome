import React from "react";
import { createRoot } from "react-dom/client";

class Message extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      visibleP: false
    };
  }

  handleAnchorClick = () => {
    !this.state.visibleP
      ? this.setState({ visibleP: true })
      : this.setState({ visibleP: false });
  };
  render() {
    return (
      <React.Fragment>
        <a href="#" onClick={this.handleAnchorClick}>
          Want to buy a new car?
        </a>
        {this.state.visibleP && <p>Call +11 22 33 44 now!</p>}
      </React.Fragment>
    );
  }
}

document.body.innerHTML = "<div id='root'></div>";
const root = createRoot(document.getElementById("root"));

root.render(<Message />);
const rootElement = document.getElementById("root");
setTimeout(() => {
  console.log("Before click: " + rootElement.innerHTML);

  document.querySelector("a").click();
  setTimeout(() => {
    console.log("After click: " + rootElement.innerHTML);
  });
});
