document.addEventListener("DOMContentLoaded", function () {
    const navButtons = `
        <a href="/games">🕹️ Games</a>
        <a href="/partners" style="color: gold; font-weight: bold;">👥 Partners</a>
        <a href="/apps">📙 Apps & More</a>
        <a href="/settings">⚙️ Settings</a>
        <a href="/extra">➕ Extra</a>
    `;

    document.querySelector('.nav-buttons').innerHTML = navButtons;
});
