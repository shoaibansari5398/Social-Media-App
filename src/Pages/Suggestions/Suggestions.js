import "./Suggestions.css";

export default function Suggestions() {
  return (
    <div className="suggestions">
      <div className="suggestions-latest">
        <button>Trending</button>
        <button>Latest</button>
      </div>
      <h3>Suggestions for you</h3>
      <div className="user-suggestion">
        <img src="" alt="pp" className="user-suggestion-img" />
        <div className="user-suggestion-name">
          <div>
            <p>n</p>
            <p>Id</p>
          </div>
          <button>Follow</button>
        </div>
      </div>
    </div>
  );
}
