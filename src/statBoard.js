import ps from "./pubSub";

export default function statBoard() {
  const container = document.getElementsByClassName("stats-container")[0];

  const startBtn = document.createElement("button");
  startBtn.textContent = "Start Game";
  startBtn.setAttribute("id", "start-btn");
  container.appendChild(startBtn);

  // Event listeners
  startBtn.addEventListener("click", () => ps.publish("new-game"));

  return container;
}
