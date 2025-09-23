let timer;
let timeLeft = 1 * 60; 
let isPaused = false;

const timerDisplay = document.getElementById("timer");
const startButton = document.getElementById("start");
const pauseButton = document.getElementById("pause");
const stopButton = document.getElementById("stop");

function updateTimerDisplay() {
    let minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;
    timerDisplay.textContent = `${minutes}:${seconds.toString().padStart(2, "0")}`;

    if (timeLeft < 60) {
        timerDisplay.classList.add("low-time"); 
    } else {
        timerDisplay.classList.remove("low-time");
    }
}

function startTimer() {
    if (!timer) {
        timer = setInterval(() => {
            if (!isPaused && timeLeft > 0) {
                timeLeft--;
                updateTimerDisplay();
            } else if (timeLeft === 0) {
                clearInterval(timer);
                timer = null;
                alert("Take a break!");
            }
        }, 1000);
    }
}

function pauseTimer() {
    isPaused = !isPaused;
    pauseButton.textContent = isPaused ? "Resume" : "Pause";
}

function stopTimer() {
    clearInterval(timer);
    timer = null;
    timeLeft = 25 * 60;
    isPaused = false;
    pauseButton.textContent = "Pause";
    updateTimerDisplay();
}

startButton.addEventListener("click", startTimer);
pauseButton.addEventListener("click", pauseTimer);
stopButton.addEventListener("click", stopTimer);


updateTimerDisplay();
