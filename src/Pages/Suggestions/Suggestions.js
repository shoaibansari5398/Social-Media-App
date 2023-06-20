import "./Suggestions.css";
import { Avatar } from "@mui/material";

export default function Suggestions() {
  return (
    <div className="suggestions">
      <h3>Suggestions for you</h3>
      <div className="user-suggestion">
        <Avatar src="/static/images/avatar/1.jpg" />
        <div className="user-suggestion-name">
          <div>
            <p>Shoaib</p>
            <p>@shoaibansari</p>
          </div>
          <button>Follow</button>
        </div>
      </div>
    </div>
  );
}
