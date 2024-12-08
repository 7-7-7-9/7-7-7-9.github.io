let params = new URLSearchParams(window.location.search)
  , tmdbId = params.has("id") && params.get("id")
  , season = params.has("season") && params.get("season")
  , episode = params.has("episode") && params.get("episode")
  , table = document.getElementById("table");
var itemName = ""
  , imdbId = null
  , trackers = null;
let cachedFetch = _initCachedFetch({
    mode: "block",
    matchIn: ["://"],
    endsWith: [],
    defaultTTL: "20 minute"
})
  , torrentio = (tmdbId.startsWith("tt") ? imdbId = tmdbId : await cachedFetch(season ? "tmdb-tv/" + tmdbId : "tmdb-movie/" + tmdbId, `https://api.themoviedb.org/3/${season ? "tv/" + tmdbId : "movie/" + tmdbId}?language=en-US&append_to_response=external_ids&api_key=653bb8af90162bd98fc7ee32bcbbfb3d`).then(e => e.json()).then(e => {
    imdbId = e?.external_ids?.imdb_id
}
),
await cachedFetch("trackers", "https://cdn.jsdelivr.net/gh/ngosang/trackerslist@master/trackers_best.txt").then(e => e.text()).then(e => {
    trackers = "&tr=" + e.split("\n").filter(e => e.includes("://")).join("&tr=")
}
),
trackers || await cachedFetch("trackers2", "https://raw.githubusercontent.com/ngosang/trackerslist/master/trackers_best.txt").then(e => e.text()).then(e => {
    trackers = "&tr=" + e.split("\n").filter(e => e.includes("://")).join("&tr=")
}
),
"https://torrentio.strem.fun/providers=yts,eztv,rarbg,1337x,thepiratebay,kickasstorrents,torrentgalaxy,magnetdl,horriblesubs,nyaasi,tokyotosho,anidex|qualityfilter=scr,cam")
  , mediafusion = "https://mediafusion.elfhosted.com/eJwBgAB__2D9HBKC2RD-45X3-EjLw6UBhd0tzQsIZR2u2zIJIxLOlzZwEgdr_NIShQ6SOHjkkdBIiOFtQmyqUBgeaRTP1wES-p-Vu8811oeTVNnHU9rMcXMrsxfmXOm-oTkbFu0W72-yCuGJUWL7_RBvHgIKoX5HC_UuR0tPUoLp0EqMD_WBl-I9TA=="
  , piratebayplus = "https://thepiratebay-plus.strem.fun"
  , parseIdx = function(e) {
    if (e.hasOwnProperty("fileIdx")) {
        if (null == e.fileIdx)
            return "N/A";
        if (-1 < Number(e.fileIdx))
            return Number(e.fileIdx) + 1
    }
    return "N/A"
};
try {
    await cachedFetch("torrentio-" + imdbId + (season ? `-${season}-` + episode : ""), torrentio + "/stream/" + (season ? `series/${imdbId}:${season}:${episode}.json` : `movie/${imdbId}.json`)).then(e => e.json()).then(e => {
        e?.streams && e.streams.forEach(e => {
            var t, s;
            e?.title.includes("ðŸ‘¤") && e?.title.includes("ðŸ’¾") && e?.behaviorHints?.filename && (s = e.title.match(/ðŸ‘¤\s*(\d+)/)[1].toString(),
            t = e.title.match(/ðŸ’¾\s?(\d+(\.\d+)?\s?(MB|GB))/i)[1].toString(),
            1 <= Number(s)) && (s = `<tr>
                        <td class="file-name">
                            <a class="icon icon-file" href="magnet:?xt=urn:btih:${e?.infoHash}${trackers}">Torrentio - ${e?.behaviorHints?.filename}</a>
                        </td>
                        <td class="file-size">${s}</td>
                        <td class="file-date-modified">${t}</td>
                        <td class="file-date-modified">${parseIdx(e)}</td>
                    </tr>`,
            table.innerHTML = table.innerHTML + s)
        }
        )
    }
    )
} catch (e) {
    console.log("torrentio error: " + e)
}
try {
    await cachedFetch("mediafusion-" + imdbId + (season ? `-${season}-` + episode : ""), mediafusion + "/stream/" + (season ? `series/${imdbId}:${season}:${episode}.json` : `movie/${imdbId}.json`)).then(e => e.json()).then(e => {
        e?.streams && e.streams.forEach(e => {
            var t, s;
            e?.description.includes("ðŸ‘¤") && e?.description.includes("ðŸ’¾") && e?.behaviorHints?.filename && (s = e?.description.match(/ðŸ‘¤\s*(\d+)/)[1].toString(),
            t = e?.description.match(/ðŸ’¾\s?(\d+(\.\d+)?\s?(MB|GB))/i)[1].toString(),
            1 <= Number(s)) && (s = `<tr>
                        <td class="file-name">
                            <a class="icon icon-file" href="magnet:?xt=urn:btih:${e?.infoHash}${trackers}">MediaFusion - ${e?.behaviorHints?.filename}</a>
                        </td>
                        <td class="file-size">${s}</td>
                        <td class="file-date-modified">${t}</td>
                        <td class="file-date-modified">${parseIdx(e)}</td>
                    </tr>`,
            table.innerHTML = table.innerHTML + s)
        }
        )
    }
    )
} catch (e) {
    console.log("mediafusion error: " + e)
}
try {
    await cachedFetch("piratebayplus-" + imdbId + (season ? `-${season}-` + episode : ""), piratebayplus + "/stream/" + (season ? `series/${imdbId}:${season}:${episode}.json` : `movie/${imdbId}.json`)).then(e => e.json()).then(e => {
        e?.streams && e.streams.forEach(e => {
            var t, s, i;
            e?.title.includes("ðŸ‘¤") && e?.title.includes("ðŸ’¾") && (t = e.title.match(/ðŸ‘¤\s*(\d+)/)[1].toString(),
            s = e.title.match(/ðŸ’¾\s?(\d+(\.\d+)?\s?(MB|GB))/i)[1].toString(),
            1 <= Number(t)) && ((i = e.title.split("\n")[1]).endsWith(".mp4") || i.endsWith(".mkv") ? e.title = i : e.title = e.title.split("\n")[0],
            i = `<tr>
                        <td class="file-name">
                            <a class="icon icon-file" href="magnet:?xt=urn:btih:${e?.infoHash}${trackers}">PirateBay+ - ${e.title}</a>
                        </td>
                        <td class="file-size">${t}</td>
                        <td class="file-date-modified">${s}</td>
                        <td class="file-date-modified">${parseIdx(e)}</td>
                    </tr>`,
            table.innerHTML = table.innerHTML + i)
        }
        )
    }
    )
} catch (e) {
    console.log("piratebayplus error: " + e)
}
