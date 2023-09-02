import { useState } from "react";
export const GetFileSpan = (props) => {
    const { children, id, level, name, type } = props.item;
    const userInput = props.userInput;

    const onClickFile = () => {
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

        const newFileNode = createFileNode(parentObj, userInput);
        parentObj.children.push(newFileNode);

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

    const createFileNode = (parentObj, userInput) => {
        return {
            level: parentObj.level + 1,
            id: userInput + "FileDiv",
            name: userInput,
            children: [],
            type: "file",
        };
    };

    return (
        <span id={props.name + "File"} className="file">
            <img
                src={props.fileBtn}
                style={{ height: "30px", width: "30px" }}
                alt="📄"
                id={props.name + "FileBtn"}
                className="fileBtn"
                onClick={() => onClickFile()}
            />
        </span>
    );
};
