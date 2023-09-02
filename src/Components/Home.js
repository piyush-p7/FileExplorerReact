import { useState } from "react";
import deleteBtn from "../images/icons8-delete-24.png";
import downArrow from "../images/icons8-drop-down-48.png";
import rightArrow from "../images/icons8-right-button-48.png";
import folderBtn from "../images/icons8-folder-48.png";
import fileBtn from "../images/newFile.png";
import editBtn from "../images/icons8-edit-16.png";
import "../App.css";
import { GetArrowSpan } from "./GetArrowSpan";
import { GetNameSpan } from "./GetNameSpan";
import { GetEditSpan } from "./GetEditSpan";
import { GetFolderSpan } from "./GetFolderSpan";
import { GetFileSpan } from "./GetFileSpan";
import { GetDeleteSpan } from "./GetDeleteSpan";

export const Home = (props) => {
    const { children, id, level, name, type } = props.item;
    const userInput = props.userInput;
    const item = props.item;
    const store = [...props.store];
    const setStore = props.setStore;

    return type === "folder" ? (
        <div>
            <div id={id} className="item" style={{ paddingLeft: "10px" }}>
                <GetArrowSpan rightArrow={rightArrow} userInput={userInput} />
                <GetNameSpan userInput={name} />
                <GetFolderSpan
                    folderBtn={folderBtn}
                    item={item}
                    store={store}
                    setStore={setStore}
                    userInput={userInput}
                />
                <GetFileSpan
                    fileBtn={fileBtn}
                    item={item}
                    store={store}
                    setStore={setStore}
                    userInput={userInput}
                />
                <GetDeleteSpan
                    deleteBtn={deleteBtn}
                    item={item}
                    store={store}
                    setStore={setStore}
                />

                <div id="rootDivChildren">
                    {children.length
                        ? children.map((item, index) => {
                              return (
                                  <Home
                                      key={index}
                                      item={item}
                                      store={store}
                                      setStore={setStore}
                                      userInput={userInput}
                                  />
                              );
                          })
                        : null}
                </div>
            </div>
        </div>
    ) : (
        <div>
            <div id={id} className="item" style={{ paddingLeft: "10px" }}>
                <GetArrowSpan rightArrow={rightArrow} userInput={userInput} />
                <GetNameSpan userInput={name} />
                <GetFileSpan
                    fileBtn={fileBtn}
                    item={item}
                    store={store}
                    setStore={setStore}
                    userInput={userInput}
                />
                <GetDeleteSpan
                    deleteBtn={deleteBtn}
                    item={item}
                    store={store}
                    setStore={setStore}
                />
            </div>
        </div>
    );
};
