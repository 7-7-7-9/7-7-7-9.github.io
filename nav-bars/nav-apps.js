document.addEventListener("DOMContentLoaded", function () {
    const navButtons = `
    <a href="/games"><i class="fas fa-gamepad"></i> Games</a>
    <a href="/partners"><i class="fa-solid fa-users"></i> Partners</a>
    <a href="/apps"><i class="fas fa-border-all"></i> Apps & More</a>
    <a href="/settings"><i class="fas fa-globe"></i> Proxy</a>
    <a href="/settings"><i class="fa-solid fa-gear"></i> Settings</a>
    <a href="/extra"><i class="fas fa-plus"></i> Extra</a>
    `;

    document.querySelector('.nav-buttons').innerHTML = navButtons;
});
