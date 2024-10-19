document.addEventListener("NavLoaded", function () {
    const navButtons = `
        <a href="/games">🕹️ Games</a>
        <a href="/partners">👥 Partners</a>
        <a href="/apps" style="color: gold; font-weight: bold;">📙 Apps & More</a>
        <a href="/settings">⚙️ Settings</a>
        <a href="/extra">➕ Extra</a>
    `;

    document.querySelector('.nav-buttons').innerHTML = navButtons;
});
