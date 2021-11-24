import React from "react";
import Card from "./Card";
import "./Nav.css";

function Nav(props) {
  return (
    <nav>
      <div className="firstNav">
        <Card
          getIndex={props.getIndex}
          index="0"
          name="Home"
          icon="home"
        ></Card>
        <Card
          getIndex={props.getIndex}
          index="1"
          name="Calender"
          icon="event"
        ></Card>
        <Card
          getIndex={props.getIndex}
          index="2"
          name="Messages"
          icon="mail"
        ></Card>
        <Card
          getIndex={props.getIndex}
          index="3"
          name="Support"
          icon="assignment_ind"
        ></Card>
        <Card
          getIndex={props.getIndex}
          index="4"
          name="Activity"
          icon="query_builder"
        ></Card>
        <Card
          getIndex={props.getIndex}
          index="5"
          name="Settings"
          icon="settings"
        ></Card>
      </div>
      <div className="secondNav">
        <Card
          getIndex={props.getIndex}
          index="6"
          name="Logout"
          icon="logout"
        ></Card>
      </div>
    </nav>
  );
}

export default Nav;
