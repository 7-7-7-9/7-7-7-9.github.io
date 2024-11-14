window.addEventListener("load", function() {
    const loadingScreen = document.createElement("div");
    loadingScreen.id = "loadingScreen";
    loadingScreen.style.position = "fixed";
    loadingScreen.style.top = "0";
    loadingScreen.style.left = "0";
    loadingScreen.style.width = "100%";
    loadingScreen.style.height = "100%";
    loadingScreen.style.display = "flex";
    loadingScreen.style.flexDirection = "column";
    loadingScreen.style.justifyContent = "center";
    loadingScreen.style.alignItems = "center";
    loadingScreen.style.backgroundImage = "url('https://us4-ubg.github.io/bg.gif')";
    loadingScreen.style.backgroundSize = "cover";
    loadingScreen.style.color = "gold";
    loadingScreen.style.zIndex = "1000";
    loadingScreen.style.fontFamily = "'Comfortaa', cursive";

    const logo = document.createElement("img");
    logo.src = "https://us4-ubg.github.io/logo.png";
    logo.style.maxWidth = "150px";
    logo.style.marginBottom = "20px";
    loadingScreen.appendChild(logo);

    const text = document.createElement("p");
    let countdown = 5;
    text.textContent = `Start searching in (${countdown})`;
    text.style.fontSize = "32px";
    text.style.fontWeight = "bold";
    loadingScreen.appendChild(text);

    const tipText = document.createElement("p");
    tipText.textContent = "This proxy is not self-hosted like other apps, it may be blocked";
    tipText.style.fontSize = "18px";
    tipText.style.fontWeight = "normal";
    tipText.style.marginTop = "10px";
    tipText.style.textAlign = "center";
    tipText.style.maxWidth = "80%";
    loadingScreen.appendChild(tipText);

    document.body.appendChild(loadingScreen);

    const countdownInterval = setInterval(function() {
        countdown--;
        text.textContent = `Start searching in (${countdown})`;
        if (countdown <= 0) {
            clearInterval(countdownInterval);
            loadingScreen.style.transition = "opacity 1s";
            loadingScreen.style.opacity = "0";
            setTimeout(function() {
                loadingScreen.remove();
            }, 1000);
        }
    }, 1000);

    const fontLink = document.createElement("link");
    fontLink.rel = "stylesheet";
    fontLink.href = "https://fonts.googleapis.com/css2?family=Comfortaa&display=swap";
    document.head.appendChild(fontLink);
});
