import { useState } from "react";
export const GetNameSpan = (props) => {
    return (
        <span
            id={props.userInput}
            className="name"
            onclick="expand()"
            style={{ fontSize: "30px" }}
        >
            {props.userInput}
        </span>
    );
};
