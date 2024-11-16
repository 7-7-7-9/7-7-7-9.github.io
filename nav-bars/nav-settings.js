document.addEventListener("DOMContentLoaded", function () {
    const navButtons = `
    <a href="/games/index"><i class="fas fa-gamepad"></i> Games</a>
    <a href="/movies/index"><i class="fa-solid fa-video"></i> Movies</a>
    <a href="/apps/index"><i class="fas fa-border-all"></i> Apps & More</a>
    <a href="/prox/index"><i class="fas fa-globe"></i> Proxy</a>
    <a href="/settings/main"><i class="fa-solid fa-gear"></i> Settings</a>
    <a href="/partners/index"><i class="fa-solid fa-users"></i> Partners</a>
    <a href="/extra/index"><i class="fas fa-plus"></i> Extra</a>
    `;

    document.querySelector('.nav-buttons').innerHTML = navButtons;
});
