function getNthItem(a, n) {
	s=[];
	n = (n<0) ? 0 : n;
	for (var i = 0; i <= n; i++){
		s[i] = a - 2*s[i-1];
		s[0] = 0;
	}
	return s[i-1];
}

function assert(expression, message) {
	if(expression) {
		console.log("+", message);
	}
	else {
		console.error("-", message);
	}
}

function runTask_4() {
	assert(getNthItem(5, 1) ==  5, "Case '#0'");
	assert(getNthItem(11, 0) ==  0, "Case '#1'");
	assert(getNthItem(10, 3) ==  30, "Case '#2'");
	assert(getNthItem(0, 1) ==  0, "Case '#3'");
	assert(getNthItem(5, -1) ==  0, "Case '#4'");
	assert(getNthItem(30, 2) ==  -30, "Case '#5'");
	assert(getNthItem(-5, 40) ==  1832519379625, "Case '#6'");
	assert(getNthItem(12, 8) ==  -1020, "Case '#7'");
	console.log("\nRabotaet :)");
}

runTask_4();