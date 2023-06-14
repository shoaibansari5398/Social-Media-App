import Content from "../../Pages/Content/Content";
import Navigation from "../../Pages/Navigation/Navigation";
import Suggestions from "../../Pages/Suggestions/Suggestions";
import Navbar from "../Navbar/Navbar";
import "./Home.css";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="home">
        <Navigation className="navigation" />
        <Content className="content" />
        <Suggestions className="suggestions" />
      </div>
    </>
  );
}
