(function() {
    var x = document.createElement("script");
    x.src = "/prox/inspect.js";
    x.onload = alert("Loaded Developer Console!");
    document.head.appendChild(x);
})()
