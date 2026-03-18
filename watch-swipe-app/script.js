import {
  collection,
  addDoc,
  serverTimestamp
} from "https://www.gstatic.com/firebasejs/10.12.4/firebase-firestore.js";

/* ===============================
   FIREBASE CONFIG
   =============================== */
const firebaseConfig = {
  apiKey: ":P",
  authDomain: "watch-swipe.firebaseapp.com",
  projectId: "watch-swipe",
  storageBucket: "watch-swipe.firebasestorage.app",
  messagingSenderId: "1005085616976",
  appId: "1:1005085616976:web:2cb22d6c9d8c165db6da55"
};

/* ===============================
   WATCH LIST
   =============================== */
const originalWatches = [
  "watch1.jpg","watch2.jpg","watch3.jpg","watch4.jpg","watch5.jpg",
  "watch6.jpg","watch7.jpg","watch8.jpg","watch9.jpg","watch10.jpg",
  "watch11.jpg","watch12.jpg","watch13.jpg","watch14.jpg","watch15.jpg",
  "watch16.jpg","watch17.jpg","watch18.jpg","watch19.jpg","watch20.jpg"
];

let watches = [];
let index = 0;
let votingActive = false;

let voterName = "";
let sessionId = crypto.randomUUID();
let results = [];

/* ===============================
   ELEMENTS
   =============================== */
const card = document.getElementById("card");
const img = document.getElementById("watchImage");
const likeBadge = document.getElementById("likeBadge");
const nopeBadge = document.getElementById("nopeBadge");

const counterEl = document.getElementById("counter");
const leftEl = document.getElementById("left");

const nameScreen = document.getElementById("nameScreen");
const nameInput = document.getElementById("nameInput");
const startBtn = document.getElementById("startBtn");
const dbStatus = document.getElementById("dbStatus");

const doneScreen = document.getElementById("doneScreen");
const retryBtn = document.getElementById("retryBtn");

/* ===============================
   FIRESTORE INIT (NON-BLOCKING)
   =============================== */
let db = null;

(async () => {
  try {
    const { initializeApp, getFirestore } = window.__firebase;
    const app = initializeApp(firebaseConfig);
    db = getFirestore(app);
    dbStatus.textContent = "Connected ✅";
  } catch {
    dbStatus.textContent = "Offline mode";
  }
})();

/* ===============================
   HELPERS
   =============================== */
function shuffle(arr) {
  return arr.sort(() => Math.random() - 0.5);
}

function updateCounter() {
  counterEl.textContent = `${index + 1} / ${watches.length}`;
  leftEl.textContent = `${watches.length - index - 1} left`;
}

function clearCard() {
  card.style.transition = "none";
  card.style.transform = "translateX(0) rotate(0)";
  card.classList.remove("like-glow", "nope-glow");
  likeBadge.style.opacity = 0;
  nopeBadge.style.opacity = 0;
}

function loadWatch() {
  if (index >= watches.length) {
    doneScreen.classList.remove("hidden");
    return;
  }
  img.src = `./watches/${watches[index]}`;
  updateCounter();
  clearCard();
}

/* ===============================
   GLOW CONTROL (KEY FIX)
   =============================== */
function updateGlow(dx) {
  card.classList.remove("like-glow", "nope-glow");

  if (dx > 20) {
    card.classList.add("like-glow");
  } else if (dx < -20) {
    card.classList.add("nope-glow");
  }
}

/* ===============================
   SAVE VOTE (ASYNC, SAFE)
   =============================== */
function saveVote(vote) {
  const data = {
    voterName,
    sessionId,
    watch: watches[index],
    vote,
    createdAt: serverTimestamp()
  };

  results.push(data);
  localStorage.setItem("watchVotes", JSON.stringify(results));

  if (db) {
    addDoc(collection(db, "votes"), data).catch(() => {});
  }
}

/* ===============================
   SWIPE OUT ANIMATION
   =============================== */
function swipeOut(direction) {
  card.classList.remove("like-glow", "nope-glow");

  if (direction === "like") {
    card.classList.add("like-glow");
  } else {
    card.classList.add("nope-glow");
  }

  const x = direction === "like" ? 800 : -800;
  const r = direction === "like" ? 18 : -18;

  card.style.transition = "transform 220ms ease";
  card.style.transform = `translateX(${x}px) rotate(${r}deg)`;

  setTimeout(() => {
    index++;
    loadWatch();
  }, 220);
}

/* ===============================
   START / RESET
   =============================== */
startBtn.onclick = () => {
  if (!nameInput.value.trim()) return;

  voterName = nameInput.value.trim();
  votingActive = true;

  watches = shuffle([...originalWatches]);
  index = 0;
  results = [];

  nameScreen.style.display = "none";
  loadWatch();
};

retryBtn.onclick = () => {
  votingActive = false;
  nameInput.value = "";
  nameScreen.style.display = "flex";
  doneScreen.classList.add("hidden");
};

/* ===============================
   TOUCH SWIPE HANDLERS
   =============================== */
let startX = 0;
let currentX = 0;
let dragging = false;

card.addEventListener("touchstart", e => {
  if (!votingActive) return;

  dragging = true;
  startX = e.touches[0].clientX;
  card.style.transition = "none";
}, { passive: true });

card.addEventListener("touchmove", e => {
  if (!dragging) return;

  currentX = e.touches[0].clientX - startX;

  card.style.transform =
    `translateX(${currentX}px) rotate(${currentX / 15}deg)`;

  likeBadge.style.opacity =
    currentX > 0 ? Math.min(currentX / 120, 1) : 0;

  nopeBadge.style.opacity =
    currentX < 0 ? Math.min(-currentX / 120, 1) : 0;

  updateGlow(currentX);
}, { passive: true });

card.addEventListener("touchend", () => {
  if (!dragging) return;
  dragging = false;

  if (currentX > 100) {
    saveVote("like");
    swipeOut("like");
  } else if (currentX < -100) {
    saveVote("dislike");
    swipeOut("dislike");
  } else {
    clearCard();
  }

  currentX = 0;
}, { passive: true });
