			//getting time
		    now = new Date();

		    month = now.getMonth() + 1;
		    day = now.getDate();
		    hour = now.getHours();

			if (month == 5) {
				if ((day == 1) || (day == 2)) {
					document.write("<h1 style='font-size:40px;'>Tonights Moon Phase: <img width='110' height='99' src='./pics/waxing-gibbous.JPG'></h1>");
				} else if ((day >= 3) && (day <= 5)) {
					document.write("<h1 style='font-size:40px;'>Tonights Moon Phase: <img width='120' height='105' src='./pics/full-moon.JPG'></h1>");
				} else if ((day >= 6) && (day <= 9)) {
					document.write("<h1 style='font-size:40px;'>Tonights Moon Phase: <img width='109' height='95' src='./pics/waning-gibbious.JPG'></h1>");
				} else if ((day >= 10) && (day <= 12)) {
					document.write("<h1 style='font-size:40px;'>Tonights Moon Phase: <img width='95' height='110' src='./pics/third-quarter.JPG'></h1>");
				} else if ((day >= 13) && (day <= 16)) {
					document.write("<h1 style='font-size:40px;'>Tonights Moon Phase: <img width='110' height='100' src='./pics/waning-crescent.JPG'></h1>");
				} else if ((day >= 17) && (day <= 19)) {
					document.write("<h1 style='font-size:40px;'>Tonights Moon Phase: <img width='113' height='97' src='./pics/new-moon.JPG'></h1>");
				} else if ((day >= 20) && (day <= 23)) {
					document.write("<h1 style='font-size:40px;'>Tonights Moon Phase: <img width='115' height='98' src='./pics/waxing-crescent.JPG'></h1>");
				} else if ((day >= 24) && (day <= 26)) {
					document.write("<h1 style='font-size:40px;'>Tonights Moon Phase: <img width='110' height='90' src='./pics/first-quarter.JPG'></h1>");
				} else if ((day >= 27) && (day <= 31)) {
					document.write("<h1 style='font-size:40px;'>Tonights Moon Phase: <img width='110' height='99' src='./pics/waxing-gibbous.JPG'></h1>");
				}
			} else if (month == 6) {
				if ((day >= 1) && (day <= 3)) {
					document.write("<h1 style='font-size:40px;'>Tonights Moon Phase: <img width='120' height='105' src='./pics/full-moon.JPG'></h1>");
				} else if ((day >= 4) && (day <= 7)) {
					document.write("<h1 style='font-size:40px;'>Tonights Moon Phase: <img width='109' height='95' src='./pics/waning-gibbious.JPG'></h1>");
				} else if ((day >= 8) && (day <= 10)) {
					document.write("<h1 style='font-size:40px;'>Tonights Moon Phase: <img width='95' height='110' src='./pics/third-quarter.JPG'></h1>");
				} else if ((day >= 11) && (day <= 14)) {
					document.write("<h1 style='font-size:40px;'>Tonights Moon Phase: <img width='110' height='100' src='./pics/waning-crescent.JPG'></h1>");
				} else if ((day >= 15) && (day <= 17)) {
					document.write("<h1 style='font-size:40px;'>Tonights Moon Phase: <img width='113' height='97' src='./pics/new-moon.JPG'></h1>");
				} else if ((day >= 18) && (day <= 22)) {
					document.write("<h1 style='font-size:40px;'>Tonights Moon Phase: <img width='115' height='98' src='./pics/waxing-crescent.JPG'></h1>");
				} else if ((day >= 23) && (day <= 25)) {
					document.write("<h1 style='font-size:40px;'>Tonights Moon Phase: <img width='110' height='90' src='./pics/first-quarter.JPG'></h1>");
				} else if ((day >= 26) && (day <= 30)) {
					document.write("<h1 style='font-size:40px;'>Tonights Moon Phase: <img width='110' height='99' src='./pics/waxing-gibbous.JPG'></h1>");
				}
			} else if (month == 7) {
				if ((day >= 1) && (day <= 2)) {
					document.write("<h1 style='font-size:40px;'>Tonights Moon Phase: <img width='120' height='105' src='./pics/full-moon.JPG'></h1>");
				} else if ((day >= 3) && (day <= 6)) {
					document.write("<h1 style='font-size:40px;'>Tonights Moon Phase: <img width='109' height='95' src='./pics/waning-gibbious.JPG'></h1>");
				} else if ((day >= 7) && (day <= 9)) {
					document.write("<h1 style='font-size:40px;'>Tonights Moon Phase: <img width='95' height='110' src='./pics/third-quarter.JPG'></h1>");
				} else if ((day >= 10) && (day <= 14)) {
					document.write("<h1 style='font-size:40px;'>Tonights Moon Phase: <img width='110' height='100' src='./pics/waning-crescent.JPG'></h1>");
				} else if ((day >= 15) && (day <= 17)) {
					document.write("<h1 style='font-size:40px;'>Tonights Moon Phase: <img width='113' height='97' src='./pics/new-moon.JPG'></h1>");
				} else if ((day >= 18) && (day <= 22)) {
					document.write("<h1 style='font-size:40px;'>Tonights Moon Phase: <img width='115' height='98' src='./pics/waxing-crescent.JPG'></h1>");
				} else if ((day >= 23) && (day <= 25)) {
					document.write("<h1 style='font-size:40px;'>Tonights Moon Phase: <img width='110' height='90' src='./pics/first-quarter.JPG'></h1>");
				} else if ((day >= 26) && (day <= 29)) {
					document.write("<h1 style='font-size:40px;'>Tonights Moon Phase: <img width='110' height='99' src='./pics/waxing-gibbous.JPG'></h1>");
				} else if ((day >= 30) && (day <= 31)) {
					document.write("<h1 style='font-size:40px;'>Tonights Moon Phase: <img width='110' height='99' src='./pics/waxing-gibbous.JPG'></h1>");
				}
			}
			else {
				document.write("<h1 style='font-size:40px;'>Tonights Moon Phase: Unknown</h1>");
			}