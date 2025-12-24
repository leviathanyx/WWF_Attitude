// ================================
// WWF Trump Cards - Game Logic
// ================================

let playerDeck = [];
let cpuDeck = [];

let tablePile = []; // cards currently on the table (incl. tie rounds)

let currentPlayer = "player"; // winner of last round starts
let playerCard = null;
let cpuCard = null;

// -------------------------------
// INIT
// -------------------------------
function shuffle(array) {
  return array.sort(() => Math.random() - 0.5);
}

function initGame() {
  const shuffled = shuffle([...deck]);
  const half = Math.floor(shuffled.length / 2);

  playerDeck = shuffled.slice(0, half);
  cpuDeck = shuffled.slice(half);

  document.getElementById("status").textContent = "Game started. Your turn.";
  updateDeckCount();
  drawCards();
}

function updateDeckCount() {
  document.getElementById(
    "deck-count"
  ).textContent = `You: ${playerDeck.length} | CPU: ${cpuDeck.length}`;
}

// -------------------------------
// DRAW
// -------------------------------
function drawCards() {
  if (playerDeck.length === 0 || cpuDeck.length === 0) {
    endGame();
    return;
  }

  playerCard = playerDeck.shift();
  cpuCard = cpuDeck.shift();

  tablePile.push(playerCard, cpuCard);

  renderPlayerCard();
  renderCpuCard(false);

  if (currentPlayer === "cpu") {
    cpuPickStat();
  } else {
    document.getElementById("status").textContent =
      "Pick a stat to play.";
  }
}

// -------------------------------
// RENDER
// -------------------------------
function renderPlayerCard() {
  document.getElementById("player-name").textContent = playerCard.name;
  document.getElementById("player-image").src = playerCard.image;

  const ul = document.getElementById("player-stats");
  ul.innerHTML = "";

  Object.keys(playerCard).forEach((key) => {
    if (key === "name" || key === "image") return;

    const li = document.createElement("li");
    li.innerHTML = `<span>${key.toUpperCase()}</span><span>${playerCard[key]}</span>`;
    li.onclick = () => resolveRound(key);
    ul.appendChild(li);
  });
}

function renderCpuCard(showStats) {
  document.getElementById("cpu-name").textContent = cpuCard.name;
  document.getElementById("cpu-image").src = cpuCard.image;

  const ul = document.getElementById("cpu-stats");
  ul.innerHTML = "";

  if (!showStats) return;

  Object.keys(cpuCard).forEach((key) => {
    if (key === "name" || key === "image") return;

    const li = document.createElement("li");
    li.innerHTML = `<span>${key.toUpperCase()}</span><span>${cpuCard[key]}</span>`;
    ul.appendChild(li);
  });
}

// -------------------------------
// ROUND RESOLUTION
// -------------------------------
function resolveRound(stat) {
  const playerValue = playerCard[stat];
  const cpuValue = cpuCard[stat];

  renderCpuCard(true);

  if (playerValue > cpuValue) {
    roundWin("player");
  } else if (cpuValue > playerValue) {
    roundWin("cpu");
  } else {
    tieRound(stat);
  }
}

function tieRound(stat) {
  document.getElementById(
    "status"
  ).textContent = `Tie on ${stat.toUpperCase()}! New card, same player chooses.`;

  setTimeout(drawCards, 2000);
}

function roundWin(winner) {
  if (winner === "player") {
    playerDeck.push(...tablePile);
    currentPlayer = "player";
    document.getElementById("status").textContent =
      "You win the round.";
  } else {
    cpuDeck.push(...tablePile);
    currentPlayer = "cpu";
    document.getElementById("status").textContent =
      "CPU wins the round.";
  }

  tablePile = [];
  updateDeckCount();

  setTimeout(drawCards, 2000);
}

// -------------------------------
// CPU LOGIC
// -------------------------------
function cpuPickStat() {
  // CPU picks its strongest stat
  let bestStat = null;
  let bestValue = -Infinity;

  Object.keys(cpuCard).forEach((key) => {
    if (key === "name" || key === "image") return;

    if (cpuCard[key] > bestValue) {
      bestValue = cpuCard[key];
      bestStat = key;
    }
  });

  document.getElementById(
    "status"
  ).textContent = `CPU chooses ${bestStat.toUpperCase()}.`;

  setTimeout(() => resolveRound(bestStat), 1200);
}

// -------------------------------
// END GAME
// -------------------------------
function endGame() {
  if (playerDeck.length > cpuDeck.length) {
    document.getElementById("status").textContent =
      "You won the game. Absolute legend.";
  } else {
    document.getElementById("status").textContent =
      "CPU won the game. Try again.";
  }
}

// -------------------------------
// START
// -------------------------------
initGame();
