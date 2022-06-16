console.log("scenes.js: Floatation device");

function submitName() {
    const textInput = document.getElementById("name-input").value;
    if (textInput) playerName = textInput;
    mainWindow.addEventListener("transitionend", nextScene)
    mainWindow.classList.remove("fade-in");
}

function nextScene() {
    const sceneToLoad = this.getAttribute("data-nextScene");
    console.log(`next scene: ${sceneToLoad}`);
    this.remove();
    switch (sceneToLoad) {
        case "settings":
            createWindow("settings");
            break;
        case "game":
            alert("create game window");
            break;
    }
    
}


const mainWindow = document.querySelector(".main-window");
mainWindow.classList.add("fade-in");
mainWindow.querySelector("button").addEventListener("click", submitName);

