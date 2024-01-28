document.getElementById("greenButton").addEventListener("click", function() {
    document.getElementById("textDisplay").style.color = "rgba(86, 171, 47, 0.6)"; // More subtle color
});

document.getElementById("redButton").addEventListener("click", function() {
    document.getElementById("textDisplay").style.color = "rgba(255, 65, 108, 0.6)"; // More subtle color
});

document.getElementById("blueButton").addEventListener("click", function() {
    document.getElementById("textDisplay").style.color = "rgba(0, 92, 151, 0.6)"; // More subtle color
});

document.getElementById("boldButton").addEventListener("click", function() {
    let textDisplay = document.getElementById("textDisplay");
    textDisplay.style.fontWeight = textDisplay.style.fontWeight === 'bold' ? 'normal' : 'bold'; // Toggle bold
});