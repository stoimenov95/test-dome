import React from "react";
import { createRoot } from "react-dom/client";

class ImageGallery extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      links: this.props.links.length > 0 ? this.props.links : []
    };
  }

  handleRemoveImg = (link) => {
    const newLinks = this.state.links.filter((stateLink) => {
      return stateLink !== link;
    });

    this.setState({ links: newLinks });
  };

  render() {
    console.log("this.state.links", this.props.links);

    return this.state.links.map((link, index) => {
      return (
        <div key={index}>
          <div className={"image"}>
            <img src={link} alt="" />
            <button
              className={"remove"}
              onClick={() => this.handleRemoveImg(link)}
            >
              x
            </button>
          </div>
        </div>
      );
    });
  }
}

document.body.innerHTML = "<div id='root'> </div>";

const rootElement = document.getElementById("root");
const links = ["https://bit.ly/3lmYVna", "https://bit.ly/3flyaMj"];
const root = createRoot(rootElement);
root.render(<ImageGallery links={links} />);

setTimeout(() => {
  // document.querySelectorAll(".remove")[0]?.click();
  setTimeout(() => {
    console.log(rootElement?.innerHTML);
  });
});
