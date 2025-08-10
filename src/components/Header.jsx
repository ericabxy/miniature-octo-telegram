import React, { useEffect } from "react";
import Title from "./Title.jsx";
import Description from "./Description.jsx";

function Header (props) {
  useEffect(() => {
    document.title = props.title + " - Eric Abides";
  }, []);

  return (
    <header>
      <Title appTitle={props.title}/>
      <Description>{props.children}</Description>
    </header>
  )
}

export default Header
