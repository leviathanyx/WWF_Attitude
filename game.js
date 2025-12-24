// ================================
// WWF Trump Cards - Game Logic
// ================================

// Decks
let playerDeck = [];
let cpuDeck = [];

// Cards in play (incl. tie wars)
let tablePile = [];

// Turn control
let currentPlayer = "player";
let playerCard = null;
let cpuCard = null;
let lastChosenStat = null;

// -------------------------------
// UTILS
// -------------------------------
function shuffle(array) {
  return array.sort(() => Math.random() - 0.5);
}

function formatStat(key, value) {
  if (key === "weight") return `${value} kg`;

  if (key === "height") {
    const totalInches = Math.round(value / 2.54);
    const feet = Math.floor(totalInches / 12);
    const inches = totalInches % 12;
    return `${feet}'${inches}"`;
  }

  if (key === "biceps" || key === "chest") return `${value} in`;

  if (key === "ranking") return `#${value}`;

  return value;
}

// -------------------------------
// INIT
// -------------------------------
function initGame() {
  const shuffled = shuffle([...deck]);
  const half = Math.floor(shuffled.length / 2);

  playerDeck = shuffled.slice(0, half);
  cpuDeck = shuffled.slice(half);

  document.getElementById("status").textContent =
    "Game started. Your turn.";
  updateDeckCount();
  drawCards();
}

function updateDeckCount() {
  document.getElementById("deck-count").textContent =
    `You: ${playerDeck.length} | CPU: ${cpuDeck.length}`;
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
  lastChosenStat = null;

  renderPlayerCard();
  renderCpuCard(false);

  if (currentPlayer === "cpu") {
    cpuPickStat();
  } else {
    document.getElementById("status").textContent =
      "Pick a stat.";
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
    li.innerHTML = `<span>${key.toUpperCase()}</span>
                    <span>${formatStat(key, playerCard[key])}</span>`;

    li.onclick = () => {
      if (currentPlayer !== "player") return;
      resolveRound(key);
    };

    ul.appendChild(li);
  });
}

function renderCpuCard(showStats) {
  const nameEl = document.getElementById("cpu-name");
  const imgEl = document.getElementById("cpu-image");
  const ul = document.getElementById("cpu-stats");

  ul.innerHTML = "";

  if (!showStats) {
    nameEl.textContent = "CPU Card";
    imgEl.src =
      "https://upload.wikimedia.org/wikipedia/commons/5/54/Card_back_01.svg";
    return;
  }

  nameEl.textContent = cpuCard.name;
  imgEl.src = cpuCard.image;

  Object.keys(cpuCard).forEach((key) => {
    if (key === "name" || key === "image") return;

    const li = document.createElement("li");
    li.innerHTML = `<span>${key.toUpperCase()}</span>
                    <span>${formatStat(key, cpuCard[key])}</span>`;

    if (key === lastChosenStat) {
      li.classList.add("cpu-selected");
    }

    ul.appendChild(li);
  });
}

// -------------------------------
// ROUND LOGIC
// -------------------------------
function resolveRound(stat) {
  lastChosenStat = stat;

  highlightPlayerStat(stat);
  renderCpuCard(true);

  const playerValue = playerCard[stat];
  const cpuValue = cpuCard[stat];

  if (playerValue > cpuValue) {
    roundWin("player");
  } else if (cpuValue > playerValue) {
    roundWin("cpu");
  } else {
    tieRound(stat);
  }
}

function tieRound(stat) {
  document.getElementById("status").textContent =
    `Tie on ${stat.toUpperCase()}! New card — same chooser.`;

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
  let bestStat = null;
  let bestValue = -Infinity;

  Object.keys(cpuCard).forEach((key) => {
    if (key === "name" || key === "image") return;

    if (cpuCard[key] > bestValue) {
      bestValue = cpuCard[key];
      bestStat = key;
    }
  });

  lastChosenStat = bestStat;

  document.getElementById("status").textContent =
    `CPU chooses ${bestStat.toUpperCase()}.`;

  setTimeout(() => resolveRound(bestStat), 1200);
}

// -------------------------------
// UI HELPERS
// -------------------------------
function highlightPlayerStat(stat) {
  document.querySelectorAll("#player-stats li").forEach((li) => {
    if (li.textContent.includes(stat.toUpperCase())) {
      li.classList.add("selected");
    }
  });
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
