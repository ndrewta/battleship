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

  const playersDiv = document.createElement("div");
  playersDiv.setAttribute("id", "players-div");

  const topPlayer = document.createElement("p");
  topPlayer.setAttribute("id", "top-player");
  topPlayer.textContent = `${topPlayerName}: ${topPlayerScore}`;

  const botPlayer = document.createElement("p");
  botPlayer.setAttribute("id", "bot-player");
  botPlayer.textContent = `${botPlayerName}: ${botPlayerScore}`;

  playersDiv.appendChild(topPlayer);
  playersDiv.appendChild(botPlayer);
  playerContainer.appendChild(playersDiv);
  container.appendChild(playerContainer);

  // Mode select container
  const modeDiv = document.createElement("div");
  modeDiv.setAttribute("id", "mode-select-div");

  // Mode select question
  const questionDiv = document.createElement("div");
  questionDiv.setAttribute("id", "question-div");
  const questionText = document.createElement("p");
  questionText.textContent = "Verse CPU?";
  questionDiv.appendChild(questionText);

  // Mode select buttons
  const btnContainer = document.createElement("div");
  btnContainer.setAttribute("id", "btn-container");
  const yesBtn = document.createElement("button");
  yesBtn.setAttribute("id", "yes-btn");
  yesBtn.textContent = "Yes";
  const noBtn = document.createElement("button");
  noBtn.setAttribute("id", "no-btn");
  noBtn.textContent = "No";

  modeDiv.appendChild(questionDiv);
  btnContainer.appendChild(yesBtn);
  btnContainer.appendChild(noBtn);
  modeDiv.appendChild(btnContainer);
  container.appendChild(modeDiv);

  // Player container buttons
  const playerContainerBtns = document.createElement("div");
  playerContainerBtns.setAttribute("id", "player-container-btns");
  playerContainer.appendChild(playerContainerBtns);

  // Start button
  const startBtn = document.createElement("button");
  startBtn.textContent = "New Game";
  startBtn.setAttribute("id", "start-btn");
  startBtn.disabled = true;
  playerContainerBtns.appendChild(startBtn);

  // Reset button
  const resetBtn = document.createElement("button");
  resetBtn.setAttribute("id", "reset-btn");
  resetBtn.textContent = "Reset";
  playerContainerBtns.appendChild(resetBtn);

  // Turn/victory notification
  const infoDiv = document.createElement("div");
  infoDiv.setAttribute("id", "info-div");
  playerContainer.appendChild(infoDiv);

  const infoText = document.createElement("p");
  infoText.textContent = "";
  infoDiv.appendChild(infoText);

  function updateInfoText(text) {
    // Loser Board info
    if (text == "top") {
      infoText.textContent = `${botPlayerName} won!`;
    } else if (text == "bot") {
      infoText.textContent = `${topPlayerName} won!`;
    } else {
      infoText.textContent = text;
    }
  }

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
  }

  function gameOverCleanUp(loserBoard) {
    updateInfoText(loserBoard);
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
    ps.publish("new-game");
  });

  yesBtn.addEventListener("click", () => {
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
  });

  noBtn.addEventListener("click", () => {
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
  });

  resetBtn.addEventListener("click", () => {
    // Reset stats
    hidePlayerScoreDiv();
    showModeDiv();
    resetScores();

    // Switch button disabled states
    ps.publish("cpu-off");
    ps.publish("clear-board");
    infoText.textContent = "";
    startBtn.disabled = true;
    yesBtn.disabled = false;
    noBtn.disabled = false;
  });

  // Pubsub
  ps.subscribe("game-over", gameOverCleanUp);
  ps.subscribe("info-update", updateInfoText);

  // Hide player score div on init
  hidePlayerScoreDiv();

  return container;
}
