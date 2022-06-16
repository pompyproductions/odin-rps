// fires the animation after 1ms 
function createWindow(scene) {
    switch (scene) {
        case "settings":
            // ---
            // main structure

            const main = newElement("div", "main-window");
            const partBig = newElement("div", "part-big");
            const partSmall = newElement("div", "part-small");
            

            // ---
            // partBig elements 
        
            {const elem = newElement("!settings-checkbox");
            partBig.appendChild(elem); };
            {const elem = newElement("!settings-main");
            partBig.appendChild(elem); };
        
        
            // ---
            // partSmall elements
        
            { const elem = newElement("h2");
            elem.innerText = `Welcome, ${playerName}.`;
            partSmall.appendChild(elem); };

            { const elem = newElement("p");
            elem.innerText = "If you want, you can adjust the settings before you jump in.\
            By default, it's 3 rounds, and best of 3 wins.";
            partSmall.appendChild(elem); };

            { const elem = newElement("p");
            elem.innerText = "When you're ready, click the button below to start playing.";
            partSmall.appendChild(elem); };

            { const elem = newElement("button");
            elem.setAttribute("id", "start-game");
            elem.innerText = "Begin Match";
            partSmall.appendChild(elem); };
        

            // join parts in main
            main.appendChild(partSmall);
            main.appendChild(newElement("div", "divider"));
            main.appendChild(partBig);
        
            console.log(document.querySelector("body"));
            document.querySelector("body").appendChild(main);
            toggleFadeIn(main);
    }
}

function toggleFadeIn(element) {
    setTimeout(() => {element.classList.toggle("fade-in")}, 1);
}

function newElement(tag, ...arguments) {
    let elem;
    
    if (tag.charAt(0)+tag.charAt(1) === "D:") {
        // use "D:element" for complex div components. pseudo-recursive!
        const div = newElement("div");
        let args = Array.from(arguments);
        switch (tag) {

            case "!settings-checkbox":

                div.classList.add("flex-row");
    
                { const elem = newElement("!settings-radio", "round_mode",
                        ["best_of", "Best of [x] rounds of game."],
                        ["first_to", "First to reach [x] wins."],
                        ["streak", "First to reach a winning streak of [x]."]
                    );
                div.appendChild(elem); };
                
                { const elem = newElement("label");
                elem.innerText = "Custom rules";
                div.appendChild(elem); };
                
                break;


            case "!settings-main":
                
                div.classList.add("flex-column");
                { const elem = newElement("")}
                
                break;


            case "!settings-radio":

                // extract radioName
                // for the rest of 
                div.classList.add(flex-row);
                const radioName = args.unshift()
                args.forEach((arg) => {
                    // do something
                });

                break;
        }; return div;

    } else if (tag.charAt(0)+tag.charAt(1) === "S:") {
        // use "S:element" to add tags with specific attributes!
        let elem;
        switch (tag) {

            case "S:radio":
                newElement(input);
    } 

    // pass on "tag" and ...class, e.g. newElement("div", "main-window")
    const elem = document.createElement(tag);
    args.forEach(item => elem.classList.add(item));
    return elem;
}

// ("round_mode", 
//      ["best_of", "Best of [x] rounds of game."],
//      ["first_to", "First to reach [x] wins."],
//      ["streak", "First to reach a winning streak of [x]."]
// )

// type=radio, name=radio-round_mode, id=round_mode-best_of, value=best_of
// type=radio, name=radio-round_mode, id=round_mode-first_to, value=first_to
// type=radio, name=radio-round_mode, id=round_mode-streak, value=streak

// type=number, name=round_count, id=round-count, value=3, step=2
