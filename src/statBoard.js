import ps from "./pubSub";

export default function statBoard() {
  // Initial variables
  let topPlayerName = "Top player";
  let botPlayerName = "Bottom player";
  let topPlayerScore = 0;
  let botPlayerScore = 0;

  // Main container
  const container = document.getElementsByClassName("stats-container")[0];

  // Player stats container
  const playerContainer = document.createElement("div");
  playerContainer.setAttribute("id", "player-scores-div");

  const topPlayer = document.createElement("p");
  topPlayer.setAttribute("id", "top-player");
  topPlayer.textContent = `${topPlayerName}: ${topPlayerScore}`;

  const botPlayer = document.createElement("p");
  botPlayer.setAttribute("id", "bot-player");
  botPlayer.textContent = `${botPlayerName}: ${botPlayerScore}`;

  playerContainer.appendChild(topPlayer);
  playerContainer.appendChild(botPlayer);
  container.appendChild(playerContainer);

  // Mode select container
  const modeDiv = document.createElement("div");
  modeDiv.setAttribute("id", "mode-select-div");

  // Mode select question
  const questionText = document.createElement("p");
  questionText.textContent = "Verse CPU?";

  // Mode select buttons
  const btnContainer = document.createElement("div");
  btnContainer.setAttribute("id", "btn-container");
  const yesBtn = document.createElement("button");
  yesBtn.setAttribute("id", "yes-btn");
  yesBtn.textContent = "Yes";
  const noBtn = document.createElement("button");
  noBtn.setAttribute("id", "no-btn");
  noBtn.textContent = "No";

  modeDiv.appendChild(questionText);
  btnContainer.appendChild(yesBtn);
  btnContainer.appendChild(noBtn);
  modeDiv.appendChild(btnContainer);
  container.appendChild(modeDiv);

  // Container buttons
  const containerBtns = document.createElement("div");
  containerBtns.setAttribute("id", "container-btns");
  playerContainer.appendChild(containerBtns);

  // Start button
  const startBtn = document.createElement("button");
  startBtn.textContent = "Start Game";
  startBtn.setAttribute("id", "start-btn");
  startBtn.disabled = true;
  containerBtns.appendChild(startBtn);

  // Reset button
  const resetBtn = document.createElement("button");
  resetBtn.setAttribute("id", "reset-btn");
  resetBtn.textContent = "Reset";
  resetBtn.disabled = true;
  containerBtns.appendChild(resetBtn);

  function updateScores(loserBoard) {
    // Update scores
    if (loserBoard == "top") {
      botPlayerScore += 1;
      botPlayer.textContent = `${botPlayerName}: ${botPlayerScore}`;
    } else {
      topPlayerScore += 1;
      topPlayer.textContent = `${topPlayerName}: ${topPlayerScore}`;
    }
  }
  function resetScores() {
    // Reset scores and update board
    topPlayerScore = 0;
    botPlayerScore = 0;

    topPlayer.textContent = `${topPlayerName}: ${topPlayerScore}`;
    botPlayer.textContent = `${botPlayerName}: ${botPlayerScore}`;
  }

  function enableBtns() {
    startBtn.disabled = false;
    resetBtn.disabled = false;
  }

  function gameOverCleanUp(loserBoard) {
    updateScores(loserBoard);
    enableBtns();
  }

  function showModeDiv() {
    modeDiv.style.opacity = 1;
    modeDiv.style.pointerEvents = "auto";
  }

  function hideModeDiv() {
    modeDiv.style.opacity = 0;
    modeDiv.style.pointerEvents = "none";
  }

  function showPlayerScoreDiv() {
    playerContainer.style.opacity = 1;
    playerContainer.style.pointerEvents = "auto";
  }

  function hidePlayerScoreDiv() {
    playerContainer.style.opacity = 0;
    playerContainer.style.pointerEvents = "none";
  }

  // Event listeners
  startBtn.addEventListener("click", () => {
    startBtn.disabled = true;
    resetBtn.disabled = true;
    ps.publish("new-game");
  });

  yesBtn.addEventListener("click", () => {
    console.log("Yes, vsing CPU.");

    // Switch button disabled states
    ps.publish("cpu-on");
    topPlayerName = "CPU";
    botPlayerName = "Player";
    hideModeDiv();
    resetScores();
    showPlayerScoreDiv();

    yesBtn.disabled = true;
    noBtn.disabled = true;
    startBtn.disabled = false;
    resetBtn.disabled = false;
  });

  noBtn.addEventListener("click", () => {
    console.log("No, vsing human.");

    // Switch button disabled states
    ps.publish("cpu-off");
    topPlayerName = "Top Player";
    botPlayerName = "Bottom Player";
    hideModeDiv();
    resetScores();
    showPlayerScoreDiv();
    yesBtn.disabled = true;
    noBtn.disabled = true;
    startBtn.disabled = false;
    resetBtn.disabled = false;
  });

  resetBtn.addEventListener("click", () => {
    // Reset stats
    hidePlayerScoreDiv();
    showModeDiv();
    resetScores();

    // Switch button disabled states
    ps.publish("cpu-off");
    ps.publish("clear-board");
    startBtn.disabled = true;
    resetBtn.disabled = true;
    yesBtn.disabled = false;
    noBtn.disabled = false;
  });

  // Pubsub
  ps.subscribe("game-over", gameOverCleanUp);

  // Hide player score div on init
  hidePlayerScoreDiv();

  return container;
}
