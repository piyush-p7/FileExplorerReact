import { useState } from "react";
export const GetDeleteSpan = (props) => {
    const { children, id, level, name, type } = props.item;

    const onClickDelete = (event) => {
        const storeCopy = [...props.store];

        const idToDelete = event.target.parentNode.parentNode.id;
        findTargetNodeAndDelete(
            idToDelete,
            storeCopy,
            storeCopy,
            props.setStore
        );
    };

    const findTargetNodeAndDelete = (findId, children, store, setStore) => {
        if (findId === "rootFolderDiv") {
            alert("Connot Delete Root Directory");
            return;
        }
        for (let i = 0; i < children.length; i++) {
            if (findId === children[i].id) {
                children.splice(i, 1);
                setStore([...store]);
                return;
            }
            if (children[i].children !== null) {
                findTargetNodeAndDelete(
                    findId,
                    children[i].children,
                    store,
                    setStore
                );
            }
        }
    };

    return (
        <span id={props.name + "Delete"} className="delete">
            <img
                src={props.deleteBtn}
                style={{ height: "30px", width: "30px" }}
                alt="🗑"
                id={props.name + "DeleteBtn"}
                className="delete"
                onClick={(event) => onClickDelete(event)}
            />
        </span>
    );
};
