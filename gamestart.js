document.addEventListener("DOMContentLoaded", function() {
    const messageDiv = document.createElement("div");
    messageDiv.id = "messageDiv";
    messageDiv.style.position = "fixed";
    messageDiv.style.top = "0";
    messageDiv.style.left = "0";
    messageDiv.style.width = "100%";
    messageDiv.style.height = "100%";
    messageDiv.style.display = "flex";
    messageDiv.style.flexDirection = "column";
    messageDiv.style.justifyContent = "center";
    messageDiv.style.alignItems = "center";
    messageDiv.style.backgroundImage = "url('/bg.gif')";
    messageDiv.style.backgroundSize = "cover";
    messageDiv.style.color = "gold";
    messageDiv.style.zIndex = "1000";

    const logo = document.createElement("img");
    logo.src = "https://us4-ubg.github.io/logo.png";
    logo.style.maxWidth = "150px";
    logo.style.marginBottom = "20px";
    messageDiv.appendChild(logo);

    const text = document.createElement("p");
    text.textContent = "Thank you for using US4";
    text.style.fontSize = "32px";
    text.style.fontWeight = "bold";
    messageDiv.appendChild(text);

    const countdown = document.createElement("div");
    countdown.id = "countdown";
    countdown.style.marginTop = "10px";
    countdown.style.fontSize = "24px";
    countdown.style.fontWeight = "bold";
    messageDiv.appendChild(countdown);

    document.body.appendChild(messageDiv);

    let timeLeft = 3;
    countdown.textContent = `Start playing in ${timeLeft} seconds`;

    const timer = setInterval(() => {
        timeLeft -= 1;
        countdown.textContent = `Start playing in ${timeLeft} seconds`;

        if (timeLeft <= 0) {
            clearInterval(timer);
            messageDiv.remove();
        }
    }, 1000);
});
