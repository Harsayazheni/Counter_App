const textarea = document.getElementById("messageBox");
const counter = document.getElementById("count");
const MAX_LIMIT = 100;

textarea.addEventListener("input", () => {
    const length = textarea.value.length;
    const remaining = MAX_LIMIT - length;

    counter.textContent = `${remaining} characters left`;

    if (remaining < 0) {
        counter.style.color = "red";
    } else {
        counter.style.color = "#333";
    }
});
