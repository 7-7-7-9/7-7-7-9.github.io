document.addEventListener("NavLoaded", function () {
    const navButtons = `
        <a href="/games">🕹️ Games</a>
        <a href="/partners">👥 Partners</a>
        <a href="/apps">📙 Apps & More</a>
        <a href="/settings">⚙️ Settings</a>
        <a href="/extra" style="color: gold; font-weight: bold;">➕ Extra</a>
    `;

    document.querySelector('.nav-buttons').innerHTML = navButtons;
});
