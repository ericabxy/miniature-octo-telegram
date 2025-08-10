import React, { useEffect } from "react";
import Header from "./Header.jsx";

function Home (props) {
  const title = "Home";
  const url = "/";

  return (
    <>
      <Header title={title}>
        Content with a <a href="#linked">hyperlink</a>.
      </Header>
    </>
  );
}

export default Home;
