
function changeText() {
    let messages = ["Text 1", "Text 2", "Text 3", "Text 4", "Text 5"];

    let randomIndex = getRandomNumber(0, messages.length - 1);

    console.log("Index:", randomIndex);

    let heading = document.getElementById("heading");
    heading.textContent = messages[randomIndex];
}

function getRandomNumber(min, max) {
    let number = Math.random() * (max - min + 1);
    return Math.floor(number) + min;
}
