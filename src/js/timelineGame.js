let timeline = [];
let lives = 3;
let currentCard = null;

function updateLives() {
  document.getElementById('lives').textContent = `Lives: ${lives}`;
}

function createCard(cardData, revealYear = false) {
  const card = document.createElement('div');
  card.className = 'card';

  card.innerHTML = `
    <div class="header">${cardData.header}</div>
    <div class="image" style="background-image: url('${cardData.image}')"></div>
    <div class="description">${cardData.description}</div>
    <div class="footer">${revealYear ? cardData.year : '????'}</div>
  `;

  card.dataset.year = cardData.year;
  return card;
}

function animateTimelineHover(x) {
  const timelineDiv = document.getElementById('timeline');
  const children = Array.from(timelineDiv.children);
  let shiftIndex = children.findIndex(child => x < child.getBoundingClientRect().left + child.offsetWidth / 2);
  if (shiftIndex === -1) shiftIndex = children.length;

  children.forEach((child, index) => {
    const offset = index >= shiftIndex ? 60 : 0;
    child.style.transform = `translateX(${offset}px)`;
    child.style.transition = 'transform 0.4s ease';
  });
}

function clearTimelineAnimations() {
  const timelineDiv = document.getElementById('timeline');
  const children = Array.from(timelineDiv.children);
  children.forEach(child => {
    child.style.transform = 'translateX(0)';
  });
}

function showCard() {
  if (currentCard || cardsData.length === 0 || lives <= 0) return;

  const index = Math.floor(Math.random() * cardsData.length);
  const cardData = cardsData.splice(index, 1)[0];
  const card = createCard(cardData);

  card.style.position = 'absolute';
  card.style.left = 'calc(50% - 100px)';
  card.style.top = '400px';

  let offsetX = 0;
  let offsetY = 0;

  const move = (event) => {
    const x = event.clientX;
    card.style.left = `${x - offsetX}px`;
    card.style.top = `${event.clientY - offsetY}px`;
    animateTimelineHover(x);
  };

  const up = (event) => {
    document.removeEventListener('mousemove', move);
    document.removeEventListener('mouseup', up);
    clearTimelineAnimations();

    const timelineDiv = document.getElementById('timeline');
    const rect = timelineDiv.getBoundingClientRect();
    if (
      event.clientX > rect.left && event.clientX < rect.right &&
      event.clientY > rect.top && event.clientY < rect.bottom
    ) {
      const x = event.clientX;
      const children = Array.from(timelineDiv.children);
      let guessIndex = children.findIndex(child => x < child.getBoundingClientRect().left + child.offsetWidth / 2);
      if (guessIndex === -1) guessIndex = children.length;
      insertIntoTimeline(cardData, card, guessIndex);
    } else {
      card.style.left = 'calc(50% - 100px)';
      card.style.top = '400px';
    }
  };

  card.addEventListener('mousedown', e => {
    offsetX = e.offsetX;
    offsetY = e.offsetY;
    document.addEventListener('mousemove', move);
    document.addEventListener('mouseup', up);
  });

  document.getElementById('card-zone').appendChild(card);
  currentCard = card;
}

function insertIntoTimeline(cardData, cardEl, guessIndex) {
  const timelineDiv = document.getElementById('timeline');
  const correctIndex = timeline.findIndex(c => c.year > cardData.year);
  const indexToInsert = correctIndex === -1 ? timeline.length : correctIndex;

  const adjustedGuessIndex = guessIndex === -1 ? timeline.length : guessIndex;
  const isCorrect = adjustedGuessIndex === indexToInsert;

  cardEl.querySelector('.footer').textContent = cardData.year;

  if (!isCorrect) {
    lives--;
    updateLives();
  }

  timeline.splice(indexToInsert, 0, cardData);

  const newCardEl = createCard(cardData, true);
  newCardEl.style.position = 'static';
  const cardNodes = Array.from(timelineDiv.children);
  if (indexToInsert >= cardNodes.length) {
    timelineDiv.appendChild(newCardEl);
  } else {
    timelineDiv.insertBefore(newCardEl, cardNodes[indexToInsert]);
  }

  cardEl.remove();
  currentCard = null;
  if (lives > 0) showCard();
  else alert('Game Over!');
}

function setupTimeline() {
  const starterIndex = Math.floor(Math.random() * cardsData.length);
  const starter = cardsData.splice(starterIndex, 1)[0];
  timeline.push(starter);
  const starterCard = createCard(starter, true);
  starterCard.style.position = 'static';
  document.getElementById('timeline').appendChild(starterCard);
  showCard();
}

updateLives();
setupTimeline();

// Make timeline scrollable
const timelineDiv = document.getElementById('timeline');
timelineDiv.style.overflowX = 'auto';
timelineDiv.style.whiteSpace = 'nowrap';
timelineDiv.style.display = 'flex';
timelineDiv.style.alignItems = 'center';
