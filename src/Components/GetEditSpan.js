import { useState } from "react";
export const GetEditSpan = (props) => {
    return (
        <span id={props.name + "Edit"}>
            <img
                src={props.editBtn}
                style={{ height: "30px", width: "30px" }}
                alt="edit"
                id={props.name + "EditFolderBtn"}
                className="editBtn"
                onclick="onClickEdit(this)"
            />
        </span>
    );
};
