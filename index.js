//function to fade out title page image
function fadeOutEffect() {
    var fadeTitlePage = document.getElementsByClassName("titleImage")[0];
    var fadeEffect = setInterval(function () {
        if (!fadeTitlePage.style.opacity) {
            fadeTitlePage.style.opacity = 1;
        }
        if (fadeTitlePage.style.opacity > 0) {
            fadeTitlePage.style.opacity -= 0.1;
        } else {
            clearInterval(fadeEffect);
        }
    }, 200);
}

//function for removal of image that just faded out (title page)
function removeImage() {
    document.getElementsByClassName("titleImage")[0].remove()
    }
//select text element
const textElement = document.getElementById('text')
//select option buttons
const optionButtonsElement = document.getElementById('option-buttons')

//makes sure object is empty at start of game
let state = {} 

//start game function
//makes sure object is empty at start of game
//show first node
function startGame() {
    state = {}
    showTextNode(1)

}

//select option function
function selectOption(option) {
  const nextTextNodeId = option.nextText
  if (nextTextNodeId <= 0) {
    return startGame()
  }

  //resets to state. returns new object that's set to current state
  state = Object.assign(state,option.setState)
  showTextNode(nextTextNodeId)
}

//display option 
function showTextNode(textNodeIndex) {
    const textNode = textNodes.find(textNode => textNode.id === textNodeIndex)
    textElement.innerText = textNode.text
    while (optionButtonsElement.firstChild) {
        optionButtonsElement.removeChild(optionButtonsElement.firstChild)
}

//looping through all options
textNode.options.forEach(option => {
    if (showOption(option)) {
        const button = document.createElement('button')
        button.innerText = option.text
        button.classList.add('btn')
        button.addEventListener('click', () => selectOption(option))
        optionButtonsElement.appendChild(button)
    }
})

}

//showing options
function showOption(option) {
    return option.requiredState == null || option.requiredState(state)
}


//defining textnodes 
const textNodes= [
    {
        id:1, 
        text: "This may be your last first date! You walk into the restaurant and pick a booth in the corner to await the arrival of your date. It's been 15 minutes and your date hasn't shown. Do you...",
        options: [
            {
                text: "Text your date asking when you can expect them",
                setState:{continueDate: true},
                nextText: 2
            },
            {
                text:"Leave and attempt to reschedule",
                setState: {block: true},
                nextText: 3
            }, 
            {
                text: "Unmatch on dating app and never look back",
                setState: {block: true},
                nextText: 3
            }
        ]

    },
    { 
        id:2,
        text: "You've chosen to stay! Your date arrives and sits down. They apologize for their tardiness. Do you...",
        options: [
            {
                text: "Forgive and forget. You're excited to get to know this person, after all.",
                requiredState: (currentState) => currentState.continueDate,
                setState: {continueDate: true},
                nextText: 5
            },
            {
                text: "'Your apologies mean nothing to me, weak human!' you snarl as you block them. It was worth staying just to see the look on their face...",
                requiredState: (currentState) => currentState.continueDate,
                setState: {continueDate: true},
                nextText: 4
            },
            {
                text: "Politely ask that they let you know in the future if they're running late.",
                requiredState: (currentState) => currentState.continueDate,
                setState: {continueDate: true},
                nextText: 4
            }

        ]
    },

    {
        id:3,
        text: "Game Over! Better luck next time in the exciting game of Love me, Block me! The game where points don't matter and you'll probably end up ghosting them anyway...",
        requiredState: (currentState) => currentState.block,
        setState: {block: true}
    },
    {
        id:4,
        text: "oh no! Your date storms off in a huff and throws their napkin at you on their way out! Do you...",
        options: [
            {
                text: "Text them asking what you did wrong and plead for another chance to make it right.",
                requiredState: (currentState) => currentState.continueDate,
                setState: {continueDate: true},
                nextText: 8
            },
            {
                text: "Block immediately.",
                requiredState: (currentState) => currentState.continueDate,
                setState: {block: true},
                nextText: 3
            },
            {
                text: "Laugh it off and go about your day.",
                requiredState: (currentState) => currentState.continueDate,
                setState: {continueDate: true},
                nextText: 3
            }
        ]
    },

    {
        id:5, 
        text: "Wow! What a great date! The conversation was flowing and things are really looking up. The date ends and they insist on escorting you home. Wait..did they say they already know where you live? Do you...",
        options: [
            {
                text: "Pepper spray them and run!",
                requiredState: (currentState) => currentState.continueDate,
                setState: {block: true},
                nextText: 3
            },
            {
                text: "Stranger Danger! Block!",
                requiredState: (currentState) => currentState.continueDate,
                setState: {block: true},
                nextText: 3
            },
            {
                text: "Accept their offer. They do say internet stalking is the highest form of flattery.",
                requiredState: (currentState) => currentState.continueDate,
                setState: {continueDate:true},
                nextText: 3
            }

        ]
    },

    { 
        id: 6, 
        text: "Well, that's odd. Their sibling just texted asking if you were free that night. They said they were immpressed at how you handled the situation and would like to take you out to make it up to you. Do you...",
        options: [
            {
                text: "Block",
                setState: {block: true},
                requiredState: (currentState) => currentState.continueDate,
                nextText: 3
            },
            {
                text: "Accept. Hey, why not keep it in the family? Plus they seemed really nice.",
                requiredState: (currentState) => currentState.continueDate,
                setState: {continueDate: true},
                nextText: 8
            },
            {
                text: "Politely decline.",
                requiredState: (currentState) => currentState.continueDate,
                setState: {block: true},
                nextText: 3
            }
        ]
    },
    { 
        id: 7, 
        text: "It's the next night and both siblings show up at your door! Do you...",
        options: [
            {
                text: "Realize it may be time to uninstall the dating apps",
                requiredState: (currentState) => currentState.continueDate,
                setState: {block: true},
                nextText: 3
            },
            {
                text: "Sic Sansa the Border Collie on them",
                requiredState: (currentState) => currentState.continueDate,
                setState: {block: true},
                nextText: 3
            },
            {
                text: "Block.",
                setState: {block: true},
                nextText: 3
            }
        ]
    },
    {
        id: 8,
        text: "Oh no! They're even more upset! You receive nine messages of wall to wall text. Do you...",
        options: [
            {
                text: "Text them back trying to understand what you did wrong",
                requiredState: (currentState) => currentState.continueDate,
                setState: {continueDate: true},
                nextText: 9
            },
            {
                text: "Block.",
                requiredState: (currentState) => currentState.continueDate,
                setState: {block: true},
                nextText: 3
            },
            {
                text: "Block in the same color.",
                requiredState: (currentState) => currentState.continueDate,
                setState: {block: true},
                nextText: 3
            }
        ]
    },
    {
        id: 9, 
        text: "They continue to text, irate. They then apologize and say you can make it up to them the next night. Do you...",
        options: [
            {
                text: "Take screenshots for the group chat, then block.",
                requiredState: (currentState) => currentState.continueDate,
                setState: {block: true},
                nextText: 3
            },
            {
                text: "Block and uninstall the dating apps.",
                requiredState: (currentState) => currentState.continueDate,
                setState: {block: true},
                nextText: 3
            },
            {
                text: "Block.",
                requiredState: (currentState) => currentState.continueDate,
                setState: {block: true},
                nextText: 3
            }
        ]
    },
]

//starting game
startGame()

//listen for click to reset game
document.querySelector('.reset-btn').addEventListener('click', function(){
    window.location.reload();
    return false;
  });
//click for fadeout function
  document.getElementsByClassName("titleImage")[[0]].addEventListener('click', fadeOutEffect);


//space for removal of image that just faded out (title page)
document.body.onkeyup = function(e) {
    if (e.key == " " ||
        e.code == "Space" ||      
        e.keyCode == 32      
    ) {
      removeImage()
    }
  }


    
