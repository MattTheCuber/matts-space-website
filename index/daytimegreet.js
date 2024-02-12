//different greetings for different times of the day
function timeGreet() {
    //getting time
    now = new Date();

    month_of_year = now.getMonth();
    day_of_month = now.getDate();
    hour_of_day = now.getHours();

    //writing greet
    document.write("<p>");
    document.write("This is <b>Matt's</b> space website.<br><br>You can find many space pictures and you<br>can get lots of information about space.");
    if (hour_of_day < 10) {
        document.write("<strong style='color:#23c5f6; text-shadow: 0 0 25px , 0 0 5px darkblue;'><br>Good morning.</strong>");
    } else if ((hour_of_day >= 13) && (hour_of_day <= 17)) {
        document.write("<strong style='color:#23c5f6; text-shadow: 0 0 25px , 0 0 5px darkblue;'><br>Good afternoon.</strong>");
    } else if (hour_of_day >= 17) {
        document.write("<strong style='color:#23c5f6; text-shadow: 0 0 25px , 0 0 5px darkblue;'><br>Good evening.</strong>");
    } else if ((hour_of_day >= 12) && (hour_of_day <= 13)) {
        document.write("<strong style='color:#23c5f6; text-shadow: 0 0 25px , 0 0 5px darkblue;'><br>Lunch Time</strong>");
    } else if (hour_of_day >19) {
        document.write("<strong style='color:#23c5f6; text-shadow: 0 0 25px , 0 0 5px darkblue;'><br>Good night.</strong>")
    } else {
        document.write("<strong style='color:#23c5f6; text-shadow: 0 0 25px , 0 0 5px darkblue;'><br>Have a good day.</strong>");
    }
    document.write("</p>");
}

function dayGreet() {
    //getting time

    now = new Date();

    year = now.getFullYear();  
    month_of_year = now.getMonth() + 1;
    day_of_month = now.getDate();
    hour_of_day = now.getHours();

   if (year == 2015) {
        if (month_of_year == 4) {
            if (day_of_month == 23) {
                document.write("<strong style='color:#23c5f6; text-shadow: 0 0 25px , 0 0 5px darkblue;'>&nbsp; &nbsp; Mommy and Danielle's Trip to Mass. Hope!</strong>");
            } else if (day_of_month == 25) {
                document.write("<strong style='color:#23c5f6; text-shadow: 0 0 25px , 0 0 5px darkblue;'>&nbsp; &nbsp; Mommy comes home!</strong>");
            }
        } else if (month_of_year == 5) {
            if (day_of_month == 23) {
                document.write("<strong style='color:#23c5f6; text-shadow: 0 0 25px , 0 0 5px darkblue;'>&nbsp; &nbsp; Science Fair!</strong>");
            }
        } else if (month_of_year == 6) {
            if (day_of_month == 5) {
                document.write("<strong style='color:#23c5f6; text-shadow: 0 0 25px , 0 0 5px darkblue;'>&nbsp; &nbsp; Wedding Rehersal!</strong>");
            } else if (day_of_month == 6) {
                document.write("<strong style='color:#23c5f6; text-shadow: 0 0 25px , 0 0 5px darkblue;'>&nbsp; &nbsp; Landon and Obrianna get<br>Married!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!</strong>");
            } else if (day_of_month == 19) {
                document.write("<strong style='color:#23c5f6; text-shadow: 0 0 25px , 0 0 5px darkblue;'>&nbsp; &nbsp; Wedding Rehersal!</strong>");
            } else if (day_of_month == 20) {
                document.write("<strong style='color:#23c5f6; text-shadow: 0 0 25px , 0 0 5px darkblue;'>&nbsp; &nbsp; Grant and Danielle get<br>Married!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!</strong>");
            }
        } else if (month_of_year == 8) {
            if (day_of_month == 17) {
                document.write("<strong style='color:#23c5f6; text-shadow: 0 0 25px , 0 0 5px darkblue;'>&nbsp; &nbsp; First Day of School!");
            }
        }
    }
    //January
    if (month_of_year == 1) {
        if (day_of_month == 1) {
            document.write("<strong style='color:#23c5f6; text-shadow: 0 0 25px , 0 0 5px darkblue;'>&nbsp; &nbsp; Happy New Years Day!</strong>");
        } else if (day_of_month == 4) {
            document.write("<strong style='color:#23c5f6; text-shadow: 0 0 25px , 0 0 5px darkblue;'>&nbsp; &nbsp; Happy Birthday Danielle!</strong>");
        } else if (day_of_month == 19) {
            document.write("<strong style='color:#23c5f6; text-shadow: 0 0 25px , 0 0 5px darkblue;'>&nbsp; &nbsp; Happy Martin King Luthers day!</strong>");
        }
    } /*Febuary*/ else if (month_of_year == 2) {
        if (day_of_month == 2) {
            document.write("<strong style='color:#23c5f6; text-shadow: 0 0 25px , 0 0 5px darkblue;'>&nbsp; &nbsp; Happy Groundhogs day!</strong>");
        } else if (day_of_month == 12) {
            document.write("<strong style='color:#23c5f6; text-shadow: 0 0 25px , 0 0 5px darkblue;'>&nbsp; &nbsp; Happy Lincoln's Birthday!</strong>");
        } else if (day_of_month == 14) {
            document.write("<strong style='color:#23c5f6; text-shadow: 0 0 25px , 0 0 5px darkblue;'>&nbsp; &nbsp; Happy Valentine's day!</strong>");
        } else if (day_of_month == 16) {
            document.write("<strong style='color:#23c5f6; text-shadow: 0 0 25px , 0 0 5px darkblue;'>&nbsp; &nbsp; President's day, and Family day!</strong>");
        } else if (day_of_month == 22) {
            document.write("<strong style='color:#23c5f6; text-shadow: 0 0 25px , 0 0 5px darkblue;'>&nbsp; &nbsp; Happy Washington's Birthday!</strong>");
        }
    } /*March*/ else if (month_of_year == 3) {
        if (day_of_month == 10) {
            document.write("<strong style='color:#23c5f6; text-shadow: 0 0 25px , 0 0 5px darkblue;'>&nbsp; &nbsp; Happy Birthday Jaydon!</strong>");
        } else if (day_of_month == 11) {
            document.write("<strong style='color:#23c5f6; text-shadow: 0 0 25px , 0 0 5px darkblue;'>&nbsp; &nbsp; Happy Birthday Gabby!</strong>");
        } else if (day_of_month == 14) {
            document.write("<strong style='color:#23c5f6; text-shadow: 0 0 25px , 0 0 5px darkblue;'>&nbsp; &nbsp; Happy Birthday Obrianna!</strong>");
        } else if (day_of_month == 17) {
            document.write("<strong style='color:#23c5f6; text-shadow: 0 0 25px , 0 0 5px darkblue;'>&nbsp; &nbsp; Happy St. Patricks day!</strong>");
        } else if (day_of_month == 20) {
            document.write("<strong style='color:#23c5f6; text-shadow: 0 0 25px , 0 0 5px darkblue;'>&nbsp; &nbsp; First Day of Spring!</strong>");
        } else if (day_of_month == 24) {
            document.write("<strong style='color:#23c5f6; text-shadow: 0 0 25px , 0 0 5px darkblue;'>&nbsp; &nbsp; Happy Birthday Lydia!</strong>");
        } else if (day_of_month == 26) {
            document.write("<strong style='color:#23c5f6; text-shadow: 0 0 25px , 0 0 5px darkblue;'>&nbsp; &nbsp; Happy Birthday Landon!</strong>");
        }
    } /*April*/ else if (month_of_year == 4) {
        if (day_of_month == 1) {
            document.write("<strong style='color:#23c5f6; text-shadow: 0 0 25px , 0 0 5px darkblue;'>&nbsp; &nbsp; Merry Christmas! &#40;April fools:&#41 :&#41;</strong>");
        } else if (day_of_month == 18) {
            document.write("<strong style='color:#23c5f6; text-shadow: 0 0 25px , 0 0 5px darkblue;'>&nbsp; &nbsp; Happy Birthday Elias!</strong>");
        } else if (day_of_month == 22) {
            document.write("<strong style='color:#23c5f6; text-shadow: 0 0 25px , 0 0 5px darkblue;'>&nbsp; &nbsp; Happy Earth day!</strong>");
        }
    } /*May*/ else if (month_of_year == 5) {
        if (day_of_month == 8) {
            document.write("<strong style='color:#23c5f6; text-shadow: 0 0 25px , 0 0 5px darkblue;'>&nbsp; &nbsp; Happy Birthday Davia, and Phil!</strong>");
        } else if (day_of_month == 10) {
            document.write("<strong style='color:#23c5f6; text-shadow: 0 0 25px , 0 0 5px darkblue;'>&nbsp; &nbsp; Happy Mother's day!</strong>");
        } else if (day_of_month == 16) {
            document.write("<strong style='color:#23c5f6; text-shadow: 0 0 25px , 0 0 5px darkblue;'>&nbsp; &nbsp; Happy Birthday Gracie!</strong>");
        } else if (day_of_month == 25) {
            document.write("<strong style='color:#23c5f6; text-shadow: 0 0 25px , 0 0 5px darkblue;'>&nbsp; &nbsp; Happy Birthday Molly, Happy Memorial day!</strong>");
        } else if (day_of_month == 30) {
            document.write("<strong style='color:#23c5f6; text-shadow: 0 0 25px , 0 0 5px darkblue;'>&nbsp; &nbsp; Happy Birthday Bumpa-bob!</strong>");
        }
    } /*June*/ else if (month_of_year == 6) {
        if (day_of_month == 3) {
            document.write("<strong style='color:#23c5f6; text-shadow: 0 0 25px , 0 0 5px darkblue;'>&nbsp; &nbsp; Happy Birthday Mercy!</strong>");
        } else if (day_of_month == 5) {
            document.write("<strong style='color:#23c5f6; text-shadow: 0 0 25px , 0 0 5px darkblue;'>&nbsp; &nbsp; Happy Birthday Kaylee!</strong>");
        } else if (day_of_month == 17) {
            document.write("<strong style='color:#23c5f6; text-shadow: 0 0 25px , 0 0 5px darkblue;'>&nbsp; &nbsp; Happy Birthday Tori!</strong>");
        } else if (day_of_month == 21) {
            document.write("<strong style='color:#23c5f6; text-shadow: 0 0 25px , 0 0 5px darkblue;'>&nbsp; &nbsp; Father's Day! First Day of Summer!</strong>");
        } else if (day_of_month == 25) {
            document.write("<strong style='color:#23c5f6; text-shadow: 0 0 25px , 0 0 5px darkblue;'>&nbsp; &nbsp; Happy Birthday Auntie Tara!</strong>");
        } else if (day_of_month == 26) {
            document.write("<strong style='color:#23c5f6; text-shadow: 0 0 25px , 0 0 5px darkblue;'>&nbsp; &nbsp; Happy Birthday Julia and Nani!</strong>");
        } else if (day_of_month == 27) {
            document.write("<strong style='color:#23c5f6; text-shadow: 0 0 25px , 0 0 5px darkblue;'>&nbsp; &nbsp; Grammie & Grampies 51<sup>st</sup> Anniversity!</strong>");
        }
    } /*July*/ else if (month_of_year == 7) {
        if (day_of_month == 4) {
            document.write("<strong style='color:#23c5f6; text-shadow: 0 0 25px , 0 0 5px darkblue;'>&nbsp; &nbsp; Happy 4<sup>th</sup> of July!</strong>");
        } else if (day_of_month == 7) {
            document.write("<strong style='color:#23c5f6; text-shadow: 0 0 25px , 0 0 5px darkblue;'>&nbsp; &nbsp; Happy Birthday Matthew!</strong>");
        }
    } /*August*/ else if (month_of_year == 8) {

    } /*September*/ else if (month_of_year == 9) {
        if (day_of_month == 7) {
            document.write("<strong style='color:#23c5f6; text-shadow: 0 0 25px , 0 0 5px darkblue;'>&nbsp; &nbsp; Happy Labor Day!</strong>");
        } else if (day_of_month == 12) {
            document.write("<strong style='color:#23c5f6; text-shadow: 0 0 25px , 0 0 5px darkblue;'>&nbsp; &nbsp; Happy Birthday Grampie!</strong>");
        } else if (day_of_month == 13) {
            document.write("<strong style='color:#23c5f6; text-shadow: 0 0 25px , 0 0 5px darkblue;'>&nbsp; &nbsp; Happy Gramparent's Day!</strong>");
        } else if (day_of_month == 23) {
            document.write("<strong style='color:#23c5f6; text-shadow: 0 0 25px , 0 0 5px darkblue;'>&nbsp; &nbsp; First Day of Fall!</strong>");
        }
    } /*October*/ else if (month_of_year == 10) {
        if (day_of_month == 3) {
            document.write("<strong style='color:#23c5f6; text-shadow: 0 0 25px , 0 0 5px darkblue;'>&nbsp; &nbsp; Happy Birthday Mommy!</strong>");
        } else if (day_of_month == 8) {
            document.write("<strong style='color:#23c5f6; text-shadow: 0 0 25px , 0 0 5px darkblue;'>&nbsp; &nbsp; Happy Childrens Day!</strong>");
        } else if (day_of_month == 11) {
            document.write("<strong style='color:#23c5f6; text-shadow: 0 0 25px , 0 0 5px darkblue;'>&nbsp; &nbsp; Happy Birthday Auntie Em and Aunt Ronny!</strong>");
        } else if (day_of_month == 16) {
            document.write("<strong style='color:#23c5f6; text-shadow: 0 0 25px , 0 0 5px darkblue;'>&nbsp; &nbsp; Happy Birthday Daddy! Bumpa-bob & Nani's Anniversity</strong>");
        } else if (day_of_month == 17) {
            document.write("<strong style='color:#23c5f6; text-shadow: 0 0 25px , 0 0 5px darkblue;'>&nbsp; &nbsp; Happy Sweetest Day!</strong>");
        } else if (day_of_month == 29) {
            document.write("<strong style='color:#23c5f6; text-shadow: 0 0 25px , 0 0 5px darkblue;'>&nbsp; &nbsp; Happy Birthday Grammie!</strong>");
        } else if (day_of_month == 31) {
            document.write("<strong style='color:#23c5f6; text-shadow: 0 0 25px , 0 0 5px darkblue;'>&nbsp; &nbsp; Happy Halloween!</strong>");
        }
    } /*November*/ else if (month_of_year == 11) {
        if (day_of_month == 1) {
            document.write("<strong style='color:#23c5f6; text-shadow: 0 0 25px , 0 0 5px darkblue;'>&nbsp; &nbsp; Daylight Saving Time Ends!</strong>");
        } else if (day_of_month == 2) {
            document.write("<strong style='color:#23c5f6; text-shadow: 0 0 25px , 0 0 5px darkblue;'>&nbsp; &nbsp; Happy 24<sup>th</sup> Anniversity Mommy and Daddy!</strong>");
        } else if (day_of_month == 3) {
            document.write("<strong style='color:#23c5f6; text-shadow: 0 0 25px , 0 0 5px darkblue;'>&nbsp; &nbsp; Election Day!</strong>");
        } else if (day_of_month == 4) {
            document.write("<strong style='color:#23c5f6; text-shadow: 0 0 25px , 0 0 5px darkblue;'>&nbsp; &nbsp; Happy Birthday Rachel!</strong>");
        } else if (day_of_month == 11) {
            document.write("<strong style='color:#23c5f6; text-shadow: 0 0 25px , 0 0 5px darkblue;'>&nbsp; &nbsp; Veteren's Day!</strong>");
        } else if (day_of_month == 26) {
            document.write("<strong style='color:#23c5f6; text-shadow: 0 0 25px , 0 0 5px darkblue;'>&nbsp; &nbsp; Thanksgiving Day!</strong>");
        }
    } /*December*/ else if (month_of_year == 12) {
        if (day_of_month == 22) {
            document.write("<strong style='color:#23c5f6; text-shadow: 0 0 25px , 0 0 5px darkblue;'>&nbsp; &nbsp; First Day of Winter!</strong>");
        } else if (day_of_month == 24) {
            document.write("<strong style='color:#23c5f6; text-shadow: 0 0 25px , 0 0 5px darkblue;'>&nbsp; &nbsp; Happy Birthday Grant! Christmas eve!</strong>");
        } else if (day_of_month == 25) {
            document.write("<strong style='color:#23c5f6; text-shadow: 0 0 25px , 0 0 5px darkblue;'>&nbsp; &nbsp; Christmas Day!!!!!</strong>");
        } else if (day_of_month == 31) {
            document.write("<strong style='color:#23c5f6; text-shadow: 0 0 25px , 0 0 5px darkblue;'>&nbsp; &nbsp; New Years Eve!</strong>");
        }
    }
}