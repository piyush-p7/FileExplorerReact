import React from "react";

export const GetFolderSpan = (props) => {
    const { children, id, level, name, type } = props.item;
    const userInput = props.userInput;

    const onClickFolder = () => {
        const storeCopy = [...props.store];
        const parentObj = findTargetNode(id, storeCopy);

        if (!parentObj) {
            console.error("Parent folder not found!");
            return;
        }

        const folderNameExists = parentObj.children.some(
            (child) => child.name === userInput
        );
        if (folderNameExists) {
            alert("The given name already exists.");
            return;
        }

        const newFolderNode = createFolderNode(parentObj, userInput);
        parentObj.children.push(newFolderNode);

        props.setStore([...storeCopy]);
        const input = document.getElementById("naming");
        input.value = "";
        input.focus();
    };

    const findTargetNode = (findId, children) => {
        for (let obj of children) {
            if (findId === obj.id) {
                return obj;
            }
            if (obj.children != null) {
                const ans = findTargetNode(findId, obj.children);
                if (ans) {
                    return ans;
                }
            }
        }
        return null;
    };

    const createFolderNode = (parentObj, userInput) => {
        return {
            level: parentObj.level + 1,
            id: userInput + "FolderDiv",
            name: userInput,
            children: [],
            type: "folder",
        };
    };

    return (
        <span id={userInput + "Folder"} className="folder">
            <img
                src={props.folderBtn}
                style={{ height: "30px", width: "30px" }}
                alt="📁"
                id={userInput + "FolderBtn"}
                className="folderBtn"
                onClick={() => onClickFolder()}
            />
        </span>
    );
};
