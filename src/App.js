import { useState } from "react";
import { Home } from "./Components/Home";

const App = () => {
    const [store, setStore] = useState([
        {
            level: 0,
            id: "rootFolderDiv",
            name: "root",
            children: [],
            type: "folder",
        },
    ]);

    const [userInput, setUserInput] = useState("");
    const handleInput = (event) => {
        setUserInput(event.target.value);
    };

    const toggleDarkMode = () => {
        document.body.classList.toggle("dark-mode");
        let toogleBtn = document.getElementById("darkModeButton");
        let displayText = toogleBtn.innerHTML;
        if (displayText === "Dark Mode") {
            // In Dark Mode
            toogleBtn.innerHTML = "Light Mode";
        } else {
            // In Light Mode
            toogleBtn.innerHTML = "Dark Mode";
        }
    };
    return (
        <div>
            <h1 id="MainHeadingTag">File Explorer</h1>

            <div id="namingContainer">
                <input
                    type="text"
                    maxlength="10"
                    placeholder="Name of File/Folder"
                    id="naming"
                    onChange={handleInput}
                />
                <button id="darkModeButton" onClick={() => toggleDarkMode()}>
                    Light Mode
                </button>
            </div>

            {store.map((item, index) => {
                return (
                    <Home
                        key={index}
                        item={item}
                        store={store}
                        setStore={setStore}
                        userInput={userInput}
                    />
                );
            })}
        </div>
    );
};

export default App;
