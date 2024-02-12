			//getting time
		    now = new Date();

		    month_of_year = now.getMonth() + 1;
		    day_of_month = now.getDate();
		    hour_of_day = now.getHours();

		    //making moon fases
		    if (month_of_year == 4) {
		    	if ((day_of_month >= 12) && (day_of_month <= 16)) {
		    		document.write("<h1 style=\"font-size:40px;\">Tonights Moon Phase: <img width=\"110\" height=\"100;\" src=\"./pics/waning-crescent.JPG\"></h1>");
		    	} else if ((day_of_month >= 17) && (day_of_month <= 19)) {
		    		document.write("<h1 style=\"font-size:40px;\">Tonights Moon Phase: <img width=\"113\" height=\"97;\" src=\"./pics/new-moon.JPG\"></h1>");
		    	} else if ((day_of_month >= 20) && (day_of_month <= 23)) {
		    		document.write("<h1 style=\"font-size:40px;\">Tonights Moon Phase: <img width=\"115\" height=\"98\" src=\"./pics/waxing-crescent.JPG\"></h1>");
		    	} else if ((day_of_month >= 24) && (day_of_month <= 27)) {
		    		document.write("<h1 style=\"font-size:40px;\">Tonights Moon Phase: <img width=\"110\" height=\"90\" src=\"./pics/first-quarter.JPG\"></h1>");
		    	} else if ((day_of_month >= 28) && (day_of_month <= 30)) {
		    		document.write("<h1 style=\"font-size:40px;\">Tonights Moon Phase: <img width=\"110\" height=\"99\" src=\"./pics/waxing-gibbous.JPG\"></h1>");
		    	}
		    } /*else if (month_of_year == 5) {
				if ((day_of_month == 1) || (day_of_month == 2)) {
					document.write("<h1 style=\"font-size:40px;\">Tonights Moon Phase: <img width=\"110\" height=\"99\" src=\"./pics/waxing-gibbous.JPG\"></h1>");
				} else if ((day_of_month >= 3) && (day_of_month <= 5)) {
					document.write("<h1 style=\"font-size:40px;\">Tonights Moon Phase: <img width=\"120\" height=\"105\" src=\"./pics/full-moon.JPG\"></h1>");
				} else if ((day_of_month >= 6) && (day_of_month <= 9)) {
					document.write("<h1 style=\"font-size:40px;\">Tonights Moon Phase: <img width=\"109\" height=\"95\" src=\"./pics/waning-gibbious.JPG\"></h1>");
				} else if ((day_of_month >= ) && (day_of_month <= )) {
					document.write("<h1 style=\"font-size:40px;\">Tonights Moon Phase: <img width=\"95\" height=\"110\" src=\"./pics/third-quarter.JPG\"></h1>");
				} else if ((day_of_month >= 13) && (day_of_month <= 16)) {
					document.write("<h1 style=\"font-size:40px;\">Tonights Moon Phase: <img width=\"110\" height=\"100\" src=\"./pics/waning-crescent.JPG\"></h1>");
				} else if ((day_of_month >= 17) && (day_of_month <= 19)) {
					document.write("<h1 style=\"font-size:40px;\">Tonights Moon Phase: <img width=\"113\" height=\"97\" src=\"./pics/new-moon.JPG\"></h1>");
				} else if ((day_of_month >= 20) && (day_of_month <= 23)) {
					document.write("<h1 style=\"font-size:40px;\">Tonights Moon Phase: <img width=\"115\" height=\"98\" src=\"./pics/waxing-crescent.JPG\"></h1>");
				} else if ((day_of_month >= 24) && (day_of_month <= 26)) {
					document.write("<h1 style=\"font-size:40px;\">Tonights Moon Phase: <img width=\"110\" height=\"90\" src=\"./pics/first-quarter.JPG\"></h1>");
				} else if ((day_of_month >= 27) && (day_of_month <= 31)) {
					document.write("<h1 style=\"font-size:40px;\">Tonights Moon Phase: <img width=\"110\" height=\"99\" src=\"./pics/waxing-gibbous.JPG\"></h1>");
				}
			} else if (month_of_year == 6) {
				if ((day_of_month >= 1) && (day_of_month <= 3)) {
					document.write("<h1 style=\"font-size:40px;\">Tonights Moon Phase: <img width=\"120\" height=\"105\" src=\"./pics/full-moon.JPG\"></h1>");
				} else if ((day_of_month >= 4) && (day_of_month <= 7)) {
					document.write("<h1 style=\"font-size:40px;\">Tonights Moon Phase: <img width=\"109\" height=\"95\" src=\"./pics/waning-gibbious.JPG\"></h1>");
				} else if ((day_of_month >= 8) && (day_of_month <= 10)) {
					document.write("<h1 style=\"font-size:40px;\">Tonights Moon Phase: <img width=\"95\" height=\"110\" src=\"./pics/third-quarter.JPG\"></h1>");
				} else if ((day_of_month >= 11) && (day_of_month <= 14)) {
					document.write("<h1 style=\"font-size:40px;\">Tonights Moon Phase: <img width=\"110\" height=\"100\" src=\"./pics/waning-crescent.JPG\"></h1>");
				} else if ((day_of_month >= 15) && (day_of_month <= 17)) {
					document.write("<h1 style=\"font-size:40px;\">Tonights Moon Phase: <img width=\"113\" height=\"97\" src=\"./pics/new-moon.JPG\"></h1>");
				} else if ((day_of_month >= 18) && (day_of_month <= 22)) {
					document.write("<h1 style=\"font-size:40px;\">Tonights Moon Phase: <img width=\"115\" height=\"98\" src=\"./pics/waxing-crescent.JPG\"></h1>");
				} else if ((day_of_month >= 23) && (day_of_month <= 25)) {
					document.write("<h1 style=\"font-size:40px;\">Tonights Moon Phase: <img width=\"\" height=\"\" src=\"./pics/.JPG\"></h1>");
				}
			} else {
				document.write("<h1 style=\"font-size:40px;\">Tonights Moon Phase: Unknown</h1>");
			}*/