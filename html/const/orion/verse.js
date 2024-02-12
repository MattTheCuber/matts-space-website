function getVerse() {
    // Create the arrays
    verse = new Array(3);
    reference = new Array(3);

    // Initilize the arrays with verse
    verse [0] = "<b>4:</b> He is wise in heart, and mighty in strength: who hath hardened himself against him, and hath prospered? &nbsp; <b>9:</b> Which maketh Arcturus, <b>Orion</b>, and Pleiades, and the chambers of the south."
    reference [0] = "Job 9:4... 9";

    verse [1] = "Canst thou bind the sweet influences of Pleiades, or loose the bands of <b>Orion</b>?";
    reference [1] = "Job 38:31";

    verse [2] = "Seek him that maketh the seven stars and <b>Orion</b>, and turneth the shadow of death into the morning, and maketh the day dark with night: that calleth for the waters of the sea, and poureth them out upon the face of the earth: The Lord is his name:";
    reference [2] = "Amos 5:8";

    // Get a random index into the arrays
    w = Math.floor(Math.random() * verse.length);

    // Write out the quote as HTML
    document.write("<p style='margin-left:20%; margin-top:-0.01px; background-color:#23c5f6; width:650px; color:#000000; border-radius:5px; box-shadow:5px 5px 10px #23c5f6; z-index:2; position:sticky; overflow:auto; border:4px solid #000; height:100px;'");
    document.write(verse [w] + "\"");
    document.write("<em>- " + reference [w] + "</em>");
    document.write("</p>");
}