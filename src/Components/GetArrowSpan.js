import { useState } from "react";
export const GetArrowSpan = (props) => {
    return (
        <span id={props.userInput + "ArrowSpan"} className="arrow">
            <img
                src={props.rightArrow}
                style={{ height: "30px", width: "30px" }}
                alt="➡"
                onclick="onClickToggle(this)"
                id={props.userInput + "ChildrenImg"}
                className="arrow"
            />
        </span>
    );
};
