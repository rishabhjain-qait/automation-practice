// Button Click Event
document.getElementById('clickButton').addEventListener('click', function () {
    document.getElementById('clickResult').textContent = "Button Clicked!";
});

// Form Submit Event
document.getElementById('testForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const name = document.getElementById('nameInput').value;
    const email = document.getElementById('emailInput').value;
    document.getElementById('inputResult').textContent = `Submitted Name: ${name}, Email: ${email}`;
});

// Drag and Drop
const dragItem = document.getElementById('dragItem');
const dropZone = document.getElementById('dropZone');

dragItem.addEventListener('dragstart', function () {
    dragItem.classList.add('dragging');
});

dragItem.addEventListener('dragend', function () {
    dragItem.classList.remove('dragging');
});

dropZone.addEventListener('dragover', function (event) {
    event.preventDefault();
});

dropZone.addEventListener('drop', function () {
    dropZone.textContent = "Dropped!";
    document.getElementById('dragResult').textContent = "Element dropped successfully!";
});

// Hover Effect
document.getElementById('hoverBox').addEventListener('mouseover', function () {
    document.getElementById('hoverResult').textContent = "Hovered!";
});

// Alert and Popup Events
document.getElementById('alertButton').addEventListener('click', function () {
    alert('This is an alert!');
});

document.getElementById('confirmButton').addEventListener('click', function () {
    const result = confirm('Do you confirm this?');
    document.getElementById('alertResult').textContent = result ? "Confirmed!" : "Cancelled!";
});

document.getElementById('promptButton').addEventListener('click', function () {
    const result = prompt('Enter something:');
    document.getElementById('alertResult').textContent = result ? `You entered: ${result}` : "No input.";
});

// File Upload
document.getElementById('fileInput').addEventListener('change', function () {
    const file = document.getElementById('fileInput').files[0];
    document.getElementById('fileResult').textContent = file ? `File selected: ${file.name}` : "No file selected.";
});

// Open New Window
document.getElementById('newWindowButton').addEventListener('click', function () {
    window.open("https://www.example.com", "_blank", "width=800,height=600");
});
