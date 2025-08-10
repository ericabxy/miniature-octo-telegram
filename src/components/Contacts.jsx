import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import ExtLink from "./ExtLink.jsx";

function Contacts () {
    const title = "Contacts";
    const url = "/contacts";

    return (
      <ListGroup>
        <ListGroup.Item>
          <ExtLink url="https://github.com/ericabxy/">Github</ExtLink>
        </ListGroup.Item>
        <ListGroup.Item>
          <ExtLink url="https://www.linkedin.com/in/eric-duhamel-a717a8201/">
            Linkedin
          </ExtLink>
        </ListGroup.Item>
      </ListGroup>
    );
}

export default Contacts;
