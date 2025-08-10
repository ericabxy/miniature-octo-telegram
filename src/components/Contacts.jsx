import React, { useEffect } from "react";
import ListGroup from "react-bootstrap/ListGroup";

import ExtLink from "./ExtLink.jsx";
import Header from "./Header.jsx";

function Contacts () {
    const title = "Contacts";
    const url = "/contacts";

    return (
      <>
        <Header title={title}>You can reach me publicly through the following services.</Header>
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
      </>
    );
}

export default Contacts;
