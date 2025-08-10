import React, { useEffect } from "react";

function Links () {
  const title = "Links";
  const url = "/links";
  useEffect(() => {
    document.title = title + " - Eric Abides";
  }, []);

  return (
      <>
          <h1>Links</h1>
          <p>Content</p>
      </>
  );
}

export default Links;
