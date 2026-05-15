const weddingDate = new Date("2026-10-09T20:00:00");
const musicPath = "snaptik_7615383836368571656_v3.mp3";

const countdownParts = {
  days: document.getElementById("days"),
  hours: document.getElementById("hours"),
  minutes: document.getElementById("minutes"),
  seconds: document.getElementById("seconds"),
};

function formatNumber(value) {
  return String(value).padStart(2, "0");
}

function updateCountdown() {
  const now = new Date();
  const distance = Math.max(0, weddingDate.getTime() - now.getTime());

  const secondsTotal = Math.floor(distance / 1000);
  const days = Math.floor(secondsTotal / 86400);
  const hours = Math.floor((secondsTotal % 86400) / 3600);
  const minutes = Math.floor((secondsTotal % 3600) / 60);
  const seconds = secondsTotal % 60;

  countdownParts.days.textContent = formatNumber(days);
  countdownParts.hours.textContent = formatNumber(hours);
  countdownParts.minutes.textContent = formatNumber(minutes);
  countdownParts.seconds.textContent = formatNumber(seconds);
}

function createInvitationStages() {
  const stages = Array.from(document.querySelectorAll(".stage"));
  let currentStage = 0;
  let hasStarted = false;

  function showStage(index) {
    stages.forEach((stage, stageIndex) => {
      stage.classList.toggle("is-active", stageIndex === index);
      stage.classList.remove("is-leaving");
    });
  }

  function moveNext() {
    const activeStage = stages[currentStage];
    const isFinalStage = currentStage >= stages.length - 1;

    if (isFinalStage) {
      return;
    }

    activeStage.classList.add("is-leaving");

    window.setTimeout(() => {
      activeStage.classList.remove("is-active", "is-leaving");
      currentStage += 1;
      showStage(currentStage);
      scheduleNext();
    }, 650);
  }

  function scheduleNext() {
    const activeStage = stages[currentStage];
    const duration = Number(activeStage.dataset.duration || 4800);
    window.setTimeout(moveNext, duration);
  }

  return function startStages() {
    if (hasStarted) {
      return;
    }

    hasStarted = true;
    currentStage = 0;
    showStage(currentStage);
    scheduleNext();
  };
}

function setupMusic() {
  const musicButton = document.querySelector(".music-toggle");
  const music = new Audio(musicPath);

  music.loop = true;
  music.preload = "metadata";
  music.volume = 0.42;

  function updateButton(isPlaying) {
    musicButton.classList.toggle("is-playing", isPlaying);
    musicButton.setAttribute("aria-pressed", String(isPlaying));
    musicButton.setAttribute(
      "aria-label",
      isPlaying ? "إيقاف الموسيقى" : "تشغيل الموسيقى"
    );
  }

  async function playMusic() {
    try {
      await music.play();
      updateButton(true);
    } catch {
      updateButton(false);
    }
  }

  function pauseMusic() {
    music.pause();
    updateButton(false);
  }

  musicButton.addEventListener("click", async () => {
    if (music.paused) {
      await playMusic();
    } else {
      pauseMusic();
    }
  });

  return playMusic;
}

function setupEnvelopeStart(startStages, playMusic) {
  const startScreen = document.querySelector(".start-screen");
  let hasOpened = false;

  startScreen.addEventListener("click", () => {
    if (hasOpened) {
      return;
    }

    hasOpened = true;
    startScreen.classList.add("is-opening");
    void playMusic();

    window.setTimeout(() => {
      document.body.classList.add("is-started");
    }, 1050);

    window.setTimeout(() => {
      startScreen.classList.add("is-hidden");
      startStages();
    }, 1500);
  });
}

updateCountdown();
setInterval(updateCountdown, 1000);
const startStages = createInvitationStages();
const playMusic = setupMusic();
setupEnvelopeStart(startStages, playMusic);
