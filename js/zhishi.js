function test() {
	var btn = document.getElementsByTagName('a');
	var picWrap = document.getElementById('pic');
	var pic = picWrap.getElementsByTagName('img');
	for (var i = 0; i < btn.length; i++) {
		btn[i].index = i;
		btn[i].onclick = function() {
			for (var j = 0; j < pic.length; j++) {
				removeClass(pic[j], "active");
			}
			addClass(pic[this.index], "active");
			// pic[this.index]

		}
	}
	setInterval(function() {
		loop();
	}, 3000);

}

function loop() {
	
}
function removeClass(obj, name) {   // ★精髓    也可以在循环时候把不是name的class写入新的数组再join出来;
	var str = obj.className;
	var arr = str.split(" ");
	for (var i = 0; i < arr.length; i++) {
		if (arr[i] == name) {
			arr.splice(i, 1);
		}
		str = arr.join(" ");
		obj.className = str
	}
}

function addClass(obj, name) {
	obj.className = obj.className + " " + name;
}


addOnLoad(test);