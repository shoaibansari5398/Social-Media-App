import "./Navigation.css";
import HomeIcon from "@mui/icons-material/Home";
import ExploreIcon from "@mui/icons-material/Explore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import BookmarkIcon from "@mui/icons-material/Bookmark";

export default function Navigation() {
  return (
    <div className="navigation">
      <p>
        <span>
          <HomeIcon />
        </span>
        Home
      </p>
      <p>
        <span>
          <ExploreIcon />
        </span>
        Explore
      </p>
      <p>
        <span>
          <BookmarkIcon />
        </span>
        Bookmarks
      </p>
      <p>
        <span>
          <FavoriteIcon />
        </span>
        Liked Post
      </p>
      <button>Create Post</button>
    </div>
  );
}
