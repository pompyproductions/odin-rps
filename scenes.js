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

// fires the animation after 1ms 
function createWindow() {
    const main = newElement("div", "main-window");
    const partBig = newElement("div", "part-big");
    const partSmall = newElement("div", "part-small");
    
    // partBig elements 

    { const element = newElement("input");
    element.setAttribute("type", "checkbox");
    partBig.appendChild(element); };
    
    { const element = newElement("label");
    element.innerText = "Custom rules";
    partBig.appendChild(element); };

    
    // partSmall elements
    { const element = newElement("h2");
    element.innerText = `Welcome, ${playerName}.`;
    partSmall.appendChild(element); };
    { const element = newElement("p");
    element.innerText = "If you want, you can adjust the settings before you jump in.\
    By default, it's 3 rounds, best of 3 wins.";
    partSmall.appendChild(element); };
    { const element = newElement("p");
    element.innerText = "When you're ready, click the button below to start playing.";
    partSmall.appendChild(element); };
    { const element = newElement("button");
    element.setAttribute("id", "start-game");
    element.innerText = "Begin Match";
    partSmall.appendChild(element); };

    // join parts in main
    main.appendChild(partSmall);
    main.appendChild(newElement("div", "divider"));
    main.appendChild(partBig);

    console.log(document.querySelector("body"));
    document.querySelector("body").appendChild(main);
    toggleFadeIn(main);
    
}

// ---
// helper functions

function toggleFadeIn(element) {
    setTimeout(() => {element.classList.toggle("fade-in")}, 1);
}

function newElement(tag, ...classes) {
    const elem = document.createElement(tag);
    classes.forEach(item => elem.classList.add(item));
    return elem;
}

const mainWindow = document.querySelector(".main-window");
mainWindow.classList.add("fade-in");
mainWindow.querySelector("button").addEventListener("click", submitName);

