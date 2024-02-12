document.write(
        "<br/>" +
        "<a title='Home' href='./index.html'><img class='logo' src='./mv.png' alt='Logo'/></a>" +
        "<div class='motto'><p>The Universe Of Knowledge</p></div>" +
        "<br/>" +
        "<div class='navbar'>" +
            "<a class='home_anc' href='javascript:history.go(0)' title='Home'><img onmouseover='this.src='./images/icons/home-hover-2.png';' onmouseout='this.src='./images/icons/home-icon-2.png';' alt='home-picture' width='60' height='60' src='./images/icons/home-icon-2.png'></a>" +
            "<div class='dropdown1'>" +
                "<button class='btn' type='button'>Space<span class='caret'> </span></button>" +
                "<ul class='dropdown-menu'>" +
                    "<li><a class='anc' href='./Pictures.html' title='Space Pictures'>My Space Pictures </a></li>" +
                    "<li><a class='anc' href='./Learn/Space-facts.html' title='Solar System'>Solar System </a></li>" +
                    "<li><a class='anc' href='./Learn/moon/Moon.html' title='Moon'>Moon </a></li>" +
                "</ul>" +
            "</div>" +
            "<div class='dropdown2'>" +
                "<button class='btn' type='button'>Spacecrafts<span class='caret'> </span></button>" +
                "<ul class='dropdown-menu'>" +
                    "<li><a class='anc' href='./Learn/Iss.html' title='ISS'>International Space Station </a></li>" +
                    "<li><a class='anc' href='./Learn/JWST.html' title='JWST'>James Web Space Telescope </a></li>" +
                    "<li><a class='anc' href='./Learn/Hubble.html' title='HST'>Hubble Space Telescope </a></li>" +
                    "<li><a class='anc' href='./Learn/Kepler.html' title='KST'>Kepler Space Telescope </a></li>" +
                    "<li><a class='anc' href='./Learn/O-S-T.html' title='Other Space Telescope'>Other Telescopes </a></li>" +
                "</ul>" +
            "</div>" +
            "<div class='dropdown3'>" +
                "<button class='btn' type='button'>Others<span class='caret'> </span></button>" +
                "<ul class='dropdown-menu'>" +
                    "<li><a class='anc' href='./howsit.html'>How is My Website? </a></li>" +
                    "<li><a class='anc' href='./Constellations/Constellations.html'>Constellations </a></li>" +
                    "<li><a class='anc' href='./Quizzes/quizzes.html'>Quizzes</a></li>" +
                    "<li><a class='clac' onclick='openWindow('./calculator.html', '', 'toolbar=yes, titlebar=no, scrollbars=no, menubar=no, resizable=no, top=10, left=250, width=300, height=150');'>Space Calculator</a></li>" +
                "</ul>" +
            "</div>" +
        "</div>" +
        "<br/><br/><br/>");