const startBtnRef = document.querySelector('[data-action="start"]');
const stopBtnRef = document.querySelector('[data-action="stop"]');
let isSwitching = false;
let intervalId = null;

startBtnRef.addEventListener('click', onStartSwitchColors);
stopBtnRef.addEventListener('click', onStopSwitchColors);

const colors = [
    '#FFFFFF',
    '#2196F3',
    '#4CAF50',
    '#FF9800',
    '#009688',
    '#795548',
];

function onStartSwitchColors() {

    if (!isSwitching) {
        startBtnRef.disabled = true;
        intervalId = setInterval(() => {
            const randomColorIndex = randomIntegerFromInterval(0, colors.length - 1);
            const randomColorItem = colors[randomColorIndex];

            document.body.style.background = randomColorItem;
            isSwitching = true;


        }, 1000);
    };

};

function onStopSwitchColors() {

    if (isSwitching) {
        startBtnRef.disabled = false;
        isSwitching = false;
        clearInterval(intervalId);
    }
};

const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};