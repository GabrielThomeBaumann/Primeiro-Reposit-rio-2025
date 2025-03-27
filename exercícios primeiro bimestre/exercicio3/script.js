
function toggleParagraph() {
    let paragraph = document.getElementById("toggle-paragraph");
    if (paragraph.style.display === "none" || paragraph.style.display === "") {
        paragraph.style.display = "block";
    } else {
        paragraph.style.display = "none";
    }
}