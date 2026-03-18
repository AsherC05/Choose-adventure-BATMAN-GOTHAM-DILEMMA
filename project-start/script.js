// Branching Story Project
// Run with: node script.js
//
// Your job has two parts:
//   1. Write your story in the storyNodes object below
//   2. Implement the four functions marked with TODO
//
// The console input/output is handled for you at the bottom of the file.
// You do not need to touch anything in the "do not modify" section.
//
// Read PLAN.md before starting.

// -------------------------------------------------------
// YOUR STORY DATA
//
// Fill out the storyNodes with the appropriate data.
// Keep the same structure - only the text and ids change.
//
// Scene shape:
//   id        - a unique string key, kebab-case (e.g. "dark-hallway")
//   text      - the paragraph the player reads when they arrive here
//   choices   - array of choice objects ({ text, nextId })
//   isEnding  - false for regular scenes, true for ending scenes
//
// Ending scenes also need:
//   endingTitle - a short title shown when this ending is reached
//   choices: [] - an empty array (required, not optional)
//
// Rules:
//   - Every nextId must exactly match a real scene key in this object
//   - Use kebab-case for all ids
//   - You need at least 8 scenes total and at least 2 distinct endings
// -------------------------------------------------------

const storyNodes = {
  start: {
    id: "start",
    text: "YOU ARE THE DARK KNIGHT... PROTECTOR OF GOTHAM. The Bat-Signal, usually a beacon of justice, is stuttering. Someone has corrupted the glass. As you step toward the massive searchlight, you see a neon-green question mark painted over the lens, it says: 'WHAT HAS A MOUTH BUT DOESN\'T SPEAK, HAS A BED BUT DOESN\'T SLEEP. I RUN FOREVER BUT HAVE NO LEGS, FAILURE TO FIND MY SOURCE, GOTHAM\'S LUNGS SHALL FILL WITH LEAD. (Hint) To find me, look where the wealthy REFLECT on themselves and swallows its own filth.' The GCPD is already overwhelmed by a series of coordinated bank heists on the South Side—a classic TWO-FACE distraction. You are alone. If you don't trace the clues correctly, a neurotoxin will be released into the RESERVOIR, turning every tap in Gotham into a delivery system for a slow, agonizing madness. READ THE RIDDLE ONCE MORE AND MAKE YOUR DECISION!",
    choices: [
      { text: "Investigate the Mirror Grand Hotel", nextId: "mirror_hotel" },
      { text: "Search the Gotham Waterworks", nextId: "gotham_waterworks" },
    ],
    isEnding: false,
  },
  mirror_hotel: {
    id: "mirror_hotel",
    text: "The lobby is dead silent, filled with floor-to-ceiling mirrors that distort your silhouette. A voice echoes: Riddler mocking your genius but later reveals a riddle, 'I am always in front of you but never behind. I help REFLECT on your truths so that humanity is what you may find.' Suddenly, the exits lock. You see a green spot light shine towards you, you also notice mirrors with green frames in fixed positions but rotatable.",
    choices: [
      {
        text: "Reflect the green light on each green-framed mirror",
        nextId: "hostage_room",
      },
      {
        text: "Ask Alfred to activate x-ray vision",
        nextId: "communication_hub",
      },
    ],
    isEnding: false,
  },
  gotham_waterworks: {
    id: "gotham_waterworks",
    text: "Rushing water, rusted iron grates, and the echo of dripping pipes. The main valve is jammed. A riddle is etched into the rust: 'What has a MOUTH but never speaks, has a BED but never sleeps. Its flow state unstoppable when focused, once unleashed... damage could never go unnoticed?' The water level is rising toward the electrical junction.",
    choices: [
      {
        text: "follow the RIVER flow deeper into tunnels for direction",
        nextId: "communication_hub",
      },
      {
        text: "Check RESERVOIR INTAKE for remote signal source",
        nextId: "riddlers_lair",
      },
    ],
    isEnding: false,
  },
  hostage_room: {
    id: "hostage_room",
    text: "You've spotted that a hostage in this room. Door slammed open and you find a hostage tied to a chair, taped across the mouth with 'truth' written on it. Shes on a pressure-plate bomb... one move and it blows. The bomb accepts a 4-digit code, searching the hostage you find a envelope with the green question-mark with the riddle: 'I don't have wings but I fly, I have no mouth yet TELL no lie, what am I?'",
    choices: [
      {
        text: "Its Time!",
        nextId: "clock_tower",
      },
      {
        text: "Signal! Delay detonator signal, save hostage! Head to control room.",
        nextId: "communication_hub",
      },
    ],
    isEnding: false,
  },
  communication_hub: {
    id: "communication_hub",
    text: "You are in a control room filled with flickering monitors showing live feeds of Gotham's streets, you notice there is an unusually long row of street lights flashing. An ipod with the label 'play me' is on the desk and you play it, IT SAYS: 'When the stars are aligned... what you seek is what you may find!' You also notice in the audio background that theres a rhythmic tik-tok sound",
    choices: [
      {
        text: "locate riddler using the flashing street lights",
        nextId: "riddlers_lair",
      },
      { text: "Analyse background noise in audio", nextId: "clock_tower" },
    ],
    isEnding: false,
  },
  clock_tower: {
    id: "clock_tower",
    text: "You found out that TIME wasnt just the code, it pointed to the clock tower. You enter the clock tower finding the Riddlers watcher\'s nest and spot him fleeing in helicopter... your detective genius has shocked him. ALMOST leaving the building, evidence of his next plan is revealed leaving you one step ahead. On his desk... communications with Scarecrow is revealed, indicating Riddler was not alone in this... the same riddle from the start is on the desk but unfinished: 'What has a mouth but never speaks, has a bed but never sleeps. What am I?'",
    choices: [
      {
        text: "An ORPHAN, Scarecrow is at the Orphanage!",
        nextId: "riddlers_lair",
      },
      { text: "GO after Riddler and end things now ", nextId: "ending_B" },
    ],
    isEnding: false,
  },
  riddlers_lair: {
    id: "riddlers_lair",
    text: "You're at the Orphanage, one on one with the Scarecrow and he is full of fear of how fast you figured them out. The Scarecrow reveals how obsessed Riddler was with your genius and this whole time his goal was just to be smarter than you. While Scarecrow is speaking you throw a baterang at his hand and spear him down, catching the detonator which has a green and orange button aside labelled 'Shadow' and 'Egg'. Scarecrow also reveals the wrong button intoxicates Gotham South water supply. Scarecrow recites one more riddle saying... 'I am part of the bird thats not in the sky, what am I?'",
    choices: [
      {
        text: "The Shadow!",
        nextId: "ending_A",
      },
      { text: "The Egg!", nextId: "ending_C" },
    ],
    isEnding: false,
  },
  ending_A: {
    id: "ending_A",
    text: "SUCCESS! You figured Riddler was being Batman's shadow. You shout 'The Shadow!' and press the green button. The system locks down. Scarecrow cowers as the GCPD bursts in. You've saved the South Side and outsmarted the duo.",
    choices: [],
    isEnding: true,
    endingTitle: "The Detective\'s Win",
  },
  ending_B: {
    id: "ending_B",
    text: "NEUTRAL. Scarecrow's plan at the orphanage went off without a hitch. The Riddler signaled Scarecrow, you have sacrificed innocence for one guilty soul. This time The Riddler has outsmarted you.",
    choices: [],
    isEnding: true,
    endingTitle: "A Flawed Win",
  },
  ending_C: {
    id: "ending_C",
    text: "SO CLOSE! You were on the right path but pressed the orange button and the neurotoxin infultrated South Gotham. You tie Scarecrow down for GCPD but the city screams.",
    choices: [],
    isEnding: true,
    endingTitle: "A Traumatic Win",
  },
};

// -------------------------------------------------------
// GAME STATE
// These variables are used by your functions below.
// Do not rename them - the game loop at the bottom depends on them.
// -------------------------------------------------------

let currentSceneId = "start";
const visitedScenes = [];

// -------------------------------------------------------
// YOUR FUNCTIONS
// Implement each function using the TODO comments as a guide.
// None of these functions should ask for input or deal with readline.
// They only read data, update state, and log to the console.
// -------------------------------------------------------

// getCurrentScene(sceneId)
// Returns the scene object for the given id.
function getCurrentScene(sceneId) {
  // TODO: Return the scene from storyNodes using sceneId as the key
  return storyNodes[sceneId];
}

// displayScene(sceneId)
// Logs the scene text and numbered choices to the console.
// For endings, logs the endingTitle instead of choices.
// Do not call any input functions here - the game loop handles that.
function displayScene(sceneId) {
  const scene = getCurrentScene(sceneId);

  console.log("______________________________");
  console.log(`Progress: ${visitedScenes.length} areas explored`)
  console.log("______________________________");

  console.log("\n");
  console.log(scene.text);
  console.log("\n");

  if (scene.isEnding) {
    console.log(`-- ${scene.endingTitle.toUpperCase()} --`)
  } else {
    console.log("What will you do?");
    scene.choices.forEach((choice, index) => {
      console.log(`${index + 1}. ${choice.text}`)
    });
  }
  //   If true:  print "-- " + scene.endingTitle + " --"
  //   If false: loop through scene.choices and print each one numbered from 1
  //             Example output:
  //               1. Enter the door
  //               2. Walk away
}

// makeChoice(sceneId, choiceNumber)
// Handles a player selecting one of the numbered choices.
// Returns the nextId of the chosen scene.
function makeChoice(sceneId, choiceNumber) {
  // TODO: Get the scene using getCurrentScene(sceneId)
  const scene = getCurrentScene(sceneId);
  // TODO: Get the selected choice using scene.choices[choiceNumber - 1]
  const selectedChoice = scene.choices[choiceNumber - 1];
  //   (choiceNumber is 1-based but arrays are 0-based)
  // TODO: Push sceneId into visitedScenes to track where the player has been
  visitedScenes.push(sceneId);
  // TODO: Return selectedChoice.nextId
  return selectedChoice.nextId
};

// restartGame()
// Resets all state back to the beginning.
// Do not call displayScene here - the game loop handles that after restart.
function restartGame() {
  // TODO: Set currentSceneId back to "start"
  currentSceneId = "start";
  // TODO: Clear visitedScenes by setting visitedScenes.length = 0
  visitedScenes.length = 0;
}

const { log } = require("console");
// -------------------------------------------------------
// GAME LOOP - DO NOT MODIFY
// This section handles all console input and output.
// It calls your functions above to run the game.
// -------------------------------------------------------

const readline = require("readline");
const { start } = require("repl");
const { text } = require("stream/consumers");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function runGame() {
  displayScene(currentSceneId);

  const scene = getCurrentScene(currentSceneId);

  if (scene.isEnding) {
    askAfterEnding();
  } else {
    const quitNumber = scene.choices.length + 1;
    console.log(quitNumber + ". Quit");
    askForInput();
  }
}

function askForInput() {
  rl.question("\nEnter your choice: ", function (answer) {
    const choiceNumber = parseInt(answer);
    const scene = getCurrentScene(currentSceneId);
    const quitNumber = scene.choices.length + 1;

    if (isNaN(choiceNumber) || choiceNumber < 1 || choiceNumber > quitNumber) {
      console.log("Please enter a number between 1 and " + quitNumber + ".");
      askForInput();
      return;
    }

    if (choiceNumber === quitNumber) {
      console.log("\nGoodbye.");
      rl.close();
      process.exit(0);
    }

    currentSceneId = makeChoice(currentSceneId, choiceNumber);
    runGame();
  });
}

function askAfterEnding() {
  console.log("\n1. Play Again");
  console.log("2. Quit");

  rl.question("\nEnter your choice: ", function (answer) {
    const choiceNumber = parseInt(answer);

    if (choiceNumber === 1) {
      restartGame();
      runGame();
      return;
    }

    if (choiceNumber === 2) {
      console.log("\nThanks for playing.");
      rl.close();
      process.exit(0);
    }

    console.log("Please enter 1 or 2.");
    askAfterEnding();
  });
}

runGame();
