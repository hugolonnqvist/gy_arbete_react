import "./Main.css";
import Nav from "./side_menu/Nav";
import Home from "./main_content/Home";
import Page from "./main_content/pages/Page";
import React, { useState } from "react";

function Main() {
  const pages = [
    <Home />,
    <Page name="Calendar" />,
    <Page name="Messages" />,
    <Page name="Support" />,
    <Page name="Activity" />,
    <Page name="Settings" />,
    <Page name="Logout page work in progress" />,
  ];

  const [pageIndex, setPageIndex] = useState(0);

  return (
    <main className="main">
      <Nav getIndex={(pageIndex) => setPageIndex(pageIndex)} />
      {pages[pageIndex]}
    </main>
  );
}

export default Main;
