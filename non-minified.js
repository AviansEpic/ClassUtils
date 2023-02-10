function main() {
    let input = prompt("Class Utils\n [1] Fake lightspeed error\n [2] Inspect Element\n [3] Code Execution\n [4] Alert Generator\n [5] 8ball\n [6] Freeze\n [7] Get Info on Command\n [8] Exit");

    let info = {
        1: {
            "name" : "Lightspeed Error",
            "description" : "Set your page to look like a Lightspeed error, good for tricking teachers into thinking their Lightspeed is broken."
        },
        2: {
            "name" : "Inspect Element",
            "description" : "Loads an inspect element copy; useful if inspect element is disabled."
        },
        3: {
            "name" : "Code execution",
            "description" : "Run Javascript code"
        },
        
        4: {
            "name" : "Alert Generator",
            "description" : "Send an alert; maybe useful into tricking teachers?"
        },
        5: {
            "name" : "8ball",
            "description" : "The almighty 8ball, you may ask anything and it'll give an answer."
        },
        6: {
            "name" : "Freeze",
            "description" : "Freeze Chrome"
        },
        7: {
            "name" : "Get Info",
            "description": "Get name and description on a certain command"
        },
        8: {
            "name ": "Exit",
            "description" : "Exits the Class Utils menu"
        }
        
    }

    let exit = false;

    if (input == "1") {
        document.write("<center><h1>Lightspeed</h1><br><h2>Lightspeed ran into an error whilst displaying this page, try again later.</h2></center>");
        alert("Will be visible once exited.")
    } else if(input == "2") {
        try {
            var script = document.createElement('script');
            script.src="//cdn.jsdelivr.net/npm/eruda"; 
            document.body.appendChild(script); 
            script.onload = function () { eruda.init() };
            alert("A button should have popped up on your screen, click that to open inspect element.");
        } catch(e) {
            alert("Inspect element failed to start");
        }
    } else if(input == "3") {
        try {
            eval(prompt("Code"));
            alert("Ran successfully!");
        } catch(e) {
            alert(e);
        }
    } else if(input == "4") {
        alert(prompt("What to alert")) 
    } else if(input == "5") {
        let answers = ["It is certain.", "It is decidedly so.", "Without a doubt.", "Yes, definitely.", "You may rely on it.", "As I see it, yes.", "Most likely.", "Outlook good.", "Yes.", "Signs point to yes.", "Reply hazy, try again.", "Ask again later.", "Better not tell you now.", "Cannot predict now.", "Concentrate and ask again.", "Don't count on it.", "My reply is no.", "My sources say no.", "Outlook not so good.", "Very doubtful."];
        let randomAnswer = Math.floor(Math.random() * answers.length);
        let answer = answers[randomAnswer];

        alert("Magic 8 ball decided...\n" + answer)
    } else if(input == "6") {
        while (true){}
    } else if(input == "7") {
        let command = prompt("Command (#)")
        alert("Name: " + info[command].name + "\n" + info[command].description)
    } else if(input == "8") {
        exit = true
        alert("Cya!")
    }

    if (!exit) {
        main()
    }
}

main()
