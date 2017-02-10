function timetable() {
	var days = ["monday", "tuesday", "wednesday", "thursday", "friday"];
	var current_day = (new Date().getDay()) - 1;
	current_day = (current_day == -1 || current_day == 5) ? 0 : current_day;

	if (current_day == 4) {
		var day1 = document.getElementsByClassName("friday");
		for (var i = 0; i < day1.length; i++) {
			day1[i].style.display = "table-cell";
		}
	} else {
		var day1 = document.getElementsByClassName(days[current_day]);
		for (var i = 0; i < day1.length; i++) {
			day1[i].style.display = "table-cell";
		}

		var day2 = document.getElementsByClassName(days[current_day + 1]);
		for (var j = 0; j < day2.length; j++) {
			day2[j].style.display = "table-cell";
		}
	}

	console.log(day2);
}