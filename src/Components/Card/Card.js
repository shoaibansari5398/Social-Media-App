import "./Card.css";
import { Avatar } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import ShareIcon from "@mui/icons-material/Share";

export default function Card() {
  return (
    <div className="container">
      <div className="card">
        <div className="card-header">
          <Avatar src="/static/images/avatar/1.jpg" />
          <div className="">
            <p>Shoaib</p>
            <p>@shoaibansari</p>
          </div>
        </div>
        <div className="card-body">
          <p>
            lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
            ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
            lorem ipsum lorem ipsum lorem
          </p>
          <img src="https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg"></img>
          <hr />
        </div>
        <div className="card-footer">
          <FavoriteBorderIcon />
          <ChatBubbleOutlineIcon />
          <BookmarkBorderIcon />
          <ShareIcon />
        </div>
      </div>
    </div>
  );
}
