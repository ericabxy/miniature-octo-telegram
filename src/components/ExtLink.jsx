import React from "react";
import Badge from "react-bootstrap/Badge";
import Image from "react-bootstrap/Image";

function ExtLink (props) {
  return (
    <a target="_blank" href={props.url}>{props.children}</a>
  );
}

export default ExtLink;
