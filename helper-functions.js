function newElement(tag, ...args) {
    const elem = document.createElement(tag);
    args.forEach(item => elem.classList.add(item));
    return elem;
}

function newComponent(comp, ...args) {
    const container = newElement("div", "component");
    let arguments = [...args];
    let elem;
    switch (comp) {
        case "checkbox":
            {
                elem = newElement("")
            }
    }
}

function newWindow(scene) {
    switch (scene) {
        case "settings":
            // ---
            // main structure:
            const main = newElement("div", "main-window");
            const partSmall = newElement("div", "part_small");
            const partBig = newElement("div", "part-big");
            let elem;

            // ---
            // partSmall elements:
            {
                elem = newElement("h2");
                elem.innerText = `Welcome, ${playerName}.`;
                partSmall.appendChild(elem);
            }; {
                elem = newElement("p");
                elem.innerText = "If you want, you can adjust the settings before you jump in.\
                    By default, it's 3 rounds, best of 3 wins.";
                partSmall.appendChild(elem);
            }; {
                elem = newElement("p");
                elem.innerText = "When you're ready, click the button below to start playing.";
                partSmall.appendChild(elem);
            }; 
            
            // --
            // partBig elements:
            // {
            //     elem = newElement("p");
            //     partBig.appendChild(elem);
            // }; 

    }
}




// // fires the animation after 1ms 
// function createWindow(scene) {
//     switch (scene) {
//         case "settings":
//             // ---
//             // main structure

//             const main = newElement("div", "main-window");
//             const partBig = newElement("div", "part-big");
//             const partSmall = newElement("div", "part-small");
            

//             // ---
//             // partBig elements 
        

        
        
//             // ---
//             // partSmall elements
        
//             { const elem = newElement("h2");
//             elem.innerText = `Welcome, ${playerName}.`;
//             partSmall.appendChild(elem); };

//             { const elem = newElement("p");
//             elem.innerText = "If you want, you can adjust the settings before you jump in.\
//             By default, it's 3 rounds, best of 3 wins.";
//             partSmall.appendChild(elem); };

//             { const elem = newElement("p");
//             elem.innerText = "When you're ready, click the button below to start playing.";
//             partSmall.appendChild(elem); };

//             { const elem = newElement("button");
//             elem.setAttribute("id", "start-game");
//             elem.innerText = "Begin Match";
//             partSmall.appendChild(elem); };
        

//             // join parts in main
//             main.appendChild(partSmall);
//             main.appendChild(newElement("div", "divider"));
//             main.appendChild(partBig);
        
//             console.log(document.querySelector("body"));
//             document.querySelector("body").appendChild(main);
//             toggleFadeIn(main);
//     }
// }

// function toggleFadeIn(element) {
//     setTimeout(() => {element.classList.toggle("fade-in")}, 1);
// }

// function newElement(tag, ...classes) {
//     switch (tag) {
//         // use "case !" for complex div components. pseudo-recursive!

//         case "!checkbox-settings":
//             { const elem = newElement("input");
//             elem.setAttribute("type", "checkbox");
//             partBig.appendChild(elem); };
            
//             { const elem = newElement("label");
//             elem.innerText = "Custom rules";
//             partBig.appendChild(elem); };
            
//             break;


//         default:
//             const elem = document.createElement(tag);
//             classes.forEach(item => elem.classList.add(item));
//             return elem;
//     }
}