let timeline = [];
let lives = 3;
let score = 0;
let currentCard = null;

let started = false;

runMenu();

function runMenu(){
  document.getElementById("game").style.visibility="hidden";
  document.getElementById("menuButton").style.visibility="hidden";
  document.getElementById("menu").style.visibility="visible";
  if(!localStorage.getItem("prevScore")){localStorage.setItem("prevScore", 0);}
  if(!localStorage.getItem("highScore")){localStorage.setItem("highScore", 0);}

  document.getElementById('prevScore').textContent = `Score: ${localStorage.getItem("prevScore")}`;
  document.getElementById('highScore').textContent = `Highscore: ${localStorage.getItem("highScore")}`;
}

function start(){
  document.getElementById("menu").style.visibility="hidden";
  document.getElementById("game").style.visibility="visible";
  game();
}


function game(){

function updateLives() {
  document.getElementById('lives').textContent = `Lives: ${lives}`;
}
function updateScore(){
  document.getElementById('score').textContent = `Score: ${score}`;
}

function createCard(cardData, revealYear = false, ran = false, correct = false) {
  const card = document.createElement('div');
  card.className = 'card';
  

  card.innerHTML = `
    <div class="header">${cardData.header}</div>
    <div class="image">
        <image src="${cardData.image}" alt=${cardData.attribution}>
    </div>
    <div class="description">${cardData.description}</div>
    <div class="footer " style='background:  ${ran ? (correct ? "green;'" : "red;'") : "eeeeee18;'"} } >${revealYear ? cardData.year : '????'}</div>
  `;

  card.dataset.year = cardData.year;
  return card;
}

let scrollInterval = null;

function animateTimelineHover(x) {
  const wrapper = document.getElementById('timeline-wrapper');
  const children = Array.from(wrapper.children);
  let shiftIndex = children.findIndex(child => x < child.getBoundingClientRect().left + child.offsetWidth / 2);
  if (shiftIndex === -1) shiftIndex = children.length;

  children.forEach((child, index) => {
    const offset = index >= shiftIndex ? 100 : 0;
    child.style.transform = `translateX(${offset}%)`;
    child.style.transition = 'transform 0.4s ease';
  });

  const timelineDiv = document.getElementById('timeline');
  const rect = timelineDiv.getBoundingClientRect();
  const scrollMargin = 100;
  const scrollSpeed = 10;

  if (scrollInterval) {
    cancelAnimationFrame(scrollInterval);
    scrollInterval = null;
  }

  function autoScroll() {
    const newRect = timelineDiv.getBoundingClientRect();
    if (x > newRect.right - scrollMargin) {
      timelineDiv.scrollLeft += scrollSpeed;
      scrollInterval = requestAnimationFrame(autoScroll);
    } else if (x < newRect.left + scrollMargin) {
      timelineDiv.scrollLeft -= scrollSpeed;
      scrollInterval = requestAnimationFrame(autoScroll);
    }
  }

  scrollInterval = requestAnimationFrame(autoScroll);
}

function clearTimelineAnimations() {
  const wrapper = document.getElementById('timeline-wrapper');
  const children = Array.from(wrapper.children);
  children.forEach(child => {
    child.style.transform = 'translateX(0)';
  });
  if (scrollInterval) {
    cancelAnimationFrame(scrollInterval);
    scrollInterval = null;
  }
}

function showCard() {
  if (currentCard || cardsData.length === 0 || lives <= 0) return;

  const index = Math.floor(Math.random() * cardsData.length);
  const cardData = cardsData.splice(index, 1)[0];
  const card = createCard(cardData);

  card.style.position = 'fixed';
  card.style.left = 'calc(50% - 100px)';
  card.style.top = '50%';
  card.style.zIndex = '1000';

  const move = (event) => {
    const windowWidth = window.innerWidth;
    const zone = windowWidth/7;
    
    const x = event.clientX;
    const y = event.clientY;
    card.style.left = `${x - card.offsetWidth / 2}px`;
    card.style.top = `${y - card.offsetHeight}px`;

    if(x < zone){
      window.scrollBy(-15, 0);
    } else if(x > windowWidth - zone){
      window.scrollBy(15,0);
    }

    animateTimelineHover(x);
  };

  const up = (event) => {
    document.removeEventListener('mousemove', move);
    document.removeEventListener('mouseup', up);
    clearTimelineAnimations();

    const timelineDiv = document.getElementById('timeline');
    const wrapper = document.getElementById('timeline-wrapper');
    const rect = timelineDiv.getBoundingClientRect();
    if (
      event.clientX > rect.left && event.clientX < rect.right &&
      event.clientY > rect.top && event.clientY < rect.bottom
    ) {
      const x = event.clientX;
      const children = Array.from(wrapper.children);
      let guessIndex = children.findIndex(child => x < child.getBoundingClientRect().left + child.offsetWidth / 2);
      if (guessIndex === -1) guessIndex = children.length;
      insertIntoTimeline(cardData, card, guessIndex);
    } else {
      card.style.left = 'calc(50% - 100px)';
      card.style.top = '50%';
    }
  };

  card.addEventListener('mousedown', e => {
    document.addEventListener('mousemove', move);
    document.addEventListener('mouseup', up);
  });

  document.getElementById('card-zone').appendChild(card);
  currentCard = card;
}

function insertIntoTimeline(cardData, cardEl, guessIndex) {
  const timelineDiv = document.getElementById('timeline');
  const wrapper = document.getElementById('timeline-wrapper');
  const correctIndex = timeline.findIndex(c => c.year > cardData.year);
  const indexToInsert = correctIndex === -1 ? timeline.length : correctIndex;

  const adjustedGuessIndex = guessIndex === -1 ? timeline.length : guessIndex;
  const isCorrect = adjustedGuessIndex === indexToInsert;

  cardEl.querySelector('.footer').textContent = cardData.year;
  cardEl.querySelector('.footer').style.backgroundColor = 'red';
 
  if (!isCorrect) {
    lives--;
    updateLives();
    
  } else{
    score++;
    updateScore();
    localStorage.setItem("prevScore", score)
    let hs = localStorage.getItem("highScore");
    localStorage.setItem("highScore", (score > hs ? score : hs));
  }

  timeline.splice(indexToInsert, 0, cardData);

  const newCardEl = createCard(cardData, true, true, isCorrect);
  newCardEl.style.position = 'static';
  const cardNodes = Array.from(wrapper.children);
  if (indexToInsert >= cardNodes.length) {
    wrapper.appendChild(newCardEl);
  } else {
    wrapper.insertBefore(newCardEl, cardNodes[indexToInsert]);
  }

  // Scroll timeline to make the inserted card visible, with overscroll
  requestAnimationFrame(() => {
    const cardOffset = newCardEl.offsetLeft;
    const overscrollPadding = 150;
    const scrollTarget = Math.max(0, cardOffset - overscrollPadding);
    timelineDiv.scrollTo({ left: scrollTarget, behavior: 'smooth' });
  });

  cardEl.remove();
  currentCard = null;
  if (lives > 0) showCard();
  else {
    document.getElementById("menuButton").style.visibility="visible";
  }
}

function setupTimeline() {
  const starterIndex = Math.floor(Math.random() * cardsData.length);
  const starter = cardsData.splice(starterIndex, 1)[0];
  timeline.push(starter);
  const starterCard = createCard(starter, true);
  starterCard.style.position = 'static';

  const wrapper = document.getElementById('timeline-wrapper');
  wrapper.appendChild(starterCard);
  showCard();
}

updateLives();
setupTimeline();
updateScore();
}
// Make timeline scrollable
const timelineDiv = document.getElementById('timeline');
timelineDiv.style.overflowX = 'auto';
timelineDiv.style.overflowY = 'hidden';
timelineDiv.style.whiteSpace = 'nowrap';
timelineDiv.style.display = 'flex';
timelineDiv.style.width = '100%';
timelineDiv.style.scrollBehavior = 'smooth';
timelineDiv.style.position = 'relative';

document.addEventListener('DOMContentLoaded', () => {
  const wrapper = document.createElement('div');
  wrapper.id = 'timeline-wrapper';
  wrapper.style.display = 'flex';
  wrapper.style.flexWrap = 'nowrap';
  wrapper.style.gap = '10px';
  wrapper.style.padding = '0 1000px';
  wrapper.style.minWidth = 'max-content';
  timelineDiv.appendChild(wrapper);

  const uiBar = document.getElementById('ui-bar');
  uiBar.style.position = 'fixed';
  uiBar.style.top = '0';
  uiBar.style.left = '0';
  uiBar.style.width = '100%';
  uiBar.style.zIndex = '1001';

  const cardZone = document.getElementById('card-zone');
  cardZone.style.position = 'fixed';
  cardZone.style.top = '100px';
  cardZone.style.left = '0';
  cardZone.style.width = '100%';
  cardZone.style.zIndex = '1000';
});
