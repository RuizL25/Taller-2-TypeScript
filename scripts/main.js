import { data } from './data.js';
var seriesTable = document.getElementById("series-table");
var divAverage = document.getElementById("average");
var cardSeries = document.getElementById("card-series");
mostrarDatosSeries(data);
mostrarAverage(data);
function mostrarDatosSeries(series) {
    var _loop_1 = function (serie) {
        var row = document.createElement("tr");
        row.onclick = function () { return CrearCard(serie); };
        row.innerHTML = "<td><b>".concat(serie.getID(), "</b></td>\n        <td><a href= \"#\">").concat(serie.getName(), "</a></td>\n        <td>").concat(serie.getChannel(), "</td>\n        <td>").concat(serie.getSeasons(), "</td>");
        seriesTable.appendChild(row);
    };
    for (var _i = 0, series_1 = series; _i < series_1.length; _i++) {
        var serie = series_1[_i];
        _loop_1(serie);
    }
}
function mostrarAverage(serier) {
    var average = 0;
    for (var _i = 0, serier_1 = serier; _i < serier_1.length; _i++) {
        var serie = serier_1[_i];
        average += serie.getSeasons();
    }
    average = average / serier.length;
    divAverage.innerHTML = "<p><b>Seasons average: </b>".concat(average, "</p>");
}
function CrearCard(serie) {
    cardSeries.innerHTML = "<div class=\"card\" style=\"width: 18rem;\">\n    <img src=\"".concat(serie.getImage(), "\" class=\"card-img-top\">\n        <div class=\"card-body\">\n            <h5 class=\"card-title\">").concat(serie.getName(), "</h5>\n            <p class=\"card-text\">").concat(serie.getDescription(), "</p>\n            <a href=\"").concat(serie.getPlatform(), "\">").concat(serie.getPlatform(), "</a>\n        </div>\n    </div>");
}
