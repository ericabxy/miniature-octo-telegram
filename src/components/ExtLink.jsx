import React from "react";

function ExtLink (props) {
    return (
        <a target="_blank" href={props.url}>{props.children}</a>
    );
}

export default ExtLink;
