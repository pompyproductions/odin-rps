console.log("scenes.js: Floatation device");

function submitName() {
    const textInput = document.getElementById("name-input").value;
    if (textInput) playerName = textInput;
    startTransition();
}

function nextScene() {
    const sceneToLoad = this.getAttribute("data-nextScene");
    console.log(`next scene: ${sceneToLoad}`);
    currentWindow.remove();
    switch (sceneToLoad) {
        case "settings":
            newWindow("settings");
            break;
        case "game":
            alert("create game window");
            break;
    }
}

function startTransition() {
    currentWindow.addEventListener("transitionend", nextScene)
    currentWindow.classList.remove("fade-in");
}

let currentWindow = document.querySelector(".main-window");
currentWindow.classList.add("fade-in");
currentWindow.querySelector("button").addEventListener("click", submitName);

