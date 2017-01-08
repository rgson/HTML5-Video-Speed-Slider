(function(){
	var v = document.getElementsByTagName("video")[0];

	var div = document.createElement("div");
	div.style = "display:block;position:fixed;top:100px;left:10px;z-index:1000;background:#fff;border:#000;padding:3px;";

	var p = document.createElement("p");
	p.innerHTML = "Speed: ";

	var span = document.createElement("span");
	span.innerHTML = v.playbackRate;

	var slider = document.createElement("input");
	slider.type = "range";
	slider.min = 0;
	slider.max = 10;
	slider.step = 0.25;
	slider.value = v.playbackRate;
	slider.onchange = function() {
		v.playbackRate = slider.value;
		span.innerHTML = v.playbackRate;
	}
	slider.oninput = slider.onchange;

	p.appendChild(span);
	div.appendChild(p);
	div.appendChild(slider);
	document.body.appendChild(div);
})();
