let counter = 0;

document.body.addEventListener("click", function () {
    counter++;
    document.getElementById("counter").textContent = counter;
});

function resetCounter() {
    counter = -1;
    document.getElementById("counter").textContent = counter;
}