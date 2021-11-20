import "./Header.css";
import Profile from "./Profile";

function Header() {
  return (
    <header>
      <div className="firstHeader">
        <p className="title">Baba cool</p>
        <input type="search" className="searchBar" placeholder="Search" />
      </div>
      <div className="secondHeader">
        <span id="bellIcon" className="material-icons-outlined">
          notifications
        </span>
        <span id="settingIcon" className="material-icons-outlined">
          settings
        </span>
        <Profile id="profile" name="Dr. Elis B" school="Harvard"></Profile>
      </div>
    </header>
  );
}

export default Header;
