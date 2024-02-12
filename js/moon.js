function getVerse() {
    // Create the arrays
    quotes = new Array(6);
    sources = new Array(6);

    // Initilize the arrays with quotes
    quotes [0] = "The sun shall be turned into darkness, and the <b>moon</b> into blood, before the great and terrible day of the Lord come.";
    sources [0] = "Joel 2:31";

    quotes [1] = "While the sun, or the light, or the <b>moon</b>, or the stars, " + "be not darkened, nor the clouds return after the rain:";
    sources [1] = "Ecclesiastes 12:2";

    quotes [2] = "Praise ye him, sun and <b>moon</b>: praise him, all ye stars of light.";
    sources [2] = "Psalm 148:3<br><br>";

    quotes [3] = "The <b>moon</b> and stars to rule by night: for his mercy endureth for ever.";
    sources [3] = "Psalm 136:9<br><br>";

    quotes [4] = "The sun shall not smite thee by day, nor the <b>moon</b> by night.";
    sources [4] = "Psalm 121:6<br><br>";

    quotes [5] = "When I consider thy heavens, the work of thy fingers, the <b>moon</b> and the stars, which thou hast ordained; 9: O Lord our Lord, how excellent is thy name in all the earth!";
    sources [5] = "Psalm 8:3... 9";

    // Get a random index into the arrays
    w = Math.floor(Math.random() * quotes.length);

    // Write out the quote as HTML
    document.write("<p style='margin-left:1%; background-color:#23c5f6; width:585px; border-radius:5px; box-shadow:5px 5px 10px #23c5f6; border:4px solid #000;'>\"");
    document.write(quotes [w] + "\"");
    document.write("<em>- " + sources [w] + "</em>");
    document.write("</p>");
}