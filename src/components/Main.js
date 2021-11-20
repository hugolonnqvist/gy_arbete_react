import "./Main.css";
import Nav from "./side_menu/Nav";
import MainContent from "./main_content/MainContent";

function Main() {
  return (
    <div className="main">
      <Nav />
      <MainContent />
    </div>
  );
}

export default Main;
