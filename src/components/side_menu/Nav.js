import Card from "./Card";
import "./Nav.css";

function Nav() {
  return (
    <nav>
      <div className="firstNav">
        <Card name="Home" icon="home"></Card>
        <Card name="Calender" icon="event"></Card>
        <Card name="Messages" icon="mail"></Card>
        <Card name="Support" icon="assignment_ind"></Card>
        <Card name="Activity" icon="query_builder"></Card>
        <Card name="Settings" icon="settings"></Card>
      </div>
      <div className="secondNav">
        <Card name="Logout" icon="logout"></Card>
      </div>
    </nav>
  );
}

export default Nav;
