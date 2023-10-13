import React from "react";
import { createRoot } from "react-dom/client";

const FocusableInput = (props) => {
  const inputRef = React.useRef(null); // Create a ref to reference the input element

  React.useEffect(() => {
    if (props.shouldFocus && inputRef.current) {
      inputRef.current.focus(); // Focus the input element if shouldFocus is true
    }
  }, []); // Empty dependency array ensures this runs only on the first render

  return <input ref={inputRef} />;
};

document.body.innerHTML = "<div id='root'></div>";
const root = createRoot(document.getElementById("root"));
root.render(<FocusableInput shouldFocus={true} />);
setTimeout(() => console.log(document.getElementById("root").innerHTML), 300);
