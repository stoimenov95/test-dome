const CommentList = () => {
  const [comments, setComments] = React.useState([]);
  const [currentComment, setCurrentComment] = React.useState('');

  const handleInputChange = (event) => {
      setCurrentComment(event.target.value);
  }

  const handlePostClick = () => {
      if (currentComment.trim() !== '') {
          setComments(prevComments => [...prevComments, currentComment]);
          setCurrentComment('');
      }
  }

  return (
      <div>
          <form>
              <input 
                  type="text" 
                  value={currentComment} 
                  onChange={handleInputChange}
              />
              <input 
                  type="button" 
                  value="Post" 
                  onClick={handlePostClick}
              />
          </form>
          <ul>
              {comments.map((comment, index) => (
                  <li key={index}>{comment}</li>
              ))}
          </ul>
      </div>
  );
}

document.body.innerHTML = "<div id='root'></div>";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<CommentList />);

setTimeout(() => {
  let input = document.querySelector("input[type='text']");
  input.value = "test";
  input.dispatchEvent(new Event('change', { bubbles: true }));
  
  setTimeout(() => {
      document.querySelector("input[type='button']").click();
      console.log(document.getElementsByTagName("ul")[0].innerHTML);
  });
});