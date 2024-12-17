document.addEventListener("DOMContentLoaded", function () {
    const navButtons = `
    <a href="/games"><i class="fas fa-gamepad"></i> Games</a>
    <a href="/movies"><i class="fa-solid fa-video"></i> Movies</a>
    <a href="/apps"><i class="fa-sharp fa-solid fa-layer-group"></i> Apps & More</a>
    <a href="/prox"><i class="fas fa-globe"></i> Prօxy</a>
    <a href="/settings/main"><i class="fa-solid fa-gear"></i> Settings</a>
    <a href="/extra"><i class="fas fa-plus"></i> Extra</a>
    `;

    document.querySelector('.nav-buttons').innerHTML = navButtons;
});
